---
name: ria-diagramas
description: Guía para crear y editar diagramas de flujo de producción de Rice in Action S.L. Contiene la referencia completa de datos, familias de productos, materias primas, preelaboraciones, caldos, salsas, formatos y reglas de negocio. Usar siempre antes de crear o modificar cualquier diagrama HTML de producción.
---

# RIA — Diagramas de Producción

Guía de referencia para crear y mantener los diagramas de flujo de producción interactivos de Rice in Action S.L., alojados en GitHub Pages (`cquerol2-alt.github.io/calidad/`).

## Estructura del repositorio

```
/calidad/
  data.js              ← FUENTE MAESTRA de datos (solo lectura)
  produccion.html      ← Formulario web de producción
  diagramas.html       ← Índice de todos los diagramas
  dark_pescado.html    ← Diagrama Arroz de Pescado y Marisco
  dark_maestro.html    ← Diagrama Arroz Maestro
  dark_cremoso_iberico.html ← Diagrama Cremoso Ibérico
  dark_salsa_boletus.html   ← Diagrama Salsa de Setas (Boletus)
  skills/ria-diagramas/SKILL.md ← Este archivo
```

## Fuentes de datos (por orden de prioridad)

1. **data.js** (`RIA_DATA`): fuente maestra. Contiene materiasPrimas, recetas de caldos, preelaboraciones, jarras, mezclas, productos, proveedores y fichas técnicas.
2. **produccion.html**: formulario web. Confirma comportamiento de cada producto (tiene caldo? tiene salsa? qué jarra usa?).
3. **Instrucciones directas de Cristina**: siempre prevalecen sobre data.js si hay conflicto.

---

## FAMILIAS DE PRODUCTOS

### Familia La Santa
Descripción general: "Arroz cocinado con ingredientes de la jarra, con Caldo. Salsa en sobre aparte."

| Producto | Código lote | Arroz | Caldo | Salsa (aparte) |
|----------|-------------|-------|-------|-----------------|
| Arroz de Pescado y Marisco | L-748-AAMMDD | Maratelli (MP24) | Caldo Pescado (REC-CALDO-001) | Salsa Pescado 40g |
| Arroz Negro | pendiente | Maratelli (MP24) | pendiente | Salsa Negra 80g |
| Arroz de Verduras | pendiente | pendiente | pendiente | Salsa Verduras 40g |
| Arroz de Pollo | pendiente | pendiente | pendiente | Salsa Pollo 40g |
| Risotto | pendiente | Maratelli (MP24) | Caldo Risotto (REC-CALDO-005) | Salsa Boletus 80g |

### Familia Maestro
Descripción general: "Arroz cocinado con ingredientes de la jarra, sin Caldo. Sin Salsa."

| Producto | Código lote | Arroz | Caldo | Salsa |
|----------|-------------|-------|-------|-------|
| Maestro Seco | pendiente confirmar | Bahía (MP25) | NO | NO |
| Maestro Meloso | pendiente confirmar | pendiente | NO | NO |

Nota: 810-B = Bahía (confirmado), 810 = Marisma (pendiente confirmar). Receta Meloso pendiente.

### Familia All-Included (antes "Cremosos / Risotto")
Descripción general: "Arroz cocinado con ingredientes de la jarra, con Caldo de Risotto, con Salsa incluida y con un ingrediente extra."

| Producto | Código lote | Arroz | Caldo | Salsa incluida | Ingrediente extra |
|----------|-------------|-------|-------|----------------|-------------------|
| Cremoso Ibérico | L-781-AAMMDD | Maratelli (MP24) | Caldo Risotto | Salsa Ibérica 90g | Jamón ibérico (MP20) |
| Cremoso Setas | pendiente | Maratelli (MP24) | Caldo Risotto | Salsa Boletus 80g | pendiente |
| Cremoso Queso | pendiente | pendiente | Caldo Risotto | pendiente | pendiente |
| Cremoso Tartufato | pendiente | pendiente | Caldo Risotto | Salsa Tartufata 90g | pendiente |

