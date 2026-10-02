import { Box, Group, Text, type BoxProps } from '@mantine/core';
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
  size?: 'sm' | 'md' | 'lg';
}

const valueSize = { sm: 'var(--type-subheadline-lg)', md: 'var(--type-headline-sm)', lg: 'var(--type-headline-lg)' };

/** Preço em BRL com preço antigo, parcelamento e desconto Pix. */
export function PriceTag({ value, oldValue, installments, pixDiscount, unit, size = 'md', ...others }: PriceTagProps) {
  return (
    <Box {...others}>
      {oldValue !== undefined && oldValue > value && (
        <Text fz="xs" c="var(--ds-text-3)" td="line-through" aria-label={`Preço anterior ${formatCurrency(oldValue)}`}>
          {formatCurrency(oldValue)}
        </Text>
      )}
      <Group gap={4} align="baseline" wrap="nowrap">
        <Text component="span" fz={valueSize[size]} fw={700} lh={1.2} c="var(--ds-primary)" style={{ fontVariantNumeric: 'tabular-nums' }}>
          {formatCurrency(value)}
        </Text>
        {unit && (
          <Text component="span" fz="xs" c="var(--ds-text-3)" fw={500}>
            {unit}
          </Text>
        )}
      </Group>
      {pixDiscount !== undefined && pixDiscount > 0 && (
        <Text fz="xs" fw={600} c="var(--ds-tag-success-color)">
          {formatCurrency(value * (1 - pixDiscount / 100))} no Pix ({pixDiscount}% off)
        </Text>
      )}
      {installments && installments.count > 1 && (
        <Text fz="xs" c="var(--ds-text-2)">
          ou {installments.count}x de {formatCurrency(value / installments.count)}
          {installments.interestFree !== false ? ' sem juros' : ''}
        </Text>
      )}
    </Box>
  );
}
PriceTag.displayName = '@jcdecor/ui/PriceTag';
