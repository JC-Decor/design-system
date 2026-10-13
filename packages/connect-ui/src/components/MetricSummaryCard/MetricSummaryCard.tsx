import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { resolveTone, toneStyle } from '../../utils/tone';
import { Icon } from '../Icon';
import classes from './MetricSummaryCard.module.css';

export interface MetricSummaryCardProps extends BoxProps, ElementProps<'div'> {
  /** Tom do ícone @default 'blue' */
  tone?: ToneName;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Complemento ao lado do valor ("de 248", "+3 hoje") */
  sub?: React.ReactNode;
  /** Ícone do Connect */
  icon: string;
}

/** Pílula-resumo de métrica (`.sumpill`): ícone tonal, rótulo e valor com complemento. Usada em faixas de 3–4 itens. */
export function MetricSummaryCard({ tone = 'blue', label, value, sub, icon, className, style, ...others }: MetricSummaryCardProps) {
  const t = resolveTone(tone);
  return (
    <Box className={clsx(classes.root, className)} style={[toneStyle(t), style]} data-tone={t} {...others}>
      <div className={classes.icon}>
        <Icon name={icon} size={16} />
      </div>
      <div className={classes.copy}>
        <div className={classes.label}>{label}</div>
        <div className={classes.row}>
          <span className={classes.value}>{value}</span>
          {sub && <span className={classes.sub}>{sub}</span>}
        </div>
      </div>
    </Box>
  );
}
MetricSummaryCard.displayName = '@jcdecor/connect-ui/MetricSummaryCard';
