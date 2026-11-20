// Generic webfont subsetter for the name-brand fonts.
// Usage: node scripts/subset-font.mjs <source.ttf|otf> <characters> <output.woff2>
// Licenses of the sources used so far all permit modification/subsetting
// (SIL OFL 1.1 for LXGW WenKai; Taiwan Open Gov Data License for CNS11643).
import fs from 'node:fs';
import subsetFont from 'subset-font';

const [src, chars, out] = process.argv.slice(2);
if (!src || !chars || !out) {
  console.error('usage: node scripts/subset-font.mjs <source.ttf> <characters> <output.woff2>');
  process.exit(1);
}
const font = fs.readFileSync(src);
const woff2 = await subsetFont(font, chars, { targetFormat: 'woff2' });
fs.writeFileSync(out, woff2);
console.log(`wrote ${out}: ${(woff2.length / 1024).toFixed(1)} kB for [${chars}]`);
