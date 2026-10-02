import { useState } from 'react';
import {
  Box,
  CloseButton,
  createVarsResolver,
  factory,
  getRadius,
  useProps,
  useStyles,
  type BoxProps,
  type ElementProps,
  type Factory,
  type MantineRadius,
  type StylesApiProps,
} from '@mantine/core';
import classes from './PromoBanner.module.css';

export type PromoBannerStylesNames = 'root' | 'content' | 'highlight' | 'close';
export type PromoBannerCssVariables = {
  root: '--banner-bg' | '--banner-color' | '--banner-highlight' | '--banner-radius';
};

export interface PromoBannerProps extends BoxProps, StylesApiProps<PromoBannerFactory>, ElementProps<'div'> {
  /** `horizon` = azul com destaque Electric · `electric` = amarelo com destaque Horizon · `obsidian` @default 'horizon' */
  variant?: 'horizon' | 'electric' | 'obsidian';
  /** Trecho destacado ao final (ex.: cupom). Também é possível usar `<strong>` dentro de children. */
  highlight?: React.ReactNode;
  /** Ícone/elemento à esquerda do texto */
  icon?: React.ReactNode;
  /** Exibe botão de fechar; o banner some e chama `onClose` */
  withCloseButton?: boolean;
  /** Controle externo da visibilidade (opcional) */
  opened?: boolean;
  onClose?: () => void;
  /** Arredonda os cantos (por padrão o banner é full-bleed, sem raio) */
  radius?: MantineRadius;
}

export type PromoBannerFactory = Factory<{
  props: PromoBannerProps;
  ref: HTMLDivElement;
  stylesNames: PromoBannerStylesNames;
  vars: PromoBannerCssVariables;
  variant: 'horizon' | 'electric' | 'obsidian';
}>;

const palette = {
  horizon: { bg: 'var(--dc-horizon-700)', color: '#fff', highlight: 'var(--dc-electric)' },
  electric: { bg: 'var(--dc-electric)', color: 'var(--dc-obsidian)', highlight: 'var(--dc-horizon-700)' },
  obsidian: { bg: 'var(--dc-obsidian)', color: '#fff', highlight: 'var(--dc-electric)' },
};

const varsResolver = createVarsResolver<PromoBannerFactory>((_theme, { variant = 'horizon', radius }) => ({
  root: {
    '--banner-bg': palette[variant].bg,
    '--banner-color': palette[variant].color,
    '--banner-highlight': palette[variant].highlight,
    '--banner-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));

/** Banner promocional (topo do site / campanhas). */
export const PromoBanner = factory<PromoBannerFactory>((_props) => {
  const props = useProps('PromoBanner', { variant: 'horizon' }, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    variant, highlight, icon, withCloseButton, opened, onClose, radius, children, ...others
  } = props;
  const [internalOpen, setOpen] = useState(true);
  const open = opened ?? internalOpen;

  const getStyles = useStyles<PromoBannerFactory>({
    name: 'PromoBanner',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  if (!open) return null;

  return (
    <Box role="note" {...getStyles('root')} variant={variant} mod={{ radius: radius !== undefined, closable: withCloseButton }} {...others}>
      <span {...getStyles('content')}>
        {icon}
        <span>{children}</span>
        {highlight && <strong {...getStyles('highlight')}>{highlight}</strong>}
      </span>
      {withCloseButton && (
        <CloseButton
          aria-label="Fechar"
          size="sm"
          variant="transparent"
          {...getStyles('close')}
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
        />
      )}
    </Box>
  );
});

PromoBanner.classes = classes;
PromoBanner.varsResolver = varsResolver;
PromoBanner.displayName = '@jcdecor/ui/PromoBanner';
