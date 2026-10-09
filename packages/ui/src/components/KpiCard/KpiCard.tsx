import {
  Box,
  SimpleGrid,
  Skeleton,
  createVarsResolver,
  factory,
  useProps,
  useStyles,
  type BoxProps,
  type ElementProps,
  type Factory,
  type SimpleGridProps,
  type StylesApiProps,
} from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight, IconMinus } from '@tabler/icons-react';
import { formatNumber, formatPercent } from '../../utils/format';
import classes from './KpiCard.module.css';

export type KpiCardStylesNames = 'root' | 'header' | 'label' | 'icon' | 'value' | 'footer' | 'delta' | 'chart';
export type KpiCardCssVariables = { root: '--kpi-delta-color' | '--kpi-value-color' };

export interface KpiCardProps extends BoxProps, StylesApiProps<KpiCardFactory>, Omit<ElementProps<'div'>, 'title'> {
  /** Rótulo em caixa-alta (ex.: "Acessos (60d)") */
  label: React.ReactNode;
  /** Valor principal. Números são formatados em pt-BR. */
  value: React.ReactNode;
  /** Variação em pontos percentuais (ex.: -5.6). Cor e seta automáticas. */
  delta?: number;
  /** Texto ao lado da variação (ex.: "vs. mês anterior") */
  deltaLabel?: React.ReactNode;
  /** Quando queda é algo bom (ex.: taxa de rejeição), inverte as cores. */
  invertDelta?: boolean;
  /** Pinta o próprio valor com a cor da variação (como o KPI "-5,6%" do DS) */
  colorValue?: boolean;
  icon?: React.ReactNode;
  /** Slot para um Sparkline ou mini-gráfico */
  chart?: React.ReactNode;
  loading?: boolean;
}

export type KpiCardFactory = Factory<{
  props: KpiCardProps;
  ref: HTMLDivElement;
  stylesNames: KpiCardStylesNames;
  vars: KpiCardCssVariables;
}>;

export function getDeltaTone(delta: number | undefined, invert = false): 'up' | 'down' | 'flat' {
  if (delta === undefined || delta === 0 || Number.isNaN(delta)) return 'flat';
  const positive = delta > 0;
  return positive !== invert ? 'up' : 'down';
}

const toneColor = { up: 'var(--ds-success)', down: 'var(--ds-error)', flat: 'var(--ds-text-3)' };

const varsResolver = createVarsResolver<KpiCardFactory>((_theme, { delta, invertDelta, colorValue }) => {
  const tone = getDeltaTone(delta, invertDelta);
  return {
    root: {
      '--kpi-delta-color': toneColor[tone],
      '--kpi-value-color': colorValue && tone !== 'flat' ? toneColor[tone] : undefined,
    },
  };
});

/** Tile de KPI dos dashboards (ds-kpi). */
export const KpiCard = factory<KpiCardFactory>((_props) => {
  const props = useProps('KpiCard', {}, _props);
  const {
    classNames, className, style, styles, unstyled, vars, attributes,
    label, value, delta, deltaLabel, invertDelta, colorValue, icon, chart, loading, ...others
  } = props;

  const getStyles = useStyles<KpiCardFactory>({
    name: 'KpiCard',
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

  const tone = getDeltaTone(delta, invertDelta);
  const ArrowIcon = delta === undefined || delta === 0 ? IconMinus : delta > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Box {...getStyles('root')} {...others}>
      <div {...getStyles('header')}>
        <span {...getStyles('label')}>{label}</span>
        {icon && <span {...getStyles('icon')}>{icon}</span>}
      </div>
      {loading ? (
        <Skeleton height={32} width="60%" mt={4} />
      ) : (
        <div {...getStyles('value')}>{typeof value === 'number' ? formatNumber(value) : value}</div>
      )}
      {(delta !== undefined || deltaLabel) && !loading && (
        <div {...getStyles('footer')}>
          {delta !== undefined && (
            <span {...getStyles('delta')} data-tone={tone}>
              <ArrowIcon size={14} stroke={2.5} />
              {formatPercent(delta, { signed: true })}
            </span>
          )}
          {deltaLabel && <span>{deltaLabel}</span>}
        </div>
      )}
      {chart && <div {...getStyles('chart')}>{chart}</div>}
    </Box>
  );
});

KpiCard.classes = classes;
KpiCard.varsResolver = varsResolver;
KpiCard.displayName = '@jcdecor/ui/KpiCard';

export interface KpiGroupProps extends SimpleGridProps {
  children?: React.ReactNode;
}

/**
 * Grade responsiva de KPIs baseada na largura do CONTÊINER (container queries), não da tela:
 * 1 coluna até 440px · 2 até 880px · 4 acima. Funciona igual em página cheia, ao lado de sidebar ou dentro de card.
 */
export function KpiGroup({ cols = { base: 1, '440px': 2, '880px': 4 }, spacing = 'md', type = 'container', ...others }: KpiGroupProps) {
  return <SimpleGrid type={type} cols={cols} spacing={spacing} {...others} />;
}
KpiGroup.displayName = '@jcdecor/ui/KpiGroup';
