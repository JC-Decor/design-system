/**
 * Copia de `packages/ui/src` os arquivos que não dependem de framework (tokens, formatação,
 * CSS modules, caminhos SVG da marca, utilitários do chat) para o mesmo caminho em `packages/vue/src`.
 * Assim React e Vue têm uma única fonte da verdade para cores, tipografia e visual.
 *
 *   node scripts/sync-shared.mjs          → copia
 *   node scripts/sync-shared.mjs --check  → só verifica (sai com erro se algum arquivo divergiu)
 *
 * O teste `test/shared.test.ts` roda a verificação junto com `npm test`.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const uiSrc = resolve(root, '../ui/src');
const vueSrc = resolve(root, 'src');

export const SHARED_FILES = [
  'theme/tokens.ts',
  'utils/format.ts',
  'styles/global.css',
  'theme/components/buttons.module.css',
  'theme/components/combobox.module.css',
  'theme/components/dataDisplay.module.css',
  'theme/components/feedback.module.css',
  'theme/components/inputs.module.css',
  'theme/components/layout.module.css',
  'theme/components/misc.module.css',
  'theme/components/navigation.module.css',
  'theme/components/overlays.module.css',
  'theme/components/typography.module.css',
  'components/ContentCard/ContentCard.module.css',
  'components/DataTable/DataTable.module.css',
  'components/KpiCard/KpiCard.module.css',
  'components/ProductCard/ProductCard.module.css',
  'components/PromoBanner/PromoBanner.module.css',
  'components/TokenSwatch/TokenSwatch.module.css',
  'components/TopNav/TopNav.module.css',
  'brand/paths.ts',
  'brand/Brand.module.css',
  'chat/Chat.module.css',
  'chat/types.ts',
  'chat/utils.ts',
];

const notice = (file) => `sincronizado de packages/ui/src/${file} — edite lá e rode \`npm run sync -w @jcdecor/vue\``;

export function expected(file) {
  const source = readFileSync(resolve(uiSrc, file), 'utf8');
  const header = file.endsWith('.css') ? `/* @generated ${notice(file)} */\n` : `// @generated ${notice(file)}\n`;
  return header + source;
}

export function outdated() {
  return SHARED_FILES.filter((file) => {
    const target = resolve(vueSrc, file);
    return !existsSync(target) || readFileSync(target, 'utf8') !== expected(file);
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--check')) {
    const stale = outdated();
    if (stale.length) {
      console.error(`Arquivos compartilhados desatualizados (rode npm run sync -w @jcdecor/vue):\n  ${stale.join('\n  ')}`);
      process.exit(1);
    }
    console.log('Arquivos compartilhados em dia.');
  } else {
    for (const file of SHARED_FILES) {
      const target = resolve(vueSrc, file);
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, expected(file));
    }
    console.log(`${SHARED_FILES.length} arquivos sincronizados de packages/ui/src.`);
  }
}
