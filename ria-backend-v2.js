/**
 * ================================================================
 * ria-backend-v2.js — Módulo de conexión al backend con tokens
 * Rice in Action · Quality Hub v2.0
 * ================================================================
 *
 * Incluir en cada formulario HTML con:
 *   <script src="ria-backend-v2.js"></script>
 *
 * El token se configura de 3 formas (en orden de prioridad):
 *   1. RIA.setToken('ria_diego_xxxx')  ← desde JS
 *   2. <meta name="ria-token" content="ria_diego_xxxx">  ← en el HTML
 *   3. ?token=ria_diego_xxxx en la URL  ← para PWA con token embebido
 *
 * Uso:
 *   // ESCRIBIR (el operario se resuelve automáticamente desde el token)
 *   const result = await RIA.enviar('recepcion_mp', { proveedor: 'Dacsa', ... });
 *
 *   // LEER
 *   const lotes = await RIA.get('lotes_activos');
 *   const prods = await RIA.get('producciones_hoy');
 *   const regs  = await RIA.get('registros', { tipo: 'caldos', fecha: '2026-03-22' });
 *
 *   // ACTUALIZAR registro de otro operario
 *   const res = await RIA.actualizar('Prod_2026_03', 5, { 'Caldo sobrante': 3.2 });
 */

