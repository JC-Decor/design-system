import type { CSSVariablesResolver } from '@mantine/core';
import { brand, chartColors, darkTones, density, feedback, fontFamily, fontFamilyMonospace, motion, radius, ramps, semantic, spacing, tones, typography, type ToneName } from './tokens';

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

function schemeVars(s: (typeof semantic)['light'] | (typeof semantic)['dark']) {
  return {
    '--ds-bg': s.bg,
    '--ds-surface': s.surface,
    '--ds-surface-2': s.surface2,
    '--ds-surface-tint': s.surfaceTint,
    '--ds-text': s.text,
    '--ds-text-2': s.text2,
    '--ds-text-3': s.text3,
    '--ds-text-4': s.text4,
    '--ds-border': s.border,
    '--ds-border-soft': s.borderSoft,
    '--ds-primary': s.primary,
    '--ds-primary-hover': s.primaryHover,
    '--ds-primary-soft': s.primarySoft,
    '--ds-primary-tint': s.primaryTint,
    '--ds-accent': s.accent,
    '--ds-link': s.link,
    '--ds-success-bg': s.successBg,
    '--ds-warn-bg': s.warnBg,
    '--ds-error-bg': s.errorBg,
    '--ds-overlay': s.overlay,
    '--ds-focus-ring': s.focusRing,
    '--ds-shadow-sm': s.shadowSm,
    '--ds-shadow-md': s.shadowMd,
    '--ds-shadow-lg': s.shadowLg,

    // Variáveis semânticas do Mantine apontando para os tokens do Connect
    '--mantine-color-body': s.bg,
    '--mantine-color-text': s.text,
    '--mantine-color-dimmed': s.text3,
    '--mantine-color-default': s.surface,
    '--mantine-color-default-hover': s.surface2,
    '--mantine-color-default-border': s.borderSoft,
    '--mantine-color-anchor': s.link,
    '--mantine-color-error': feedback.error,
    '--mantine-color-success': feedback.success,
  };
}

/** Variáveis independentes de tema: paleta crua, tipografia, spacing, raios e movimento (`--cn-*`, `--type-*`, `--sp-*`). */
function staticVars() {
  const vars: Record<string, string> = {
    '--font-body': fontFamily,
    '--font-mono': fontFamilyMonospace,
    '--ds-radius': radius.md,
    '--ds-radius-sm': radius.sm,
    '--ds-radius-lg': radius.lg,
    '--ds-radius-xs': radius.xs,
    '--grid-gap': '20px',
    '--grid-margin': '28px',
    '--grid-max': '1440px',
    '--cn-pad': density.regular,
    '--cn-t': `${motion.normal} ${motion.easeStandard}`,
    '--cn-t-slow': `${motion.slow} ${motion.easeStandard}`,
    '--cn-ease-emphasis': motion.easeEmphasis,
    // Tamanho dos painéis/modais grandes (ContextualDrawer, FormModal): folga em volta e área útil
    '--cn-overlay-gap': 'min(4vw, 48px)',
    '--cn-overlay-w': 'calc(100dvw - 2 * var(--cn-overlay-gap))',
    '--cn-overlay-h': 'calc(100dvh - 2 * var(--cn-overlay-gap))',
  };
  (Object.keys(brand) as (keyof typeof brand)[]).forEach((name) => {
    vars[`--cn-${name}`] = brand[name];
  });
  (Object.keys(ramps) as (keyof typeof ramps)[]).forEach((name) => {
    Object.entries(ramps[name]).forEach(([step, hex]) => {
      vars[`--cn-${name}-${step}`] = hex;
    });
  });
  Object.entries(typography).forEach(([name, t]) => {
    vars[`--type-${kebab(name)}`] = t.size;
  });
  Object.entries(spacing).forEach(([step, value]) => {
    vars[`--sp-${step}`] = value;
  });
  return vars;
}

/** Tons (`--cn-tone-<tom>-bg|fg|soft`): fundos pastel + texto escuro do tom no claro; translúcidos + texto claro no escuro. */
const toneVars = (scheme: 'light' | 'dark') =>
  Object.fromEntries(
    (Object.keys(tones) as ToneName[]).flatMap((tone) => {
      const t = scheme === 'light' ? tones[tone] : darkTones[tone];
      return [
        [`--cn-tone-${tone}-bg`, t.bg],
        [`--cn-tone-${tone}-fg`, t.fg],
        [`--cn-tone-${tone}-soft`, t.soft],
      ];
    }),
  );

/**
 * O Mantine deriva `--mantine-color-<cor>-light*` (usadas por subtle, light, Alert, ThemeIcon, Badge…)
 * da rampa crua. Apontamos para os tons do Connect: fundo = bg do tom, texto = fg do tom.
 */
