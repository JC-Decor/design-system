import type { CSSProperties, ReactNode } from 'react';
import { Avatar } from '@mantine/core';
import clsx from 'clsx';
import { tones, type ToneName } from '../../theme/tokens';
import { useAvatarSrc } from '../../utils/avatar';
import { Icon } from '../Icon';
import classes from './DataTable.module.css';

export interface CellPersonProps {
  name: ReactNode;
  /** Cargo/área abaixo do nome */
  role?: ReactNode;
  /** Iniciais do avatar */
  seed?: string;
  /** Tom do avatar @default 'lavender' */
  tone?: ToneName;
  /** Foto */
  src?: string | null;
  /** Diâmetro do avatar @default 32 */
  avatarSize?: number;
  className?: string;
  style?: CSSProperties;
}

/** Célula de pessoa (`.cell-person`): avatar + nome + cargo. */
export function CellPerson({ name, role, seed, tone = 'lavender', src, avatarSize = 32, className, style }: CellPersonProps) {
  const resolvedSrc = useAvatarSrc(src);
  return (
    <div className={clsx(classes.cellPerson, className)} style={style}>
      <Avatar size={avatarSize} radius="xl" src={resolvedSrc} variant="light" color={tones[tone].color} className={classes.cellAvatar}>
        {seed}
      </Avatar>
      <div className={classes.cellText}>
        <div className={classes.cellName}>{name}</div>
        {role && <div className={classes.cellSub}>{role}</div>}
      </div>
    </div>
  );
}
CellPerson.displayName = '@jcdecor/connect-ui/CellPerson';

export interface CellTitleProps {
  title: ReactNode;
  subtitle?: ReactNode;
  /** Ícone do Connect em um quadrado no tom */
  icon?: string;
  /** @default 'blue' */
  tone?: ToneName;
  className?: string;
  style?: CSSProperties;
}

/** Célula de título (`.cell-title`): ícone em quadrado tonal + título + linha secundária. */
export function CellTitle({ title, subtitle, icon, tone = 'blue', className, style }: CellTitleProps) {
  return (
    <div className={clsx(classes.cellTitle, className)} style={style}>
      {icon && (
        <span
          className={classes.cellIcon}
          style={{ background: `var(--cn-tone-${tone}-bg)`, color: `var(--cn-tone-${tone}-fg)` }}
          aria-hidden="true"
        >
          <Icon name={icon} size={15} />
        </span>
      )}
      <div className={classes.cellText}>
        <div className={classes.cellName}>{title}</div>
        {subtitle && <div className={classes.cellSub}>{subtitle}</div>}
      </div>
    </div>
  );
}
CellTitle.displayName = '@jcdecor/connect-ui/CellTitle';
