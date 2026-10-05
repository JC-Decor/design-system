import {
  defaultVariantColorsResolver,
  parseThemeColor,
  type VariantColorsResolver,
} from '@mantine-vue/core';

/** Cores de "tag" (variante light) por família — variáveis definidas no cssVariablesResolver. */
const LIGHT_FAMILIES: Record<string, string> = {
  horizon: 'primary',
  blue: 'primary',
  evergreen: 'success',
  green: 'success',
  teal: 'success',
  electric: 'warn',
  yellow: 'warn',
  danger: 'error',
  red: 'error',
  obsidian: 'neutral',
  gray: 'neutral',
  dark: 'neutral',
};

/**
 * Resolver de variantes da marca:
 * - `accent`  → botão Destaque (fundo Electric, texto Obsidian)
 * - `outline` → hover usa o fundo suave da própria cor (ds-btn-secondary)
 * - `subtle` sem cor → Ghost (texto-2, hover surface-2)
 * - `light`   → selos/tags com as cores semânticas do ds.css
 */
export const jcVariantColorResolver: VariantColorsResolver = (input) => {
  const { variant, theme } = input;
  const colorName = input.color ?? theme.primaryColor;
  const parsed = parseThemeColor({ color: colorName, theme });
  const family = parsed.isThemeColor ? parsed.color : undefined;

  if (variant === 'accent') {
    return {
      background: 'var(--mantine-color-electric-3)',
      hover: 'color-mix(in oklch, var(--mantine-color-electric-3), var(--mantine-color-electric-4) 40%)',
      color: 'var(--mantine-color-obsidian-6)',
      hoverColor: 'var(--mantine-color-obsidian-6)',
      border: '1px solid transparent',
    };
  }

  // Electric "cheio" = amarelo da marca (tom 300) com texto navy, não o âmbar do tom 600.
  if (variant === 'filled' && (family === 'electric' || family === 'yellow') && parsed.shade === undefined) {
    return {
      background: 'var(--mantine-color-electric-3)',
      hover: 'color-mix(in oklch, var(--mantine-color-electric-3), var(--mantine-color-electric-4) 40%)',
      color: 'var(--mantine-color-obsidian-6)',
      hoverColor: 'var(--mantine-color-obsidian-6)',
      border: '1px solid transparent',
    };
  }

  // Filled em qualquer cor do tema: o Mantine calcula o contraste pelo tom do tema CLARO mesmo no escuro
  // (texto branco sobre o tom 400 = 2,6:1). --jc-on-filled é branco no claro e navy no escuro (≥ 4,6:1).
  if (variant === 'filled' && family && parsed.shade === undefined) {
    const base = defaultVariantColorsResolver(input);
    return { ...base, color: 'var(--jc-on-filled)', hoverColor: 'var(--jc-on-filled)' };
  }

  if (variant === 'outline') {
    const base = defaultVariantColorsResolver(input);
    const light = defaultVariantColorsResolver({ ...input, variant: 'light' });
    const isPrimary = !input.color || family === theme.primaryColor;
    return {
      ...base,
      hover: isPrimary ? 'var(--ds-primary-soft)' : light.background,
      color: isPrimary ? 'var(--ds-primary)' : base.color,
      border: isPrimary ? '1px solid var(--ds-primary)' : base.border,
    };
  }

  if (variant === 'subtle' && !input.color) {
    return {
      background: 'transparent',
      hover: 'var(--ds-surface-2)',
      color: 'var(--ds-text-2)',
      hoverColor: 'var(--ds-text)',
      border: '1px solid transparent',
    };
  }

  if (variant === 'light' && family && LIGHT_FAMILIES[family]) {
    const tone = LIGHT_FAMILIES[family];
    return {
      background: `var(--ds-tag-${tone}-bg)`,
      hover: `var(--ds-tag-${tone}-hover)`,
      color: `var(--ds-tag-${tone}-color)`,
      border: '1px solid transparent',
    };
  }

  return defaultVariantColorsResolver(input);
};
