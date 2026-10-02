import { Box, getThemeColor, useMantineTheme, type BoxProps, type MantineColor } from '@mantine/core';
import { altLogoPaths, collaboratorPaths, greekFramePaths, logoPaths, spartanPaths } from './paths';
import classes from './Brand.module.css';

/**
 * Componentes de marca (SVG inline): logos, elmo espartano, moldura grega e colaborador.
 *
 * Todas as cores aceitam cor do tema (`horizon`, `horizon.6`, `electric.3`), qualquer cor CSS
 * (`#fff`, `currentColor`, `var(--ds-text)`) ou ficam no padrão, que muda sozinho entre tema
 * claro e escuro via variáveis `--jc-logo-*` / `--jc-art-*`.
 */

type SvgBaseProps = BoxProps & Omit<React.ComponentProps<'svg'>, keyof BoxProps | 'color'>;

export interface BrandSvgProps extends SvgBaseProps {
  /** Altura (px ou CSS). A largura acompanha a proporção. @default 40 */
  size?: number | string;
  /** Texto alternativo. Sem `title` o SVG é decorativo (aria-hidden). */
  title?: string;
}

function useColor() {
  const theme = useMantineTheme();
  return (value: MantineColor | string | undefined, fallback: string) =>
    value === undefined || value === null || value === '' ? fallback : getThemeColor(value, theme);
}

const toCss = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);

function Svg({ size = 40, title, viewBox, children, className, ...others }: BrandSvgProps & { viewBox: string }) {
  return (
    <Box
      component="svg"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      className={className ? `${classes.svg} ${className}` : classes.svg}
      style={{ height: toCss(size) }}
      {...(others as Record<string, unknown>)}
    >
      {title && <title>{title}</title>}
      {children}
    </Box>
  );
}

/* ─────────────────────────────── Logo ─────────────────────────────── */

export type LogoVariant = 'auto' | 'light' | 'dark';

/** Cores padrão do logo por fundo. `light` = original (#0E36E3) para fundos claros; `dark` = branco para fundos escuros. */
const LOGO_DEFAULTS: Record<LogoVariant, { shield: string; letters: string; wordmark: string }> = {
  auto: { shield: 'var(--jc-logo-shield)', letters: 'var(--jc-logo-letters)', wordmark: 'var(--jc-logo-wordmark)' },
  light: { shield: '#0E36E3', letters: '#0E36E3', wordmark: '#0E36E3' },
  dark: { shield: '#FFFFFF', letters: '#FFFFFF', wordmark: '#FFFFFF' },
};

export interface JcLogoProps extends BrandSvgProps {
  /** `full` = brasão + "Decor" · `mark` = só o brasão · `wordmark` = só "Decor" @default 'full' */
  type?: 'full' | 'mark' | 'wordmark';
  /**
   * Para qual fundo: `auto` segue o tema (claro/escuro) · `light` = fundo claro (azul original)
   * · `dark` = fundo escuro (branco), ex.: barra navy mesmo no tema claro. @default 'auto'
   */
  variant?: LogoVariant;
  /** Cor única para o logo inteiro (sobrepõe as cores do variant) */
  color?: MantineColor | string;
  /** Cor do contorno do brasão */
  shieldColor?: MantineColor | string;
  /** Cor das letras JC */
  lettersColor?: MantineColor | string;
  /** Cor de "Decor" */
  wordmarkColor?: MantineColor | string;
}

/** Logo principal JC Decor, com variantes para fundo claro e escuro e recoloração por parte. */
export function JcLogo({
  type = 'full',
  variant = 'auto',
  color,
  shieldColor,
  lettersColor,
  wordmarkColor,
  title = 'JC Decor',
  size = 40,
  ...others
}: JcLogoProps) {
  const resolve = useColor();
  const d = LOGO_DEFAULTS[variant];
  const shield = resolve(shieldColor ?? color, d.shield);
  const letters = resolve(lettersColor ?? color, d.letters);
  const wordmark = resolve(wordmarkColor ?? color, d.wordmark);

  return (
    <Svg viewBox={logoPaths.viewBox[type]} title={title} size={size} data-variant={variant} {...others}>
      {type !== 'wordmark' && (
        <g>
          <path fill={shield} d={logoPaths.shield} />
          {logoPaths.letters.map((p, i) => (
            <path key={i} fill={letters} d={p} />
          ))}
        </g>
      )}
      {type !== 'mark' && (
        <g fill={wordmark}>
          {logoPaths.wordmark.map((p, i) => (
            <path key={i} d={p} />
          ))}
        </g>
      )}
    </Svg>
  );
}
JcLogo.displayName = '@jcdecor/ui/JcLogo';

/* ───────────────────────────── Logo alternativo ───────────────────────────── */

const ALT_DEFAULTS: Record<LogoVariant, { fill: string; stroke: string }> = {
  auto: { fill: 'var(--jc-art-primary)', stroke: 'var(--jc-art-ink)' },
  light: { fill: '#2A2758', stroke: '#000000' },
  dark: { fill: '#FFFFFF', stroke: '#FFFFFF' },
};

export interface JcLogoAltProps extends BrandSvgProps {
  /** @default 'auto' */
  variant?: LogoVariant;
  /** Cor do brasão */
  color?: MantineColor | string;
  /** Cor do contorno (`none` remove) */
  strokeColor?: MantineColor | string;
  /** Cor das letras JC (por padrão são vazadas e mostram o fundo) */
  lettersColor?: MantineColor | string;
}

