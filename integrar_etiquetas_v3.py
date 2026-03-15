#!/usr/bin/env python3
"""
Integrate SATO label overlays into HTML diagrams (clean version).
Properly handles existing modifications.
"""

import os
import re

HTML_DIR = "/sessions/confident-cool-maxwell/mnt/calidad"

name_mapping = {
    'Caldo de Pescado': 'Caldo de Pescado',
    'Caldo Negro': 'Caldo Negro',
    'Caldo de Pollo': 'Caldo de Pollo',
    'Caldo de Verduras': 'Caldo de Verduras',
    'Caldo de Risotto': 'Caldo Risotto',
    'Salsa de Pescado': 'Salsa de Pescado',
    'Salsa Negra': 'Salsa Negra',
    'Salsa de Verduras': 'Salsa de Verduras',
    'Salsa de Pollo': 'Salsa de Pollo',
    'Salsa Tartufata': 'Salsa Tartufata',
    'Salsa de Boletus': 'Salsa de Setas',
    'Salsa de Setas': 'Salsa Boletus',
    'Salsa de Queso': 'Salsa Queso',
    'Salsa Iberico': 'Salsa Ibérico',
}

generated = {
    'Caldo de Pescado': 'caldo_de_pescado.svg',
    'Caldo Negro': 'caldo_negro.svg',
    'Caldo de Pollo': 'caldo_de_pollo.svg',
    'Caldo de Verduras': 'caldo_de_verduras.svg',
    'Caldo de Risotto': 'caldo_de_risotto.svg',
    'Salsa de Pescado': 'salsa_de_pescado.svg',
    'Salsa Negra': 'salsa_negra.svg',
    'Salsa de Verduras': 'salsa_de_verduras.svg',
    'Salsa de Pollo': 'salsa_de_pollo.svg',
    'Salsa Tartufata': 'salsa_tartufata.svg',
    'Salsa de Boletus': 'salsa_de_boletus.svg',
    'Salsa de Setas': 'salsa_de_setas.svg',
    'Salsa de Queso': 'salsa_de_queso.svg',
    'Salsa Iberico': 'salsa_iberico.svg',
}

diagram_products = {
    'dark_negro.html': [('Caldo Negro', 'Caldo Negro')],
    'dark_pescado.html': [('Caldo de Pescado', 'Caldo de Pescado')],
    'dark_pollo.html': [('Caldo de Pollo', 'Caldo de Pollo')],
    'dark_verduras.html': [('Caldo de Verduras', 'Caldo de Verduras')],
    'dark_risotto.html': [('Caldo de Risotto', 'Caldo Risotto')],
    'dark_cremoso_iberico.html': [
        ('Caldo de Risotto', 'Caldo Risotto'),
        ('Salsa Iberico', 'Salsa Ibérico'),
    ],
    'dark_cremoso_queso.html': [
        ('Caldo de Risotto', 'Caldo Risotto'),
        ('Salsa de Queso', 'Salsa Queso'),
    ],
    'dark_cremoso_setas.html': [
        ('Caldo de Risotto', 'Caldo Risotto'),
        ('Salsa de Setas', 'Salsa Boletus'),
    ],
    'dark_cremoso_tartufato.html': [
        ('Caldo de Risotto', 'Caldo Risotto'),
        ('Salsa Tartufata', 'Salsa Tartufata'),
    ],
    'dark_salsa_boletus.html': [('Salsa de Boletus', 'Salsa de Setas')],
    'dark_salsa_iberica.html': [('Salsa Iberico', 'Salsa Ibérica')],
    'dark_salsa_negra.html': [('Salsa Negra', 'Salsa Negra')],
    'dark_salsa_pescado.html': [('Salsa de Pescado', 'Salsa de Pescado')],
    'dark_salsa_pollo.html': [('Salsa de Pollo', 'Salsa de Pollo')],
    'dark_salsa_queso.html': [('Salsa de Queso', 'Salsa de Queso')],
    'dark_salsa_tartufata.html': [('Salsa Tartufata', 'Salsa Tartufata')],
    'dark_salsa_verduras.html': [('Salsa de Verduras', 'Salsa de Verduras')],
}

