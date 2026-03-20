/**
 * ================================================================
 * ria-backend.js — Módulo de conexión al backend
 * Rice in Action · Quality Hub
 * ================================================================
 *
 * Incluir en cada formulario HTML con:
 *   <script src="ria-backend.js"></script>
 *
 * Uso:
 *   const result = await RIA.enviar('recepcion_mp', { ... });
 *   const lotes = await RIA.get('lotes_activos');
 *   const tareas = await RIA.get('tareas_hoy', { operario: 'Diego' });
 */

const RIA = (() => {

  // =============================================
  // ⚠️  PEGAR AQUÍ LA URL DEL APPS SCRIPT DEPLOYMENT
  // =============================================
  const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwQIPDWwHtATQwBRXM0LgnFajuYRHKHthPaQuiSw9QEKKiVGuiGFtIBngDBfqUt3FoW/exec';

  // Reintentos automáticos
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // ms

  // =============================================
  // ENVIAR (POST)
  // =============================================
  async function enviar(tipo, data, options = {}) {
    const payload = {
      tipo: tipo,
      timestamp: new Date().toISOString(),
      ...data
    };

    // 1. Guardar en localStorage como backup SIEMPRE
    backupLocal(tipo, payload);

    // 2. Si no hay URL configurada, solo guardar local
    if (!APPS_SCRIPT_URL) {
      console.warn('⚠️ RIA Backend: URL no configurada. Datos guardados solo en localStorage.');
      return { status: 'local_only', message: 'Sin backend — guardado en localStorage' };
    }

    // 3. Enviar al backend con reintentos
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const response = await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' }, // Apps Script requiere text/plain para CORS
          body: JSON.stringify(payload),
          mode: 'no-cors' // Apps Script no soporta CORS preflight
        });

        // Con no-cors, la response es opaque — asumimos OK si no hay error
        console.log(`✅ RIA Backend: ${tipo} enviado (intento ${attempt})`);
        markSynced(tipo, payload);
        return { status: 'ok', tipo: tipo };

      } catch (err) {
        console.warn(`⚠️ RIA Backend: Intento ${attempt}/${MAX_RETRIES} falló:`, err.message);
        if (attempt < MAX_RETRIES) {
          await sleep(RETRY_DELAY * attempt);
        }
      }
    }

    // Todos los intentos fallaron
    console.error('❌ RIA Backend: No se pudo enviar. Queda en cola local.');
    return { status: 'queued', message: 'Sin conexión — guardado para reenvío' };
  }

  // =============================================
  // LEER (GET)
  // =============================================
  async function get(action, params = {}) {
    if (!APPS_SCRIPT_URL) {
      console.warn('⚠️ RIA Backend: URL no configurada.');
      return null;
    }

    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('action', action);
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

    try {
      const response = await fetch(url.toString());
      return await response.json();
    } catch (err) {
      console.error('❌ RIA Backend GET error:', err.message);
      return null;
    }
  }

  // =============================================
  // BACKUP LOCAL + COLA DE REENVÍO
  // =============================================
  function backupLocal(tipo, payload) {
    try {
      const key = `ria-${tipo}-${Date.now()}`;
      const entry = { ...payload, _synced: false, _key: key };
      localStorage.setItem(key, JSON.stringify(entry));

      // También añadir a la cola de pendientes
      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      queue.push(key);
      // Mantener máximo 200 items en cola
      if (queue.length > 200) queue.splice(0, queue.length - 200);
      localStorage.setItem('ria-send-queue', JSON.stringify(queue));
    } catch (e) {
      console.warn('localStorage lleno o no disponible:', e);
    }
  }

  function markSynced(tipo, payload) {
    try {
      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      // Marcar el más reciente de este tipo como sincronizado
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

  // =============================================
  // REENVÍO DE COLA (llamar al cargar la app)
  // =============================================
  async function reenviarPendientes() {
    if (!APPS_SCRIPT_URL) return { reenviados: 0 };

    const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
    let reenviados = 0;

    for (const key of queue) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const entry = JSON.parse(raw);
        if (entry._synced) continue;

        const response = await fetch(APPS_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(entry),
          mode: 'no-cors'
        });

        entry._synced = true;
        localStorage.setItem(key, JSON.stringify(entry));
        reenviados++;
        await sleep(500); // No saturar
      } catch (e) {
        break; // Si falla, parar (probablemente sin conexión)
      }
    }

    if (reenviados > 0) {
      console.log(`🔄 RIA Backend: ${reenviados} registros pendientes reenviados`);
    }
    return { reenviados };
  }

  // =============================================
  // LIMPIAR DATOS ANTIGUOS (>7 días sincronizados)
  // =============================================
  function limpiarAntiguos() {
    try {
      const queue = JSON.parse(localStorage.getItem('ria-send-queue') || '[]');
      const ahora = Date.now();
      const limite = 7 * 24 * 60 * 60 * 1000; // 7 días
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

  // =============================================
  // ESTADO DEL BACKEND
  // =============================================
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
      url_configurada: !!APPS_SCRIPT_URL,
      pendientes,
      sincronizados,
      total: queue.length
    };
  }

  // =============================================
  // UTILS
  // =============================================
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // =============================================
  // AUTO-INIT: reenviar pendientes al cargar
  // =============================================
  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      setTimeout(() => {
        reenviarPendientes();
        limpiarAntiguos();
      }, 3000); // Esperar 3s para no bloquear carga
    });
  }

  // API pública
  return {
    enviar,
    get,
    reenviarPendientes,
    limpiarAntiguos,
    estado,
    APPS_SCRIPT_URL // para debug
  };

})();