/** Brasão JC (logo alternativo, para avatar, favicon, selos). Letras vazadas ou coloridas. */
export function JcLogoAlt({ variant = 'auto', color, strokeColor, lettersColor, title = 'JC Decor', size = 48, ...others }: JcLogoAltProps) {
  const resolve = useColor();
  const d = ALT_DEFAULTS[variant];
  const stroke = strokeColor === 'none' ? 'none' : resolve(strokeColor, d.stroke);
  return (
    <Svg viewBox={altLogoPaths.viewBox} title={title} size={size} {...others}>
      {lettersColor !== undefined && <path fill={resolve(lettersColor, '')} d={altLogoPaths.outline} />}
      <path fill={resolve(color, d.fill)} stroke={stroke} strokeWidth={altLogoPaths.strokeWidth} d={altLogoPaths.shape} />
    </Svg>
  );
}
JcLogoAlt.displayName = '@jcdecor/ui/JcLogoAlt';

/* ───────────────────────────── Elmo espartano ───────────────────────────── */

export interface SpartanHelmetProps extends BrandSvgProps {
  /** Cor do traço/contorno @default var(--jc-art-ink) */
  color?: MantineColor | string;
  /** Cor da crista @default var(--jc-art-primary) */
  crestColor?: MantineColor | string;
  /** Cor do metal/face do elmo @default var(--jc-art-paper) */
  faceColor?: MantineColor | string;
}

/** Elmo espartano (mascote) com crista, face e traço recoloríveis. */
export function SpartanHelmet({ color, crestColor, faceColor, size = 64, ...others }: SpartanHelmetProps) {
  const resolve = useColor();
  return (
    <Svg viewBox={spartanPaths.viewBox} size={size} {...others}>
      <path fill={resolve(faceColor, 'var(--jc-art-paper)')} d={spartanPaths.face} />
      <path fill={resolve(crestColor, 'var(--jc-art-primary)')} d={spartanPaths.crest} />
      <path fill={resolve(color, 'var(--jc-art-ink)')} d={spartanPaths.ink} />
    </Svg>
  );
}
SpartanHelmet.displayName = '@jcdecor/ui/SpartanHelmet';

/* ───────────────────────────── Moldura grega ───────────────────────────── */

export interface GreekFrameProps extends BrandSvgProps {
  /** Cor do ornamento @default var(--jc-art-primary) */
  color?: MantineColor | string;
  /** Preenchimento do círculo interno (ex.: fundo atrás do conteúdo) */
  fill?: MantineColor | string;
  /** Conteúdo centralizado dentro do círculo (avatar, logo, número, ícone…) */
  children?: React.ReactNode;
}

/** Moldura circular com grega espartana; aceita conteúdo no centro (recortado em círculo). */
export function GreekFrame({ color, fill, children, size = 96, title, className, style, ...others }: GreekFrameProps) {
  const resolve = useColor();
  const c = resolve(color, 'var(--jc-art-primary)');
  const [inner, outer] = greekFramePaths.rings;
  const svg = (
    <Svg viewBox={greekFramePaths.viewBox} size="100%" title={title}>
      <g transform={greekFramePaths.transform} stroke={c} strokeWidth={0.1}>
        {fill !== undefined && <ellipse cx={inner.cx} cy={inner.cy} rx={inner.rx} ry={inner.ry} fill={resolve(fill, 'none')} stroke="none" />}
        <path fill={c} d={greekFramePaths.key} />
        <ellipse cx={inner.cx} cy={inner.cy} rx={inner.rx} ry={inner.ry} fill="none" strokeWidth={0.5} />
        <ellipse cx={outer.cx} cy={outer.cy} rx={outer.rx} ry={outer.ry} fill="none" strokeWidth={0.5} />
      </g>
    </Svg>
  );
  return (
    <Box
      className={className ? `${classes.frame} ${className}` : classes.frame}
      style={[{ ['--frame-size' as string]: toCss(size) }, style]}
      {...(others as Record<string, unknown>)}
    >
      {svg}
      {children !== undefined && <div className={classes.frameContent}>{children}</div>}
    </Box>
  );
}
GreekFrame.displayName = '@jcdecor/ui/GreekFrame';

/* ───────────────────────────── Colaborador ───────────────────────────── */

export interface CollaboratorProps extends BrandSvgProps {
  /** Cor da figura inteira @default currentColor */
  color?: MantineColor | string;
  /** Cor da cabeça/boné (sobrepõe `color`) */
  headColor?: MantineColor | string;
  /** Cor do corpo (sobrepõe `color`) */
  bodyColor?: MantineColor | string;
}

/** Silhueta de colaborador/instalador (boné) — usa `currentColor` por padrão, como um ícone. */
export function Collaborator({ color, headColor, bodyColor, size = 48, ...others }: CollaboratorProps) {
  const resolve = useColor();
  const base = resolve(color, 'currentColor');
  return (
    <Svg viewBox={collaboratorPaths.viewBox} size={size} {...others}>
      <path fill={headColor !== undefined ? resolve(headColor, base) : base} d={collaboratorPaths.head} />
      <path fill={bodyColor !== undefined ? resolve(bodyColor, base) : base} d={collaboratorPaths.body} />
    </Svg>
  );
}
Collaborator.displayName = '@jcdecor/ui/Collaborator';
