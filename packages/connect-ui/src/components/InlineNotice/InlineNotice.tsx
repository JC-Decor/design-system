import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './InlineNotice.module.css';

export type InlineNoticeTone = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

const TONE_ICON: Record<InlineNoticeTone, string> = {
  info: 'info',
  success: 'check',
  warning: 'alert',
  danger: 'alert',
  neutral: 'info',
};

export interface InlineNoticeProps extends BoxProps, ElementProps<'div', 'title'> {
  /** `info` = navy (padrão do Connect) · `success` verde · `warning` âmbar · `danger` coral · `neutral` cinza @default 'info' */
  tone?: InlineNoticeTone;
  /** Título em destaque na cor do tom */
  title?: React.ReactNode;
  /** Ícone do Connect; `false` esconde @default por tom */
  icon?: string | false;
  children?: React.ReactNode;
}

/** Aviso em linha do Connect (`.wf-notice`): caixa suave com ícone, título no tom e texto. Para alertas dispensáveis use `Alert`. */
export function InlineNotice({ tone = 'info', title, icon, children, className, ...others }: InlineNoticeProps) {
  const iconName = icon === false ? null : (icon ?? TONE_ICON[tone]);
  return (
    <Box className={clsx(classes.root, className)} data-tone={tone} {...others}>
      {iconName && <Icon name={iconName} size={16} className={classes.icon} />}
      <div className={classes.body}>
        {title && <strong className={classes.title}>{title}</strong>}
        {children && <div className={classes.text}>{children}</div>}
      </div>
    </Box>
  );
}
InlineNotice.displayName = '@jcdecor/connect-ui/InlineNotice';
