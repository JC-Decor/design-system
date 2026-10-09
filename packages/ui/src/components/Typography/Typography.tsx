import { Text, createPolymorphicComponent, type TextProps } from '@mantine/core';
import { typography, type TypographyToken } from '../../theme/tokens';

type Scale = 'lg' | 'md' | 'sm';

function scaleProps(token: TypographyToken) {
  const t = typography[token];
  return { fz: t.size, fw: t.weight, lh: t.lineHeight, lts: t.letterSpacing === '0' ? undefined : t.letterSpacing };
}

export interface DisplayProps extends Omit<TextProps, 'size'> {
  /** display-large · display-medium · display-small @default 'sm' */
  size?: Scale;
  children?: React.ReactNode;
}

const displayToken: Record<Scale, TypographyToken> = { lg: 'displayLg', md: 'displayMd', sm: 'displaySm' };

/** Títulos de impacto (hero, landing). Bold, tracking levemente negativo. */
export const Display = createPolymorphicComponent<'h1', DisplayProps>(
  ({ size = 'sm', ...others }: DisplayProps & { component?: any }) => (
    <Text component="h1" m={0} {...scaleProps(displayToken[size])} {...others} />
  ),
);

export interface HeadlineProps extends Omit<TextProps, 'size'> {
  /** headline-large (Bold) · headline-medium · headline-small (SemiBold) @default 'md' */
  size?: Scale;
  children?: React.ReactNode;
}

const headlineToken: Record<Scale, TypographyToken> = { lg: 'headlineLg', md: 'headlineMd', sm: 'headlineSm' };
const headlineTag: Record<Scale, string> = { lg: 'h2', md: 'h3', sm: 'h4' };

/** Títulos de seção e de cards. */
export const Headline = createPolymorphicComponent<'h2', HeadlineProps>(
  ({ size = 'md', ...others }: HeadlineProps & { component?: any }) => (
    <Text component={headlineTag[size] as 'h2'} m={0} {...scaleProps(headlineToken[size])} {...others} />
  ),
);

export interface SubheadlineProps extends Omit<TextProps, 'size'> {
  /** subheadline-large (Medium) · regular · small @default 'md' */
  size?: Scale;
  children?: React.ReactNode;
}

const subToken: Record<Scale, TypographyToken> = { lg: 'subheadlineLg', md: 'subheadlineRg', sm: 'subheadlineSm' };

/** Texto de apoio / corpo. */
export const Subheadline = createPolymorphicComponent<'p', SubheadlineProps>(
  ({ size = 'md', ...others }: SubheadlineProps & { component?: any }) => (
    <Text component="p" m={0} {...scaleProps(subToken[size])} {...others} />
  ),
);

export interface DisclaimerProps extends TextProps {
  children?: React.ReactNode;
}

/** Microcopy para notas, orientação e suporte legal (12px Medium, texto-3). */
export const Disclaimer = createPolymorphicComponent<'p', DisclaimerProps>((props: DisclaimerProps & { component?: any }) => (
  <Text component="p" m={0} c="var(--ds-text-3)" {...scaleProps('disclaimer')} {...props} />
));

export interface KickerProps extends TextProps {
  children?: React.ReactNode;
}

/** Sobretítulo em caixa-alta na cor primária (ex.: "JC Decor · DS"). Caixa-alta pede tracking positivo. */
export const Kicker = createPolymorphicComponent<'div', KickerProps>((props: KickerProps & { component?: any }) => (
  <Text component="div" fz={12} fw={600} lh={1.33} tt="uppercase" lts="0.06em" c="var(--ds-primary)" {...props} />
));
