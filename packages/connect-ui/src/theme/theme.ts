import { createTheme } from '@mantine/core';
import { connectColors } from './colors';
import { chartPalette, density, fontFamily, fontFamilyMonospace, grid, motion, priorities, radius, spacing, statuses, tones, typography } from './tokens';
import { connectVariantColorResolver } from './variantColorResolver';
import { connectComponents } from './components';

const t = typography;

export const connectTheme = createTheme({
  colors: connectColors,
  primaryColor: 'navy',
  primaryShade: { light: 6, dark: 3 },
  autoContrast: true,
  luminanceThreshold: 0.35,
  white: '#FFFFFF',
  black: '#1A1B2E',
  variantColorResolver: connectVariantColorResolver,

  fontFamily,
  fontFamilyMonospace,
  headings: {
    fontFamily,
    fontWeight: '700',
    textWrap: 'balance',
    sizes: {
      h1: { fontSize: t.displaySm.size, fontWeight: '700', lineHeight: String(t.displaySm.lineHeight) },
      h2: { fontSize: t.headlineLg.size, fontWeight: '700', lineHeight: String(t.headlineLg.lineHeight) },
      h3: { fontSize: t.headlineMd.size, fontWeight: '700', lineHeight: String(t.headlineMd.lineHeight) },
      h4: { fontSize: t.headlineSm.size, fontWeight: '700', lineHeight: String(t.headlineSm.lineHeight) },
      h5: { fontSize: '15px', fontWeight: '700', lineHeight: '1.4' },
      h6: { fontSize: '13.5px', fontWeight: '700', lineHeight: '1.45' },
    },
  },
  fontSizes: {
    xs: t.disclaimer.size,
    sm: t.subheadlineSm.size,
    md: t.subheadlineRg.size,
    lg: t.subheadlineLg.size,
    xl: t.headlineSm.size,
  },
  lineHeights: { xs: '1.4', sm: '1.45', md: '1.5', lg: '1.5', xl: '1.35' },
  // Densidade do Connect: md 16 · lg 22 (padding de card) · xl 28
  spacing: { xs: spacing[6], sm: spacing[10], md: spacing[16], lg: spacing[22], xl: spacing[28] },
  radius: { xs: radius.xs, sm: radius.sm, md: radius.md, lg: radius.lg, xl: radius.pill },
  defaultRadius: 'sm',
  shadows: {
    xs: 'var(--ds-shadow-sm)',
    sm: 'var(--ds-shadow-sm)',
    md: 'var(--ds-shadow-md)',
    lg: 'var(--ds-shadow-lg)',
    xl: '0 24px 64px rgba(20,24,60,.22)',
  },
  breakpoints: { xs: '36em', sm: '48em', md: '64em', lg: '75em', xl: '90em' },
  focusRing: 'auto',
  cursorType: 'pointer',
  defaultGradient: { from: 'navy.6', to: 'lavender.6', deg: 140 },

  other: { spacing, grid, typography, chartPalette, tones, priorities, statuses, density, motion },

  components: connectComponents,
});
