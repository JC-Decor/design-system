import { defineComponent, h, type DefineSetupFnComponent, type PropType } from 'vue';
import { Box, Group, Text, type BoxProps } from '@mantine-vue/core';
import { formatCurrency } from '../../utils/format';

export interface PriceTagProps extends BoxProps {
  /** Preço atual em reais */
  value: number;
  /** Preço "de" (riscado) */
  oldValue?: number;
  /** Parcelamento: `{ count: 10 }` → "ou 10x de R$ 12,99 sem juros" */
  installments?: { count: number; interestFree?: boolean };
  /** Desconto no Pix em % (ex.: 5) → "R$ 94,05 no Pix" */
  pixDiscount?: number;
  /** Unidade (ex.: "/m²", "/rolo") */
  unit?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

const valueSize = { sm: 'var(--type-subheadline-lg)', md: 'var(--type-headline-sm)', lg: 'var(--type-headline-lg)' };

/** Preço em BRL com preço antigo, parcelamento e desconto Pix. */
export const PriceTag = defineComponent({
  name: 'PriceTag',
  inheritAttrs: false,
  props: {
    value: { type: Number, required: true },
    oldValue: { type: Number, default: undefined },
    installments: { type: Object as PropType<PriceTagProps['installments']>, default: undefined },
    pixDiscount: { type: Number, default: undefined },
    unit: { type: String, default: undefined },
    size: { type: String as PropType<NonNullable<PriceTagProps['size']>>, default: 'md' },
  },
  setup(props, { attrs }) {
    return () => {
      const { value, oldValue, installments, pixDiscount, unit, size } = props;
      return h(Box as any, attrs, () => [
        oldValue !== undefined && oldValue > value
          ? h(
              Text as any,
              { fz: 'xs', c: 'var(--ds-text-3)', td: 'line-through', 'aria-label': `Preço anterior ${formatCurrency(oldValue)}` },
              () => formatCurrency(oldValue),
            )
          : null,
        h(Group as any, { gap: 4, align: 'baseline', wrap: 'nowrap' }, () => [
          h(
            Text as any,
            { component: 'span', fz: valueSize[size], fw: 700, lh: 1.2, c: 'var(--ds-primary)', style: { fontVariantNumeric: 'tabular-nums' } },
            () => formatCurrency(value),
          ),
          unit ? h(Text as any, { component: 'span', fz: 'xs', c: 'var(--ds-text-3)', fw: 500 }, () => unit) : null,
        ]),
        pixDiscount !== undefined && pixDiscount > 0
          ? h(
              Text as any,
              { fz: 'xs', fw: 600, c: 'var(--ds-tag-success-color)' },
              () => `${formatCurrency(value * (1 - pixDiscount / 100))} no Pix (${pixDiscount}% off)`,
            )
          : null,
        installments && installments.count > 1
          ? h(
              Text as any,
              { fz: 'xs', c: 'var(--ds-text-2)' },
              () =>
                `ou ${installments.count}x de ${formatCurrency(value / installments.count)}${installments.interestFree !== false ? ' sem juros' : ''}`,
            )
          : null,
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<PriceTagProps>;
