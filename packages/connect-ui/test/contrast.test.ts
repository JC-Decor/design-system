import { brand, darkTones, ramps, semantic, tones } from '../src/theme/tokens';

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a: string, b: string) {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
}

/**
 * Pares texto/fundo do DS Connect — WCAG AA: 4,5 (texto).
 * Bordas de campo (--line / --line-2) seguem o visual original do Connect e são decorativas (< 3:1);
 * o estado de foco (anel primary-soft + borda navy) é o indicador acessível.
 */
const pairs: [string, string, string, number][] = [
  ['texto (ink)', semantic.light.text, semantic.light.surface, 4.5],
  ['texto-2 (ink-2)', semantic.light.text2, semantic.light.surface, 4.5],
  ['texto-3 (muted)', semantic.light.text3, semantic.light.surface, 4.5],
  ['texto-3 sobre fundo da página', semantic.light.text3, semantic.light.bg, 4.5],
  ['botão primário', '#FFFFFF', brand.navy, 4.5],
  ['link', semantic.light.link, semantic.light.surface, 4.5],
  ['filled lavender', '#FFFFFF', ramps.lavender[600], 4.5],
  ['filled blue', '#FFFFFF', ramps.blue[600], 4.5],
  ['filled green', '#FFFFFF', ramps.green[600], 4.5],
  ['filled coral', '#FFFFFF', ramps.coral[600], 4.5],
  ['filled yellow (texto âmbar 900)', ramps.yellow[900], ramps.yellow[400], 4.5],
  ...(Object.entries(tones).map(([name, t]) => [`tom ${name} (texto sobre bg)`, t.fg, t.bg, 4.5]) as [string, string, string, number][]),
  ...(Object.entries(tones).map(([name, t]) => [`tom ${name} (texto sobre soft)`, t.fg, t.soft, 4.5]) as [string, string, string, number][]),
  ['escuro: texto', semantic.dark.text, semantic.dark.surface, 4.5],
  ['escuro: texto-2', semantic.dark.text2, semantic.dark.surface, 4.5],
  ['escuro: texto-3', semantic.dark.text3, semantic.dark.surface, 4.5],
  ['escuro: primário', semantic.dark.primary, semantic.dark.bg, 4.5],
  ['escuro: texto em botão primário', brand.ink, ramps.navy[300], 4.5],
  ...(Object.entries(darkTones).map(([name, t]) => [`escuro: tom ${name} sobre superfície`, t.fg, semantic.dark.surface, 4.5]) as [string, string, string, number][]),
];

describe('contraste WCAG AA dos tokens', () => {
  it.each(pairs)('%s', (_name, fg, bg, min) => {
    expect(contrast(fg, bg)).toBeGreaterThanOrEqual(min);
  });
});

describe('texto ink sobre fills no tema escuro (tom 300)', () => {
  it.each(['navy', 'lavender', 'blue', 'green', 'yellow', 'coral', 'gray'] as const)('%s.3', (color) => {
    expect(contrast(brand.ink, ramps[color][300])).toBeGreaterThanOrEqual(4.5);
  });
});
