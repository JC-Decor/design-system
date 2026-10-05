/**
 * Lista os exemplos `*.demo.tsx` que ainda não têm a versão `*.demo.vue` ao lado.
 *   node scripts/vue-coverage.mjs            → resumo + faltantes
 *   node scripts/vue-coverage.mjs <pasta>    → só as pastas que começam com <pasta> (ex.: tag, chat-)
 */
import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../src/demos/', import.meta.url).pathname;
const filter = process.argv[2] ?? '';
const missing = [];
let total = 0;
for (const dir of readdirSync(root).filter((d) => d.startsWith(filter))) {
  for (const file of readdirSync(join(root, dir)).filter((f) => f.endsWith('.demo.tsx'))) {
    total++;
    if (!existsSync(join(root, dir, file.replace('.demo.tsx', '.demo.vue')))) missing.push(`${dir}/${file.replace('.demo.tsx', '')}`);
  }
}
console.log(`Exemplos Vue: ${total - missing.length}/${total}`);
if (missing.length) console.log(missing.join('\n'));
process.exitCode = missing.length ? 1 : 0;
