/**
 * Tokens do Design System Connect JC (Painel do Colaborador) — fonte da verdade do tema.
 *
 * Extraídos de connect-jc/frontend/src/styles/tokens.css e components/ui/constants.ts:
 * - navy #07016B como primária, neutros frios "ink" e tons pastel (lavender, blue, green, yellow, coral)
 * - rampas OKLCH 50 → 900 interpoladas a partir dos hex originais, que ficam fixados nos tons
 *   onde o Connect os usa (50 = soft, 100 = bg do tom, 500 = dot de status, 700/800 = texto do tom)
 * - DM Sans em tamanhos compactos (corpo 13,5px), raios generosos (cards 20px) e sombras suaves tingidas de navy
 * Nunca hard-code hex/px que estes tokens já carregam.
 */

/** Cores-âncora da marca. */
export const brand = {
  /** Primária: botões, links, item ativo — 17:1 com branco */
  navy: '#07016B',
  /** Texto principal (ink) */
  ink: '#1A1B2E',
  /** Fundo da sidebar (gradiente navy) */
  sidebar: '#07016B',
  white: '#FFFFFF',
} as const;

export type RampStep = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type Ramp = Record<RampStep, string>;
export type RampName = 'navy' | 'lavender' | 'blue' | 'green' | 'yellow' | 'coral' | 'gray';

/** Rampas OKLCH (gerador: interpolação entre os hex fixados do Connect). O tom 600 é o "cheio" de cada cor. */
export const ramps: Record<RampName, Ramp> = {
  navy: { 50: '#F3F2FA', 100: '#E6E5F4', 200: '#C8CCF8', 300: '#A5B4FC', 400: '#687BCB', 500: '#31449B', 600: '#07016B', 700: '#05004F', 800: '#030039', 900: '#010024' },
  lavender: { 50: '#F4F1FE', 100: '#EAE5FB', 200: '#CFC6F3', 300: '#B3A8EB', 400: '#9789E2', 500: '#7B6BD9', 600: '#6254C9', 700: '#4B3DB8', 800: '#33218D', 900: '#1E0165' },
  blue: { 50: '#F1F5FE', 100: '#E4ECFB', 200: '#B9CDF4', 300: '#8EAEEB', 400: '#658FE1', 500: '#3B6FD6', 600: '#315DBC', 700: '#284BA3', 800: '#1E3A8A', 900: '#081A55' },
  green: { 50: '#EEF7F0', 100: '#DDEFE2', 200: '#B5DDC0', 300: '#8DCA9F', 400: '#62B77D', 500: '#2BA45B', 600: '#26864C', 700: '#216A3E', 800: '#024A25', 900: '#012A12' },
  /** Âmbar: amarelo como texto só a partir do 700 (4,6:1 sobre o bg do tom). */
  yellow: { 50: '#FCF7E6', 100: '#FBEFCD', 200: '#EDD49A', 300: '#E0B963', 400: '#D49C0B', 500: '#BB8A0A', 600: '#A27809', 700: '#8A6608', 800: '#5A4100', 900: '#2D1F00' },
  /** Erro/perigo: 500 = botão danger do Connect (#D94B36), 600 = hover (#C03B2A), 700 = texto do tom. */
  coral: { 50: '#FCEEEA', 100: '#FBDED8', 200: '#F6BBB0', 300: '#EF9888', 400: '#E57460', 500: '#D94B36', 600: '#C03B2A', 700: '#A1392A', 800: '#741A0E', 900: '#450400' },
  /** Neutro "ink": 50 = --bg, 100 = --bg-2, 200 = --line-2, 400 = --muted-2, 500 = --muted, 700 = --ink-2, 900 = --ink. */
  gray: { 50: '#F6F7FB', 100: '#EFF1F8', 200: '#E2E5EE', 300: '#B8BCCB', 400: '#9095A8', 500: '#7A7E92', 600: '#5E6276', 700: '#43475C', 800: '#2E3044', 900: '#1A1B2E' },
};

/** Neutros do tema escuro (slate do `.dark` do Connect): 0 = texto · 6 = superfície · 7 = fundo. */
export const darkNeutrals = ['#F1F5F9', '#E2E8F0', '#B0BCC9', '#94A3B8', '#334155', '#2D3748', '#1E293B', '#0B1120', '#080D19', '#04070F'] as const;

