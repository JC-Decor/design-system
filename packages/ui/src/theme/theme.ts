import { createTheme } from '@mantine/core';
import { jcColors } from './colors';
import { chartPalette, fontFamily, grid, spacing, typography } from './tokens';
import { jcVariantColorResolver } from './variantColorResolver';
import { jcComponents } from './components';

const t = typography;

export const jcTheme = createTheme({
  colors: jcColors,
  primaryColor: 'horizon',
  primaryShade: { light: 6, dark: 4 },
  autoContrast: true,
  // Acima disso o texto vira escuro: horizon.4 no escuro e electric recebem texto escuro (≥ 6:1)
  luminanceThreshold: 0.3,
  white: '#FFFFFF',
  black: '#1F2228',
  variantColorResolver: jcVariantColorResolver,

  fontFamily,
  fontFamilyMonospace: "ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, monospace",
  headings: {
    fontFamily,
    fontWeight: '600',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: t.displaySm.size, fontWeight: '700', lineHeight: String(t.displaySm.lineHeight) },
      h2: { fontSize: t.headlineLg.size, fontWeight: '600', lineHeight: String(t.headlineLg.lineHeight) },
      h3: { fontSize: t.headlineMd.size, fontWeight: '600', lineHeight: String(t.headlineMd.lineHeight) },
      h4: { fontSize: t.headlineSm.size, fontWeight: '600', lineHeight: String(t.headlineSm.lineHeight) },
      h5: { fontSize: '18px', fontWeight: '600', lineHeight: '1.45' },
      h6: { fontSize: '16px', fontWeight: '600', lineHeight: '1.5' },
    },
  },
  fontSizes: {
    xs: t.disclaimer.size,
    sm: t.subheadlineSm.size,
    md: t.subheadlineRg.size,
    lg: t.subheadlineLg.size,
    xl: t.headlineSm.size,
  },
  lineHeights: { xs: '1.33', sm: '1.43', md: '1.5', lg: '1.55', xl: '1.4' },
  spacing: { xs: spacing[4], sm: spacing[8], md: spacing[16], lg: spacing[24], xl: spacing[32] },
  radius: { xs: '4px', sm: '8px', md: '12px', lg: '16px', xl: '99px' },
  defaultRadius: 'sm',
  shadows: {
    xs: '0 1px 2px rgba(31,34,40,.06)',
    sm: 'var(--ds-shadow-sm)',
    md: 'var(--ds-shadow-md)',
    lg: 'var(--ds-shadow-lg)',
    xl: '0 24px 56px rgba(31,34,40,.18)',
  },
  breakpoints: { xs: '36em', sm: '48em', md: '64em', lg: '85.375em', xl: '96em' },
  focusRing: 'auto',
  cursorType: 'pointer',
  defaultGradient: { from: 'horizon.6', to: 'horizon.4', deg: 135 },

  other: { spacing, grid, typography, chartPalette },

  components: jcComponents,
});