MODAL_HTML = '''
<!-- ════════════════════════════════════════════════════════════════ -->
<!-- SATO LABEL MODAL OVERLAY                                         -->
<!-- ════════════════════════════════════════════════════════════════ -->
<div id="labelModal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);z-index:1000;align-items:center;justify-content:center">
  <div style="position:relative;background:white;padding:30px;border-radius:12px;max-width:650px;width:95%;max-height:90vh;overflow:auto;box-shadow:0 15px 50px rgba(0,0,0,0.7)">
    <button id="labelClose" onclick="document.getElementById('labelModal').style.display='none'" style="position:absolute;top:12px;right:15px;background:none;border:none;font-size:28px;cursor:pointer;color:#999;font-weight:300">×</button>
    <div id="labelContent" style="margin-top:20px;text-align:center"></div>
  </div>
</div>

<style>
#labelModal { display: flex !important; }
.label-btn {
  display: inline-block;
  font-size: 13px;
  cursor: pointer;
  color: #fbbf24;
  text-decoration: none;
  margin-left: 6px;
  padding: 2px 4px;
  border-radius: 3px;
  transition: all 0.2s;
}
.label-btn:hover {
  color: #fcd34d;
  background: rgba(251, 191, 36, 0.1);
}
</style>

<script>
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('labelModal').style.display = 'none';
  }
});

function showLabel(etiquetaPath) {
  const modal = document.getElementById('labelModal');
  const content = document.getElementById('labelContent');

  fetch(etiquetaPath)
    .then(r => {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(svg => {
      content.innerHTML = svg;
      modal.style.display = 'flex';
    })
    .catch(err => {
      content.innerHTML = '<p style="color:#c00;font-size:14px">⚠ Error loading label: ' + err.message + '</p>';
      modal.style.display = 'flex';
    });
}

document.getElementById('labelModal').addEventListener('click', function(e) {
  if (e.target === this || e.target.id === 'labelClose') {
    this.style.display = 'none';
  }
});
</script>
'''


def clean_old_modifications(content):
    """Remove old modal and label buttons if present."""
    # Remove old modal
    content = re.sub(
        r'<!-- ═{50,}.*?SATO LABEL MODAL OVERLAY.*?</script>\s*',
        '',
        content,
        flags=re.DOTALL
    )

    # Remove old data-etiqueta attributes
    content = re.sub(r' data-etiqueta="[^"]*"', '', content)

    # Remove old label buttons from inside node divs
    # This is trickier - look for patterns like: <span class="label-btn"...></span>
    content = re.sub(
        r' <span class="label-btn"[^>]*>[^<]*</span>',
        '',
        content
    )

    return content


def integrate_labels(diagram_products, generated):
    """Add label layer to HTML diagrams."""

    for html_file, products_list in diagram_products.items():
        html_path = os.path.join(HTML_DIR, html_file)
        if not os.path.exists(html_path):
            print(f"⚠ HTML file not found: {html_file}")
            continue

        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Clean old modifications
        content = clean_old_modifications(content)

        # Add modal before </body>
        body_close_idx = content.rfind('</body>')
        if body_close_idx == -1:
            print(f"⚠ No closing body tag in {html_file}")
            continue

        content = content[:body_close_idx] + MODAL_HTML + '\n' + content[body_close_idx:]

        # Update each product node with label
        modified_count = 0
        for excel_name, html_name in products_list:
            if excel_name not in generated:
                print(f"⚠ No generated SVG for {excel_name}")
                continue

            etiqueta_file = generated[excel_name]
            etiqueta_path = f'etiquetas/{etiqueta_file}'

            # Find the node div with this product name
            pattern = f'data-n="{re.escape(html_name)}"'
            matches = list(re.finditer(pattern, content))

            if not matches:
                print(f"  ⚠ Product node not found: {html_name} in {html_file}")
                continue

            # Process from end to beginning to preserve indices
            for match in reversed(matches):
                start_idx = content.rfind('<div', 0, match.start())
                if start_idx == -1:
                    continue

                end_idx = content.find('</div>', match.end())
                if end_idx == -1:
                    continue

                node_start = start_idx
                node_end = end_idx + 6
                node_html = content[node_start:node_end]

                # Add data-etiqueta attribute
                div_close = node_html.find('>')
                if div_close != -1 and 'data-etiqueta' not in node_html:
                    node_html = (
                        node_html[:div_close] +
                        f' data-etiqueta="{etiqueta_path}"' +
                        node_html[div_close:]
                    )

                # Add label button before closing </div>
                label_button = f' <span class="label-btn" onclick="showLabel(\'{etiqueta_path}\')">🏷️ Etiqueta</span>'
                if '</div>' in node_html:
                    node_html = node_html.replace('</div>', label_button + '</div>', 1)

                content = content[:node_start] + node_html + content[node_end:]
                modified_count += 1

        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(content)

        if modified_count > 0:
            print(f"✓ Updated: {html_file} ({modified_count} products)")
        else:
            print(f"ℹ {html_file} (modal added, no product nodes)")


def main():
    print("Integrating SATO labels into HTML diagrams (v3 - clean)...\n")
    integrate_labels(diagram_products, generated)
    print("\n✓ Done!")


if __name__ == '__main__':
    main()
