import type { CSSVariablesResolver } from '@mantine-vue/core';
import { brand, chartColors, feedback, ramps, semantic, spacing, typography } from './tokens';

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

function schemeVars(s: (typeof semantic)['light'] | (typeof semantic)['dark']) {
  return {
    '--ds-bg': s.bg,
    '--ds-surface': s.surface,
    '--ds-surface-2': s.surface2,
    '--ds-text': s.text,
    '--ds-text-2': s.text2,
    '--ds-text-3': s.text3,
    '--ds-border': s.border,
    '--ds-border-soft': s.borderSoft,
    '--ds-primary': s.primary,
    '--ds-primary-hover': s.primaryHover,
    '--ds-primary-soft': s.primarySoft,
    '--ds-accent': s.accent,
    '--ds-link': s.link,
    '--ds-success-bg': s.successBg,
    '--ds-warn-bg': s.warnBg,
    '--ds-error-bg': s.errorBg,
    '--ds-shadow-sm': s.shadowSm,
    '--ds-shadow-md': s.shadowMd,
    '--ds-shadow-lg': s.shadowLg,

    // Variáveis semânticas do Mantine apontando para os tokens da marca
    '--mantine-color-body': s.bg,
    '--mantine-color-text': s.text,
    '--mantine-color-dimmed': s.text3,
    '--mantine-color-default': s.surface,
    '--mantine-color-default-hover': s.surface2,
    '--mantine-color-default-border': s.border,
    '--mantine-color-anchor': s.link,
    '--mantine-color-error': feedback.error,
    '--mantine-color-success': feedback.success,
  };
}

