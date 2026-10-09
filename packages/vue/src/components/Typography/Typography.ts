import { defineComponent, h, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Text, type MantineElementType, type TextProps } from '@mantine-vue/core';
import { typography, type TypographyToken } from '../../theme/tokens';

type Scale = 'lg' | 'md' | 'sm';
type TextSlots = SlotsType<{ default?: () => VNodeChild }>;

function scaleProps(token: TypographyToken) {
  const t = typography[token];
  return { fz: t.size, fw: t.weight, lh: t.lineHeight, lts: t.letterSpacing === '0' ? undefined : t.letterSpacing };
}

/**
 * Preset de `Text` com a escala tipográfica do DS. Atributos e props do Text passados pelo usuário
 * (`c`, `mt`, `component`…) vêm por último e sobrepõem os padrões, como no @jcdecor/ui.
 */
function createTextPreset<P>(
  name: string,
  defaultComponent: string,
  getDefaults: (size: Scale | undefined, component: MantineElementType | undefined) => Record<string, unknown>,
) {
  return defineComponent({
    name,
    inheritAttrs: false,
    props: {
      size: { type: String as PropType<Scale>, default: undefined },
      component: { type: [String, Object, Function] as PropType<MantineElementType>, default: undefined },
    },
    setup(props, { attrs, slots }) {
      return () =>
        h(
          Text as any,
          { component: props.component ?? defaultComponent, m: 0, ...getDefaults(props.size, props.component), ...attrs },
          slots,
        );
    },
  }) as unknown as DefineSetupFnComponent<P & { component?: MantineElementType }, {}, TextSlots>;
}

export interface DisplayProps extends Omit<TextProps, 'size'> {
  /** display-large · display-medium · display-small @default 'sm' */
  size?: Scale;
}

const displayToken: Record<Scale, TypographyToken> = { lg: 'displayLg', md: 'displayMd', sm: 'displaySm' };

/** Títulos de impacto (hero, landing). Bold, tracking levemente negativo. */
export const Display = createTextPreset<DisplayProps>('Display', 'h1', (size = 'sm') => scaleProps(displayToken[size]));

export interface HeadlineProps extends Omit<TextProps, 'size'> {
  /** headline-large (Bold) · headline-medium · headline-small (SemiBold) @default 'md' */
  size?: Scale;
}

const headlineToken: Record<Scale, TypographyToken> = { lg: 'headlineLg', md: 'headlineMd', sm: 'headlineSm' };
const headlineTag: Record<Scale, string> = { lg: 'h2', md: 'h3', sm: 'h4' };

/** Títulos de seção e de cards. */
export const Headline = createTextPreset<HeadlineProps>('Headline', 'h3', (size = 'md', component) => ({
  ...scaleProps(headlineToken[size]),
  component: component ?? headlineTag[size],
}));

export interface SubheadlineProps extends Omit<TextProps, 'size'> {
  /** subheadline-large (Medium) · regular · small @default 'md' */
  size?: Scale;
}

const subToken: Record<Scale, TypographyToken> = { lg: 'subheadlineLg', md: 'subheadlineRg', sm: 'subheadlineSm' };

/** Texto de apoio / corpo. */
export const Subheadline = createTextPreset<SubheadlineProps>('Subheadline', 'p', (size = 'md') => scaleProps(subToken[size]));

export type DisclaimerProps = Omit<TextProps, 'size'>;

/** Microcopy para notas, orientação e suporte legal (12px Medium, texto-3). */
export const Disclaimer = createTextPreset<DisclaimerProps>('Disclaimer', 'p', () => ({
  c: 'var(--ds-text-3)',
  ...scaleProps('disclaimer'),
}));

export type KickerProps = Omit<TextProps, 'size'>;

/** Sobretítulo em caixa-alta na cor primária (ex.: "JC Decor · DS"). Caixa-alta pede tracking positivo. */
export const Kicker = createTextPreset<KickerProps>('Kicker', 'div', () => ({
  fz: 12,
  fw: 600,
  lh: 1.33,
  tt: 'uppercase',
  lts: '0.06em',
  c: 'var(--ds-primary)',
  m: undefined,
}));
