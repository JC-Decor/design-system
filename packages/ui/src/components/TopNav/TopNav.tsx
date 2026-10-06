import {
  Box,
  Burger,
  Collapse,
  factory,
  useProps,
  useStyles,
  type BoxProps,
  type ElementProps,
  type Factory,
  type StylesApiProps,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { JcLogo } from '../../brand/Brand';
import classes from './TopNav.module.css';

export type TopNavStylesNames = 'root' | 'brand' | 'links' | 'link' | 'linkSection' | 'linkLabel' | 'right' | 'burger' | 'mobileLinks';

export interface TopNavLink {
  label: React.ReactNode;
  href?: string;
  active?: boolean;
  /** Ícone/conteúdo antes do texto (como `leftSection` do Mantine) */
  leftSection?: React.ReactNode;
  /** Conteúdo depois do texto (ex.: contador, chevron) */
  rightSection?: React.ReactNode;
  /** Desabilita o link (sem navegação nem `onClick`) */
  disabled?: boolean;
  /** Nome acessível, necessário quando o link mostra só um ícone */
  'aria-label'?: string;
  onClick?: (event: React.MouseEvent) => void;
}

export interface TopNavProps extends BoxProps, StylesApiProps<TopNavFactory>, ElementProps<'div'> {
  /** Marca à esquerda @default <JcLogo variant="dark" /> (a barra é navy em ambos os temas) */
  brand?: React.ReactNode;
  /** Link da marca; `null` renderiza a marca como texto @default '/' */
  brandHref?: string | null;
  links?: TopNavLink[];
  /** Componente usado nos links (ex.: `Link` do react-router, recebe `to`/`href`) @default 'a' */
  linkComponent?: React.ElementType;
  /** Conteúdo à direita (ex.: ThemeToggle, avatar) */
  rightSection?: React.ReactNode;
  /** Esconde os links em telas pequenas e mostra um hambúrguer @default true */
  collapseOnMobile?: boolean;
}

export type TopNavFactory = Factory<{
  props: TopNavProps;
  ref: HTMLDivElement;
  stylesNames: TopNavStylesNames;
}>;

/** Barra de navegação Obsidian dos painéis (ds-nav). */
export const TopNav = factory<TopNavFactory>((_props) => {
  const props = useProps('TopNav', { brand: <JcLogo variant="dark" size={28} />, brandHref: '/', links: [], linkComponent: 'a', collapseOnMobile: true }, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    brand, brandHref, links, linkComponent: LinkComponent = 'a', rightSection, collapseOnMobile, ...others
  } = props;
  const [opened, { toggle, close }] = useDisclosure(false);

  const getStyles = useStyles<TopNavFactory>({
    name: 'TopNav',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const renderLinks = (onNavigate?: () => void) =>
    links!.map((link, index) => {
      const isButton = !link.href || link.disabled;
      const Component: React.ElementType = isButton ? 'button' : LinkComponent;
      const linkProps = isButton
        ? { type: 'button', disabled: link.disabled || undefined }
        : LinkComponent === 'a'
          ? { href: link.href }
          : { to: link.href, href: link.href };
      return (
        <Component
          key={index}
          {...linkProps}
          {...getStyles('link')}
          data-active={link.active || undefined}
          data-disabled={link.disabled || undefined}
          aria-current={link.active ? 'page' : undefined}
          aria-label={link['aria-label']}
          onClick={(event: React.MouseEvent) => {
            if (link.disabled) return;
            link.onClick?.(event);
            onNavigate?.();
          }}
        >
          {link.leftSection || link.rightSection ? (
            <>
              {link.leftSection && <span {...getStyles('linkSection')} data-position="left">{link.leftSection}</span>}
              {link.label !== undefined && link.label !== null && link.label !== '' && <span {...getStyles('linkLabel')}>{link.label}</span>}
              {link.rightSection && <span {...getStyles('linkSection')} data-position="right">{link.rightSection}</span>}
            </>
          ) : (
            link.label
          )}
        </Component>
      );
    });

  const BrandComponent: React.ElementType = brandHref === null ? 'span' : LinkComponent;
  const brandProps = brandHref === null ? {} : LinkComponent === 'a' ? { href: brandHref } : { to: brandHref, href: brandHref };

  return (
    <header>
      <Box {...getStyles('root')} mod={{ collapse: collapseOnMobile }} {...others}>
        <BrandComponent {...brandProps} {...getStyles('brand')}>
          {brand}
        </BrandComponent>
        <nav {...getStyles('links')} aria-label="Principal">
          {renderLinks()}
        </nav>
        <div {...getStyles('right')}>
          {rightSection}
          {collapseOnMobile && links!.length > 0 && (
            <Burger opened={opened} onClick={toggle} size="sm" aria-label="Abrir menu" {...getStyles('burger')} />
          )}
        </div>
      </Box>
      {collapseOnMobile && links!.length > 0 && (
        <Collapse expanded={opened}>
          <nav {...getStyles('mobileLinks')} aria-label="Principal (mobile)">
            {renderLinks(close)}
          </nav>
        </Collapse>
      )}
    </header>
  );
});

TopNav.classes = classes;
TopNav.displayName = '@jcdecor/ui/TopNav';