### Salsas — Envasado en bolsa
Cada salsa va dentro de la caja de su arroz correspondiente.

| Salsa | Gramos | Destino (caja) | Código lote |
|-------|--------|----------------|-------------|
| Salsa de Pescado | 40g | Arroz Pescado (La Santa) | pendiente |
| Salsa Negra | 80g | Arroz Negro (La Santa) | L-742S-DDMMAA (?) |
| Salsa Verduras | 40g | Arroz Verduras (La Santa) | pendiente |
| Salsa Pollo | 40g | Arroz Pollo (La Santa) | pendiente |
| Salsa Boletus | 80g | Risotto (La Santa) + Cremoso Setas (All-Included) | L-742S-DDMMAA |
| Salsa Tartufata | 90g | Cremoso Tartufato (All-Included) | pendiente |
| Salsa Ibérica | 90g | Cremoso Ibérico (All-Included) | pendiente |

---

## MATERIAS PRIMAS — Referencia completa

### Ingredientes principales (verificados en data.js)

| Código | Nombre | Proveedor | Formato |
|--------|--------|-----------|---------|
| MP01 | Caldo Aneto Pescado | Aneto | Tetra Brik 1,5L |
| MP03 | Caldo Paeller Pollo | Paeller | Lata 3L |
| MP04 | Aceite girasol alto oleico | Coreysa | Garrafa 25L |
| MP05 | Aceite de oliva virgen extra | Makro | Garrafa 5L |
| MP06 | Umami | Givaudan | Bote 1kg |
| MP07 | Goma xantana | Corquimia | Bolsa 1kg |
| MP08 | Tinta de calamar | Nortindal | Frasco 100g |
| MP09 | Hazelnut (colorante) | Sensient | Bote 1kg |
| MP10 | Pimentón | Coato | Bolsa 1kg |
| MP11 | Hierbas (mezcla) | Expressions Aromatiques | Bolsa |
| MP12 | Almidón | Ingredion | Bolsa 1kg |
| MP13 | Mantequilla | Presidente | Bloque 2,5kg |
| MP14 | Parmigiano Reggiano | (sin asignar) | Cuña |
| MP19 | Azafrán | Verdú Cantó | Sobres 1g |
| MP20 | Jamón ibérico | Enrique Tomás | Pieza envasada |
| MP21 | Harina Fina de Boletus | Honza | Bolsa plástico |
| MP22 | Mezcla Setas con Boletus | Honza | Granel 10kg |
| MP23 | Tartufata (pasta de trufa) | Solchem | Tarro |
| MP24 | Arroz Nuovo Maratelli | Arrocera del Pirineo | Saco 25kg |
| MP25 | Arroz Bahía | Illa de Riu | Saco 25kg |
| MP26 | Arroz Marisma | Arrozúa | Saco 25kg |
| MP31 | Ñora | Rajope | Bolsa |
| MP33 | Espinaca deshidratada | La Margarita | Bolsa |
| MP34 | Cebolla deshidratada | Vegenat | Bolsa |
| MP35 | Pollo deshidratado | Ugeave | Bolsa |
| MP36 | Puerro deshidratado | La Margarita | Bolsa |
| MP37 | Sal | Varios | Saco |
| MP38 | Ácido tartárico | Dalmau | — |
| MP39 | Azúcar | Azucarera | — |
| MP40 | Ajo fresco | Ajopel | — |
| MP41 | Cúrcuma | Ajopel | — |

### Aditivos y salsas cremosas

| Código | Nombre | Proveedor |
|--------|--------|-----------|
| MP61 | CMC (carboximetilcelulosa) | Dalmau |
| MP63 | Nata (crema de leche) | Metro |
| MP65 | Vino (Manzanilla/Jerez) | Barbadillo |
| MP66 | Grasa de pollo | Ugeave |
| MP67 | Aceite girasol trufado | Coreysa |
| MP68 | Aroma de setas | Givaudan |
| MP69 | Aroma de queso | Givaudan |
| MP70 | Aroma de jamón (OSO) | Givaudan |
| MP73 | Queso azul | Givaudan |