/** Variáveis independentes de tema: paleta crua, tipografia e spacing (`--dc-*`, `--type-*`, `--sp-*`). */
function staticVars() {
  const vars: Record<string, string> = {
    '--font-body': "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif",
    '--ds-radius': '12px',
    '--ds-radius-sm': '8px',
    '--ds-radius-lg': '16px',
    '--grid-gap': '24px',
    '--grid-margin': '64px',
    '--grid-max': '1224px',
  };
  (Object.keys(brand) as (keyof typeof brand)[]).forEach((name) => {
    vars[`--dc-${name}`] = brand[name];
  });
  (Object.keys(ramps) as (keyof typeof ramps)[]).forEach((name) => {
    Object.entries(ramps[name]).forEach(([step, hex]) => {
      vars[`--dc-${name}-${step}`] = hex;
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

/** Selos/tags (variante `light`): fundo 50 + texto 700 da mesma cor (≥ 6:1). */
const tagVars = {
  light: {
    '--ds-tag-primary-bg': ramps.horizon[50],
    '--ds-tag-primary-hover': ramps.horizon[100],
    '--ds-tag-primary-color': ramps.horizon[700],
    '--ds-tag-success-bg': ramps.evergreen[50],
    '--ds-tag-success-hover': ramps.evergreen[100],
    '--ds-tag-success-color': ramps.evergreen[700],
    '--ds-tag-warn-bg': ramps.electric[50],
    '--ds-tag-warn-hover': ramps.electric[100],
    '--ds-tag-warn-color': ramps.electric[700],
    '--ds-tag-error-bg': ramps.danger[50],
    '--ds-tag-error-hover': ramps.danger[100],
    '--ds-tag-error-color': ramps.danger[700],
    '--ds-tag-neutral-bg': ramps.gray[100],
    '--ds-tag-neutral-hover': ramps.gray[200],
    '--ds-tag-neutral-color': ramps.gray[700],
  },
  dark: {
    '--ds-tag-primary-bg': 'rgba(110,159,255,.14)',
    '--ds-tag-primary-hover': 'rgba(110,159,255,.22)',
    '--ds-tag-primary-color': ramps.horizon[300],
    '--ds-tag-success-bg': 'rgba(97,184,117,.14)',
    '--ds-tag-success-hover': 'rgba(97,184,117,.22)',
    '--ds-tag-success-color': ramps.evergreen[300],
    '--ds-tag-warn-bg': 'rgba(247,215,89,.12)',
    '--ds-tag-warn-hover': 'rgba(247,215,89,.2)',
    '--ds-tag-warn-color': ramps.electric[200],
    '--ds-tag-error-bg': 'rgba(255,108,90,.14)',
    '--ds-tag-error-hover': 'rgba(255,108,90,.22)',
    '--ds-tag-error-color': ramps.danger[300],
    '--ds-tag-neutral-bg': semantic.dark.surface2,
    '--ds-tag-neutral-hover': semantic.dark.border,
    '--ds-tag-neutral-color': semantic.dark.text2,
  },
};

/**
 * O Mantine deriva `--mantine-color-<cor>-light*` (usadas por subtle, transparent, light, Alert, ThemeIcon…)
 * da rampa crua — no escuro isso gera texto quase branco e hovers estranhos. Apontamos para os tokens de tag.
 */
const LIGHT_TONES: Record<string, string> = {
  horizon: 'primary', blue: 'primary',
  evergreen: 'success', green: 'success', teal: 'success',
  electric: 'warn', yellow: 'warn',
  danger: 'error', red: 'error',
  obsidian: 'neutral', indigo: 'neutral', gray: 'neutral', dark: 'neutral',
};
const lightColorVars = Object.fromEntries(
  Object.entries(LIGHT_TONES).flatMap(([color, tone]) => [
    [`--mantine-color-${color}-light`, `var(--ds-tag-${tone}-bg)`],
    [`--mantine-color-${color}-light-hover`, `var(--ds-tag-${tone}-hover)`],
    [`--mantine-color-${color}-light-color`, `var(--ds-tag-${tone}-color)`],
  ]),
);

const chartVars = (colors: readonly string[]) =>
  Object.fromEntries(colors.map((color, i) => [`--jc-chart-${i + 1}`, color]));

export const jcCssVariablesResolver: CSSVariablesResolver = () => ({
  variables: staticVars(),
  light: {
    ...schemeVars(semantic.light),
    ...tagVars.light,
    ...chartVars(chartColors.light),
    ...lightColorVars,
    '--ds-success': feedback.success,
    '--ds-warn': feedback.warn,
    '--ds-error': feedback.error,
    '--jc-on-filled': '#FFFFFF',
    '--mantine-primary-color-contrast': '#FFFFFF',
    // Marca: logo original (azul do logotipo) e ilustrações (navy-púrpura dos arquivos fonte)
    '--jc-logo-shield': '#0E36E3',
    '--jc-logo-letters': '#0E36E3',
    '--jc-logo-wordmark': '#0E36E3',
    '--jc-art-primary': '#2A2758',
    '--jc-art-ink': '#0C0C0C',
    '--jc-art-paper': '#FFFFFF',
  },
  dark: {
    ...schemeVars(semantic.dark),
    ...tagVars.dark,
    ...chartVars(chartColors.dark),
    ...lightColorVars,
    '--ds-success': ramps.evergreen[400],
    '--ds-warn': ramps.electric[300],
    '--ds-error': ramps.danger[400],
    // fills no escuro usam o tom 400 (claro): texto navy
    '--jc-on-filled': brand.obsidian,
    '--mantine-primary-color-contrast': brand.obsidian,
    // Marca no escuro: logo branco; ilustrações invertidas (traço claro, face em superfície)
    '--jc-logo-shield': '#FFFFFF',
    '--jc-logo-letters': '#FFFFFF',
    '--jc-logo-wordmark': '#FFFFFF',
    '--jc-art-primary': ramps.horizon[300],
    '--jc-art-ink': semantic.dark.text,
    '--jc-art-paper': semantic.dark.surface2,
    '--mantine-color-error': ramps.danger[400],
    '--mantine-color-success': ramps.evergreen[400],
  },
});
