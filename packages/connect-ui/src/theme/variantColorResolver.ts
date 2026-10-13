import {
  defaultVariantColorsResolver,
  parseThemeColor,
  type VariantColorsResolver,
} from '@mantine/core';

/**
 * Resolver de variantes do Connect (mesmos nomes do `<Btn kind>` original):
 * - `filled`  → primário navy (kind="primary")
 * - `ghost`   → superfície com borda --line (kind="ghost"); igual ao `default` do Mantine
 * - `outline` sem cor → contorno neutro --line-2, texto ink-2 (kind="outline"); com cor → contorno da cor
 * - `danger`  → coral #D94B36 com texto branco (kind="danger")
 * - `subtle` sem cor → texto ink-2, hover --bg-2
 * - `light`   → fundo/texto do tom (tags, chips ativos)
 */
export const connectVariantColorResolver: VariantColorsResolver = (input) => {
  const { variant, theme } = input;
  const colorName = input.color ?? theme.primaryColor;
  const parsed = parseThemeColor({ color: colorName, theme });
  const family = parsed.isThemeColor ? parsed.color : undefined;

  if (variant === 'ghost' || variant === 'default') {
    return {
      background: 'var(--ds-surface)',
      hover: 'var(--ds-surface-2)',
      color: 'var(--ds-text-2)',
      hoverColor: 'var(--ds-text)',
      border: '1px solid var(--ds-border-soft)',
    };
  }

  if (variant === 'danger') {
    return {
      background: 'var(--mantine-color-coral-5)',
      hover: 'var(--mantine-color-coral-6)',
      color: 'var(--mantine-color-white)',
      hoverColor: 'var(--mantine-color-white)',
      border: '1px solid transparent',
    };
  }

  // Filled: no escuro o tom 3 é claro, então o texto vira ink (--cn-on-filled); amarelo sempre com texto escuro.
  if (variant === 'filled' && family && parsed.shade === undefined) {
    const base = defaultVariantColorsResolver(input);
    if (family === 'yellow' || family === 'orange') {
      // Amarelo "cheio" = dot #D49C0B com texto âmbar 900 (7:1), nunca branco
      return { ...base, background: 'var(--mantine-color-yellow-4)', hover: 'var(--mantine-color-yellow-5)', color: 'var(--mantine-color-yellow-9)', hoverColor: 'var(--mantine-color-yellow-9)' };
    }
    return { ...base, color: 'var(--cn-on-filled)', hoverColor: 'var(--cn-on-filled)' };
  }

  if (variant === 'outline') {
    if (!input.color) {
      return {
        background: 'transparent',
        hover: 'var(--ds-surface-2)',
        color: 'var(--ds-text-2)',
        hoverColor: 'var(--ds-text)',
        border: '1.5px solid var(--ds-border)',
      };
    }
    const base = defaultVariantColorsResolver(input);
    const light = defaultVariantColorsResolver({ ...input, variant: 'light' });
    return { ...base, hover: light.background };
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

  if (variant === 'light' && family) {
    return {
      background: `var(--mantine-color-${family}-light)`,
      hover: `var(--mantine-color-${family}-light-hover)`,
      color: `var(--mantine-color-${family}-light-color)`,
      border: '1px solid transparent',
    };
  }

  return defaultVariantColorsResolver(input);
};