const LIGHT_TONES: Record<string, ToneName | 'primary'> = {
  navy: 'primary', indigo: 'primary',
  lavender: 'lavender', violet: 'lavender', grape: 'lavender',
  blue: 'blue', cyan: 'blue',
  green: 'green', teal: 'green', lime: 'green',
  yellow: 'yellow', orange: 'yellow',
  coral: 'coral', red: 'coral', pink: 'coral',
  gray: 'ink', ink: 'ink', dark: 'ink',
};
const lightColorVars = Object.fromEntries(
  Object.entries(LIGHT_TONES).flatMap(([color, tone]) =>
    tone === 'primary'
      ? [
          [`--mantine-color-${color}-light`, 'var(--ds-primary-soft)'],
          [`--mantine-color-${color}-light-hover`, 'var(--ds-primary-tint)'],
          [`--mantine-color-${color}-light-color`, 'var(--ds-primary)'],
        ]
      : [
          [`--mantine-color-${color}-light`, `var(--cn-tone-${tone}-bg)`],
          [`--mantine-color-${color}-light-hover`, `color-mix(in srgb, var(--cn-tone-${tone}-bg), var(--cn-tone-${tone}-fg) 8%)`],
          [`--mantine-color-${color}-light-color`, `var(--cn-tone-${tone}-fg)`],
        ],
  ),
);

/** Selos/pills (`--ds-tag-*`, mesmos nomes do DS JC Decor usados pelos overrides de combobox/pill): apontam para os tons do Connect. */
const TAG_TONES = { primary: null, neutral: 'ink', success: 'green', warn: 'yellow', error: 'coral' } as const;
const tagVars = Object.fromEntries(
  Object.entries(TAG_TONES).flatMap(([tag, tone]) =>
    tone === null
      ? [
          ['--ds-tag-primary-bg', 'var(--ds-primary-soft)'],
          ['--ds-tag-primary-hover', 'var(--ds-primary-tint)'],
          ['--ds-tag-primary-color', 'var(--ds-primary)'],
        ]
      : [
          [`--ds-tag-${tag}-bg`, `var(--cn-tone-${tone}-bg)`],
          [`--ds-tag-${tag}-hover`, `color-mix(in srgb, var(--cn-tone-${tone}-bg), var(--cn-tone-${tone}-fg) 8%)`],
          [`--ds-tag-${tag}-color`, `var(--cn-tone-${tone}-fg)`],
        ],
  ),
);

const chartVars =(colors: readonly string[]) => Object.fromEntries(colors.map((color, i) => [`--cn-chart-${i + 1}`, color]));

export const connectCssVariablesResolver: CSSVariablesResolver = () => ({
  variables: staticVars(),
  light: {
    ...schemeVars(semantic.light),
    ...toneVars('light'),
    ...chartVars(chartColors.light),
    ...lightColorVars,
    ...tagVars,
    '--ds-success': feedback.success,
    '--ds-warn': feedback.warn,
    '--ds-error': feedback.error,
    '--cn-on-filled': '#FFFFFF',
    '--mantine-primary-color-contrast': '#FFFFFF',
    // Sombra colorida do botão primário (.btn-primary do Connect)
    '--cn-btn-shadow': '0 1px 0 rgba(255,255,255,.18) inset, 0 8px 18px rgba(7,1,107,.22)',
    '--cn-btn-shadow-hover': '0 1px 0 rgba(255,255,255,.18) inset, 0 12px 24px rgba(7,1,107,.32)',
    '--cn-tooltip-bg': semantic.light.text,
    '--cn-header-bg': 'rgba(255,255,255,.72)',
  },
  dark: {
    ...schemeVars(semantic.dark),
    ...toneVars('dark'),
    ...chartVars(chartColors.dark),
    ...lightColorVars,
    ...tagVars,
    '--ds-success': ramps.green[300],
    '--ds-warn': ramps.yellow[300],
    '--ds-error': ramps.coral[300],
    // fills no escuro usam o tom 300 (claro): texto ink
    '--cn-on-filled': brand.ink,
    '--mantine-primary-color-contrast': brand.ink,
    '--cn-btn-shadow': '0 8px 18px rgba(0,0,0,.35)',
    '--cn-btn-shadow-hover': '0 12px 24px rgba(0,0,0,.45)',
    '--cn-tooltip-bg': '#0F172A',
    '--cn-header-bg': 'rgba(15,23,42,.82)',
    '--mantine-color-error': ramps.coral[300],
    '--mantine-color-success': ramps.green[300],
  },
});
