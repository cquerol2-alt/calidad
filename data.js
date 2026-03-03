// ============================================================================
// RICE IN ACTION — DATOS MAESTROS
// ============================================================================
// Archivo centralizado de datos. Todos los formularios leen de aquí.
// Para cambiar un teléfono, producto, receta o proveedor, solo se toca este archivo.
// ============================================================================

const RIA_DATA = {

    // ========================================================================
    // EMPLEADOS
    // ========================================================================
    empleados: {
        cristina: {
            nombre: 'Cristina',
            rol: 'Cofundadora / Calidad',
            telefono: '+34629606995',
            whatsapp: '34629606995'
        },
        diego: {
            nombre: 'Diego',
            rol: 'Producción',
            telefono: '+34644646303',
            whatsapp: '34644646303'
        },
        isabel: {
            nombre: 'Isabel',
            rol: 'Caldos / Preelaboraciones',
            telefono: '+34651459196',
            whatsapp: '34651459196'
        },
        jeronimo: {
            nombre: 'Jerónimo',
            rol: 'Producción',
            telefono: '+34624263716',
            whatsapp: '34624263716'
        }
    },

    // ========================================================================
    // PRODUCTOS
    // ========================================================================
    productos: {
        // --- La Santa ---
        pescado: {
            nombre: 'Pescado',
            familia: 'La Santa',
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pescado',
            aliases: ['pes', 'fish'],
            lotePrefijo: 'L'
        },
        pollo: {
            nombre: 'Pollo',
            familia: 'La Santa',
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pollo',
            aliases: ['pol', 'chicken'],
            lotePrefijo: 'L'
        },
        negro: {
            nombre: 'Negro',
            familia: 'La Santa',
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pescado',  // negro usa caldo de pescado + tinta
            aliases: ['neg', 'black'],
            lotePrefijo: 'L'
        },
        verduras: {
            nombre: 'Verduras',
            familia: 'La Santa',
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'verdura',
            tieneCaldo: true,
            caldoTipo: 'verduras',
            aliases: ['ver', 'verd', 'vegetables'],
            lotePrefijo: 'L'
        },
        risotto: {
            nombre: 'Risotto',
            familia: 'Risotto/Cremosos',
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['ris'],
            lotePrefijo: 'L'
        },

        // --- Cremosos ---
        iberico: {
            nombre: 'Ibérico',
            familia: 'Risotto/Cremosos',
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['ibe', 'iberico'],
            lotePrefijo: 'L'
        },
        setas: {
            nombre: 'Setas',
            familia: 'Risotto/Cremosos',
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['set', 'mushroom'],
            lotePrefijo: 'L'
        },
        tartufata: {
            nombre: 'Tartufata',
            familia: 'Risotto/Cremosos',
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['tar', 'truffle'],
            lotePrefijo: 'L'
        },

        // --- Maestro ---
        maestroBahia: {
            nombre: 'Maestro Bahía',
            familia: 'Maestro',
            arroz: 'Bahía',
            formatos: ['190g', '380g', '450g', '1330g'],
            tipoJarra: 'maestro',
            tieneCaldo: false,
            caldoTipo: null,
            aliases: ['mae', 'master'],
            lotePrefijo: 'L'
        },
        maestroMarisma: {
            nombre: 'Maestro Marisma',
            familia: 'Maestro',
            arroz: 'Marisma',
            formatos: ['190g', '380g', '450g', '1330g'],
            tipoJarra: 'maestro',
            tieneCaldo: false,
            caldoTipo: null,
            aliases: [],
            lotePrefijo: 'L'
        },

        // --- Salsas en Sobres ---
        salsaSobrePescado:   { nombre: 'Salsa Pescado', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreNegro:     { nombre: 'Salsa Negro', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreVerduras:  { nombre: 'Salsa Verduras', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobrePollo:     { nombre: 'Salsa Pollo', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreBoletus:   { nombre: 'Salsa Boletus', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreSetas:     { nombre: 'Salsa Setas', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreTartufata: { nombre: 'Salsa Tartufata', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreQueso:     { nombre: 'Salsa Queso', familia: 'Salsas en Sobres', formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' }
    },

    // ========================================================================
    // TIPOS DE ARROZ
    // ========================================================================
    tiposArroz: {
        maratelli: { nombre: 'Maratelli', marca: 'La Santa / Risotto / Cremosos' },
        bahia:     { nombre: 'Bahía', marca: 'Illa de Riu' },
        marisma:   { nombre: 'Marisma', marca: 'Doña Ana' }
    },

    // ========================================================================
    // FORMATOS DE ENVASE
    // ========================================================================
    formatos: {
        '190g':  { peso: 190, unidadesCaja: 24, etiqueta: '190g x24', tipoEnvase: 'envase' },
        '260g':  { peso: 260, unidadesCaja: 24, etiqueta: '260g x24', tipoEnvase: 'envase' },
        '380g':  { peso: 380, unidadesCaja: 20, etiqueta: '380g x20', tipoEnvase: 'envase' },
        '450g':  { peso: 450, unidadesCaja: 20, etiqueta: '450g x20', tipoEnvase: 'envase' },
        '1330g': { peso: 1330, unidadesCaja: 6, etiqueta: '1330g x6', tipoEnvase: 'envase' },
        'bulk':  { peso: 1330, unidadesCaja: 6, etiqueta: 'Bulk', tipoEnvase: 'envase' },
        'all-included': { peso: 260, unidadesCaja: 24, etiqueta: 'All-Included', tipoEnvase: 'envase' },
        'separado': { peso: 260, unidadesCaja: 24, etiqueta: 'Separado', tipoEnvase: 'envase' },
        'sobre':    { peso: null, unidadesCaja: null, etiqueta: 'Sobre', tipoEnvase: 'sobre' },
        'redes':    { peso: null, unidadesCaja: null, etiqueta: 'Redes directas', tipoEnvase: 'red' }
    },

    // ========================================================================
    // LOTES — PREFIJOS Y FORMATOS
    // ========================================================================
    lotes: {
        produccion: {
            formato: 'L-DDMMYY',
            ejemplo: 'L-030326',
            descripcion: 'Lote de producción / etiqueta'
        },
        caldos: {
            pescado:  { prefijo: 'RIA-PESCADO',  formato: 'RIA-PESCADO-DDMMYY' },
            negro:    { prefijo: 'RIA-NEGRO',     formato: 'RIA-NEGRO-DDMMYY' },
            verduras: { prefijo: 'RIA-VERDURAS',  formato: 'RIA-VERDURAS-DDMMYY' },
            risotto:  { prefijo: 'RIA-RISOTTO',   formato: 'RIA-RISOTTO-DDMMYY' }
        },
        salsas: {
            pescado:   { prefijo: 'RIA-SALSA-PESCADO',   formato: 'RIA-SALSA-PESCADO-DDMMYY' },
            negra:     { prefijo: 'RIA-SALSA-NEGRA',     formato: 'RIA-SALSA-NEGRA-DDMMYY' },
            verduras:  { prefijo: 'RIA-SALSA-VERDURAS',  formato: 'RIA-SALSA-VERDURAS-DDMMYY' },
            pollo:     { prefijo: 'RIA-SALSA-POLLO',     formato: 'RIA-SALSA-POLLO-DDMMYY' },
            boletus:   { prefijo: 'RIA-SALSA-BOLETUS',   formato: 'RIA-SALSA-BOLETUS-DDMMYY' },
            setas:     { prefijo: 'RIA-SALSA-SETAS',     formato: 'RIA-SALSA-SETAS-DDMMYY' },
            tartufata: { prefijo: 'RIA-SALSA-TARTUFATA', formato: 'RIA-SALSA-TARTUFATA-DDMMYY' },
            queso:     { prefijo: 'RIA-SALSA-QUESO',     formato: 'RIA-SALSA-QUESO-DDMMYY' },
            iberico:   { prefijo: 'RIA-SALSA-IBERICO',   formato: 'RIA-SALSA-IBERICO-DDMMYY' }
        },
        preelaboraciones: {
            formato: 'RIA-PRELAB-{TIPO}-DDMMYY',
            ejemplo: 'RIA-PRELAB-JPESCADO-030326'
        }
    },

    // ========================================================================
    // TIPOS DE JARRA
    // ========================================================================
    tiposJarra: {
        pescado: { nombre: 'Jarra de Pescado', para: ['pescado', 'negro', 'pollo'] },
        verdura: { nombre: 'Jarra de Verduras', para: ['verduras'] },
        risotto: { nombre: 'Jarra de Risotto', para: ['risotto', 'ibérico', 'setas', 'tartufata'] },
        maestro: { nombre: 'Jarra de Maestro', para: ['maestro'] }
    },

    // ========================================================================
    // RECETAS DE CALDOS
    // ========================================================================
    recetasCaldos: {
        pescado: {
            nombre: 'Caldo de Pescado',
            ingredientes: [
                { nombre: 'Preelaboración jarra pescado', cantidad: '1', unidad: 'jarra', lotePrefijo: 'RIA-' },
                { nombre: 'Agua', cantidad: '12', unidad: 'L', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        negro: {
            nombre: 'Caldo Negro',
            ingredientes: [
                { nombre: 'Preelaboración jarra pescado', cantidad: '1', unidad: 'jarra', lotePrefijo: 'RIA-' },
                { nombre: 'Agua', cantidad: '12', unidad: 'L', lotePrefijo: '' },
                { nombre: 'Tinta de calamar', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        verduras: {
            nombre: 'Caldo de Verduras',
            ingredientes: [
                { nombre: 'Preelaboración jarra verduras', cantidad: '1', unidad: 'jarra', lotePrefijo: 'RIA-' },
                { nombre: 'Agua', cantidad: '12', unidad: 'L', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        risotto: {
            nombre: 'Caldo de Risotto',
            ingredientes: [
                { nombre: 'Preelaboración jarra risotto', cantidad: '1', unidad: 'jarra', lotePrefijo: 'RIA-' },
                { nombre: 'Agua', cantidad: '12', unidad: 'L', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        }
    },

    // ========================================================================
    // RECETAS DE SALSAS
    // ========================================================================
    recetasSalsas: {
        pescado: {
            nombre: 'Salsa de Pescado',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de pescado', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        negra: {
            nombre: 'Salsa Negra',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de pescado', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Tinta de calamar', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        verduras: {
            nombre: 'Salsa de Verduras',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de verduras', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        pollo: {
            nombre: 'Salsa de Pollo',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de pollo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        boletus: {
            nombre: 'Salsa de Boletus',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Boletus deshidratado', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Caldo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        setas: {
            nombre: 'Salsa de Setas',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Setas', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Caldo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        tartufata: {
            nombre: 'Salsa Tartufata',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Trufa', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Caldo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        queso: {
            nombre: 'Salsa de Queso',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Queso', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Caldo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        iberico: {
            nombre: 'Salsa Ibérico',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Ibérico', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Caldo', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        }
    },

    // ========================================================================
    // RECETAS DE PREELABORACIONES
    // ========================================================================
    recetasPreelaboraciones: {
        // --- Jarras ---
        jarras: {
            'jarra-pescado': {
                nombre: 'Jarra de Pescado',
                ingredientes: [
                    { nombre: 'Gamba', cantidad: '', unidad: 'kg' },
                    { nombre: 'Rape', cantidad: '', unidad: 'kg' },
                    { nombre: 'Sepia', cantidad: '', unidad: 'kg' },
                    { nombre: 'Galera', cantidad: '', unidad: 'kg' }
                ]
            },
            'jarra-verduras': {
                nombre: 'Jarra de Verduras',
                ingredientes: [
                    { nombre: 'Puerro', cantidad: '', unidad: 'kg' },
                    { nombre: 'Cebolla', cantidad: '', unidad: 'kg' },
                    { nombre: 'Zanahoria', cantidad: '', unidad: 'kg' },
                    { nombre: 'Apio', cantidad: '', unidad: 'kg' },
                    { nombre: 'Tomate', cantidad: '', unidad: 'kg' }
                ]
            },
            'jarra-risotto': {
                nombre: 'Jarra de Risotto',
                ingredientes: [
                    { nombre: 'Parmesano', cantidad: '', unidad: 'kg' },
                    { nombre: 'Mantequilla', cantidad: '', unidad: 'kg' },
                    { nombre: 'Cebolla', cantidad: '', unidad: 'kg' }
                ]
            },
            'jarra-maestro': {
                nombre: 'Jarra de Maestro',
                ingredientes: [
                    { nombre: 'Preelaboración polvos', cantidad: '', unidad: 'kg' },
                    { nombre: 'Hazelnut', cantidad: '', unidad: 'kg' },
                    { nombre: 'Sal', cantidad: '', unidad: 'kg' }
                ]
            }
        },

        // --- Bases ---
        bases: {
            'agua-azafran': {
                nombre: 'Agua Azafrán',
                ingredientes: [
                    { nombre: 'Agua', cantidad: '', unidad: 'L' },
                    { nombre: 'Azafrán', cantidad: '', unidad: 'g' }
                ]
            },
            'aceite-ajo': {
                nombre: 'Aceite Ajo',
                ingredientes: [
                    { nombre: 'Aceite de oliva', cantidad: '', unidad: 'L' },
                    { nombre: 'Ajo', cantidad: '', unidad: 'kg' }
                ]
            },
            'aceite-nora': {
                nombre: 'Aceite Ñora',
                ingredientes: [
                    { nombre: 'Aceite de oliva', cantidad: '', unidad: 'L' },
                    { nombre: 'Ñora', cantidad: '', unidad: 'kg' }
                ]
            },
            'salmorreta': {
                nombre: 'Salmorreta',
                ingredientes: [
                    { nombre: 'Tomate', cantidad: '', unidad: 'kg' },
                    { nombre: 'Ñora', cantidad: '', unidad: 'kg' },
                    { nombre: 'Ajo', cantidad: '', unidad: 'kg' },
                    { nombre: 'Aceite', cantidad: '', unidad: 'L' }
                ]
            }
        },

        // --- Preparados para Caldos ---
        preparadosCaldos: {
            'prep-verdura': {
                nombre: 'Preparado Verdura',
                ingredientes: [
                    { nombre: 'Ingrediente 1', cantidad: '', unidad: '' }
                ]
            },
            'prep-risotto': {
                nombre: 'Preparado Risotto',
                ingredientes: [
                    { nombre: 'Ingrediente 1', cantidad: '', unidad: '' }
                ]
            }
        },

        // --- Preparados para Salsas ---
        preparadosSalsas: {
            'prep-pescado':   { nombre: 'Preparado Pescado',   ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-verduras':  { nombre: 'Preparado Verduras',  ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-negro':     { nombre: 'Preparado Negro',     ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-boletus':   { nombre: 'Preparado Boletus',   ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-setas':     { nombre: 'Preparado Setas',     ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-tartufata': { nombre: 'Preparado Tartufata', ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-queso':     { nombre: 'Preparado Queso',     ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] },
            'prep-iberico':   { nombre: 'Preparado Ibérico',   ingredientes: [{ nombre: 'Ingrediente 1', cantidad: '', unidad: '' }] }
        }
    },

    // ========================================================================
    // INGREDIENTES DE JARRA PARA PRODUCCIÓN (Diego)
    // ========================================================================
    ingredientesJarraProduccion: [
        { nombre: 'Preelaboración Polvos' },
        { nombre: 'Hazelnut' },
        { nombre: 'Sal' }
    ],

    // ========================================================================
    // PROVEEDORES
    // ========================================================================
    proveedores: {
        // Se irán completando. Estructura: clave → { nombre, contacto, productos[] }
        // Ejemplo:
        // proveedor1: { nombre: 'Proveedor X', contacto: '...', productos: ['Gamba', 'Rape'] }
    },

    // ========================================================================
    // INGREDIENTES MAESTROS
    // ========================================================================
    // Catálogo de ingredientes con su proveedor habitual
    ingredientes: {
        gamba:          { nombre: 'Gamba', unidad: 'kg', proveedorHabitual: '' },
        rape:           { nombre: 'Rape', unidad: 'kg', proveedorHabitual: '' },
        sepia:          { nombre: 'Sepia', unidad: 'kg', proveedorHabitual: '' },
        galera:         { nombre: 'Galera', unidad: 'kg', proveedorHabitual: '' },
        puerro:         { nombre: 'Puerro', unidad: 'kg', proveedorHabitual: '' },
        cebolla:        { nombre: 'Cebolla', unidad: 'kg', proveedorHabitual: '' },
        zanahoria:      { nombre: 'Zanahoria', unidad: 'kg', proveedorHabitual: '' },
        apio:           { nombre: 'Apio', unidad: 'kg', proveedorHabitual: '' },
        tomate:         { nombre: 'Tomate', unidad: 'kg', proveedorHabitual: '' },
        parmesano:      { nombre: 'Parmesano', unidad: 'kg', proveedorHabitual: '' },
        mantequilla:    { nombre: 'Mantequilla', unidad: 'kg', proveedorHabitual: '' },
        aceiteOliva:    { nombre: 'Aceite de oliva', unidad: 'L', proveedorHabitual: '' },
        ajo:            { nombre: 'Ajo', unidad: 'kg', proveedorHabitual: '' },
        nora:           { nombre: 'Ñora', unidad: 'kg', proveedorHabitual: '' },
        azafran:        { nombre: 'Azafrán', unidad: 'g', proveedorHabitual: '' },
        sal:            { nombre: 'Sal', unidad: 'kg', proveedorHabitual: '' },
        tintaCalamar:   { nombre: 'Tinta de calamar', unidad: '', proveedorHabitual: '' },
        trufa:          { nombre: 'Trufa', unidad: 'kg', proveedorHabitual: '' },
        queso:          { nombre: 'Queso', unidad: 'kg', proveedorHabitual: '' },
        ibericoIng:     { nombre: 'Ibérico', unidad: 'kg', proveedorHabitual: '' },
        boletusDesh:    { nombre: 'Boletus deshidratado', unidad: 'kg', proveedorHabitual: '' },
        setasIng:       { nombre: 'Setas', unidad: 'kg', proveedorHabitual: '' },
        hazelnut:       { nombre: 'Hazelnut', unidad: 'kg', proveedorHabitual: '' },
        preelabPolvos:  { nombre: 'Preelaboración polvos', unidad: 'kg', proveedorHabitual: '' },
        agua:           { nombre: 'Agua', unidad: 'L', proveedorHabitual: '' }
    },

    // ========================================================================
    // CONVERSIONES: 1 red = 1 jarra (universal)
    // ========================================================================
    conversionRedJarra: 1,

    // ========================================================================
    // MÉTODOS DE CONSERVACIÓN (para caldos y salsas)
    // ========================================================================
    metodosConservacion: [
        { valor: 'caliente', nombre: 'Guardado en caliente', campos: ['temperatura'] },
        { valor: 'pasteurizado', nombre: 'Pasteurizado', campos: ['temperatura', 'tiempo'] },
        { valor: 'abatido', nombre: 'Abatido', campos: [] }
    ],

    // ========================================================================
    // TRATAMIENTOS TÉRMICOS DE PRODUCCIÓN
    // ========================================================================
    tratamientosTermicos: ['Pasteurización'],

    // ========================================================================
    // HELPER: Generar lote con fecha
    // ========================================================================
    generarLote(prefijo, fecha) {
        const d = new Date(fecha);
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yy = String(d.getFullYear()).slice(-2);
        return `${prefijo}-${dd}${mm}${yy}`;
    },

    generarLoteProduccion(fecha) {
        const d = new Date(fecha);
        const dd = String(d.getDate()).padStart(2, '0');
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const yy = String(d.getFullYear()).slice(-2);
        return `L-${dd}${mm}${yy}`;
    }
};