const RIA = (() => {

  // =============================================
  // CONFIG
  // =============================================
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwNP4oWJV7KD-G7YKtkSIYVXQ5Gno0iRm8wQzD8gsCYlrAdHd4VomJ5QryRwTtfeINN/exec';

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  let _token = null;

  // =============================================
  // TOKEN MANAGEMENT
  // =============================================

  /** Establecer token manualmente */
  function setToken(token) {
    _token = token;
  }

  /** Obtener token activo (prioridad: manual > meta > URL) */
  function getToken() {
    if (_token) return _token;

    // Intentar meta tag
    if (typeof document !== 'undefined') {
      const meta = document.querySelector('meta[name="ria-token"]');
      if (meta) return meta.content;
    }

    // Intentar URL params
    if (typeof window !== 'undefined' && window.location) {
      const params = new URLSearchParams(window.location.search);
      const t = params.get('token');
      if (t) return t;
    }

    return null;
  }

  // =============================================
  // ENVIAR (POST)
  // =============================================
  async function enviar(tipo, data, options = {}) {
    const token = getToken();
    if (!token) {
      console.error('❌ RIA: No hay token configurado');
      return { status: 'error', message: 'Token no configurado' };
    }

    const payload = {
      tipo: tipo,
      token: token,
      timestamp: new Date().toISOString(),
      fecha: data.fecha || new Date().toISOString().split('T')[0],
      ...data
    };

    // Backup local
    backupLocal(tipo, payload);

    if (!APPS_SCRIPT_URL) {
      return { status: 'local_only', message: 'Sin backend' };
    }

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
          redirect: 'follow'
        });

        const result = await response.json().catch(() => ({ status: 'ok' }));
        console.log(`✅ RIA: ${tipo} enviado (intento ${attempt})`, result);
        markSynced(tipo, payload);
        return { status: 'ok', tipo: tipo, ...result };

      } catch (err) {
        console.warn(`⚠️ RIA: Intento ${attempt}/${MAX_RETRIES}:`, err.message);
        if (attempt < MAX_RETRIES) await sleep(RETRY_DELAY * attempt);
      }
    }

    return { status: 'queued', message: 'Sin conexión — guardado para reenvío' };
  }

  // =============================================
  // LEER (GET) — con token
  // =============================================
  async function get(action, params = {}) {
    const token = getToken();
    if (!token) {
      console.error('❌ RIA: No hay token configurado');
      return null;
    }

    if (!APPS_SCRIPT_URL) return null;

    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('action', action);
    url.searchParams.set('token', token);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

    try {
      const response = await fetch(url.toString());
      const data = await response.json();

      if (data.error) {
        console.error('❌ RIA GET:', data.error);
        return null;
      }

      return data;
    } catch (err) {
      console.error('❌ RIA GET error:', err.message);
      return null;
    }
  }

  // =============================================
  // ACTUALIZAR (POST tipo "actualizar")
  // =============================================
  /**
   * Actualiza campos de un registro existente.
   * @param {string} hoja - Nombre exacto de la hoja (ej: "Prod_2026_03")
   * @param {number} fila - Número de fila a actualizar
   * @param {object} campos - { "nombre_columna": valor, ... }
   * @returns {object} Resultado
   *
   * Ejemplo:
   *   await RIA.actualizar('Prod_2026_03', 5, {
   *     'Caldo sobrante': 3.2,
   *     'Observaciones': 'Sobró caldo de pollo'
   *   });
   */
  async function actualizar(hoja, fila, campos) {
    return enviar('actualizar', { hoja, fila, campos });
  }

  // =============================================
  // HELPERS: Producciones de hoy
  // =============================================
  /**
   * Recupera producciones del día para mostrar en lista seleccionable.
   * Cada registro incluye _fila y _hoja para poder actualizarlo.
   */
  async function produccionesHoy(fecha) {
    const params = {};
    if (fecha) params.fecha = fecha;
    return get('producciones_hoy', params);
  }

  /**
   * Recupera registros genéricos por tipo y fecha.
   */
  async function registros(tipo, fecha, operario) {
    const params = { tipo };
    if (fecha) params.fecha = fecha;
    if (operario) params.operario = operario;
    return get('registros', params);
  }

  // =============================================
  // BACKUP LOCAL + COLA DE REENVÍO
  // =============================================
  function backupLocal(tipo, payload) {
    try {
      const key = `ria-${tipo}-${Date.now()}`;
      const entry = { ...payload, _synced: false, _key: key };
      // No guardar token en localStorage
      delete entry.token;
      localStorage.setItem(key, JSON.stringify(entry));

      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      queue.push(key);
      if (queue.length > 200) queue.splice(0, queue.length - 200);
      localStorage.setItem('ria-send-queue', JSON.stringify(queue));
    } catch (e) {
      console.warn('localStorage no disponible:', e);
    }
  }

  function markSynced(tipo, payload) {
    try {
      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      for (let i = queue.length - 1; i >= 0; i--) {
        const item = localStorage.getItem(queue[i]);
        if (item) {
          const parsed = JSON.parse(item);
          if (parsed.tipo === tipo && !parsed._synced) {
            parsed._synced = true;
            localStorage.setItem(queue[i], JSON.stringify(parsed));
            break;
          }
        }
      }
    } catch (e) { /* silenciar */ }
  }

  async function reenviarPendientes() {
    if (!APPS_SCRIPT_URL) return { reenviados: 0 };
    const token = getToken();
    if (!token) return { reenviados: 0 };

    const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
    let reenviados = 0;

    for (const key of queue) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const entry = JSON.parse(raw);
        if (entry._synced) continue;

        // Reinyectar token para reenvío
        entry.token = token;

        await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(entry),
          redirect: 'follow'
        });

        entry._synced = true;
        delete entry.token; // No persistir token
        localStorage.setItem(key, JSON.stringify(entry));
        reenviados++;
        await sleep(500);
      } catch (e) {
        break;
      }
    }

    if (reenviados > 0) {
      console.log(`🔄 RIA: ${reenviados} pendientes reenviados`);
    }
    return { reenviados };
  }

  function limpiarAntiguos() {
    try {
      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      const ahora = Date.now();
      const limite = 7 * 24 * 60 * 60 * 1000;
      const nuevaQueue = [];

      for (const key of queue) {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const entry = JSON.parse(raw);
        const ts = new Date(entry.timestamp).getTime();

        if (entry._synced && (ahora - ts) > limite) {
          localStorage.removeItem(key);
        } else {
          nuevaQueue.push(key);
        }
      }

      localStorage.setItem('ria-send-queue', JSON.stringify(nuevaQueue));
    } catch (e) { /* silenciar */ }
  }

  function estado() {
    const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
    let pendientes = 0;
    let sincronizados = 0;

    for (const key of queue) {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const entry = JSON.parse(raw);
      if (entry._synced) sincronizados++;
      else pendientes++;
    }

    return {
      token_presente: !!getToken(),
      url_configurada: !!APPS_SCRIPT_URL,
      pendientes,
      sincronizados,
      total: queue.length
    };
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Auto-init
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        reenviarPendientes();
        limpiarAntiguos();
      }, 3000);
    });
  }

  // API pública
  return {
    setToken,
    getToken,
    enviar,
    get,
    actualizar,
    produccionesHoy,
    registros,
    reenviarPendientes,
    limpiarAntiguos,
    estado,
    VERSION: '2.0'
  };

})();
