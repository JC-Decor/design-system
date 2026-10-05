import type { VNodeChild } from 'vue';
import type { BoxProps, Factory, MantineNode } from '@mantine-vue/core';
import type { JcStylesApiProps } from '../../utils/styles-api';

export type KpiCardStylesNames = 'root' | 'header' | 'label' | 'icon' | 'value' | 'footer' | 'delta' | 'chart';
export type KpiCardCssVariables = { root: '--kpi-delta-color' | '--kpi-value-color' };

/** Props declaradas pelo próprio KpiCard. As demais (style props do Box, atributos) vão para a raiz. */
export interface KpiCardOwnProps extends JcStylesApiProps<KpiCardFactory> {
  /** Rótulo em caixa-alta (ex.: "Acessos (60d)"). Também aceita o slot `label` (o slot tem prioridade). */
  label?: MantineNode;
  /** Valor principal. Números são formatados em pt-BR. Também aceita o slot `value` (o slot tem prioridade). */
  value?: MantineNode;
  /** Variação em pontos percentuais (ex.: -5.6). Cor e seta automáticas. */
  delta?: number;
  /** Texto ao lado da variação (ex.: "vs. mês anterior"). Também aceita o slot `deltaLabel`. */
  deltaLabel?: MantineNode;
  /** Quando queda é algo bom (ex.: taxa de rejeição), inverte as cores. */
  invertDelta?: boolean;
  /** Pinta o próprio valor com a cor da variação (como o KPI "-5,6%" do DS) */
  colorValue?: boolean;
  /** Também aceita o slot `icon` (o slot tem prioridade). */
  icon?: MantineNode;
  /** Slot para um Sparkline ou mini-gráfico. Também aceita o slot `chart` (o slot tem prioridade). */
  chart?: MantineNode;
  loading?: boolean;
}

export interface KpiCardProps extends Omit<BoxProps, keyof KpiCardOwnProps>, KpiCardOwnProps {}

export interface KpiCardSlots {
  label?: () => VNodeChild;
  value?: () => VNodeChild;
  deltaLabel?: () => VNodeChild;
  icon?: () => VNodeChild;
  chart?: () => VNodeChild;
}

export type KpiCardFactory = Factory<{
  props: KpiCardProps;
  slots: KpiCardSlots;
  ref: HTMLDivElement;
  element: 'div';
  stylesNames: KpiCardStylesNames;
  vars: KpiCardCssVariables;
}>;