### Packaging

| Código | Nombre | Proveedor | Uso |
|--------|--------|-----------|-----|
| MP50 | Bandeja EOS-35 | Sarabia | Formatos 190-300g |
| MP51 | Film top-seal | Adrados | Sellado todas bandejas |
| MP55 | Bandeja EOS-50 | Sarabia | Formatos 380-450g |
| MP56 | Bandeja Bulk GN1225 | Sarabia | Formato Bulk |

### Preelaboraciones RIA (elaboración propia)

| Código | Nombre | Lote | Vida útil | Conservación |
|--------|--------|------|-----------|--------------|
| MP43 | Salmorreta | RIA-PRELAB-SALMORRETA-DDMMAA | 360 días | Congelación |
| MP45 | Aceite rojo de ñora | RIA-PRELAB-NORA-DDMMAA | 90 días | Tª Ambiente |
| MP46 | Aceite de ajo | RIA-PRELAB-AJO-DDMMAA | 120 días | Tª Ambiente |
| MP48 | Agua de azafrán 300g | RIA-PRELAB-AZAFRANP-DDMMAA | 90 días | Refrigeración |
| MP48 | Agua de azafrán 400g | RIA-PRELAB-AZAFRANG-DDMMAA | 90 días | Refrigeración |
| MP49 | Agua almidonada | RIA-PRELAB-ALMIDON-DDMMAA | 21 días | Refrigeración |
| MP54 | Salsa Verduras Conc. | RIA-PRELAB-SVCONC-DDMMAA | 30 días | Refrigeración |

### Pesados, Jarras y Mezclas (elaboración propia)

| Tipo | Nombre | Lote | Vida útil | Conservación |
|------|--------|------|-----------|--------------|
| Pesado | Pesado Verduras | RIA-PESADO-VERD-DDMMAA | 180 días | Tª Ambiente |
| Pesado | Pesado Risotto | RIA-PESADO-RIS-DDMMAA | 180 días | Tª Ambiente |
| Jarra | Jarra Pescado | RIA-JARRA-PESC-DDMMAA | 180 días | Tª Ambiente |
| Jarra | Jarra Verduras | RIA-JARRA-VERD-DDMMAA | 180 días | Tª Ambiente |
| Jarra | Jarra Risotto | RIA-JARRA-RIS-DDMMAA | 180 días | Tª Ambiente |
| Jarra | Jarra Maestro | RIA-JARRA-MAESTRO-DDMMAA | 180 días | Tª Ambiente |
| Mezcla | Mezcla Jarra Normal | RIA-MEZCLA-JNORMAL-DDMMAA | 15 días | Refrigeración |
| Mezcla | Mezcla Jarra Risotto | RIA-MEZCLA-JRISOTTO-DDMMAA | 15 días | Refrigeración |
| Mezcla | Mezcla Jarra Maestro | RIA-MEZCLA-JMAESTRO-DDMMAA | 15 días | Refrigeración |

Nota: Los Pesados son pesajes de ingredientes secos que se etiquetan. En data.js el "Preparado Maestro (polvos)" (RIA-PREP-MAESTRO) es un paso intermedio del pesaje, pero en SATO se etiqueta como "Mezcla Jarra Maestro" (RIA-MEZCLA-JMAESTRO). Son el mismo producto.

---

## FORMATOS DE LOTE

REGLA CRÍTICA — No confundir:

| Tipo | Formato fecha | Ejemplo |
|------|---------------|---------|
| Productos finales (arroces, All-Included) | AAMMDD | L-748-260314 (14 marzo 2026) |
| Preelaboraciones RIA | DDMMAA | RIA-PRELAB-AJO-140326 |
| Salsas (producto final) | DDMMAA | L-742S-140326 |
| Mezclas jarra | DDMMAA | RIA-MEZCLA-JNORMAL-140326 |

---

## ESTRUCTURA DE CADA DIAGRAMA HTML