/** Tons do Connect (avatares, chips, ícones de KPI, badges). `bg` = fundo, `fg` = texto/ícone, `soft` = fundo mais claro. */
export type ToneName = 'navy' | 'blue' | 'lavender' | 'green' | 'yellow' | 'coral' | 'ink';
export interface ToneValue {
  bg: string;
  fg: string;
  soft: string;
  /** Cor do tema Mantine equivalente (para `color=`) */
  color: RampName;
}
export const tones: Record<ToneName, ToneValue> = {
  /** Primária (chips/tags ativos no navy suave do Connect) */
  navy: { bg: '#E6E5F4', fg: '#07016B', soft: '#F3F2FA', color: 'navy' },
  blue: { bg: '#E4ECFB', fg: '#1E3A8A', soft: '#F1F5FE', color: 'blue' },
  lavender: { bg: '#EAE5FB', fg: '#4B3DB8', soft: '#F4F1FE', color: 'lavender' },
  green: { bg: '#DDEFE2', fg: '#216A3E', soft: '#EEF7F0', color: 'green' },
  yellow: { bg: '#FBEFCD', fg: '#8A6608', soft: '#FCF7E6', color: 'yellow' },
  coral: { bg: '#FBDED8', fg: '#A1392A', soft: '#FCEEEA', color: 'coral' },
  ink: { bg: '#EAEBF1', fg: '#1A1B2E', soft: '#F3F4F8', color: 'gray' },
};
export const toneNames = Object.keys(tones) as ToneName[];

/** Prioridades (Badge `tone`). */
export type PrioName = 'high' | 'med' | 'low' | 'info';
export const priorities: Record<PrioName, { tone: ToneName; label: string }> = {
  high: { tone: 'coral', label: 'Alta' },
  med: { tone: 'yellow', label: 'Média' },
  low: { tone: 'green', label: 'Baixa' },
  info: { tone: 'blue', label: 'Info' },
};

/** Status de registros (StatusBadge). `dot` = tom 500 da rampa. */
export type StatusName = 'ativo' | 'pendente' | 'atrasado' | 'concl' | 'rascunho' | 'pausado';
export const statuses: Record<StatusName, { tone: ToneName; dot: string; label: string }> = {
  ativo: { tone: 'green', dot: '#2BA45B', label: 'Ativo' },
  pendente: { tone: 'yellow', dot: '#D49C0B', label: 'Pendente' },
  atrasado: { tone: 'coral', dot: '#D94B36', label: 'Atrasado' },
  concl: { tone: 'blue', dot: '#3B6FD6', label: 'Concluído' },
  rascunho: { tone: 'ink', dot: '#7A7E92', label: 'Rascunho' },
  pausado: { tone: 'lavender', dot: '#7B6BD9', label: 'Pausado' },
};

export const feedback = {
  success: ramps.green[600],
  successBg: tones.green.soft,
  warn: ramps.yellow[400],
  warnBg: tones.yellow.soft,
  warnText: tones.yellow.fg,
  error: ramps.coral[500],
  errorBg: tones.coral.soft,
} as const;

