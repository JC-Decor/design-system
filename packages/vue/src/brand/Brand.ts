import {
  defineComponent,
  h,
  mergeProps,
  type DefineSetupFnComponent,
  type PropType,
  type SVGAttributes,
  type SlotsType,
  type VNodeChild,
} from 'vue';
import { Box, getThemeColor, useMantineTheme, type BoxProps, type MantineColor } from '@mantine-vue/core';
import { altLogoPaths, collaboratorPaths, greekFramePaths, logoPaths, spartanPaths } from './paths';
import classes from './Brand.module.css';

/**
 * Componentes de marca (SVG inline): logos, elmo espartano, moldura grega e colaborador.
 *
 * Todas as cores aceitam cor do tema (`horizon`, `horizon.6`, `electric.3`), qualquer cor CSS
 * (`#fff`, `currentColor`, `var(--ds-text)`) ou ficam no padrão, que muda sozinho entre tema
 * claro e escuro via variáveis `--jc-logo-*` / `--jc-art-*`.
 */

type SvgBaseProps = BoxProps &
  Omit<SVGAttributes, keyof BoxProps | 'color' | 'fill' | 'stroke'> &
  Record<`data-${string}`, unknown>;

export interface BrandSvgProps extends SvgBaseProps {
  /** Altura (px ou CSS). A largura acompanha a proporção. @default 40 */
  size?: number | string;
  /** Texto alternativo. Sem `title` o SVG é decorativo (aria-hidden). */
  title?: string;
}

type Color = MantineColor | string;
type EmptySlots = SlotsType<{}>;

function useColor() {
  // No Mantine Vue `useMantineTheme()` devolve um ComputedRef: lê `.value` a cada render
  const theme = useMantineTheme();
  return (value: Color | undefined | null, fallback: string) =>
    value === undefined || value === null || value === '' ? fallback : getThemeColor(value, theme.value);
}

const toCss = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);

/** SVG base: altura via `size`, `role="img"` + `<title>` com `title`, senão decorativo. */
function renderSvg(
  { viewBox, size, title }: { viewBox: string; size: number | string; title?: string },
  attrs: Record<string, unknown>,
  children: VNodeChild[],
) {
  return h(
    Box as any,
    mergeProps(
      {
        component: 'svg',
        viewBox,
        xmlns: 'http://www.w3.org/2000/svg',
        role: title ? 'img' : undefined,
        'aria-hidden': title ? undefined : true,
        class: classes.svg,
        style: { height: toCss(size) },
      },
      attrs,
    ),
    () => [title ? h('title', title) : null, ...children],
  );
}

const sizeProp = (value: number | string) => ({ type: [Number, String] as PropType<number | string>, default: value });
const colorProp = { type: String as PropType<Color>, default: undefined };

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
  color?: Color;
  /** Cor do contorno do brasão */
  shieldColor?: Color;
  /** Cor das letras JC */
  lettersColor?: Color;
  /** Cor de "Decor" */
  wordmarkColor?: Color;
}

/** Logo principal JC Decor, com variantes para fundo claro e escuro e recoloração por parte. */
export const JcLogo = defineComponent({
  name: 'JcLogo',
  inheritAttrs: false,
  props: {
    type: { type: String as PropType<NonNullable<JcLogoProps['type']>>, default: 'full' },
    variant: { type: String as PropType<LogoVariant>, default: 'auto' },
    color: colorProp,
    shieldColor: colorProp,
    lettersColor: colorProp,
    wordmarkColor: colorProp,
    title: { type: String, default: 'JC Decor' },
    size: sizeProp(40),
  },
  setup(props, { attrs }) {
    const resolve = useColor();
    return () => {
      const d = LOGO_DEFAULTS[props.variant];
      const shield = resolve(props.shieldColor ?? props.color, d.shield);
      const letters = resolve(props.lettersColor ?? props.color, d.letters);
      const wordmark = resolve(props.wordmarkColor ?? props.color, d.wordmark);
      return renderSvg(
        { viewBox: logoPaths.viewBox[props.type], title: props.title, size: props.size },
        { 'data-variant': props.variant, ...attrs },
        [
          props.type !== 'wordmark'
            ? h('g', [h('path', { fill: shield, d: logoPaths.shield }), ...logoPaths.letters.map((p) => h('path', { fill: letters, d: p }))])
            : null,
          props.type !== 'mark' ? h('g', { fill: wordmark }, logoPaths.wordmark.map((p) => h('path', { d: p }))) : null,
        ],
      );
    };
  },
}) as unknown as DefineSetupFnComponent<JcLogoProps, {}, EmptySlots>;

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
  color?: Color;
  /** Cor do contorno (`none` remove) */
  strokeColor?: Color;
  /** Cor das letras JC (por padrão são vazadas e mostram o fundo) */
  lettersColor?: Color;
}

