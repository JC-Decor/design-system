// @generated sincronizado de packages/ui/src/theme/tokens.ts — edite lá e rode `npm run sync -w @jcdecor/vue`
/**
 * Tokens do Design System JC Decor — fonte da verdade do tema.
 *
 * v0.2 (out/2026): paleta e tipografia recalibradas a partir do site
 * jcdecor.com.br (azul #2663EB, Poppins em tamanhos fixos) com:
 * - rampas perceptuais em OKLCH (50 → 900, 600 = tom "cheio" de cada cor)
 * - neutros frios tingidos no matiz do azul (substituem o LightGray bege)
 * - todos os pares texto/fundo validados em WCAG AA (≥ 4,5:1; UI ≥ 3:1)
 * - proporção 60-30-10: neutros · azul/navy · amarelo de destaque
 * Nunca hard-code hex/px que estes tokens já carregam.
 */

/** Cores-âncora da marca. */
export const brand = {
  /** Azul de ação (botões, links, preços) — 5,2:1 com branco */
  horizon: '#2663EB',
  /** Navy institucional (barra superior, hero, textos de marca) */
  obsidian: '#08154B',
  /** Amarelo de destaque — usar só como FUNDO com texto navy (12:1), nunca como texto */
  electric: '#F7D759',
  /** Verde de sucesso / Pix — 4,7:1 com branco */
  evergreen: '#1E8540',
  /** Vermelho de erro / desconto — 4,8:1 com branco */
  danger: '#D92D20',
  white: '#FFFFFF',
} as const;

export type RampStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Ramp = Record<RampStep, string>;

/** Rampas OKLCH. O tom 600 é a âncora de cada cor (exceto electric: âncora em 300). */
export const ramps: Record<'horizon' | 'obsidian' | 'electric' | 'evergreen' | 'danger' | 'gray', Ramp> = {
  horizon: { 50: '#F3F7FF', 100: '#E4EDFF', 200: '#C6DAFF', 300: '#A1C1FF', 400: '#6E9FFF', 500: '#407DFF', 600: '#2663EB', 700: '#0F4ACF', 800: '#0033AC', 900: '#002178' },
  obsidian: { 50: '#F1F5FE', 100: '#E0E8F9', 200: '#C5D1EC', 300: '#A1B1D5', 400: '#7285B4', 500: '#3D528A', 600: '#08154B', 700: '#040C3B', 800: '#02052A', 900: '#01021A' },
  /** Âncora #F7D759 em 300; tons escuros giram para âmbar (texto amarelo sobre branco: use 700+). */
  electric: { 50: '#FFF9E1', 100: '#FEEFB7', 200: '#F9E07F', 300: '#F7D759', 400: '#D5A700', 500: '#BA8900', 600: '#A47000', 700: '#8D5900', 800: '#734300', 900: '#562C00' },
  evergreen: { 50: '#E9FBEC', 100: '#C9F3D2', 200: '#A8EDB5', 300: '#89D698', 400: '#61B875', 500: '#3E9C57', 600: '#1E8540', 700: '#006E2E', 800: '#005422', 900: '#003914' },
  danger: { 50: '#FFF4F2', 100: '#FFE6E2', 200: '#FFCBC2', 300: '#FFA698', 400: '#FF6C5A', 500: '#E84031', 600: '#D92D20', 700: '#AD0300', 800: '#860200', 900: '#5D0100' },
  /** Neutro frio (OKLCH h 265, croma 0,012) — combina com o azul em vez de brigar com ele. */
  gray: { 50: '#F6F7FA', 100: '#EAEFF7', 200: '#D7DBE3', 300: '#BFC3CB', 400: '#9FA3AB', 500: '#84888F', 600: '#6E7279', 700: '#4A4D54', 800: '#35383E', 900: '#1F2228' },
};

/** Neutros do tema escuro (mesmo matiz, croma baixo — evita "azul neon" no escuro). */
export const darkNeutrals = ['#E4E8EF', '#BFC4CE', '#9398A4', '#636975', '#373D49', '#262B36', '#1A1E27', '#10141B', '#0A0D13', '#04060A'] as const;

export const feedback = {
  success: ramps.evergreen[600],
  successBg: ramps.evergreen[50],
  warn: ramps.electric[400],
  warnBg: ramps.electric[50],
  warnText: ramps.electric[700],
  error: ramps.danger[600],
  errorBg: ramps.danger[50],
} as const;

