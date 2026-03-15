# SATO Label Integration — User Guide

## Overview

All HTML production diagrams now include clickable **thermal label previews** for caldos and salsas. Click the label button (🏷️ Etiqueta) next to any product node to see a preview of its SATO thermal label.

## How to Use

### Step 1: Open a Diagram
Open any of the following HTML diagrams in your browser:
- Caldos: `dark_negro.html`, `dark_pescado.html`, `dark_pollo.html`, `dark_verduras.html`, `dark_risotto.html`
- Salsas: `dark_salsa_*.html`
- Cremosos: `dark_cremoso_*.html` (include both caldo + salsa)

### Step 2: Find the Label Button
Locate a caldo or salsa node in the diagram:
- **Caldos** appear as green boxes labeled "Caldo [Nombre]"
- **Salsas** appear as gray boxes labeled "Salsa [Nombre]"

Each node has a small button next to it: **🏷️ Etiqueta**

### Step 3: Click to Preview
Click the "🏷️ Etiqueta" button to open the label preview in a modal overlay.

### Step 4: View or Close
- **View Details**: Scroll through the label to see all sections (product name, ingredients, allergens, dates, batch code)
- **Close Modal**:
  - Press `Escape` key
  - Click the × button in the top-right corner
  - Click outside the modal (on the dark background)

## Label Contents

Each thermal label preview includes:

| Section | Description |
|---------|-------------|
| **PRODUCTO** | Product name (bold, large) |
| **INGREDIENTES** | Full ingredient list with allergens highlighted in **BOLD RED** |
| **CONSERVACIÓN** | Storage instructions (e.g., "Refrigeración 0-4°C") |
| **LOTE** | Batch code format: `RIA-[PREFIX]-DDMMYY` |
| **ELAB** | Elaboration date (today's date in DD/MM/YYYY format) |
| **CAD** | Expiration date (21 days from elaboration) |

## Allergen Highlighting

All allergens are marked in **BOLD RED** text in the ingredients list for easy identification:
- PESCADO
- APIO
- CRUSTÁCEOS
- MOLUSCOS
- LECHE
- SULFITOS
- And others as applicable

## File Structure

```
/calidad/
├── etiquetas/                    # SVG label files
│   ├── caldo_negro.svg
│   ├── caldo_de_pescado.svg
│   ├── salsa_tartufata.svg
│   └── ... (14 total)
├── dark_negro.html              # Updated diagrams
├── dark_cremoso_queso.html
├── dark_salsa_boletus.html
└── ... (17 total)
```

## Technical Details

- **Format**: SVG (Scalable Vector Graphics) — viewable in all modern browsers
- **Dimensions**: 400×800 units (40mm × 80mm thermal label size)
- **Data Source**: RIA_Referencia_Etiquetas_SATO.xlsx
- **Generation Date**: 2026-03-15
- **Integration Method**: Modal overlay with fetch API

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Label doesn't load | Check browser console for errors; ensure `etiquetas/` folder exists in same directory as HTML |
| Modal won't close | Try pressing Escape or clicking the × button in top-right |
| Allergens not highlighted | Verify SVG file generated correctly (allergens should be in ALL CAPS in source) |
| Button doesn't appear | Refresh page; check browser console for JavaScript errors |

## Regenerating Labels

To regenerate labels from Excel data (if data changes):

```bash
cd /calidad
python3 generar_etiquetas.py        # Generate SVG files
python3 integrar_etiquetas_v3.py    # Update HTML diagrams
```

## For Developers

### Adding New Products
1. Add product to RIA_Referencia_Etiquetas_SATO.xlsx (Caldos or Salsas sheet)
2. Run `generar_etiquetas.py` to create SVG
3. Run `integrar_etiquetas_v3.py` to add to diagrams

### Customizing Label Style
Edit SVG template in `generar_etiquetas.py`:
- Fonts: Modify `font-size`, `font-family`
- Colors: Change hex values (e.g., `#c00` for red allergens)
- Layout: Adjust `y_pos` coordinates for spacing
- Dimensions: Modify `width=400 height=800` variables

### Modal Styling
Edit CSS in `integrar_etiquetas_v3.py` `MODAL_HTML` section:
- `.label-btn { }` — Button appearance
- `#labelModal { }` — Modal background and positioning
- Colors, fonts, transitions can all be customized

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-03-15 | 1.0 | Initial release: 14 SVG labels, 17 HTML diagrams updated |

## Contact & Support

For questions or issues with label integration, refer to:
- `LABEL_INTEGRATION_SUMMARY.txt` — Detailed technical summary
- `generar_etiquetas.py` — Label generation source code
- `integrar_etiquetas_v3.py` — HTML integration source code
