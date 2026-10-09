import { defineComponent, h, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { SimpleGrid, type SimpleGridProps } from '@mantine-vue/core';

export type KpiGroupProps = SimpleGridProps;

/**
 * Grade responsiva de KPIs baseada na largura do CONTÊINER (container queries), não da tela:
 * 1 coluna até 440px · 2 até 880px · 4 acima. Funciona igual em página cheia, ao lado de sidebar ou dentro de card.
 */
export const KpiGroup = defineComponent({
  name: 'KpiGroup',
  inheritAttrs: false,
  props: {
    cols: { type: [Number, Object] as PropType<SimpleGridProps['cols']>, default: () => ({ base: 1, '440px': 2, '880px': 4 }) },
    spacing: { type: [String, Number, Object] as PropType<SimpleGridProps['spacing']>, default: 'md' },
    type: { type: String as PropType<SimpleGridProps['type']>, default: 'container' },
  },
  setup(props, { attrs, slots }) {
    return () => h(SimpleGrid as any, { type: props.type, cols: props.cols, spacing: props.spacing, ...attrs }, slots);
  },
}) as unknown as DefineSetupFnComponent<KpiGroupProps, {}, SlotsType<{ default?: () => VNodeChild }>>;
