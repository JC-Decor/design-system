import { defineComponent, h, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Group, SegmentedControl, Text, hasNode, resolveNode, type CardProps, type MantineNode } from '@mantine-vue/core';
import { Card } from '../theme/themeDefaults';
import { Kicker } from '../components/Typography';

export interface ChartCardProps extends Omit<CardProps, 'title'> {
  /** Sobretítulo (ou slot `kicker`) */
  kicker?: MantineNode;
  /** Título do card (ou slot `title`) */
  title?: MantineNode;
  /** Texto de apoio abaixo do título (ou slot `description`) */
  description?: MantineNode;
  /** Valor em destaque ao lado do título, ex.: total do período (ou slot `value`) */
  value?: MantineNode;
  /** Opções de período (ex.: ['7d', '30d', '90d']) */
  periods?: string[];
  /** Período selecionado — use `v-model:period` */
  period?: string;
}

export interface ChartCardSlots {
  /** O gráfico */
  default?: () => VNodeChild;
  kicker?: () => VNodeChild;
  title?: () => VNodeChild;
  description?: () => VNodeChild;
  value?: () => VNodeChild;
  /** Ações extras no cabeçalho */
  actions?: () => VNodeChild;
}

export type ChartCardEmits = {
  'update:period': (period: string) => void;
  periodChange: (period: string) => void;
};

const nodeProp = { type: null as unknown as PropType<MantineNode>, default: undefined };

/** Card de gráfico: título, valor em destaque, seletor de período e o gráfico (slot padrão). */
export const ChartCard = defineComponent({
  name: 'ChartCard',
  inheritAttrs: false,
  props: {
    kicker: nodeProp,
    title: nodeProp,
    description: nodeProp,
    value: nodeProp,
    periods: { type: Array as PropType<string[]>, default: undefined },
    period: { type: String, default: undefined },
  },
  emits: ['update:period', 'periodChange'],
  setup(props, { attrs, slots, emit }) {
    const onPeriod = (value: unknown) => {
      emit('update:period', String(value));
      emit('periodChange', String(value));
    };

    return () => {
      const kicker = resolveNode(props.kicker, slots.kicker);
      const description = resolveNode(props.description, slots.description);
      const value = resolveNode(props.value, slots.value);
      const actions = slots.actions?.();
      const periods = props.periods ?? [];

      const heading = h('div', { style: { flex: '1 1 220px', minWidth: 0 } }, [
        hasNode(kicker) ? h(Kicker as any, { mb: 4 }, () => kicker) : null,
        h(Text as any, { fw: 600, fz: 'var(--type-subheadline-lg)', lh: 1.3 }, () => resolveNode(props.title, slots.title)),
        hasNode(description) ? h(Text as any, { fz: 'xs', c: 'var(--ds-text-3)', mt: 2 }, () => description) : null,
        hasNode(value)
          ? h(Text as any, { fw: 700, fz: 'var(--type-headline-md)', mt: 4, style: { fontVariantNumeric: 'tabular-nums' } }, () => value)
          : null,
      ]);

      const controls = h(Group as any, { gap: 'xs' }, () => [
        periods.length > 0
          ? h(SegmentedControl as any, {
              size: 'xs',
              data: periods,
              modelValue: props.period,
              'onUpdate:modelValue': onPeriod,
            })
          : null,
        actions,
      ]);

      return h(Card as any, attrs, () => [
        h(Group as any, { justify: 'space-between', align: 'flex-start', mb: 'lg', gap: 'sm' }, () => [heading, controls]),
        slots.default?.(),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<ChartCardProps, ChartCardEmits, SlotsType<ChartCardSlots>>;