/** Tokens semânticos por tema (equivalentes às variáveis `--ds-*`). Contrastes medidos contra `surface`. */
export const semantic = {
  light: {
    bg: ramps.gray[50],
    surface: '#FFFFFF',
    surface2: ramps.gray[50],
    text: ramps.gray[900], // 15,9:1
    text2: ramps.gray[700], // 8,5:1
    text3: ramps.gray[600], // 4,8:1
    border: '#8B9099', // 3,2:1 — borda de campos (WCAG 1.4.11)
    borderSoft: ramps.gray[200], // divisores e cards (decorativo)
    primary: ramps.horizon[600],
    primaryHover: ramps.horizon[700],
    primarySoft: ramps.horizon[50],
    accent: brand.electric,
    link: ramps.horizon[600],
    successBg: ramps.evergreen[50],
    warnBg: ramps.electric[50],
    errorBg: ramps.danger[50],
    shadowSm: '0 1px 2px rgba(31,34,40,.06), 0 1px 3px rgba(31,34,40,.08)',
    shadowMd: '0 4px 12px rgba(31,34,40,.08), 0 2px 4px rgba(31,34,40,.04)',
    shadowLg: '0 16px 40px rgba(31,34,40,.12), 0 4px 12px rgba(31,34,40,.06)',
  },
  dark: {
    bg: darkNeutrals[7],
    surface: darkNeutrals[6],
    surface2: darkNeutrals[5],
    text: darkNeutrals[0], // 15:1
    text2: darkNeutrals[1], // 10,5:1
    text3: darkNeutrals[2], // 5,8:1
    border: darkNeutrals[3],
    borderSoft: darkNeutrals[5],
    primary: ramps.horizon[400], // 7:1 sobre o fundo
    primaryHover: ramps.horizon[300],
    primarySoft: 'rgba(110,159,255,.14)',
    accent: brand.electric,
    link: ramps.horizon[300],
    successBg: 'rgba(97,184,117,.14)',
    warnBg: 'rgba(247,215,89,.12)',
    errorBg: 'rgba(255,108,90,.14)',
    shadowSm: '0 1px 3px rgba(0,0,0,.4)',
    shadowMd: '0 4px 14px rgba(0,0,0,.45)',
    shadowLg: '0 16px 40px rgba(0,0,0,.55)',
  },
} as const;

export const fontFamily = "'Poppins', system-ui, -apple-system, 'Segoe UI', sans-serif";

/**
 * Escala tipográfica — razão ~1,25 (terça maior) sobre base 16px.
 * Texto de leitura e de UI tem tamanho FIXO (legibilidade e alinhamento consistentes);
 * só títulos de destaque (display, h1) são fluidos entre mobile e desktop.
 * Poppins tem x-height alto: entrelinha 1,5 no corpo e 1,2–1,3 nos títulos.
 */
export const typography = {
  displayLg: { size: 'clamp(40px, 2.4vw + 26px, 56px)', weight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', px: '56/40', label: 'display-large' },
  displayMd: { size: 'clamp(36px, 1.8vw + 25px, 48px)', weight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', px: '48/36', label: 'display-medium' },
  displaySm: { size: 'clamp(32px, 1.2vw + 25px, 40px)', weight: 700, lineHeight: 1.2, letterSpacing: '-0.015em', px: '40/32', label: 'display-small' },
  headlineLg: { size: 'clamp(26px, 0.9vw + 21px, 32px)', weight: 600, lineHeight: 1.25, letterSpacing: '-0.01em', px: '32/26', label: 'headline-large' },
  headlineMd: { size: '24px', weight: 600, lineHeight: 1.33, letterSpacing: '-0.005em', px: '24', label: 'headline-medium' },
  headlineSm: { size: '20px', weight: 600, lineHeight: 1.4, letterSpacing: '0', px: '20', label: 'headline-small' },
  subheadlineLg: { size: '18px', weight: 400, lineHeight: 1.55, letterSpacing: '0', px: '18', label: 'body-large' },
  subheadlineRg: { size: '16px', weight: 400, lineHeight: 1.5, letterSpacing: '0', px: '16', label: 'body' },
  subheadlineSm: { size: '14px', weight: 400, lineHeight: 1.43, letterSpacing: '0', px: '14', label: 'body-small' },
  button: { size: '14px', weight: 600, lineHeight: 1.43, letterSpacing: '0.01em', px: '14', label: 'button' },
  disclaimer: { size: '12px', weight: 500, lineHeight: 1.33, letterSpacing: '0.01em', px: '12', label: 'caption' },
} as const;

export type TypographyToken = keyof typeof typography;

/** Spacing — passos de 4px de 0 a 100. */
export const spacing = {
  0: '0px', 4: '4px', 8: '8px', 12: '12px', 16: '16px', 20: '20px', 24: '24px', 28: '28px',
  32: '32px', 36: '36px', 40: '40px', 44: '44px', 48: '48px', 52: '52px', 56: '56px',
  60: '60px', 64: '64px', 68: '68px', 72: '72px', 80: '80px', 100: '100px',
} as const;

/** Raios: controles 8px, cards 12px (como os cards de produto do site), seções 16px. */
export const radius = { sm: '8px', md: '12px', lg: '16px' } as const;

/** Grid: mobile 4col/16/20 · tablet 8col/24/32 · desktop 12col/24/64. */
export const grid = {
  max: '1224px',
  gap: '24px',
  margin: { mobile: '20px', tablet: '32px', desktop: '64px' },
  columns: { mobile: 4, tablet: 8, desktop: 12 },
  breakpoints: { mobile: 360, tablet: 768, desktop: 1366 },
} as const;

/** Cores das séries em gráficos por tema — vizinhos contrastantes e ≥ 3:1 contra o fundo. */
export const chartColors = {
  light: ['#2663EB', '#1E8540', '#D5A700', '#08154B', '#6E9FFF', '#D92D20', '#61B875', '#84888F'],
  dark: ['#6E9FFF', '#61B875', '#F7D759', '#BFC4CE', '#A1C1FF', '#FF6C5A', '#A8EDB5', '#9398A4'],
} as const;

/**
 * Ordem das séries em gráficos. São variáveis CSS (`--jc-chart-N`) que trocam
 * de valor entre claro/escuro — use como qualquer cor: `color={chartPalette[0]}`.
 */
export const chartPalette = chartColors.light.map((_, i) => `var(--jc-chart-${i + 1})`);

export const tokens = { brand, ramps, darkNeutrals, feedback, semantic, fontFamily, typography, spacing, radius, grid, chartColors, chartPalette };
export default tokens;
