import {
  Anchor,
  Box,
  Breadcrumbs,
  factory,
  rem,
  useProps,
  useStyles,
  type BoxProps,
  type ElementProps,
  type Factory,
  type StylesApiProps,
} from '@mantine/core';
import { Kicker, Headline, Subheadline } from '../Typography';
import classes from './PageHeader.module.css';

export interface PageHeaderBreadcrumb {
  label: React.ReactNode;
  href?: string;
}

export type PageHeaderStylesNames =
  | 'root'
  | 'breadcrumbs'
  | 'header'
  | 'main'
  | 'icon'
  | 'body'
  | 'kicker'
  | 'title'
  | 'description'
  | 'actions';

export type PageHeaderCssVariables = {
  root: '--page-header-icon-size';
};

export interface PageHeaderProps
  extends BoxProps,
    StylesApiProps<PageHeaderFactory>,
    Omit<ElementProps<'div'>, 'title'> {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Ícone à esquerda do título (ex.: `<IconUsers />`), num quadro suave na cor primária */
  icon?: React.ReactNode;
  /** Tamanho do quadro do ícone (px ou CSS) @default 48 */
  iconSize?: number | string;
  /** Botões à direita do título */
  actions?: React.ReactNode;
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Componente dos links do breadcrumb (ex.: Link do react-router) @default 'a' */
  linkComponent?: React.ElementType;
  /** `display` usa display-small (página principal); `headline` usa headline-large @default 'headline' */
  size?: 'display' | 'headline';
}

export type PageHeaderFactory = Factory<{
  props: PageHeaderProps;
  ref: HTMLDivElement;
  stylesNames: PageHeaderStylesNames;
  vars: PageHeaderCssVariables;
}>;

const defaultProps: Partial<PageHeaderProps> = {
  linkComponent: 'a',
  size: 'headline',
};

/** Cabeçalho de página: breadcrumbs, ícone, kicker, título, descrição e ações. */
export const PageHeader = factory<PageHeaderFactory>((_props) => {
  const props = useProps('PageHeader', defaultProps, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    kicker, title, description, icon, iconSize, actions, breadcrumbs, linkComponent = 'a', size, ...others
  } = props;

  const getStyles = useStyles<PageHeaderFactory>({
    name: 'PageHeader',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver: (_theme, { iconSize: s }) => ({
      root: { '--page-header-icon-size': s === undefined ? undefined : typeof s === 'number' ? rem(s) : s },
    }),
  });

  return (
    <Box {...getStyles('root')} {...others}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs {...getStyles('breadcrumbs')} fz="sm" separatorMargin={6}>
          {breadcrumbs.map((crumb, index) =>
            crumb.href ? (
              <Anchor key={index} component={linkComponent as 'a'} href={crumb.href} {...(linkComponent !== 'a' && { to: crumb.href })} fz="sm">
                {crumb.label}
              </Anchor>
            ) : (
              <Box key={index} component="span" c="var(--ds-text-3)" fz="sm">
                {crumb.label}
              </Box>
            ),
          )}
        </Breadcrumbs>
      )}
      <div {...getStyles('header')}>
        <div {...getStyles('main')}>
          {icon && (
            <div {...getStyles('icon')} aria-hidden>
              {icon}
            </div>
          )}
          <div {...getStyles('body')}>
            {kicker && <Kicker {...getStyles('kicker')}>{kicker}</Kicker>}
            {size === 'display' ? (
              <Headline component="h1" size="lg" fz="var(--type-display-sm)" lh={1.15} mt={8} {...getStyles('title')}>
                {title}
              </Headline>
            ) : (
              <Headline component="h1" size="lg" mt={kicker ? 8 : 0} {...getStyles('title')}>
                {title}
              </Headline>
            )}
            {description && (
              <Subheadline component="div" size="lg" c="var(--ds-text-2)" maw={640} mt={8} {...getStyles('description')}>
                {description}
              </Subheadline>
            )}
          </div>
        </div>
        {actions && <div {...getStyles('actions')}>{actions}</div>}
      </div>
    </Box>
  );
});

PageHeader.classes = classes;
PageHeader.displayName = '@jcdecor/ui/PageHeader';
