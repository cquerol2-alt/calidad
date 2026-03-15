================================================================================
CROSS-REFERENCE AUDIT — FILE MANIFEST
================================================================================

This directory contains a complete audit of the cross-ref.js file against all
18 production flow diagrams (dark_*.html files).

FILES GENERATED
================================================================================

1. AUDIT_SUMMARY.txt
   Executive summary with critical findings, root cause analysis, and
   recommended immediate actions. Start here for overview.
   
   • Risk assessment: HIGH
   • Coverage: Only 4.3% complete
   • 4 completely missing nodes
   • 90 nodes with incomplete mappings
   
2. AUDIT_CROSS_REF_REPORT.txt
   Detailed node-by-node report showing:
   • Category 1: All nodes missing from presenteEn (4 entries)
   • Category 2: All nodes with incomplete presenteEn (90 entries)
   • Category 3: Orphaned presenteEn entries (0 found - good news)
   
   Each entry shows:
   - Node ID, name, and diagrams it appears in
   - Which diagrams are missing from presenteEn
   
3. AUDIT_CROSS_REF.json
   Machine-readable JSON format with structured data suitable for:
   • Automated validation scripts
   • CI/CD pipeline integration
   • Data processing and analysis
   • Git hooks for preventing regressions
   
   Structure:
   {
     "summary": {...},
     "missing_from_presente_en": [{...}],
     "incomplete_mappings": [{...}],
     "all_diagrams_checked": [...]
   }

LOCATION OF SOURCE FILES
================================================================================

Diagrams audited (18 files):
  /sessions/confident-cool-maxwell/mnt/calidad/dark_*.html

  - dark_pescado.html
  - dark_negro.html
  - dark_pollo.html
  - dark_verduras.html
  - dark_risotto.html
  - dark_cremoso_iberico.html
  - dark_cremoso_queso.html
  - dark_cremoso_setas.html
  - dark_cremoso_tartufato.html
  - dark_maestro.html
  - dark_salsa_boletus.html
  - dark_salsa_iberica.html
  - dark_salsa_negra.html
  - dark_salsa_pescado.html
  - dark_salsa_pollo.html
  - dark_salsa_queso.html
  - dark_salsa_tartufata.html
  - dark_salsa_verduras.html

Cross-reference file audited:
  /sessions/confident-cool-maxwell/mnt/calidad/cross-ref.js
  (JavaScript object: CROSS_REF.presenteEn)


KEY STATISTICS
================================================================================

Nodes Found in Diagrams:    94
PresenteEn Entries:         90
Nodes Missing Completely:   4
Nodes with Gaps:            90
Orphaned Entries:           0

Data Integrity:             CRITICAL
Most Affected Node Type:    Packaging (mpFilm, mpBand)
Most Affected Diagram Type: Sauce diagrams (dark_salsa_*)


AUDIT METHODOLOGY
================================================================================

1. Extracted all node IDs from <div class="node" id="..."> elements
   across all 18 HTML diagram files

2. Compared extracted IDs against 'presenteEn' entries in cross-ref.js

3. Identified three categories of discrepancies:
   a. Nodes in diagrams but missing from presenteEn (missing entries)
   b. Nodes in presenteEn missing some diagrams (incomplete mappings)
   c. Orphaned presenteEn entries not in any diagram (data integrity)

4. Generated detailed reports for each category with context


NEXT STEPS (PRIORITY ORDER)
================================================================================

TIER 1 — IMMEDIATE (Blocking):
  1. Add presenteEn entries for 4 missing nodes:
     - mpAromaQ
     - prod
     - prodRis
     - salsa
  2. Map each to ALL diagrams where they appear

TIER 2 — HIGH PRIORITY (24 hours):
  1. Fix incomplete mappings for high-impact nodes:
     - mpFilm (18 diagrams)
     - mpSal (16 diagrams)
     - mpBand (10 diagrams)
     - mpArr (10 diagrams)
     - mpAg (11 diagrams)
  2. Update all 90 affected entries

TIER 3 — VALIDATION (48 hours):
  1. Create automated validation test
  2. Run against all 18 diagrams
  3. Document any edge cases

TIER 4 — PREVENTIVE (Ongoing):
  1. Add to QA checklist before any diagram update
  2. Integrate JSON validation into git hooks
  3. Create dashboard to monitor coverage rate


AUDIT COMMAND
================================================================================

If you need to re-run this audit:

  python3 << 'PYTHON'
  import re
  from pathlib import Path
  from collections import defaultdict
  
  # Extract nodes from HTML files
  calidad_dir = Path("/sessions/confident-cool-maxwell/mnt/calidad")
  html_files = sorted(calidad_dir.glob("dark_*.html"))
  
  nodes_in_diagrams = defaultdict(set)
  node_pattern = re.compile(
    r'<div[^>]*class="node[^"]*"[^>]*id="([^"]*)"[^>]*>.*?</div>',
    re.DOTALL
  )
  
  for html_file in html_files:
    content = html_file.read_text(encoding='utf-8')
    matches = node_pattern.findall(content)
    for node_id in matches:
      nodes_in_diagrams[node_id].add(html_file.name)
  
  # Compare with cross-ref.js presenteEn
  # (see AUDIT_CROSS_REF.json for structure)
  
  PYTHON


QUESTIONS?
================================================================================

For detailed information on any node or diagram, consult:
  1. AUDIT_CROSS_REF_REPORT.txt (full details)
  2. AUDIT_CROSS_REF.json (structured data)
  3. Source diagrams in /calidad/dark_*.html

Contact: APPCC Quality Team

================================================================================