/** Tokens semânticos por tema (equivalentes às variáveis `--ds-*` / às do tokens.css do Connect). */
export const semantic = {
  light: {
    bg: '#F6F7FB', // --bg
    surface: '#FFFFFF', // --surface
    surface2: '#EFF1F8', // --bg-2 (hover de linhas, trilhos)
    surfaceTint: '#F8F9FD', // --surface-tint (cabeçalho de tabela)
    text: '#1A1B2E', // --ink · 16,6:1
    text2: '#43475C', // --ink-2 · 9,3:1
    /** --muted do Connect é #7A7E92 (4,0:1); escurecido levemente para passar AA em texto pequeno. */
    text3: '#6B6F84', // 4,9:1
    text4: '#9095A8', // --muted-2 · só decorativo (ícones, separadores)
    border: '#E2E5EE', // --line-2 (contorno de botões outline/campos)
    borderSoft: '#ECEEF5', // --line (cards, divisores)
    primary: '#07016B',
    primaryHover: '#05004F',
    primarySoft: 'rgba(7,1,107,.08)',
    primaryTint: 'rgba(7,1,107,.12)',
    accent: tones.lavender.bg,
    link: '#07016B',
    successBg: tones.green.soft,
    warnBg: tones.yellow.soft,
    errorBg: tones.coral.soft,
    overlay: 'rgba(14,16,34,.36)',
    focusRing: '0 0 0 3px rgba(7,1,107,.14)',
    shadowSm: '0 1px 0 rgba(20,24,60,.04), 0 1px 2px rgba(20,24,60,.04)', // --shadow-1
    shadowMd: '0 2px 0 rgba(20,24,60,.02), 0 6px 18px rgba(20,24,60,.06)', // --shadow-2
    shadowLg: '0 8px 30px rgba(7,1,107,.10)', // --shadow-3
  },
  dark: {
    bg: '#0B1120',
    surface: '#1E293B',
    surface2: '#151E2D',
    surfaceTint: '#1A2332',
    text: '#F8FAFC',
    text2: '#E2E8F0',
    text3: '#B0BCC9',
    text4: '#94A3B8',
    border: '#334155',
    borderSoft: '#2D3748',
    primary: '#A5B4FC',
    primaryHover: '#C4B5FD',
    primarySoft: 'rgba(165,180,252,.18)',
    primaryTint: 'rgba(165,180,252,.28)',
    accent: 'rgba(155,147,245,.22)',
    link: '#A5B4FC',
    successBg: 'rgba(52,211,153,.16)',
    warnBg: 'rgba(251,191,36,.16)',
    errorBg: 'rgba(248,113,113,.16)',
    overlay: 'rgba(2,6,23,.62)',
    focusRing: '0 0 0 3px rgba(155,147,245,.28)',
    shadowSm: '0 1px 0 rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.24)',
    shadowMd: '0 2px 0 rgba(0,0,0,.12), 0 8px 22px rgba(0,0,0,.28)',
    shadowLg: '0 8px 30px rgba(0,0,0,.4)',
  },
} as const;

/** Tons no tema escuro (fundos translúcidos do dark-overrides.css + texto claro do tom). */
export const darkTones: Record<ToneName, { bg: string; fg: string; soft: string }> = {
  navy: { bg: 'rgba(129,140,248,.20)', fg: '#C7D2FE', soft: 'rgba(129,140,248,.10)' },
  blue: { bg: 'rgba(96,165,250,.18)', fg: '#93C5FD', soft: 'rgba(96,165,250,.10)' },
  lavender: { bg: 'rgba(155,147,245,.22)', fg: '#C4B5FD', soft: 'rgba(155,147,245,.12)' },
  green: { bg: 'rgba(52,211,153,.16)', fg: '#6EE7B7', soft: 'rgba(52,211,153,.08)' },
  yellow: { bg: 'rgba(251,191,36,.16)', fg: '#FCD34D', soft: 'rgba(251,191,36,.08)' },
  coral: { bg: 'rgba(248,113,113,.16)', fg: '#FCA5A5', soft: 'rgba(248,113,113,.08)' },
  ink: { bg: 'rgba(148,163,184,.16)', fg: '#E2E8F0', soft: 'rgba(148,163,184,.08)' },
};

export const fontFamily = "'DM Sans', system-ui, -apple-system, 'Segoe UI', sans-serif";
export const fontFamilyMonospace = "'DM Mono', ui-monospace, SFMono-Regular, monospace";

/**
 * Escala tipográfica do Connect — densa, pensada para painéis: corpo 13,5px, rótulos 12,5px,
 * títulos de card 16/700 e título de página 26/700 com tracking negativo.
 * Os nomes seguem o DS JC Decor (mesmas variáveis `--type-*`) para os overrides do Mantine serem compartilhados.
 */
