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
        // --- La Santa (producto final) ---
        pescado: {
            nombre: 'Arroz de Pescado y Marisco',
            familia: 'La Santa',
            codigoLote: '748',
            variantes: { '260g': '748-1', 'bulk': '748-3' },
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pescado',
            aliases: ['pes', 'fish'],
            lotePrefijo: ''
        },
        pollo: {
            nombre: 'Arroz de Pollo',
            familia: 'La Santa',
            codigoLote: '749',
            variantes: { '260g': '749-1', 'bulk': '749-3' },
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pollo',
            aliases: ['pol', 'chicken'],
            lotePrefijo: ''
        },
        negro: {
            nombre: 'Arroz Negro',
            familia: 'La Santa',
            codigoLote: '740',
            variantes: { '260g': '740-1', 'bulk': '740-3' },
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'pescado',
            tieneCaldo: true,
            caldoTipo: 'pescado',  // negro usa caldo de pescado + tinta
            aliases: ['neg', 'black'],
            lotePrefijo: ''
        },
        verduras: {
            nombre: 'Arroz de Verdura',
            familia: 'La Santa',
            codigoLote: '750',
            variantes: { '260g': '750-1', 'bulk': '750-3', '2kg': '750-4' },
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'verdura',
            tieneCaldo: true,
            caldoTipo: 'verduras',
            aliases: ['ver', 'verd', 'vegetables'],
            lotePrefijo: ''
        },
        risotto: {
            nombre: 'Risotto',
            familia: 'Risotto/Cremosos',
            codigoLote: '741',
            variantes: { '260g': '741-1', 'bulk': '741-3' },
            arroz: 'Maratelli',
            formatos: ['260g', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['ris'],
            lotePrefijo: ''
        },

        // --- Cremosos (producto final) ---
        iberico: {
            nombre: 'Cremoso Ibérico',
            familia: 'Risotto/Cremosos',
            codigoLote: '781',
            variantes: { '260g': '781-1', 'all-included': '781-2' },
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['ibe', 'iberico'],
            lotePrefijo: ''
        },
        setas: {
            nombre: 'Cremoso Setas',
            familia: 'Risotto/Cremosos',
            codigoLote: '784',
            variantes: { 'all-included': '784-2' },
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['set', 'mushroom'],
            lotePrefijo: ''
        },
        tartufata: {
            nombre: 'Cremoso Tartufata',
            familia: 'Risotto/Cremosos',
            codigoLote: '782',
            variantes: { '260g': '782-1', 'all-included': '782-2' },
            arroz: 'Maratelli',
            formatos: ['260g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['tar', 'truffle'],
            lotePrefijo: ''
        },

        // --- Maestro (producto final) ---
        maestroBahia: {
            nombre: 'Maestro Bahía',
            familia: 'Maestro',
            codigoLote: '810-B',
            variantes: { '190g': '810-B1', '380g': '810-B2', '450g': '810-B2', '1330g': '810-B7' },
            arroz: 'Bahía',
            formatos: ['190g', '380g', '450g', '1330g'],
            tipoJarra: 'maestro',
            tieneCaldo: false,
            caldoTipo: null,
            aliases: ['mae', 'master'],
            lotePrefijo: ''
        },
        maestroMarisma: {
            nombre: 'Maestro Marisma',
            familia: 'Maestro',
            codigoLote: '810',
            variantes: { '190g': '810-1', '380g': '810-2', '450g': '810-2', '1330g': '810-7' },
            arroz: 'Marisma',
            formatos: ['190g', '380g', '450g', '1330g'],
            tipoJarra: 'maestro',
            tieneCaldo: false,
            caldoTipo: null,
            aliases: [],
            lotePrefijo: ''
        },

        // --- Salsas en Sobres (producto final) ---
        salsaSobrePescado:   { nombre: 'Salsa Pescado',   familia: 'Salsas en Sobres', codigoLote: '748-S', variantes: {}, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreNegro:     { nombre: 'Salsa Negra',     familia: 'Salsas en Sobres', codigoLote: '745',   variantes: { 'sobre': '745-1' }, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreVerduras:  { nombre: 'Salsa Verduras',  familia: 'Salsas en Sobres', codigoLote: '750-S', variantes: {}, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobrePollo:     { nombre: 'Salsa Pollo',     familia: 'Salsas en Sobres', codigoLote: '749-S', variantes: {}, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreBoletus:   { nombre: 'Salsa Boletus',   familia: 'Salsas en Sobres', codigoLote: '755',   variantes: { 'sobre': '755-1', '375g': '755-3' }, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreSetas:     { nombre: 'Salsa Setas',     familia: 'Salsas en Sobres', codigoLote: '742-S', variantes: {}, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreTartufata: { nombre: 'Salsa Tartufata', familia: 'Salsas en Sobres', codigoLote: '757',   variantes: { 'sobre': '757-1' }, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' },
        salsaSobreQueso:     { nombre: 'Salsa Queso',     familia: 'Salsas en Sobres', codigoLote: '759',   variantes: { '75g': '759-1', '375g': '759-3' }, formatos: ['sobre'], tipoJarra: null, tieneCaldo: false, aliases: [], lotePrefijo: 'L' }
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
    // PRODUCTO FINAL: código numérico de etiqueta (748-1, 810-B2, etc.)
    //   Formato completo: [código variante]-YYMMDD  (ej: 748-1-260304)
    // PRODUCTO INTERMEDIO (caldos, salsas, preelaboraciones): prefijo RIA-
    //   Los lotes RIA- son internos de fábrica, NO van en etiqueta de venta
    // ========================================================================
    lotes: {
        produccion: {
            formato: '[código]-YYMMDD',
            ejemplo: '748-1-260304',
            descripcion: 'Lote de producto final (código etiqueta + fecha YYMMDD)'
        },
        caldos: {
            pescado:  { prefijo: 'RIA-PESCADO',  formato: 'RIA-PESCADO-DDMMYY' },
            negro:    { prefijo: 'RIA-NEGRO',     formato: 'RIA-NEGRO-DDMMYY' },
            pollo:    { prefijo: 'RIA-POLLO',     formato: 'RIA-POLLO-DDMMYY' },
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
            codigo: 'REC-CALDO-001',
            rendimiento: 25,
            ingredientes: [
                { nombre: 'Caldo Aneto (12 bricks x 1,5L)', cantidad: '18000', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP01', proveedor: 'Aneto' },
                { nombre: 'Aceite rojo de ñora', cantidad: '5000', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-NORA', codigoMP: 'MP45' },
                { nombre: 'Aceite de ajo', cantidad: '800', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Umami (Givaudan)', cantidad: '120', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Goma xantana', cantidad: '10', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP07' },
                { nombre: 'Agua de azafrán', cantidad: '500', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRAN', codigoMP: 'MP48' }
            ]
        },
        negro: {
            nombre: 'Caldo Negro',
            codigo: 'REC-CALDO-002',
            rendimiento: 25,
            ingredientes: [
                { nombre: 'Caldo Aneto (9 bricks x 1,5L)', cantidad: '13500', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP01', proveedor: 'Aneto' },
                { nombre: 'Agua', cantidad: '5500', unidad: 'ml', tipo: 'na' },
                { nombre: 'Aceite de girasol alto oleico', cantidad: '5000', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP04', proveedor: 'Coreysa' },
                { nombre: 'Aceite de ajo', cantidad: '800', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Umami (Givaudan)', cantidad: '120', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Goma xantana', cantidad: '10', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP07' },
                { nombre: 'Tinta negra', cantidad: '1400', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP08' }
            ]
        },
        pollo: {
            nombre: 'Caldo de Pollo',
            codigo: 'REC-CALDO-003',
            rendimiento: 25,
            ingredientes: [
                { nombre: 'Paeller de Pollo (6 latas x 3L)', cantidad: '18000', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP03', proveedor: 'Paeller' },
                { nombre: 'Aceite de ajo', cantidad: '2310', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Aceite de oliva', cantidad: '1385', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP05', proveedor: 'Makro' },
                { nombre: 'Aceite de girasol', cantidad: '2000', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP04', proveedor: 'Coreysa' },
                { nombre: 'Umami (Givaudan)', cantidad: '120', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Goma xantana', cantidad: '10', unidad: 'g', tipo: 'proveedor', proveedor: '', codigoMP: 'MP07' },
                { nombre: 'Agua de azafrán', cantidad: '400', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRAN', codigoMP: 'MP48' },
                { nombre: 'Salmorreta', cantidad: '120', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-SALMORRETA', codigoMP: 'MP43' },
                { nombre: 'Hazelnut (colorante Sensient)', cantidad: '120', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP09', proveedor: 'Sensient' }
            ]
        },
        verduras: {
            nombre: 'Caldo de Verduras',
            codigo: 'REC-CALDO-004',
            rendimiento: 17,
            preelaboracionPesado: 'pesado-verduras',
            ingredientes: [
                { nombre: 'Agua caliente', cantidad: '14800', unidad: 'ml', tipo: 'na' },
                { nombre: 'Pesado Verduras (espinaca + cebolla)', cantidad: '700', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PESADO-VERD', codigoPrelab: 'pesado-verduras' },
                { nombre: 'Aceite de ajo', cantidad: '1310', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Aceite de girasol', cantidad: '3321', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP04', proveedor: 'Coreysa' },
                { nombre: 'Aceite de oliva', cantidad: '1000', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP05', proveedor: 'Makro' },
                { nombre: 'Aroma de hierbas', cantidad: '20', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP11' },
                { nombre: 'Umami (Givaudan)', cantidad: '150', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Salmorreta', cantidad: '350', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-SALMORRETA', codigoMP: 'MP43' },
                { nombre: 'Pimentón', cantidad: '60', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP10' },
                { nombre: 'Goma xantana', cantidad: '8.26', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP07' },
                { nombre: 'Agua de azafrán', cantidad: '400', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRAN', codigoMP: 'MP48' }
            ]
        },
        risotto: {
            nombre: 'Caldo de Risotto',
            codigo: 'REC-CALDO-005',
            rendimiento: 23,
            preelaboracionPesado: 'pesado-risotto',
            ingredientes: [
                { nombre: 'Agua', cantidad: '19000', unidad: 'ml', tipo: 'na' },
                { nombre: 'Pesado Risotto (pollo + puerro + cebolla)', cantidad: '2355', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PESADO-RIS', codigoPrelab: 'pesado-risotto' },
                { nombre: 'Aceite de ajo', cantidad: '1447', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Mantequilla', cantidad: '800', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP13', proveedor: '(varios)' },
                { nombre: 'Aceite de girasol alto oleico', cantidad: '2500', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP04', proveedor: 'Coreysa' },
                { nombre: 'Goma xantana', cantidad: '10.8', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP07' },
                { nombre: 'Umami (Givaudan)', cantidad: '180', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Almidón', cantidad: '38', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP12' }
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
                nombre: 'Agua de Azafrán',
                codigo: 'PRELAB-AZAFRAN',
                lotePrefijo: 'RIA-PRELAB-AZAFRAN',
                codigoMP: 'MP48',
                ingredientes: [
                    { nombre: 'Agua', cantidad: '400', unidad: 'g', tipo: 'na' },
                    { nombre: 'Azafrán', cantidad: '7', unidad: 'g', codigoMP: 'MP19', tipo: 'proveedor' }
                ],
                notas: 'Infusión: calentar agua, añadir azafrán, dejar reposar'
            },
            'aceite-ajo': {
                nombre: 'Aceite de Ajo',
                codigo: 'PRELAB-AJO',
                lotePrefijo: 'RIA-PRELAB-AJO',
                codigoMP: 'MP46',
                ingredientes: [
                    { nombre: 'Aceite de oliva', cantidad: '', unidad: 'L', tipo: 'proveedor' },
                    { nombre: 'Ajo', cantidad: '', unidad: 'kg', tipo: 'proveedor' }
                ],
                notas: 'Receta pendiente de completar'
            },
            'aceite-nora': {
                nombre: 'Aceite Rojo de Ñora',
                codigo: 'PRELAB-NORA',
                lotePrefijo: 'RIA-PRELAB-NORA',
                codigoMP: 'MP45',
                ingredientes: [
                    { nombre: 'Aceite de oliva', cantidad: '', unidad: 'L', tipo: 'proveedor' },
                    { nombre: 'Ñora', cantidad: '', unidad: 'kg', tipo: 'proveedor' }
                ],
                notas: 'Receta pendiente de completar'
            },
            'salmorreta': {
                nombre: 'Salmorreta',
                codigo: 'PRELAB-SALMORRETA',
                lotePrefijo: 'RIA-PRELAB-SALMORRETA',
                codigoMP: 'MP43',
                ingredientes: [
                    { nombre: 'Ajo', cantidad: '', unidad: 'kg', tipo: 'proveedor' },
                    { nombre: 'Aceite', cantidad: '', unidad: 'L', tipo: 'proveedor' },
                    { nombre: 'Carne de ñora', cantidad: '', unidad: 'kg', tipo: 'proveedor' },
                    { nombre: 'Tomate deshidratado', cantidad: '', unidad: 'kg', tipo: 'proveedor' }
                ],
                notas: 'Receta pendiente de completar'
            }
        },

        // --- Pesado para Caldos (preelaboración de pesado) ---
        preparadosCaldos: {
            'pesado-verduras': {
                nombre: 'Pesado Verduras (Deshidratadas)',
                codigo: 'PRELAB-PESADO-VERD',
                lotePrefijo: 'RIA-PESADO-VERD',
                ingredientes: [
                    { nombre: 'Espinaca deshidratada', cantidad: '500', unidad: 'g', codigoMP: 'MP33', tipo: 'proveedor' },
                    { nombre: 'Cebolla deshidratada', cantidad: '200', unidad: 'g', codigoMP: 'MP34', tipo: 'proveedor' }
                ],
                notas: 'Se pesa y se registra lote antes de incorporar al caldo'
            },
            'pesado-risotto': {
                nombre: 'Pesado Risotto (Pollo + Verdura)',
                codigo: 'PRELAB-PESADO-RIS',
                lotePrefijo: 'RIA-PESADO-RIS',
                ingredientes: [
                    { nombre: 'Pollo deshidratado', cantidad: '1500', unidad: 'g', codigoMP: 'MP35', tipo: 'proveedor' },
                    { nombre: 'Puerro deshidratado', cantidad: '555', unidad: 'g', codigoMP: 'MP36', tipo: 'proveedor' },
                    { nombre: 'Cebolla deshidratada', cantidad: '300', unidad: 'g', codigoMP: 'MP34', tipo: 'proveedor' }
                ],
                notas: 'Se pesa pollo y verduras juntos, se registra lote antes de incorporar al caldo'
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
    // MATERIA PRIMA MAESTRO (MP01-MP58)
    // ========================================================================
    materiaPrima: {
        // --- Caldos base ---
        MP01: { nombre: 'Caldo Natural Aneto Pescado Restauración', proveedor: 'Aneto', formato: 'Tetra Brik 1,5L (cajas 10 uds)', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaLocal: '0560_001 PROFESIONAL PESCADO (AL PUNTO DE SAL-SEP25).pdf', vidaUtil: '12 meses', alergenos: ['pescado', 'apio', 'crustáceos (posible)', 'moluscos (posible)'], codigoAneto: '101050113' },
        // (MP02 eliminado: Caldo Aneto de Pollo no se usa)
        MP03: { nombre: 'Caldo Paeller Pollo', proveedor: 'Paeller', formato: 'Lata 3L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/14_x5-3o3-J60TGEDsdF06wc7s06x797K' },
        // --- Aceites ---
        MP04: { nombre: 'Aceite girasol alto oleico', proveedor: 'Coreysa', formato: 'Garrafa 25L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/18gxWTtodrnT9g_ktuvZhvKq5eKukf9cf' },
        MP05: { nombre: 'Aceite de oliva virgen extra', proveedor: 'Makro', formato: 'Garrafa 5L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1MAAqJjeW3rWXdIMt8tjzlpMORppLZbMO' },
        // --- Aromas y aditivos ---
        MP06: { nombre: 'Umami (Givaudan)', proveedor: 'Givaudan', formato: 'Bote 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1HGKb1KAwa8EdQind601XHifbxwpopFnq' },
        MP07: { nombre: 'Goma xantana', proveedor: '(pendiente buscar)', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1s9knhOB4VdRdygbT7NmsiDlY7rSxS7Dp' },
        MP08: { nombre: 'Tinta de calamar', proveedor: 'Nortindal', formato: 'Frasco 100g', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1xoggA9ZKcb-jHNwAdoXwDumm4bsiFUHX' },
        MP09: { nombre: 'Hazelnut (colorante Sensient)', proveedor: 'Sensient', formato: 'Bote 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1gH58oWgfF30HguhBabwFPU3aYdPQS2KF' },
        MP10: { nombre: 'Pimentón', proveedor: 'Coato', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/15fObM80xHzaYjncbQBq_TLkCAEgg80My' },
        MP11: { nombre: 'Hierbas (mezcla)', proveedor: 'Expressions Aromatiques', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1IT3K-bek2mM8iRcgfphHc6-wWyH00ewh' },
        MP12: { nombre: 'Almidón', proveedor: 'Ingredion', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1W4DRpTJzUE4WF7gKSv9ER1IsRpOpTNWG' },
        // --- Mantequilla y lácteos ---
        MP13: { nombre: 'Mantequilla', proveedor: ['Presidente', 'Otro'], proveedorMultiple: true, formato: 'Bloque 2,5kg', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true },
        MP14: { nombre: 'Queso parmesano', proveedor: '', formato: 'Cuña', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1kAaJnflNAL66nUzOcxYCig6vM3PEloEc' },
        // --- (MP15-MP18 eliminados: gamba, rape, sepia, galera no se usan como ingrediente) ---
        // --- Especias ---
        MP19: { nombre: 'Azafrán', proveedor: 'Verdú Cantó', formato: 'Sobres 1g', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Fjkdysu9PyUo8el9pdcDWsJDhPaKrmFC' },
        // --- Embutido ---
        MP20: { nombre: 'Jamón ibérico', proveedor: 'Enrique Tomás', formato: 'Pieza envasada', conservacion: 'Congelación', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1VXZ5E4jgj4B6OyN6mHkMoZweataGnI-j' },
        // --- Setas y hongos ---
        MP21: { nombre: 'Harina Fina de Boletus', proveedor: 'Honza', formato: 'Bolsa plástico (5 uds/caja)', conservacion: 'Tª Ambiente (lugar fresco y seco)', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Pq3Th7-CvFRZqs6Ys-Vs3vDxzJtAoHwI', fichaLocal: '020 - F - CA - HARINA FINA DE BOLETUS.pdf', vidaUtil: '3 años desde deshidratación', alergenos: [], certificaciones: ['IFS Food'] },
        MP22: { nombre: 'Mezcla de Setas Básica con Boletus', proveedor: 'Honza', formato: 'Granel 10kg (bolsa polietileno)', conservacion: 'Congelación (-18°C)', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Pq3Th7-CvFRZqs6Ys-Vs3vDxzJtAoHwI', fichaLocal: '123-CA - MEZCLA DE SETAS BASICA.pdf', vidaUtil: '3 años desde congelación', alergenos: [], certificaciones: ['IFS Food'] },
        MP23: { nombre: 'Tartufata (pasta de trufa)', proveedor: 'Solchem', formato: 'Tarro', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1ILIbFB6shtYxY02QKBR4Dsd69rASSBQ0' },
        // --- Arroces ---
        MP24: { nombre: 'Arroz Elaborado Variedad Nuovo Maratelli', proveedor: 'Arrocera del Pirineo', formato: 'Saco 25kg (también 1kg, 5kg, 20kg)', conservacion: 'Tª Ambiente (lugar limpio, fresco, seco)', tipo: 'ingrediente', fichaDrive: '', fichaLocal: 'Ficha técnica arroz n.maratelli ene-25.pdf', vidaUtil: '18 meses', alergenos: [], categoría: 'Extra', clasificacion: 'Oryza sativa, Subespecie Japónica' },
        MP25: { nombre: 'Arroz Bahía (Illa de Riu)', proveedor: 'Illa de Riu', formato: 'Saco 25kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '' },
        MP26: { nombre: 'Arroz Marisma (Doña Ana)', proveedor: 'Doña Ana', formato: 'Saco 25kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '' },
        // (MP27 eliminado: Arroz Maestro = Arroz Marisma, duplicado)
        // --- Tomate ---
        MP30: { nombre: 'Tomate deshidratado', proveedor: 'Mas Tomate', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1jzY5Y02cEe6SHLdAvi0S4xFicqxNGn9K' },
        MP31: { nombre: 'Ñora', proveedor: 'Rajope', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/14Y5TrAfb7BcJCH82AS6mG4rKlL3Vay8s' },
        // --- (MP32 eliminado: salsa de pescado ya no se usa) ---
        // --- Verduras deshidratadas ---
        MP33: { nombre: 'Espinaca deshidratada', proveedor: 'La Margarita', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo' },
        MP34: { nombre: 'Cebolla deshidratada', proveedor: 'Vegenat', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1QXYo8IL7jc9hBv1witFVCqqMv5USSuc0' },
        MP35: { nombre: 'Pollo deshidratado', proveedor: 'Ugeave', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1AxRLbDkx66WHYQnzU34ivpTsCI9NIXCP' },
        MP36: { nombre: 'Puerro deshidratado', proveedor: 'La Margarita', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo' },
        // --- Otros ingredientes con ficha ---
        MP37: { nombre: 'Sal', proveedor: ['Varios'], proveedorMultiple: true, formato: 'Saco', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '' },
        MP38: { nombre: 'Ácido tartárico', proveedor: 'Dalmau', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/123tPERK4BqmmOFwmLbDyvgTBEa0K5M5v', fichaFalta: true },
        MP39: { nombre: 'Azúcar', proveedor: '', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true },
        // (MP41 eliminado: Aditivos Solchem no existe como producto)
        // (MP42 eliminado: Ruca no existe como producto)
        // --- Elaboraciones intermedias (fabricación propia) ---
        MP43: { nombre: 'Salmorreta', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Refrigeración', tipo: 'preelaboracion', fichaDrive: '' },
        MP44: { nombre: 'Aceite de gamba', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        MP45: { nombre: 'Aceite rojo de ñora', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        MP46: { nombre: 'Aceite de ajo', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        MP47: { nombre: 'Aceite de trufa', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        MP48: { nombre: 'Agua de azafrán', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Refrigeración', tipo: 'preelaboracion', fichaDrive: '' },
        // --- Packaging: Bandejas ---
        MP50: { nombre: 'Bandeja EOS-35 (190-300g)', proveedor: 'Sarabia', formato: 'PP/PPEVOHPP 1000µ', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Raciones individuales 190-300g', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'EOS-35 PP o PPEVOHPP 1000µ.pdf' },
        MP55: { nombre: 'Bandeja EOS-50 (380-450g)', proveedor: 'Sarabia', formato: 'PP/PPEVOHPP', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Raciones grandes 380-450g', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: '230-1.pdf / 230-2.pdf' },
        MP56: { nombre: 'Bandeja Bulk (GN1225)', proveedor: 'Sarabia', formato: 'PPEVOHPP 800µ', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Formato Bulk (3 redes)', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'GN1225 PPEVOHPP 800µ.pdf' },
        // --- Packaging: Film (mismo para barquetas y salsas) ---
        MP51: { nombre: 'Film top-seal (LFX501T062-K59)', proveedor: 'Adrados', formato: 'Bobina PE Fest/PP Peel/AF', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Sellado de todas las bandejas y salsas', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'FT-FILM LFX501T062---K59 - 2023.08.29.pdf' },
        // --- Packaging: Otros ---
        MP52: { nombre: 'Etiqueta producto', proveedor: '', formato: 'Bobina', conservacion: 'Tª Ambiente', tipo: 'packaging', fichaDrive: '' },
        MP53: { nombre: 'Caja cartón', proveedor: 'Femasa', formato: 'Palet', conservacion: 'Tª Ambiente', tipo: 'packaging', fichaDrive: '' },
        // (MP54 eliminado: Precinto/cinta no se usa)
    },

    // ========================================================================
    // PROVEEDORES
    // ========================================================================
    proveedores: {
        aneto:              { nombre: 'Aneto', productos: ['MP01'] },
        paeller:            { nombre: 'Paeller', productos: ['MP03'], fichaDrive: 'https://drive.google.com/drive/folders/14_x5-3o3-J60TGEDsdF06wc7s06x797K' },
        coreysa:            { nombre: 'Coreysa', productos: ['MP04'], fichaDrive: 'https://drive.google.com/drive/folders/18gxWTtodrnT9g_ktuvZhvKq5eKukf9cf' },
        dalmau:             { nombre: 'Dalmau', productos: ['MP38'], fichaDrive: 'https://drive.google.com/drive/folders/123tPERK4BqmmOFwmLbDyvgTBEa0K5M5v' },
        givaudan:           { nombre: 'Givaudan', productos: ['MP06'], fichaDrive: 'https://drive.google.com/drive/folders/1HGKb1KAwa8EdQind601XHifbxwpopFnq' },
        solchem:            { nombre: 'Solchem', productos: ['MP23'], fichaDrive: 'https://drive.google.com/drive/folders/1ILIbFB6shtYxY02QKBR4Dsd69rASSBQ0' },
        nortindal:          { nombre: 'Nortindal', productos: ['MP08'], fichaDrive: 'https://drive.google.com/drive/folders/1xoggA9ZKcb-jHNwAdoXwDumm4bsiFUHX' },
        sensient:           { nombre: 'Sensient', productos: ['MP09'], fichaDrive: 'https://drive.google.com/drive/folders/1gH58oWgfF30HguhBabwFPU3aYdPQS2KF' },
        coato:              { nombre: 'Coato', productos: ['MP10'], fichaDrive: 'https://drive.google.com/drive/folders/15fObM80xHzaYjncbQBq_TLkCAEgg80My' },
        expressionsArom:    { nombre: 'Expressions Aromatiques', productos: ['MP11'], fichaDrive: 'https://drive.google.com/drive/folders/1IT3K-bek2mM8iRcgfphHc6-wWyH00ewh' },
        ingredion:          { nombre: 'Ingredion', productos: ['MP12'], fichaDrive: 'https://drive.google.com/drive/folders/1W4DRpTJzUE4WF7gKSv9ER1IsRpOpTNWG' },
        verduCanto:         { nombre: 'Verdú Cantó', productos: ['MP19'], fichaDrive: 'https://drive.google.com/drive/folders/1Fjkdysu9PyUo8el9pdcDWsJDhPaKrmFC' },
        enriqueTomas:       { nombre: 'Enrique Tomás', productos: ['MP20'], fichaDrive: 'https://drive.google.com/drive/folders/1VXZ5E4jgj4B6OyN6mHkMoZweataGnI-j' },
        honza:              { nombre: 'Honza', productos: ['MP21', 'MP22'], fichaDrive: 'https://drive.google.com/drive/folders/1Pq3Th7-CvFRZqs6Ys-Vs3vDxzJtAoHwI' },
        arroceraPirineo:    { nombre: 'Arrocera del Pirineo', productos: ['MP24'] },
        illaDeRiu:          { nombre: 'Illa de Riu', productos: ['MP25'] },
        donaAna:            { nombre: 'Doña Ana', productos: ['MP26'] },
        // (arrozua eliminado: MP27 Arroz Maestro era duplicado de MP26 Marisma)
        masTomate:          { nombre: 'Mas Tomate', productos: ['MP30'], fichaDrive: 'https://drive.google.com/drive/folders/1jzY5Y02cEe6SHLdAvi0S4xFicqxNGn9K' },
        rajope:             { nombre: 'Rajope', productos: ['MP31'], fichaDrive: 'https://drive.google.com/drive/folders/14Y5TrAfb7BcJCH82AS6mG4rKlL3Vay8s' },
        vegenat:            { nombre: 'Vegenat', productos: ['MP34'], fichaDrive: 'https://drive.google.com/drive/folders/1QXYo8IL7jc9hBv1witFVCqqMv5USSuc0' },
        ugeave:             { nombre: 'Ugeave', productos: ['MP35'], fichaDrive: 'https://drive.google.com/drive/folders/1AxRLbDkx66WHYQnzU34ivpTsCI9NIXCP' },
        laMargarita:        { nombre: 'La Margarita', productos: ['MP33', 'MP36'], fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo' },
        makro:              { nombre: 'Makro', productos: ['MP05', 'MP14'], fichaDrive: 'https://drive.google.com/drive/folders/1MAAqJjeW3rWXdIMt8tjzlpMORppLZbMO' },
        presidente:         { nombre: 'Presidente', productos: ['MP13'] },
        sarabia:            { nombre: 'Sarabia', productos: ['MP50', 'MP55', 'MP56'], fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn' },
        adrados:            { nombre: 'Adrados', productos: ['MP51'], fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn' },
        femasa:             { nombre: 'Femasa', productos: ['MP53'] }
    },

    // ========================================================================
    // ENVASES POR FORMATO DE PRODUCTO
    // ========================================================================
    envasePorFormato: {
        // formato → código MP del envase + film
        'individual-pequeno': { bandeja: 'MP50', film: 'MP51', descripcion: 'EOS-35 (190-300g)' },
        'individual-grande':  { bandeja: 'MP55', film: 'MP51', descripcion: 'EOS-50 (380-450g)' },
        'bulk':               { bandeja: 'MP56', film: 'MP51', descripcion: 'Bulk GN1225' },
        'salsa':              { bandeja: null, film: 'MP51', descripcion: 'Solo film (sin bandeja)' }
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
        return `${yy}${mm}${dd}`;
    }
};
