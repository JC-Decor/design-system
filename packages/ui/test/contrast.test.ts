import { brand, ramps, semantic } from '../src/theme/tokens';

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

/** Pares texto/fundo do DS — WCAG AA: 4,5 (texto) · 3 (componentes/bordas). */
const pairs: [string, string, string, number][] = [
  ['texto', semantic.light.text, semantic.light.surface, 4.5],
  ['texto-2', semantic.light.text2, semantic.light.surface, 4.5],
  ['texto-3', semantic.light.text3, semantic.light.surface, 4.5],
  ['texto-3 sobre fundo da página', semantic.light.text3, semantic.light.bg, 4.5],
  ['borda de campo', semantic.light.border, semantic.light.surface, 3],
  ['botão primário', '#FFFFFF', ramps.horizon[600], 4.5],
  ['link', semantic.light.link, semantic.light.surface, 4.5],
  ['accent (navy sobre electric)', brand.obsidian, brand.electric, 4.5],
  ['sucesso', '#FFFFFF', ramps.evergreen[600], 4.5],
  ['erro', '#FFFFFF', ramps.danger[600], 4.5],
  ['tag primária', ramps.horizon[700], ramps.horizon[50], 4.5],
  ['tag sucesso', ramps.evergreen[700], ramps.evergreen[50], 4.5],
  ['tag atenção', ramps.electric[700], ramps.electric[50], 4.5],
  ['tag erro', ramps.danger[700], ramps.danger[50], 4.5],
  ['banner horizon (branco)', '#FFFFFF', ramps.horizon[700], 4.5],
  ['banner horizon (destaque)', brand.electric, ramps.horizon[700], 4.5],
  ['escuro: texto', semantic.dark.text, semantic.dark.surface, 4.5],
  ['escuro: texto-2', semantic.dark.text2, semantic.dark.surface, 4.5],
  ['escuro: texto-3', semantic.dark.text3, semantic.dark.surface, 4.5],
  ['escuro: primário', semantic.dark.primary, semantic.dark.bg, 4.5],
  ['escuro: texto em botão primário', brand.obsidian, ramps.horizon[400], 4.5],
];

describe('contraste WCAG AA dos tokens', () => {
  it.each(pairs)('%s', (_name, fg, bg, min) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(min);
  });
});

describe('texto sobre fills no tema escuro (tom 400 + navy)', () => {
  it.each(['horizon', 'evergreen', 'danger', 'obsidian', 'gray'] as const)('%s.4', (color) => {
    expect(contrast(brand.obsidian, ramps[color][400])).toBeGreaterThanOrEqual(4.5);
  });
});