export const typography = {
  displayLg: { size: 'clamp(30px, 1.6vw + 22px, 40px)', weight: 700, lineHeight: 1.1, letterSpacing: '-0.025em', px: '40/30', label: 'hero' },
  displayMd: { size: 'clamp(26px, 0.8vw + 21px, 32px)', weight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', px: '32/26', label: 'display' },
  displaySm: { size: '26px', weight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', px: '26', label: 'page-title' },
  headlineLg: { size: '22px', weight: 700, lineHeight: 1.25, letterSpacing: '-0.015em', px: '22', label: 'section-title' },
  headlineMd: { size: '18px', weight: 700, lineHeight: 1.3, letterSpacing: '-0.012em', px: '18', label: 'dialog-title' },
  headlineSm: { size: '16px', weight: 700, lineHeight: 1.35, letterSpacing: '-0.01em', px: '16', label: 'card-title' },
  subheadlineLg: { size: '15px', weight: 400, lineHeight: 1.5, letterSpacing: '0', px: '15', label: 'body-large' },
  subheadlineRg: { size: '13.5px', weight: 400, lineHeight: 1.5, letterSpacing: '0', px: '13.5', label: 'body' },
  subheadlineSm: { size: '12.5px', weight: 400, lineHeight: 1.45, letterSpacing: '0', px: '12.5', label: 'body-small' },
  button: { size: '13.5px', weight: 600, lineHeight: 1.4, letterSpacing: '-0.005em', px: '13.5', label: 'button' },
  disclaimer: { size: '11.5px', weight: 500, lineHeight: 1.4, letterSpacing: '0', px: '11.5', label: 'caption' },
  eyebrow: { size: '10.5px', weight: 600, lineHeight: 1.4, letterSpacing: '0.06em', px: '10.5', label: 'eyebrow (mono, caixa alta)' },
} as const;

export type TypographyToken = keyof typeof typography;

/** Spacing — passos de 2/4px usados no Connect. */
export const spacing = {
  0: '0px', 2: '2px', 4: '4px', 6: '6px', 8: '8px', 10: '10px', 12: '12px', 14: '14px', 16: '16px', 20: '20px',
  22: '22px', 24: '24px', 28: '28px', 32: '32px', 36: '36px', 40: '40px', 48: '48px', 56: '56px', 64: '64px',
} as const;

/** Densidade (`--pad`): compacta 16 · regular 22 · confortável 28. */
export const density = { compact: '16px', regular: '22px', comfy: '28px' } as const;

/** Raios: controles 10px, padrão 14px, cards 20px; chips/badges em pílula. */
export const radius = { xs: '6px', sm: '10px', md: '14px', lg: '20px', pill: '999px' } as const;

/** Movimento (motion.css). */
export const motion = {
  fast: '120ms',
  normal: '180ms',
  slow: '320ms',
  easeStandard: 'cubic-bezier(.2,.7,.2,1)',
  easeEmphasis: 'cubic-bezier(.16,1,.3,1)',
} as const;

/** Grid do painel: conteúdo fluido ao lado da sidebar (264px), gutters de 22px. */
export const grid = {
  max: '1440px',
  gap: '20px',
  sidebar: '264px',
  margin: { mobile: '16px', tablet: '22px', desktop: '28px' },
  columns: { mobile: 4, tablet: 8, desktop: 12 },
  breakpoints: { mobile: 360, tablet: 768, desktop: 1100 },
} as const;

/** Cores das séries em gráficos por tema. */
export const chartColors = {
  light: [ramps.navy[600], ramps.blue[500], ramps.green[500], ramps.yellow[400], ramps.coral[500], ramps.lavender[500], ramps.gray[500], ramps.navy[400]],
  dark: [ramps.navy[300], ramps.blue[300], ramps.green[300], ramps.yellow[300], ramps.coral[300], ramps.lavender[300], darkNeutrals[3], ramps.navy[200]],
} as const;

/** Ordem das séries em gráficos: variáveis CSS (`--cn-chart-N`) que trocam de valor entre claro/escuro. */
export const chartPalette = chartColors.light.map((_, i) => `var(--cn-chart-${i + 1})`);

export const tokens = {
  brand, ramps, darkNeutrals, tones, darkTones, priorities, statuses, feedback, semantic, fontFamily, fontFamilyMonospace,
  typography, spacing, density, radius, motion, grid, chartColors, chartPalette,
};
export default tokens;