### Tipos de nodo (clases CSS)

| Clase | Color | Uso |
|-------|-------|-----|
| `.n-mp` | Azul (#1e3a5f / #3b82f6) | Materia prima de proveedor |
| `.n-pkg` | Teal (#1a3636 / #14b8a6) | Packaging (bandeja, film) |
| `.n-pre` | Púrpura (#2d1b69 / #8b5cf6) | Preelaboración |
| `.n-mix` | Rojo (#4c1d1d / #ef4444) | Mezcla jarra |
| `.n-cal` | Verde (#14532d / #22c55e) | Caldo |
| `.n-sal` | Púrpura oscuro (#581c87 / #a855f7) | Salsa |
| `.n-env` | Rosa (#4a1942 / #ec4899) | Embolsado |
| `.n-box` | Cyan (#1e3a5f / #06b6d4) | Encajado |
| `.n-prod` | Ámbar (#78350f / #f59e0b) | Producto final |

### Atributos data- de cada nodo

| Atributo | Contenido | Ejemplo |
|----------|-----------|---------|
| `data-n` | Nombre completo | "Aceite girasol alto oleico" |
| `data-c` | Código MP + proveedor | "MP04 — Coreysa" |
| `data-i` | Info detallada (separar con `\|`) | "Garrafa 25L\|→ Aceite de Ajo (10L)" |
| `data-v` | (VACÍO — ya no se usa) | "" |
| `data-a` | Alérgenos | "PESCADO APIO CRUSTÁCEOS MOLUSCOS" |
| `data-s` | (VACÍO — ya no se usa) | "" |

### Qué poner en cada tipo de nodo

**Materias primas (n-mp, n-pkg):**
- data-c: "MPxx — Proveedor" (SIEMPRE incluir proveedor)
- data-i: Solo cantidad y destino. NO poner lote, caducidad, vida útil ni condiciones de almacenamiento
- data-v: VACÍO
- data-s: VACÍO
- Enlace a ficha técnica: pendiente (campo `fichaDrive` en data.js)

**Preelaboraciones (n-pre, n-mix):**
- data-c: "PRELAB-CÓDIGO" o "MEZCLA-CÓDIGO"
- data-i: Lote RIA-...-DDMMAA + ingredientes + proceso. SÍ incluir lote
- data-v: VACÍO (no poner vida útil)
- data-s: VACÍO (no poner condiciones almacenamiento)

**Caldos (n-cal):**
- data-i: Composición del caldo (qué lleva)
- data-v: VACÍO
- data-s: VACÍO

**Producto final (n-prod):**
- data-c: "Familia · Código xxx"
- data-i: Lote L-xxx-AAMMDD + composición + formatos
- data-a: Alérgenos del producto final

---

## COSAS A EVITAR (errores frecuentes)

1. **NO poner lote ni caducidad en materias primas.** Solo fabricante/proveedor y cantidad.
2. **NO poner vida útil ni condiciones de almacenamiento en NINGÚN nodo.** Los campos data-v y data-s siempre vacíos.
3. **NO confundir formato de fecha de lote.** Arroces = AAMMDD. Preelaborados/salsas = DDMMAA.
4. **NO confundir MP20.** En data.js, MP20 aparece tanto para Ajo (en recetas de preelaboración, línea 652) como para Jamón Ibérico (en la lista maestra, línea 815). El código correcto es: **MP20 = Jamón Ibérico (Enrique Tomás)**, **MP40 = Ajo (Ajopel)**. Esto es un bug de data.js — siempre usar MP40 para Ajo.
5. **NO confundir MP21 con Ñora.** MP21 = Boletus (Honza). La Ñora es **MP31 (Rajope)**.
6. **NO confundir MP39/MP52.** En las recetas de Maestro, azúcar aparece como MP52, pero MP52 es Etiqueta en la lista maestra. **MP39 = Azúcar (Azucarera)**. Usar MP39.
7. **Maestro NO lleva caldo ni salsa.** Verificar en produccion.html: `const showSalsa = !isSalsa && !isMaestro;`
8. **Caldo Risotto NO lleva Caldo Aneto.** La receta REC-CALDO-005 usa: Agua, Aceite de Ajo, Mantequilla, Aceite girasol, Xantana, Umami, Almidón. No Aneto ni Paeller.
9. **NO poner comentarios internos visibles al usuario.** Notas como "Maestro NO lleva caldo" son para el skill, no para el diagrama.
10. **NO poner emojis** en los diagramas ni en el índice.
11. **Cada salsa va con su arroz.** No mezclar destinos. Salsa Pescado → caja Pescado, Salsa Boletus → caja Risotto, Salsa Ibérica → caja Cremoso Ibérico.
12. **Packaging según formato.** EOS-35 (MP50) para 190-300g, EOS-50 (MP55) para 380-450g. Verificar qué bandeja usa cada producto.
13. **IDs de nodo únicos.** No duplicar ids (problema actual en cremoso ibérico con `id="mpArr"` duplicado — hay que arreglar).
14. **Verificar todo contra data.js ANTES de escribir.** Siempre leer data.js primero para confirmar códigos, proveedores, ingredientes y recetas.
15. **El Aceite de Ajo va directo a producción en Maestro**, no a través de un caldo (porque Maestro no tiene caldo).
16. **Risotto pertenece a La Santa**, no a All-Included, aunque use Caldo Risotto. La Santa = arroces con caldo y salsa en sobre aparte.
17. **"Cremosos / Risotto" se renombró a "All-Included"** en diagramas.html y en toda la documentación.
18. **Familia Maestro es independiente de La Santa** en el índice de diagramas (tiene su propia sección).

---

## CORRECCIONES PENDIENTES EN DIAGRAMAS EXISTENTES

Estas correcciones ya están identificadas pero aún no aplicadas:

1. **dark_pescado.html**: Nodo Ajo muestra `data-c="Ajo fresco"` sin código → cambiar a `data-c="MP40 — Ajopel"`
2. **dark_pescado.html**: Nodo Cúrcuma muestra `data-c="Cúrcuma"` sin código → cambiar a `data-c="MP41 — Ajopel"`
3. **dark_cremoso_iberico.html**: Nodo Ajo muestra `data-c="Ajo fresco"` sin código → cambiar a `data-c="MP40 — Ajopel"`
4. **dark_cremoso_iberico.html**: Tiene dos nodos con `id="mpArr"` (uno oculto con display:none, otro visible) → eliminar el duplicado oculto
5. **diagramas.html**: Sección de salsas todavía puede mostrar formato AAMMDD en descripción → verificar que ponga DDMMAA
6. **diagramas.html**: Actualizar índice completo con TODAS las familias y productos (La Santa 5, Maestro 2, All-Included 4, Salsas 7)

---

## FUENTES DE DATOS Y COHERENCIA

Hay 5 sitios donde se almacenan datos de productos/intermedios/lotes. Cuando se añade, modifica o elimina un producto o preelaboración hay que actualizar TODOS:

| # | Archivo | Ubicación | Qué contiene |
|---|---------|-----------|--------------|
| 1 | **data.js** | `/calidad/data.js` (repo GitHub Pages) | Fuente maestra para los formularios web. Productos, recetas caldos, jarras, mezclas, preelaboraciones, materias primas (con código MP y proveedor), lotes. |
| 2 | **RIA_Datos_Maestros_v2.xlsx** | `/Downloads--Calidad/` y `/Documentos--Calidad/` | Excel maestra. Hojas: Productos, Ingredientes (con MP y proveedor), Proveedores, Lotes (todos los intermedios), Recetas Caldos, Recetas Salsas, Recetas Preelab., Formatos. |
| 3 | **RIA_Referencia_Etiquetas_SATO.xlsx** | `/IMPRESORA PRODUCTOS INTERMEDIOS/` | Datos para impresión de etiquetas SATO. Hojas: Caldos, Salsas, Preelaboraciones (incluye pesados, jarras, mezclas). Contiene ingredientes, prefijo lote, vida útil, conservación. |
| 4 | **Diagramas HTML** | `/calidad/dark_*.html` | Diagramas de flujo de producción. Cada nodo tiene data-c (código MP + proveedor), data-i (info), data-a (alérgenos). |
| 5 | **diagramas.html** | `/calidad/diagramas.html` | Índice/menú de todos los diagramas. Lista familias, productos, descripciones y lotes. |

### Checklist de coherencia (usar siempre que se haga un cambio)

Al añadir/modificar/eliminar un producto, materia prima o preelaboración:

1. **data.js**: ¿Está el producto/MP/preelaboración? ¿Código MP correcto? ¿Proveedor correcto? ¿Lote prefix correcto?
2. **Excel maestra (Ingredientes)**: ¿Tiene el código MP, proveedor, formato, conservación?
3. **Excel maestra (Lotes)**: ¿Está el lote con formato correcto (AAMMDD o DDMMAA)?
4. **Excel maestra (Proveedores)**: ¿Está el proveedor con sus códigos MP?
5. **SATO etiquetas**: ¿Tiene etiqueta? ¿Prefijo lote coincide? ¿Ingredientes y alérgenos correctos? ¿Vida útil correcta?
6. **Diagrama HTML correspondiente**: ¿Nodo con data-c correcto (MPxx — Proveedor)? ¿Sin lote/cad en MP? ¿Sin vida útil?
7. **diagramas.html (índice)**: ¿Aparece en la familia correcta con la descripción correcta?
8. **SKILL.md (este archivo)**: ¿Tablas de referencia actualizadas?

### Productos que NO tienen etiqueta SATO (pero sí están en data.js)

- Aceite de Gamba (MP44) — ELIMINADO, no se elabora
- Aceite de Trufa (MP47) — ELIMINADO, no se elabora
- Preparado Maestro (RIA-PREP-MAESTRO) — En data.js es un paso intermedio; en SATO se etiqueta como Mezcla Jarra Maestro (RIA-MEZCLA-JMAESTRO)

---

## FICHAS TÉCNICAS EN GOOGLE DRIVE

Pendiente de implementar: cada nodo de materia prima tendrá un enlace a su ficha técnica en Google Drive. El campo `fichaDrive` en data.js contiene la URL. No implementar todavía — se hará en una fase posterior.

---

## GIT

- Repositorio: `/sessions/confident-cool-maxwell/mnt/calidad` (GitHub Pages)
- Commits: usar flags `-c user.name="Cristina" -c user.email="cquerol2@gmail.com"`
- Mensajes en español
- Push: desde GitHub Desktop (no hacer push desde CLI)

---

## ORDEN DE INGREDIENTES EN DIAGRAMAS

Cuando se listan los ingredientes en el nodo de producto final (data-i), seguir siempre este orden:
1. Arroz (primero siempre)
2. Agua
3. Caldo (si existe)
4. Salsa (si existe)
5. Resto de ingredientes (jarra, mezcla jarra, sal, etc.)
6. Ingrediente extra (si All-Included)
7. Formatos al final

---

## CHECKLIST antes de crear/editar un diagrama

1. Leer data.js para confirmar: receta del caldo, ingredientes de jarras, códigos MP, proveedores
2. Verificar en produccion.html: ¿tiene caldo? ¿tiene salsa? ¿qué jarra usa?
3. Confirmar con Cristina si hay datos pendientes o dudosos
4. Usar los códigos de color correctos para cada tipo de nodo
5. No incluir lote/cad en MP, no incluir vida útil/almacenamiento en ningún nodo
6. Formato de lote correcto: AAMMDD para arroces, DDMMAA para preelaborados/salsas
7. Incluir proveedor en TODOS los nodos de materia prima
8. Verificar que los IDs de nodo son únicos
9. Comprobar que las flechas SVG conectan los nodos correctos
10. Probar que el panel lateral muestra la info correcta al hacer click
