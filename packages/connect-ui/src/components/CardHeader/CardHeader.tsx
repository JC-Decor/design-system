import { Box, UnstyledButton, type BoxProps, type ElementProps, type UnstyledButtonProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './CardHeader.module.css';

export interface CardHeaderProps extends BoxProps, ElementProps<'div', 'title'> {
  /** Título do card (16/700) */
  title: React.ReactNode;
  /** Linha de apoio abaixo do título */
  sub?: React.ReactNode;
  /** Ações à direita (filtros, botões, legendas) */
  actions?: React.ReactNode;
  /** Sobrelinha mono em caixa alta acima do título */
  eyebrow?: React.ReactNode;
  /** Nível do título @default 3 */
  order?: 2 | 3 | 4 | 5 | 6;
}

/** Cabeçalho de card do Connect: sobrelinha, título, subtítulo e ações à direita (`.card-hd`). */
export function CardHeader({ title, sub, actions, eyebrow, order = 3, className, ...others }: CardHeaderProps) {
  const H = `h${order}` as const;
  return (
    <Box className={clsx(classes.header, className)} {...others}>
      <div className={classes.copy}>
        {eyebrow && <div className={classes.eyebrow}>{eyebrow}</div>}
        <H className={classes.title}>{title}</H>
        {sub && <p className={classes.sub}>{sub}</p>}
      </div>
      {actions && <div className={classes.actions}>{actions}</div>}
    </Box>
  );
}
CardHeader.displayName = '@jcdecor/connect-ui/CardHeader';

export interface SectionLabelProps extends BoxProps, ElementProps<'div', 'title'> {
  title: React.ReactNode;
  sub?: React.ReactNode;
  /** Ação alinhada à base, à direita (ex.: link "Ver todos") */
  action?: React.ReactNode;
  eyebrow?: React.ReactNode;
  /** Nível do título @default 3 */
  order?: 2 | 3 | 4 | 5 | 6;
}

/** Rótulo de seção entre blocos de cards (`.sec-label`): título 15/700 com ação alinhada à base. */
export function SectionLabel({ title, sub, action, eyebrow, order = 3, className, ...others }: SectionLabelProps) {
  const H = `h${order}` as const;
  return (
    <Box className={clsx(classes.section, className)} {...others}>
      <div className={classes.copy}>
        {eyebrow && <div className={classes.eyebrow}>{eyebrow}</div>}
        <H className={classes.sectionTitle}>{title}</H>
        {sub && <p className={classes.sub}>{sub}</p>}
      </div>
      {action}
    </Box>
  );
}
SectionLabel.displayName = '@jcdecor/connect-ui/SectionLabel';

export type CardFootLinkProps = UnstyledButtonProps &
  Omit<ElementProps<'a'>, 'color'> & {
    children?: React.ReactNode;
    /** Renderiza como `<a>` quando há `href`; senão `<button>` */
    href?: string;
  };

/** Link de rodapé do card ("Ver todos os alertas ›") — a seta se afasta no hover (`.card-foot-link`). */
export function CardFootLink({ children, href, className, ...others }: CardFootLinkProps) {
  return (
    <UnstyledButton
      component={href ? 'a' : 'button'}
      href={href}
      className={clsx(classes.footLink, className)}
      {...(others as object)}
    >
      {children}
      <Icon name="chev-r" size={14} />
    </UnstyledButton>
  );
}
CardFootLink.displayName = '@jcdecor/connect-ui/CardFootLink';