/** Brasão JC (logo alternativo, para avatar, favicon, selos). Letras vazadas ou coloridas. */
export const JcLogoAlt = defineComponent({
  name: 'JcLogoAlt',
  inheritAttrs: false,
  props: {
    variant: { type: String as PropType<LogoVariant>, default: 'auto' },
    color: colorProp,
    strokeColor: colorProp,
    lettersColor: colorProp,
    title: { type: String, default: 'JC Decor' },
    size: sizeProp(48),
  },
  setup(props, { attrs }) {
    const resolve = useColor();
    return () => {
      const d = ALT_DEFAULTS[props.variant];
      const stroke = props.strokeColor === 'none' ? 'none' : resolve(props.strokeColor, d.stroke);
      return renderSvg({ viewBox: altLogoPaths.viewBox, title: props.title, size: props.size }, attrs, [
        props.lettersColor !== undefined ? h('path', { fill: resolve(props.lettersColor, ''), d: altLogoPaths.outline }) : null,
        h('path', {
          fill: resolve(props.color, d.fill),
          stroke,
          'stroke-width': altLogoPaths.strokeWidth,
          d: altLogoPaths.shape,
        }),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<JcLogoAltProps, {}, EmptySlots>;

/* ───────────────────────────── Elmo espartano ───────────────────────────── */

export interface SpartanHelmetProps extends BrandSvgProps {
  /** Cor do traço/contorno @default var(--jc-art-ink) */
  color?: Color;
  /** Cor da crista @default var(--jc-art-primary) */
  crestColor?: Color;
  /** Cor do metal/face do elmo @default var(--jc-art-paper) */
  faceColor?: Color;
}

/** Elmo espartano (mascote) com crista, face e traço recoloríveis. */
export const SpartanHelmet = defineComponent({
  name: 'SpartanHelmet',
  inheritAttrs: false,
  props: {
    color: colorProp,
    crestColor: colorProp,
    faceColor: colorProp,
    title: { type: String, default: undefined },
    size: sizeProp(64),
  },
  setup(props, { attrs }) {
    const resolve = useColor();
    return () =>
      renderSvg({ viewBox: spartanPaths.viewBox, title: props.title, size: props.size }, attrs, [
        h('path', { fill: resolve(props.faceColor, 'var(--jc-art-paper)'), d: spartanPaths.face }),
        h('path', { fill: resolve(props.crestColor, 'var(--jc-art-primary)'), d: spartanPaths.crest }),
        h('path', { fill: resolve(props.color, 'var(--jc-art-ink)'), d: spartanPaths.ink }),
      ]);
  },
}) as unknown as DefineSetupFnComponent<SpartanHelmetProps, {}, EmptySlots>;

/* ───────────────────────────── Moldura grega ───────────────────────────── */

export interface GreekFrameProps extends BrandSvgProps {
  /** Cor do ornamento @default var(--jc-art-primary) */
  color?: Color;
  /** Preenchimento do círculo interno (ex.: fundo atrás do conteúdo) */
  fill?: Color;
}

export interface GreekFrameSlots {
  /** Conteúdo centralizado dentro do círculo (avatar, logo, número, ícone…) */
  default?: () => VNodeChild;
}

/** Moldura circular com grega espartana; aceita conteúdo no centro (slot padrão, recortado em círculo). */
export const GreekFrame = defineComponent({
  name: 'GreekFrame',
  inheritAttrs: false,
  props: {
    color: colorProp,
    fill: colorProp,
    title: { type: String, default: undefined },
    size: sizeProp(96),
  },
  setup(props, { attrs, slots }) {
    const resolve = useColor();
    return () => {
      const c = resolve(props.color, 'var(--jc-art-primary)');
      const [inner, outer] = greekFramePaths.rings;
      const svg = renderSvg({ viewBox: greekFramePaths.viewBox, size: '100%', title: props.title }, {}, [
        h('g', { transform: greekFramePaths.transform, stroke: c, 'stroke-width': 0.1 }, [
          props.fill !== undefined
            ? h('ellipse', { cx: inner.cx, cy: inner.cy, rx: inner.rx, ry: inner.ry, fill: resolve(props.fill, 'none'), stroke: 'none' })
            : null,
          h('path', { fill: c, d: greekFramePaths.key }),
          h('ellipse', { cx: inner.cx, cy: inner.cy, rx: inner.rx, ry: inner.ry, fill: 'none', 'stroke-width': 0.5 }),
          h('ellipse', { cx: outer.cx, cy: outer.cy, rx: outer.rx, ry: outer.ry, fill: 'none', 'stroke-width': 0.5 }),
        ]),
      ]);
      return h(
        Box as any,
        mergeProps({ class: classes.frame, style: { '--frame-size': toCss(props.size) } }, attrs),
        () => [svg, slots.default ? h('div', { class: classes.frameContent }, slots.default()) : null],
      );
    };
  },
}) as unknown as DefineSetupFnComponent<GreekFrameProps, {}, SlotsType<GreekFrameSlots>>;

/* ───────────────────────────── Colaborador ───────────────────────────── */

export interface CollaboratorProps extends BrandSvgProps {
  /** Cor da figura inteira @default currentColor */
  color?: Color;
  /** Cor da cabeça/boné (sobrepõe `color`) */
  headColor?: Color;
  /** Cor do corpo (sobrepõe `color`) */
  bodyColor?: Color;
}

/** Silhueta de colaborador/instalador (boné) — usa `currentColor` por padrão, como um ícone. */
export const Collaborator = defineComponent({
  name: 'Collaborator',
  inheritAttrs: false,
  props: {
    color: colorProp,
    headColor: colorProp,
    bodyColor: colorProp,
    title: { type: String, default: undefined },
    size: sizeProp(48),
  },
  setup(props, { attrs }) {
    const resolve = useColor();
    return () => {
      const base = resolve(props.color, 'currentColor');
      return renderSvg({ viewBox: collaboratorPaths.viewBox, title: props.title, size: props.size }, attrs, [
        h('path', { fill: props.headColor !== undefined ? resolve(props.headColor, base) : base, d: collaboratorPaths.head }),
        h('path', { fill: props.bodyColor !== undefined ? resolve(props.bodyColor, base) : base, d: collaboratorPaths.body }),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<CollaboratorProps, {}, EmptySlots>;
