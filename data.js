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
            familia: 'La Santa',
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
            familia: 'All-Included',
            codigoLote: '781',
            variantes: { '300g': '781-1', 'all-included': '781-2' },
            arroz: 'Maratelli',
            formatos: ['300g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['ibe', 'iberico'],
            lotePrefijo: ''
        },
        setas: {
            nombre: 'Cremoso Setas',
            familia: 'All-Included',
            codigoLote: '784',
            variantes: { '300g': '784-1', 'all-included': '784-2' },
            arroz: 'Maratelli',
            formatos: ['300g', 'all-included', 'separado', 'bulk'],
            tipoJarra: 'risotto',
            tieneCaldo: true,
            caldoTipo: 'risotto',
            aliases: ['set', 'mushroom'],
            lotePrefijo: ''
        },
        tartufata: {
            nombre: 'Cremoso Tartufata',
            familia: 'All-Included',
            codigoLote: '782',
            variantes: { '300g': '782-1', 'all-included': '782-2' },
            arroz: 'Maratelli',
            formatos: ['300g', 'all-included', 'separado', 'bulk'],
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
        marisma:   { nombre: 'Marisma', marca: 'Arrozúa' }
    },

    // ========================================================================
    // FORMATOS DE ENVASE
    // ========================================================================
    formatos: {
        '190g':  { peso: 190, unidadesCaja: 24, etiqueta: '190g x24', tipoEnvase: 'envase' },
        '260g':  { peso: 260, unidadesCaja: 24, etiqueta: '260g x24', tipoEnvase: 'envase' },
        '380g':  { peso: 380, unidadesCaja: 20, etiqueta: '380g x20', tipoEnvase: 'envase' },
        '450g':  { peso: 450, unidadesCaja: 20, etiqueta: '450g x20', tipoEnvase: 'envase' },
        '300g':  { peso: 300, unidadesCaja: 24, etiqueta: '300g x24', tipoEnvase: 'envase' },
        '220g':  { peso: 220, unidadesCaja: 24, etiqueta: '220g x24', tipoEnvase: 'envase' },
        '1330g': { peso: 1330, unidadesCaja: 6, etiqueta: '1330g x6', tipoEnvase: 'envase' },
        'bulk':  { peso: 1330, unidadesCaja: 6, etiqueta: 'Bulk', tipoEnvase: 'envase' },
        'all-included': { peso: 300, unidadesCaja: 24, etiqueta: 'All-Included x24', tipoEnvase: 'envase' },
        'separado': { peso: 220, unidadesCaja: 24, etiqueta: 'Separado x24', tipoEnvase: 'envase' },
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
                { nombre: 'Agua de azafrán', cantidad: '400', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRANG', codigoMP: 'MP48' }
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
                { nombre: 'Agua de azafrán', cantidad: '400', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRANG', codigoMP: 'MP48' },
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
                { nombre: 'Agua de azafrán', cantidad: '400', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRANG', codigoMP: 'MP48' }
            ]
        },
        risotto: {
            nombre: 'Caldo de Risotto',
            codigo: 'REC-CALDO-005',
            rendimiento: 23,
            preelaboracionPesado: 'pesado-risotto',
            ingredientes: [
                { nombre: 'Agua', cantidad: '19000', unidad: 'ml', tipo: 'na' },
                { nombre: 'Pesado Risotto (pollo + puerro + cebolla)', cantidad: '2000', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PESADO-RIS', codigoPrelab: 'pesado-risotto' },
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
        // --- Salsas La Santa (receta base con salmorreta) ---
        pescado: {
            nombre: 'Salsa de Pescado',
            tipo: 'la-santa',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de pescado', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        negra: {
            nombre: 'Salsa Negra',
            tipo: 'la-santa',
            ingredientes: [
                { nombre: 'Base salmorreta', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Caldo de pescado', cantidad: '', unidad: 'según receta', lotePrefijo: 'RIA-' },
                { nombre: 'Tinta de calamar', cantidad: '', unidad: 'según receta', lotePrefijo: '' },
                { nombre: 'Sal', cantidad: '', unidad: 'al gusto', lotePrefijo: '' }
            ]
        },
        verduras: {
            nombre: 'Salsa de Verduras',
            tipo: 'la-santa',
            codigo: 'REC-SALSA-VERD',
            notas: 'Se usa Salsa Verduras Concentrada como base, luego se diluye con agua y agua almidonada',
            ingredientes: [
                { nombre: 'Salsa Verduras Concentrada', cantidad: '1800', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-SVCONC', codigoMP: 'MP54' },
                { nombre: 'Agua', cantidad: '8000', unidad: 'ml', tipo: 'na' },
                { nombre: 'Agua almidonada', cantidad: '230', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-ALMIDON', codigoMP: 'MP49' }
            ]
        },
        pollo: {
            nombre: 'Salsa de Pollo',
            tipo: 'la-santa',
            codigo: 'REC-SALSA-POL',
            notas: 'Receta por 1L Paeller y para 6 latas (18L). Hazelnut = colorante Sensient.',
            // Receta estándar: 6 latas Paeller de Pollo (6 x 3L = 18L)
            ingredientes: [
                { nombre: 'Paeller de Pollo (6 latas x 3L)', cantidad: '18000', unidad: 'ml', tipo: 'proveedor', codigoMP: 'MP03', proveedor: 'Paeller' },
                { nombre: 'Agua', cantidad: '600', unidad: 'g', tipo: 'na' },
                { nombre: 'Aceite de ajo', cantidad: '520', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AJO', codigoMP: 'MP46' },
                { nombre: 'Aceite de oliva', cantidad: '288', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP05', proveedor: 'Makro' },
                { nombre: 'Grasa de pollo', cantidad: '480', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP14' },
                { nombre: 'Salmorreta', cantidad: '584', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-SALMORRETA', codigoMP: 'MP43' },
                { nombre: 'Umami (Givaudan)', cantidad: '0.28', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP06', proveedor: 'Givaudan' },
                { nombre: 'Hazelnut (colorante Sensient)', cantidad: '225', unidad: 'g', tipo: 'proveedor', codigoMP: 'MP09', proveedor: 'Sensient' }
            ],
            // Proporción por litro de Paeller (para escalar)
            porLitro: {
                agua: 0.75, aceiteAjo: 0.21, aceiteOliva: 0.12,
                grasaPollo: 0.20, salmorreta: 0.24, umami: 0.116, hazelnut: 12.85
            }
        },

        // --- Salsas Cremosas (recetas con CMC nuevo, 1,2 g/L) ---
        // Nota 11/12: CMC aumentado de 1 g/L a 1,2 g/L

        tartufata: {
            nombre: 'Salsa Tartufata',
            tipo: 'cremosa',
            codigo: 'REC-SALSA-TART',
            notas: 'CMC nuevo: 1,2 g/L (actualizado 11/12)',
            volumenes: [1.7, 5, 7, 10, 15, 20],
            pesoTotal: { 1.7: 1675, 5: 5024, 7: 7034, 10: 10048, 15: 15072, 20: 20096 },
            ingredientes: [
                { nombre: 'Agua limpia',           unidad: 'g', cantidades: { 1.7: 1000, 5: 3000, 7: 4200, 10: 6000, 15: 9000, 20: 12000 } },
                { nombre: 'Xantana',               unidad: 'g', cantidades: { 1.7: 4.12, 5: 12.3, 7: 17.64, 10: 24.7, 15: 37.1, 20: 49.5 } },
                { nombre: 'Umami',                  unidad: 'g', cantidades: { 1.7: 13, 5: 39, 7: 54.6, 10: 78, 15: 117, 20: 156 } },
                { nombre: 'Sal',                    unidad: 'g', cantidades: { 1.7: 4.5, 5: 13.5, 7: 18.9, 10: 27, 15: 40.5, 20: 54 } },
                // Flaxfiber ELIMINADO por Isabel (03/2026)
                { nombre: 'Hazelnut (colorante)',   unidad: 'g', cantidades: { 1.7: 0.7, 5: 2.1, 7: 2.94, 10: 4.2, 15: 6.3, 20: 8.4 } },
                { nombre: 'Cebolla deshidratada',   unidad: 'g', cantidades: { 1.7: 3, 5: 9, 7: 12.6, 10: 18, 15: 27, 20: 36 } },
                { nombre: 'Boletus seco',           unidad: 'g', cantidades: { 1.7: 3, 5: 9, 7: 12.6, 10: 18, 15: 27, 20: 36 } },
                { nombre: 'Manzanilla',             unidad: 'g', cantidades: { 1.7: 20, 5: 60, 7: 84, 10: 120, 15: 180, 20: 240 } },
                { nombre: 'CMC',                    unidad: 'g', cantidades: { 1.7: 2.04, 5: 6, 7: 8.4, 10: 12, 15: 18, 20: 24 } },
                { nombre: 'Nata',                   unidad: 'g', cantidades: { 1.7: 370, 5: 1110, 7: 1554, 10: 2220, 15: 3330, 20: 4440 } },
                { nombre: 'Parmesano',              unidad: 'g', cantidades: { 1.7: 42, 5: 126, 7: 176.4, 10: 252, 15: 378, 20: 504 } },
                { nombre: 'Mantequilla',            unidad: 'g', cantidades: { 1.7: 80, 5: 240, 7: 336, 10: 480, 15: 720, 20: 960 } },
                { nombre: 'Girasol trufado',        unidad: 'g', cantidades: { 1.7: 70, 5: 210, 7: 294, 10: 420, 15: 630, 20: 840 },
                  notas: '3,2 g trufa por 1000 g aceite' },
                { nombre: 'Girasol sin nada',       unidad: 'g', cantidades: { 1.7: 47, 5: 141, 7: 197.4, 10: 282, 15: 423, 20: 564 } },
                { nombre: 'Grasa de pollo',         unidad: 'g', cantidades: { 1.7: 15, 5: 45, 7: 63, 10: 90, 15: 135, 20: 180 } }
            ]
        },

        boletus: {
            nombre: 'Salsa de Boletus',
            tipo: 'cremosa',
            codigo: 'REC-SALSA-BOL',
            notas: 'CMC nuevo: 1,2 g/L (actualizado 11/12)',
            volumenes: [1.7, 3, 5, 10, 15, 20],
            pesoTotal: { 1.7: 1704, 3: 3068, 5: 5062, 10: 10123, 15: 15185, 20: 20247 },
            ingredientes: [
                { nombre: 'Agua',                   unidad: 'g', cantidades: { 1.7: 1387, 3: 2497, 5: 4121, 10: 8241, 15: 12362, 20: 16483 } },
                { nombre: 'Xantana',               unidad: 'g', cantidades: { 1.7: 5.54, 3: 9.5, 5: 15, 10: 30.7, 15: 45.7, 20: 60 } },
                // Flax ELIMINADO por Isabel (03/2026)
                { nombre: 'CMC',                    unidad: 'g', cantidades: { 1.7: 2.04, 3: 3.6, 5: 6, 10: 12, 15: 18, 20: 24 } },
                { nombre: 'Umami',                  unidad: 'g', cantidades: { 1.7: 16, 3: 29, 5: 47, 10: 94, 15: 142, 20: 189 } },
                { nombre: 'Boletus seco',           unidad: 'g', cantidades: { 1.7: 14, 3: 26, 5: 43, 10: 86, 15: 129, 20: 172 } },
                // Aroma setas ELIMINADO (03/2026)
                { nombre: 'Sal',                    unidad: 'g', cantidades: { 1.7: 4, 3: 8, 5: 13, 10: 26, 15: 39, 20: 51 } },
                { nombre: 'Hazelnut (colorante)',   unidad: 'g', cantidades: { 1.7: 0, 3: 0.7, 5: 1.1, 10: 2.2, 15: 3.3, 20: 4.4 } },
                { nombre: 'Vino blanco',            unidad: 'g', cantidades: { 1.7: 14, 3: 26, 5: 43, 10: 86, 15: 129, 20: 172 } },
                { nombre: 'Grasa de pollo',         unidad: 'g', cantidades: { 1.7: 22, 3: 39, 5: 64, 10: 129, 15: 193, 20: 257 } },
                { nombre: 'Mantequilla',            unidad: 'g', cantidades: { 1.7: 51, 3: 91, 5: 150, 10: 300, 15: 450, 20: 600 } },
                { nombre: 'Parmesano',              unidad: 'g', cantidades: { 1.7: 29, 3: 52, 5: 86, 10: 172, 15: 257, 20: 343 } },
                { nombre: 'Aceite girasol',         unidad: 'g', cantidades: { 1.7: 149, 3: 267.3, 5: 441, 10: 882, 15: 1323, 20: 1764 } }
            ]
        },

        setas: {
            nombre: 'Salsa de Setas (Risotto)',
            tipo: 'cremosa',
            codigo: 'REC-SALSA-SET',
            notas: 'Basada en picking list SRS. Gramos por ración: 70-80g. Porcentajes sobre peso total.',
            volumenes: [1.7, 3, 5, 10, 15, 20],
            pesoTotal: { 1.7: 1704, 3: 3068, 5: 5062, 10: 10123, 15: 15185, 20: 20247 },
            ingredientes: [
                { nombre: 'Agua',                   unidad: 'g', cantidades: { 1.7: 1387, 3: 2497, 5: 4121, 10: 8241, 15: 12362, 20: 16483 },
                  notas: 'Contador de agua' },
                { nombre: 'Mantequilla',            unidad: 'g', cantidades: { 1.7: 51, 3: 91, 5: 150, 10: 300, 15: 450, 20: 600 } },
                { nombre: 'Parmesano',              unidad: 'g', cantidades: { 1.7: 29, 3: 52, 5: 86, 10: 172, 15: 257, 20: 343 } },
                { nombre: 'Boletus seco',           unidad: 'g', cantidades: { 1.7: 14, 3: 26, 5: 43, 10: 86, 15: 129, 20: 172 } },
                { nombre: 'Aceite girasol',         unidad: 'g', cantidades: { 1.7: 149, 3: 267, 5: 441, 10: 882, 15: 1323, 20: 1764 } },
                { nombre: 'Umami',                  unidad: 'g', cantidades: { 1.7: 16, 3: 29, 5: 47, 10: 94, 15: 142, 20: 189 } },
                { nombre: 'Xantana',               unidad: 'g', cantidades: { 1.7: 4, 3: 7.3, 5: 12, 10: 24, 15: 36, 20: 48 } },
                // Aroma setas ELIMINADO (03/2026)
                { nombre: 'Cebolla deshidratada',   unidad: 'g', cantidades: { 1.7: 3, 3: 5, 5: 9, 10: 18, 15: 27, 20: 36 } },
                { nombre: 'Sal',                    unidad: 'g', cantidades: { 1.7: 4, 3: 8, 5: 13, 10: 26, 15: 39, 20: 51 } },
                { nombre: 'Hazelnut (colorante)',   unidad: 'g', cantidades: { 1.7: 0, 3: 0.7, 5: 1.1, 10: 2.2, 15: 3.3, 20: 4.4 } }
                // Pimienta negra ELIMINADA por Isabel (03/2026) — NO
                // Flax ELIMINADO por Isabel (03/2026) — NO
                // CMC ELIMINADO por Isabel (03/2026) — NO
                // Grasa de pollo ELIMINADA por Isabel (03/2026) — NO
            ]
        },

        queso: {
            nombre: 'Salsa de Queso',
            tipo: 'cremosa',
            codigo: 'REC-SALSA-QUE',
            notas: 'CMC nuevo: 1,2 g/L (actualizado 11/12)',
            volumenes: [1.7, 3, 5, 10, 15, 20],
            pesoTotal: { 1.7: 1714, 3: 3085, 5: 5091, 10: 10181, 15: 15272, 20: 20363 },
            ingredientes: [
                { nombre: 'Agua sin nada',          unidad: 'g', cantidades: { 1.7: 1204, 3: 2166, 5: 3575, 10: 7149, 15: 10724, 20: 14299 } },
                { nombre: 'Xantana',               unidad: 'g', cantidades: { 1.7: 0.60, 3: 10.7, 5: 17.7, 10: 35, 15: 53, 20: 70 } },
                { nombre: 'Umami',                  unidad: 'g', cantidades: { 1.7: 7.5, 3: 14, 5: 22, 10: 45, 15: 67, 20: 89 } },
                { nombre: 'Pimienta',               unidad: 'g', cantidades: { 1.7: 1.8, 3: 3, 5: 5, 10: 11, 15: 16, 20: 21 } },
                { nombre: 'Jerez',                  unidad: 'g', cantidades: { 1.7: 19, 3: 34, 5: 56, 10: 112, 15: 168, 20: 223 } },
                // Flax ELIMINADO por Isabel (03/2026)
                { nombre: 'CMC',                    unidad: 'g', cantidades: { 1.7: 2.04, 3: 3.6, 5: 6, 10: 12, 15: 18, 20: 24 } },
                { nombre: 'Sal',                    unidad: 'g', cantidades: { 1.7: 3, 3: 5.4, 5: 9, 10: 18, 15: 27, 20: 36 } },
                { nombre: 'Aroma queso',            unidad: 'g', cantidades: { 1.7: 10, 3: 18, 5: 30, 10: 59, 15: 89, 20: 119 } },
                { nombre: 'Grasa de pollo',         unidad: 'g', cantidades: { 1.7: 4.5, 3: 8, 5: 13, 10: 27, 15: 40, 20: 53 } },
                { nombre: 'Aceite girasol',         unidad: 'g', cantidades: { 1.7: 135, 3: 244, 5: 402, 10: 804, 15: 1206, 20: 1609 } },
                { nombre: 'Nata 20%',               unidad: 'g', cantidades: { 1.7: 193, 3: 348, 5: 574, 10: 1148, 15: 1722, 20: 2296 } },
                { nombre: 'Mantequilla',            unidad: 'g', cantidades: { 1.7: 75, 3: 135, 5: 223, 10: 447, 15: 670, 20: 894 } },
                { nombre: 'Queso azul',             unidad: 'g', cantidades: { 1.7: 52, 3: 94, 5: 155, 10: 310, 15: 465, 20: 621 } }
            ]
        },

        iberico: {
            nombre: 'Salsa Ibérico',
            tipo: 'cremosa',
            codigo: 'REC-SALSA-IBE',
            notas: 'CMC nuevo: 1,2 g/L (actualizado 11/12). Nota: aumentar 20% de aroma de jamón (OSO)',
            volumenes: [1.5, 3, 5, 10, 15, 20],
            pesoTotal: { 1.5: 1504, 3: 3009, 5: 5339, 10: 10679, 15: 16019, 20: 20504 },
            ingredientes: [
                { nombre: 'Agua sola',              unidad: 'g', cantidades: { 1.5: 791, 3: 1583, 5: 2810, 10: 5619, 15: 8429, 20: 10789 } },
                { nombre: 'Xantana',               unidad: 'g', cantidades: { 1.5: 3.41, 3: 6.7, 5: 12.5, 10: 24.2, 15: 36.7, 20: 46.7 } },
                { nombre: 'Sal',                    unidad: 'g', cantidades: { 1.5: 3, 3: 7, 5: 12, 10: 24, 15: 36, 20: 46 } },
                // Flax fiber ELIMINADO por Isabel (03/2026)
                { nombre: 'Umami',                  unidad: 'g', cantidades: { 1.5: 12.5, 3: 25, 5: 44, 10: 89, 15: 133, 20: 170 } },
                { nombre: 'Aroma jamón (OSO)',      unidad: 'g', cantidades: { 1.5: 8.2, 3: 11.76, 5: 21, 10: 42, 15: 63, 20: 79.8 },
                  notas: 'Aumentado 20% (OSO) — valores actualizados 03/2026' },
                { nombre: 'Manzanilla',             unidad: 'g', cantidades: { 1.5: 52, 3: 106, 5: 186, 10: 371, 15: 560, 20: 748 } },
                { nombre: 'CMC',                    unidad: 'g', cantidades: { 1.5: 1.8, 3: 4.1, 5: 6.4, 10: 13, 15: 18, 20: 24 } },
                { nombre: 'Nata',                   unidad: 'g', cantidades: { 1.5: 419, 3: 838, 5: 1488, 10: 2976, 15: 4463, 20: 5713 } },
                { nombre: 'Aceite girasol',         unidad: 'g', cantidades: { 1.5: 183, 3: 366, 5: 650, 10: 1300, 15: 1950, 20: 2496 } },
                { nombre: 'Grasa de pollo',         unidad: 'g', cantidades: { 1.5: 58, 3: 117, 5: 208, 10: 415, 15: 623, 20: 797 } }
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
                lotePrefijo: 'RIA-JARRA-PESC',
                ingredientes: [
                    { nombre: 'Pollo deshidratado', cantidad: '1800', unidad: 'g', codigoMP: 'MP35', tipo: 'proveedor' },
                    { nombre: 'Espinaca deshidratada', cantidad: '490', unidad: 'g', codigoMP: 'MP33', tipo: 'proveedor' }
                ]
            },
            'jarra-verduras': {
                nombre: 'Jarra de Verduras',
                lotePrefijo: 'RIA-JARRA-VERD',
                ingredientes: [
                    { nombre: 'Espinaca deshidratada', cantidad: '420', unidad: 'g', codigoMP: 'MP33', tipo: 'proveedor' },
                    { nombre: 'Cebolla deshidratada', cantidad: '90', unidad: 'g', codigoMP: 'MP34', tipo: 'proveedor' }
                ]
            },
            'jarra-risotto': {
                nombre: 'Jarra de Risotto',
                lotePrefijo: 'RIA-JARRA-RIS',
                ingredientes: [
                    { nombre: 'Pollo deshidratado', cantidad: '550', unidad: 'g', codigoMP: 'MP35', tipo: 'proveedor' },
                    { nombre: 'Puerro deshidratado', cantidad: '510', unidad: 'g', codigoMP: 'MP36', tipo: 'proveedor' },
                    { nombre: 'Cebolla deshidratada', cantidad: '815', unidad: 'g', codigoMP: 'MP34', tipo: 'proveedor' }
                ],
                notas: 'Total: 1875g'
            },
            'jarra-maestro': {
                nombre: 'Jarra de Maestro',
                lotePrefijo: 'RIA-JARRA-MAESTRO',
                ingredientes: [
                    { nombre: 'Preparado Maestro (polvos)', cantidad: '', unidad: 'según formato x1/x2', tipo: 'preelaboracion', lotePrefijo: 'RIA-PREP-MAESTRO',
                      notas: 'x1 (16 jarras): Umami 132g, tartárico 0.11g, azúcar 110g, sal 220g | x2 (32 jarras): duplicar' },
                    { nombre: 'Hazelnut (colorante Sensient)', cantidad: '', unidad: 'g', codigoMP: 'MP09', tipo: 'proveedor', proveedor: 'Sensient' },
                    { nombre: 'Agua de azafrán (Pequeña)', cantidad: '300', unidad: 'g', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRANP', codigoMP: 'MP48' }
                ],
                notas: 'Agua azafrán: 1x300g para 16 jarras (x1), 2x300g para 32 jarras (x2). La sal va dentro del preparado maestro, no se añade aparte.'
            }
        },

        // --- Mezclas líquidas para jarras ---
        mezclasJarras: {
            'mezcla-jarra-normal': {
                nombre: 'Mezcla Jarra Normal',
                codigo: 'PRELAB-MJNORMAL',
                lotePrefijo: 'RIA-MEZCLA-JNORMAL',
                ingredientes: [
                    { nombre: 'Hazelnut (colorante Sensient)', cantidad: '260', unidad: 'ml', codigoMP: 'MP09', tipo: 'proveedor', proveedor: 'Sensient' },
                    { nombre: 'Agua', cantidad: '3600', unidad: 'ml', tipo: 'na' }
                ],
                notas: 'Para jarras de pescado y verduras. Si sobra se guarda.'
            },
            'mezcla-jarra-risotto': {
                nombre: 'Mezcla Jarra Risotto',
                codigo: 'PRELAB-MJRISOTTO',
                lotePrefijo: 'RIA-MEZCLA-JRISOTTO',
                ingredientes: [
                    { nombre: 'Hazelnut (colorante Sensient)', cantidad: '60', unidad: 'ml', codigoMP: 'MP09', tipo: 'proveedor', proveedor: 'Sensient' },
                    { nombre: 'Agua', cantidad: '3600', unidad: 'ml', tipo: 'na' }
                ],
                notas: 'Para jarras de risotto. Si sobra se guarda.'
            },
            'mezcla-jarra-maestro': {
                nombre: 'Mezcla Jarra Maestro',
                codigo: 'PRELAB-MJMAESTRO',
                lotePrefijo: 'RIA-MEZCLA-JMAESTRO',
                ingredientes: [
                    { nombre: 'Preparado Maestro (pequeño x1)', cantidad: '', unidad: 'según formato', tipo: 'preelaboracion', lotePrefijo: 'RIA-PREP-MAESTRO' },
                    { nombre: 'Hazelnut (colorante Sensient)', cantidad: '190', unidad: 'ml', codigoMP: 'MP09', tipo: 'proveedor', proveedor: 'Sensient' },
                    { nombre: 'Agua de azafrán (Pequeña)', cantidad: '300', unidad: 'ml', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-AZAFRANP', codigoMP: 'MP48' },
                    { nombre: 'Agua', cantidad: '2000', unidad: 'ml', tipo: 'na' }
                ],
                notas: 'Mezcla maestro pequeño + hazelnut + agua azafrán + agua. Si sobra se guarda.'
            }
        },

        // --- Bases ---
        bases: {
            'agua-azafran-p': {
                nombre: 'Agua de Azafrán (Pequeña)',
                codigo: 'PRELAB-AZAFRAN-P',
                lotePrefijo: 'RIA-PRELAB-AZAFRANP',
                codigoMP: 'MP48',
                ingredientes: [
                    { nombre: 'Agua', cantidad: '300', unidad: 'g', tipo: 'na' },
                    { nombre: 'Azafrán', cantidad: '7', unidad: 'g', codigoMP: 'MP19', tipo: 'proveedor' }
                ],
                notas: 'Infusión a 68°C durante 1,5 horas'
            },
            'agua-azafran-g': {
                nombre: 'Agua de Azafrán (Grande)',
                codigo: 'PRELAB-AZAFRAN-G',
                lotePrefijo: 'RIA-PRELAB-AZAFRANG',
                codigoMP: 'MP48',
                ingredientes: [
                    { nombre: 'Agua', cantidad: '400', unidad: 'g', tipo: 'na' },
                    { nombre: 'Azafrán', cantidad: '10', unidad: 'g', codigoMP: 'MP19', tipo: 'proveedor' }
                ],
                notas: 'Infusión a 68°C durante 1,5 horas'
            },
            'aceite-ajo': {
                nombre: 'Aceite de Ajo',
                codigo: 'PRELAB-AJO',
                lotePrefijo: 'RIA-PRELAB-AJO',
                codigoMP: 'MP46',
                ingredientes: [
                    { nombre: 'Aceite de girasol alto oleico', cantidad: '10', unidad: 'L', codigoMP: 'MP04', tipo: 'proveedor', proveedor: 'Coreysa' },
                    { nombre: 'Ajo', cantidad: '5', unidad: 'kg', codigoMP: 'MP40', tipo: 'proveedor' }
                ],
                notas: 'Pasteurizar a 100°C durante 1h 20min'
            },
            'aceite-nora': {
                nombre: 'Aceite Rojo de Ñora',
                codigo: 'PRELAB-NORA',
                lotePrefijo: 'RIA-PRELAB-NORA',
                codigoMP: 'MP45',
                ingredientes: [
                    { nombre: 'Aceite de girasol alto oleico', cantidad: '16', unidad: 'L', codigoMP: 'MP04', tipo: 'proveedor', proveedor: 'Coreysa' },
                    { nombre: 'Ñora', cantidad: '2', unidad: 'latas', codigoMP: 'MP31', tipo: 'proveedor' },  // MP31 = Ñora (Rajope), NO MP21 que es Boletus
                    { nombre: 'Pimentón', cantidad: '2', unidad: 'cucharas grandes', codigoMP: 'MP10', tipo: 'proveedor' },
                    { nombre: 'Cúrcuma', cantidad: '2', unidad: 'c.c.', codigoMP: 'MP50', tipo: 'proveedor' }
                ],
                notas: 'Pasteurizar a 75°C durante 1,5 horas'
            },
            'salmorreta': {
                nombre: 'Salmorreta',
                codigo: 'PRELAB-SALMORRETA',
                lotePrefijo: 'RIA-PRELAB-SALMORRETA',
                codigoMP: 'MP43',
                ingredientes: [
                    { nombre: 'Ajo', cantidad: '10', unidad: 'kg', codigoMP: 'MP40', tipo: 'proveedor' },
                    { nombre: 'Aceite de oliva', cantidad: '7.2', unidad: 'L', codigoMP: 'MP05', tipo: 'proveedor', proveedor: 'Makro' },
                    { nombre: 'Ñora fresca', cantidad: '90', unidad: 'unidades', codigoMP: 'MP31', tipo: 'proveedor' },
                    { nombre: 'Tomate deshidratado', cantidad: '4.6', unidad: 'kg (polvo)', codigoMP: 'MP22', tipo: 'proveedor' },
                    { nombre: 'Ñora en lata', cantidad: '18', unidad: 'latas', codigoMP: 'MP31', tipo: 'proveedor' },
                    { nombre: 'Agua', cantidad: '12', unidad: 'L', tipo: 'na' }
                ],
                notas: 'Conservación: congelación'
            },
            'salsa-verduras-concentrada': {
                nombre: 'Salsa Verduras Concentrada',
                codigo: 'PRELAB-SVCONC',
                lotePrefijo: 'RIA-PRELAB-SVCONC',
                codigoMP: 'MP54',
                ingredientes: [
                    { nombre: 'Salmorreta', cantidad: '', unidad: 'según receta', tipo: 'preelaboracion', lotePrefijo: 'RIA-PRELAB-SALMORRETA', codigoMP: 'MP43' },
                    { nombre: 'Caldo de verduras', cantidad: '', unidad: 'según receta', tipo: 'preelaboracion', lotePrefijo: 'RIA-VERDURAS' }
                ],
                notas: 'Concentrado base. Para la salsa final: 1800g concentrado + 8L agua + 230ml agua almidonada'
            },
            'agua-almidonada': {
                nombre: 'Agua Almidonada',
                codigo: 'PRELAB-ALMIDON',
                lotePrefijo: 'RIA-PRELAB-ALMIDON',
                codigoMP: 'MP49',
                ingredientes: [
                    { nombre: 'Almidón', cantidad: '120', unidad: 'g', codigoMP: 'MP12', tipo: 'proveedor' },
                    { nombre: 'Agua', cantidad: '2', unidad: 'L', tipo: 'na' }
                ],
                notas: 'Mezclar almidón con agua fría hasta disolver'
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
            },
            'prep-maestro-x1': {
                nombre: 'Preparado Maestro x1 (16 jarras)',
                codigo: 'PRELAB-MAESTRO-X1',
                lotePrefijo: 'RIA-PREP-MAESTRO',
                ingredientes: [
                    { nombre: 'Umami (Givaudan)', cantidad: '132', unidad: 'g', codigoMP: 'MP06', tipo: 'proveedor', proveedor: 'Givaudan' },
                    { nombre: 'Ácido tartárico', cantidad: '0.11', unidad: 'g', codigoMP: 'MP51', tipo: 'proveedor' },
                    { nombre: 'Azúcar', cantidad: '110', unidad: 'g', codigoMP: 'MP39', tipo: 'proveedor' },
                    { nombre: 'Sal', cantidad: '220', unidad: 'g', codigoMP: 'MP53', tipo: 'proveedor' }
                ],
                notas: 'Para 16 jarras. x2 (32 jarras): duplicar todas las cantidades'
            },
            'prep-maestro-x2': {
                nombre: 'Preparado Maestro x2 (32 jarras)',
                codigo: 'PRELAB-MAESTRO-X2',
                lotePrefijo: 'RIA-PREP-MAESTRO',
                ingredientes: [
                    { nombre: 'Umami (Givaudan)', cantidad: '264', unidad: 'g', codigoMP: 'MP06', tipo: 'proveedor', proveedor: 'Givaudan' },
                    { nombre: 'Ácido tartárico', cantidad: '0.22', unidad: 'g', codigoMP: 'MP51', tipo: 'proveedor' },
                    { nombre: 'Azúcar', cantidad: '220', unidad: 'g', codigoMP: 'MP39', tipo: 'proveedor' },
                    { nombre: 'Sal', cantidad: '440', unidad: 'g', codigoMP: 'MP53', tipo: 'proveedor' }
                ],
                notas: 'Para 32 jarras. Es el doble del x1'
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
    // INGREDIENTES EXTRA PARA CREMOSOS (producción)
    // ========================================================================
    ingredientesExtraCremosos: [
        { nombre: 'Jamón Ibérico',  mpRef: 'MP20' },
        { nombre: 'Setas',          mpRef: 'MP22' },
        { nombre: 'Tartufata',      mpRef: 'MP23' }
    ],

    // ========================================================================
    // MATERIA PRIMA MAESTRO (MP01-MP58)
    // ========================================================================
    materiaPrima: {
        // --- Caldos base ---
        MP01: { nombre: 'Caldo Natural Aneto Pescado Restauración', proveedor: 'Aneto', formato: 'Tetra Brik 1,5L (cajas 10 uds)', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaLocal: '0560_001 PROFESIONAL PESCADO (AL PUNTO DE SAL-SEP25).pdf', vidaUtil: '12 meses', alergenos: ['pescado', 'apio', 'crustáceos', 'moluscos'], codigoAneto: '101050113', lote: '25249', caducidad: '06/09/2026' },
        // (MP02 eliminado: Caldo Aneto de Pollo no se usa)
        MP03: { nombre: 'Caldo Paeller Pollo', proveedor: 'Paeller', formato: 'Lata 3L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/14_x5-3o3-J60TGEDsdF06wc7s06x797K', lote: 'C3AV25R003A', caducidad: '03/10/2027' },
        // --- Aceites ---
        MP04: { nombre: 'Aceite girasol alto oleico', proveedor: 'Coreysa', formato: 'Garrafa 25L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/18gxWTtodrnT9g_ktuvZhvKq5eKukf9cf', lote: '25M24C072', caducidad: '24/05/2027' },
        MP05: { nombre: 'Aceite de oliva virgen extra', proveedor: 'Makro', formato: 'Garrafa 5L', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1MAAqJjeW3rWXdIMt8tjzlpMORppLZbMO', lote: '0126H78241', caducidad: '10/2026' },
        // --- Aromas y aditivos ---
        MP06: { nombre: 'Umami (Givaudan)', proveedor: 'Givaudan', formato: 'Bote 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1HGKb1KAwa8EdQind601XHifbxwpopFnq', lote: 'HA0072S398', caducidad: '04/11/2026' },
        MP07: { nombre: 'Goma xantana', proveedor: 'Corquimia', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1s9knhOB4VdRdygbT7NmsiDlY7rSxS7Dp', lote: '124112U133', caducidad: '23/11/2026' },
        MP08: { nombre: 'Tinta de calamar', proveedor: 'Nortindal', formato: 'Frasco 100g', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1xoggA9ZKcb-jHNwAdoXwDumm4bsiFUHX', lote: '13.25', caducidad: '24/03/2029' },
        MP09: { nombre: 'Hazelnut (colorante Sensient)', proveedor: 'Sensient', formato: 'Bote 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1gH58oWgfF30HguhBabwFPU3aYdPQS2KF', lote: 'b060238', caducidad: '30/11/2026' },
        MP10: { nombre: 'Pimentón', proveedor: 'Coato', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/15fObM80xHzaYjncbQBq_TLkCAEgg80My', lote: '8751', caducidad: '08/2026' },
        MP11: { nombre: 'Hierbas (mezcla)', proveedor: 'Expressions Aromatiques', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1IT3K-bek2mM8iRcgfphHc6-wWyH00ewh', lote: 'HA00616629', caducidad: '26/09/2028' },
        MP12: { nombre: 'Almidón', proveedor: 'Ingredion', formato: 'Bolsa 1kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1W4DRpTJzUE4WF7gKSv9ER1IsRpOpTNWG', lote: '3NG7023', caducidad: '01/04/2026' },
        // --- Mantequilla y lácteos ---
        MP13: { nombre: 'Mantequilla', proveedor: ['Presidente', 'Otro'], proveedorMultiple: true, formato: 'Bloque 2,5kg', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, lote: '252761', caducidad: '01/04/2026' },
        MP14: { nombre: 'Parmigiano Reggiano', proveedor: '', formato: 'Cuña', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1kAaJnflNAL66nUzOcxYCig6vM3PEloEc', lote: 'L086029P', caducidad: '29/08/2026' },
        MP14b: { nombre: 'Gran Padano', proveedor: '', formato: 'Cuña', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', lote: 'L046036', caducidad: '06/06/2026' },
        // --- (MP15-MP18 eliminados: gamba, rape, sepia, galera no se usan como ingrediente) ---
        // --- Especias ---
        MP19: { nombre: 'Azafrán', proveedor: 'Verdú Cantó', formato: 'Sobres 1g', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Fjkdysu9PyUo8el9pdcDWsJDhPaKrmFC', lote: 'H116092514', caducidad: '11/2028' },
        // --- Embutido ---
        MP20: { nombre: 'Jamón ibérico (en trozos)', proveedor: 'Enrique Tomás', formato: 'Pieza envasada', conservacion: 'Congelación', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1VXZ5E4jgj4B6OyN6mHkMoZweataGnI-j', lote: '25009100408', caducidad: '09/03/2026' },
        // --- Setas y hongos ---
        MP21: { nombre: 'Harina Fina de Boletus', proveedor: 'Honza', formato: 'Bolsa plástico (5 uds/caja)', conservacion: 'Tª Ambiente (lugar fresco y seco)', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Pq3Th7-CvFRZqs6Ys-Vs3vDxzJtAoHwI', fichaLocal: '020 - F - CA - HARINA FINA DE BOLETUS.pdf', vidaUtil: '3 años desde deshidratación', alergenos: [], certificaciones: ['IFS Food'], lote: 'H2621', caducidad: '30/04/2027' },
        MP22: { nombre: 'Mezcla de Setas Básica con Boletus', proveedor: 'Honza', formato: 'Granel 10kg (bolsa polietileno)', conservacion: 'Congelación (-18°C)', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1Pq3Th7-CvFRZqs6Ys-Vs3vDxzJtAoHwI', fichaLocal: '123-CA - MEZCLA DE SETAS BASICA.pdf', vidaUtil: '3 años desde congelación', alergenos: [], certificaciones: ['IFS Food'], lote: 'H4879', caducidad: '30/04/2027' },
        MP23: { nombre: 'Tartufata (pasta de trufa)', proveedor: 'Solchem', formato: 'Tarro', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1ILIbFB6shtYxY02QKBR4Dsd69rASSBQ0', lote: 'L6172', caducidad: '20/06/2028' },
        // --- Arroces ---
        MP24: { nombre: 'Arroz Elaborado Variedad Nuovo Maratelli', proveedor: 'Arrocera del Pirineo', formato: 'Saco 25kg (también 1kg, 5kg, 20kg)', conservacion: 'Tª Ambiente (lugar limpio, fresco, seco)', tipo: 'ingrediente', fichaDrive: '', fichaLocal: 'Ficha técnica arroz n.maratelli ene-25.pdf', vidaUtil: '18 meses', alergenos: [], categoría: 'Extra', clasificacion: 'Oryza sativa, Subespecie Japónica', lote: '26Y04', caducidad: '06/2027' },
        MP25: { nombre: 'Arroz Bahía (Illa de Riu)', proveedor: 'Illa de Riu', formato: 'Saco 25kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', lote: '62604', caducidad: '09/2026' },
        MP26: { nombre: 'Arroz Marisma (Arrozúa)', proveedor: 'Arrozúa', formato: 'Saco 25kg', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', lote: '3026D026', caducidad: '02/2027' },
        // (MP27 eliminado: Arroz Maestro = Arroz Marisma, duplicado)
        // --- Tomate ---
        MP30: { nombre: 'Tomate deshidratado', proveedor: 'Mas Tomate', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1jzY5Y02cEe6SHLdAvi0S4xFicqxNGn9K', lote: 'V0', caducidad: '12/03/2030' },
        MP31: { nombre: 'Ñora', proveedor: 'Rajope', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/14Y5TrAfb7BcJCH82AS6mG4rKlL3Vay8s', lote: '0402256001', caducidad: '07/2027' },
        // --- (MP32 eliminado: salsa de pescado ya no se usa) ---
        // --- Verduras deshidratadas ---
        MP33: { nombre: 'Espinaca deshidratada', proveedor: 'La Margarita', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo', lote: '960040259', caducidad: '07/2025' },
        MP34: { nombre: 'Cebolla deshidratada', proveedor: 'Vegenat', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1QXYo8IL7jc9hBv1witFVCqqMv5USSuc0', lote: 'F19134', caducidad: '07/2028' },
        MP35: { nombre: 'Pollo deshidratado', proveedor: 'Ugeave', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1AxRLbDkx66WHYQnzU34ivpTsCI9NIXCP', lote: '20U29-1S0Y26', caducidad: '15/07/2027' },
        MP36: { nombre: 'Puerro deshidratado', proveedor: 'La Margarita', formato: 'Bolsa', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo', lote: '25AC199', caducidad: '02/2027' },
        // --- Otros ingredientes con ficha ---
        MP37: { nombre: 'Sal', proveedor: ['Varios'], proveedorMultiple: true, formato: 'Saco', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', lote: 'Hdno-10N89', caducidad: '26/02/2030' },
        MP38: { nombre: 'Ácido tartárico', proveedor: 'Dalmau', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: 'https://drive.google.com/drive/folders/123tPERK4BqmmOFwmLbDyvgTBEa0K5M5v', fichaFalta: true, lote: '13506', caducidad: '10/2028' },
        MP39: { nombre: 'Azúcar', proveedor: 'Azucarera', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, lote: '39C0502601' },
        MP40: { nombre: 'Ajo fresco', proveedor: 'Ajopel', formato: '', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, usadoEn: ['Preelaboración Aceite de Ajo', 'Preelaboración Salmorreta'] },
        MP41: { nombre: 'Cúrcuma', proveedor: 'Ajopel', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, usadoEn: ['Caldo Pescado'] },
        // (MP42 eliminado: Ruca no existe como producto)

        // --- NUEVOS: Ingredientes de salsas cremosas (pendientes ficha técnica y proveedor) ---
        // MP60: Flaxfiber ELIMINADO — Isabel confirma que ya NO se usa (03/2026)
        MP61: { nombre: 'CMC (carboximetilcelulosa)', proveedor: 'Dalmau', formato: '', conservacion: 'Tª Ambiente', tipo: 'aditivo', fichaDrive: '', fichaFalta: true, pendiente: false, notas: 'Dosificación: 1,2 g/L (actualizado 11/12)', usadoEn: ['Tartufata', 'Boletus', 'Queso', 'Ibérico'], lote: '25024333', caducidad: '02/2027' },
        // MP62: Nata — consolidado en MP63 (es lo mismo que Nata 20%)
        MP63: { nombre: 'Nata (crema de leche)', proveedor: 'Metro', formato: '', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, alergenos: ['leche'], usadoEn: ['Tartufata', 'Ibérico', 'Queso'], lote: '78337U' },
        // MP64: Manzanilla — consolidado en MP65 (Manzanilla/Jerez/Vino blanco son lo mismo)
        MP65: { nombre: 'Vino (Manzanilla/Jerez)', proveedor: 'Barbadillo', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, usadoEn: ['Tartufata', 'Boletus', 'Queso', 'Ibérico'], lote: 'R32/CA' },
        MP66: { nombre: 'Grasa de pollo', proveedor: 'Ugeave', formato: '', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, usadoEn: ['Tartufata', 'Boletus', 'Setas', 'Queso', 'Ibérico'], lote: '20410', caducidad: '12/04/2027' },
        MP67: { nombre: 'Aceite de girasol trufado', proveedor: 'Coreysa', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, notas: '3,2 g trufa por 1000 g aceite', usadoEn: ['Tartufata'], lote: '251124C072', caducidad: '03/10/2027' },
        MP68: { nombre: 'Aroma de setas', proveedor: 'Givaudan', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, usadoEn: ['Boletus', 'Setas'], lote: '24141225' },
        MP69: { nombre: 'Aroma de queso', proveedor: 'Givaudan', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, usadoEn: ['Queso'], lote: '24141225', caducidad: '03/08/2026' },
        MP70: { nombre: 'Aroma de jamón (OSO)', proveedor: 'Givaudan', formato: '', conservacion: 'Tª Ambiente', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, notas: 'Aumentar 20% según nota', usadoEn: ['Ibérico'], lote: 'DU00967240', caducidad: '18/08/2026' },
        // MP71: Pimienta negra — Isabel marca NO, ya no se usa en salsas cremosas (03/2026)
        // MP72: Jerez — consolidado en MP65 (Manzanilla/Jerez/Vino blanco son lo mismo)
        MP73: { nombre: 'Queso azul', proveedor: 'Givaudan', formato: '', conservacion: 'Refrigeración', tipo: 'ingrediente', fichaDrive: '', fichaFalta: true, pendiente: false, alergenos: ['leche'], usadoEn: ['Queso'], lote: 'MA00620406', caducidad: '18/10/2028' },

        // --- Elaboraciones intermedias (fabricación propia) ---
        MP43: { nombre: 'Salmorreta', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Refrigeración', tipo: 'preelaboracion', fichaDrive: '' },
        // MP44: Aceite de gamba — ELIMINADO (no se elabora)
        MP45: { nombre: 'Aceite rojo de ñora', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        MP46: { nombre: 'Aceite de ajo', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Tª Ambiente', tipo: 'preelaboracion', fichaDrive: '' },
        // MP47: Aceite de trufa — ELIMINADO (no se elabora)
        MP48: { nombre: 'Agua de azafrán', proveedor: 'RIA (elab. propia)', formato: 'Elab. intermedia', conservacion: 'Refrigeración', tipo: 'preelaboracion', fichaDrive: '' },
        // --- Packaging: Bandejas ---
        MP50: { nombre: 'Bandeja EOS-35 (190-300g)', proveedor: 'Sarabia', formato: 'PP/PPEVOHPP 1000µ', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Raciones individuales 190-300g', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'EOS-35 PP o PPEVOHPP 1000µ.pdf', lote: 'T629B36E012523' },
        MP55: { nombre: 'Bandeja EOS-50 (380-450g)', proveedor: 'Sarabia', formato: 'PP/PPEVOHPP', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Raciones grandes 380-450g', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: '230-1.pdf / 230-2.pdf', lote: 'T005B829E01S2525' },
        MP56: { nombre: 'Bandeja Bulk (GN1225)', proveedor: 'Sarabia', formato: 'PPEVOHPP 800µ', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Formato Bulk (3 redes)', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'GN1225 PPEVOHPP 800µ.pdf' },
        // --- Packaging: Film (mismo para barquetas y salsas) ---
        MP51: { nombre: 'Film top-seal (LFX501T062-K59)', proveedor: 'Adrados', formato: 'Bobina PE Fest/PP Peel/AF', conservacion: 'Tª Ambiente', tipo: 'packaging', uso: 'Sellado de todas las bandejas y salsas', fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn', fichaArchivo: 'FT-FILM LFX501T062---K59 - 2023.08.29.pdf', lote: '22403117/1', notas: 'Reel 7959194, Palette 1806720, 66µm, 240mm, 7.771kg, 500m' },
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
        coreysa:            { nombre: 'Coreysa', productos: ['MP04', 'MP67'], fichaDrive: 'https://drive.google.com/drive/folders/18gxWTtodrnT9g_ktuvZhvKq5eKukf9cf' },
        dalmau:             { nombre: 'Dalmau', productos: ['MP38', 'MP61'], fichaDrive: 'https://drive.google.com/drive/folders/123tPERK4BqmmOFwmLbDyvgTBEa0K5M5v' },
        givaudan:           { nombre: 'Givaudan', productos: ['MP06', 'MP68', 'MP69', 'MP70', 'MP73'], fichaDrive: 'https://drive.google.com/drive/folders/1HGKb1KAwa8EdQind601XHifbxwpopFnq' },
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
        arrozua:            { nombre: 'Arrozúa', productos: ['MP26'], direccion: 'Finca Veta La Mora, 41140 Isla Mayor, Sevilla', telefono: '+34 954 777 564', web: 'www.arrozua.com', certificaciones: ['IFS', 'BRC'] },
        masTomate:          { nombre: 'Mas Tomate', productos: ['MP30'], fichaDrive: 'https://drive.google.com/drive/folders/1jzY5Y02cEe6SHLdAvi0S4xFicqxNGn9K' },
        rajope:             { nombre: 'Rajope', productos: ['MP31'], fichaDrive: 'https://drive.google.com/drive/folders/14Y5TrAfb7BcJCH82AS6mG4rKlL3Vay8s' },
        vegenat:            { nombre: 'Vegenat', productos: ['MP34'], fichaDrive: 'https://drive.google.com/drive/folders/1QXYo8IL7jc9hBv1witFVCqqMv5USSuc0' },
        ugeave:             { nombre: 'Ugeave', productos: ['MP35', 'MP66'], fichaDrive: 'https://drive.google.com/drive/folders/1AxRLbDkx66WHYQnzU34ivpTsCI9NIXCP' },
        laMargarita:        { nombre: 'La Margarita', productos: ['MP33', 'MP36'], fichaDrive: 'https://drive.google.com/drive/folders/1zUCFdwS4WkNvzhGsjBpjFnwdefTCyVeo' },
        makro:              { nombre: 'Makro', productos: ['MP05', 'MP14'], fichaDrive: 'https://drive.google.com/drive/folders/1MAAqJjeW3rWXdIMt8tjzlpMORppLZbMO' },
        presidente:         { nombre: 'Presidente', productos: ['MP13'] },
        sarabia:            { nombre: 'Sarabia', productos: ['MP50', 'MP55', 'MP56'], fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn' },
        adrados:            { nombre: 'Adrados', productos: ['MP51'], fichaDrive: 'https://drive.google.com/drive/folders/1ICxb5wMgudggpabmzRPBT701Ak9LvHnn' },
        femasa:             { nombre: 'Femasa', productos: ['MP53'] },
        // --- Nuevos proveedores identificados por Isabel (03/2026) ---
        corquimia:          { nombre: 'Corquimia', productos: ['MP07'] },
        azucarera:          { nombre: 'Azucarera', productos: ['MP39'] },
        barbadillo:         { nombre: 'Barbadillo', productos: ['MP65'] },
        metro:              { nombre: 'Metro', productos: ['MP63'] }
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
    // ETIQUETAS PRODUCTOS INTERMEDIOS (SATO TH208 / Easy Food 2)
    // Datos para impresión de etiquetas con QR de trazabilidad
    // ========================================================================
    etiquetasIntermedios: {
        'caldo-pescado':   { id: 'REC-CALDO-001', nombre: 'Caldo de Pescado',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'PESCADO, APIO, CRUSTÁCEOS (posible), MOLUSCOS (posible)' },
        'caldo-negro':     { id: 'REC-CALDO-002', nombre: 'Caldo Negro',        vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'PESCADO, APIO, CRUSTÁCEOS (posible), MOLUSCOS (calamar)' },
        'caldo-pollo':     { id: 'REC-CALDO-003', nombre: 'Caldo de Pollo',     vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'Trazas de APIO' },
        'caldo-verduras':  { id: 'REC-CALDO-004', nombre: 'Caldo de Verduras',  vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'Trazas de APIO' },
        'caldo-risotto':   { id: 'REC-CALDO-005', nombre: 'Caldo de Risotto',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE' },
        'salsa-pescado':   { id: 'REC-SALSA-PESC', nombre: 'Salsa de Pescado',  vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'PESCADO, APIO, CRUSTÁCEOS (posible), MOLUSCOS (posible)' },
        'salsa-negra':     { id: 'REC-SALSA-NEG',  nombre: 'Salsa Negra',       vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'PESCADO, APIO, MOLUSCOS (calamar)' },
        'salsa-verduras':  { id: 'REC-SALSA-VERD', nombre: 'Salsa de Verduras', vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'Trazas de APIO' },
        'salsa-pollo':     { id: 'REC-SALSA-POL',  nombre: 'Salsa de Pollo',    vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'Trazas de APIO' },
        'salsa-tartufata': { id: 'REC-SALSA-TART', nombre: 'Salsa Tartufata',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE, SULFITOS' },
        'salsa-boletus':   { id: 'REC-SALSA-BOL',  nombre: 'Salsa de Boletus',  vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE, SULFITOS' },
        'salsa-setas':     { id: 'REC-SALSA-SET',  nombre: 'Salsa de Setas',    vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE' },
        'salsa-queso':     { id: 'REC-SALSA-QUE',  nombre: 'Salsa de Queso',    vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE, SULFITOS' },
        'salsa-iberico':   { id: 'REC-SALSA-IBE',  nombre: 'Salsa Ibérico',     vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE, SULFITOS' },
        'prelab-azafran-p':{ id: 'PRELAB-AZAFRAN-P',   nombre: 'Agua de Azafrán (Pequeña)', vidaUtilDias: 90,  conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'prelab-azafran-g':{ id: 'PRELAB-AZAFRAN-G',   nombre: 'Agua de Azafrán (Grande)',  vidaUtilDias: 90,  conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'prelab-ajo':      { id: 'PRELAB-AJO',         nombre: 'Aceite de Ajo',       vidaUtilDias: 120, conservacion: 'Tª Ambiente (proteger de la luz)', alergenos: '' },
        'prelab-nora':     { id: 'PRELAB-NORA',        nombre: 'Aceite Rojo de Ñora', vidaUtilDias: 90,  conservacion: 'Tª Ambiente (proteger de la luz)', alergenos: '' },
        'prelab-salmorreta':{ id: 'PRELAB-SALMORRETA', nombre: 'Salmorreta',          vidaUtilDias: 360, conservacion: 'Congelación', alergenos: '' },
        'prelab-almidon':  { id: 'PRELAB-ALMIDON',     nombre: 'Agua Almidonada',     vidaUtilDias: 3,   conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'prelab-svconc':   { id: 'PRELAB-SVCONC',      nombre: 'Salsa Verduras Concentrada', vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'Trazas de APIO' },
        'pesado-verduras': { id: 'PRELAB-PESADO-VERD', nombre: 'Pesado Verduras',     vidaUtilDias: 180, conservacion: 'Tª Ambiente', alergenos: '' },
        'pesado-risotto':  { id: 'PRELAB-PESADO-RIS',  nombre: 'Pesado Risotto',      vidaUtilDias: 180, conservacion: 'Tª Ambiente', alergenos: '' },
        // --- Preelaboraciones de Jarras ---
        'jarra-pescado':   { id: 'JARRA-PESC',    nombre: 'Jarra de Pescado',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'jarra-verduras':  { id: 'JARRA-VERD',    nombre: 'Jarra de Verduras',  vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'jarra-risotto':   { id: 'JARRA-RIS',     nombre: 'Jarra de Risotto',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: 'LECHE' },
        'jarra-maestro':   { id: 'JARRA-MAESTRO', nombre: 'Jarra de Maestro',   vidaUtilDias: 5, conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        // --- Mezclas líquidas para jarras ---
        'mezcla-jarra-normal':  { id: 'MEZCLA-JNORMAL',  nombre: 'Mezcla Jarra Normal',  vidaUtilDias: 15, conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'mezcla-jarra-risotto': { id: 'MEZCLA-JRISOTTO', nombre: 'Mezcla Jarra Risotto', vidaUtilDias: 15, conservacion: 'Refrigeración (0-4°C)', alergenos: '' },
        'mezcla-jarra-maestro': { id: 'MEZCLA-JMAESTRO', nombre: 'Mezcla Jarra Maestro', vidaUtilDias: 15, conservacion: 'Refrigeración (0-4°C)', alergenos: '' }
    },

    // Empresa para etiquetas
    empresa: {
        nombre: 'Rice in Action S.L.',
        rgseaa: '', // Pendiente
        direccion: '', // Pendiente
        telefono: '+34 629 606 995'
    },

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
