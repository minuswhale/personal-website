// Subsets the CNS11643 說文解字 (seal script) font to the name glyphs
// and writes a tiny woff2 for the nav brand. Source font must be at
// /tmp/sealfont/ebas927.ttf (downloaded from cns11643.gov.tw,
// Taiwan Open Government Data License 1.0 — derivatives allowed).
import fs from 'node:fs';
import subsetFont from 'subset-font';

const SRC = process.argv[2];
const OUT = 'public/fonts/seal-name.woff2';
const CHARS = '苏睿闻蘇聞';

const ttf = fs.readFileSync(SRC);
const woff2 = await subsetFont(ttf, CHARS, { targetFormat: 'woff2' });
fs.writeFileSync(OUT, woff2);
console.log(`wrote ${OUT}: ${(woff2.length / 1024).toFixed(1)} kB for [${CHARS}]`);

// Report per-glyph coverage: subset each char alone and compare presence
for (const ch of CHARS) {
  const one = await subsetFont(ttf, ch, { targetFormat: 'woff2' });
  console.log(`  ${ch}: ${one.length > 300 ? 'present' : 'MISSING'}`);
}
