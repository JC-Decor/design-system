import { NumberFormatter, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack gap={4} align="center">
      <Text fz="sm" c="var(--ds-text-3)" td="line-through">
        <NumberFormatter value={1599.9} prefix="R$ " thousandSeparator="." decimalSeparator="," decimalScale={2} fixedDecimalScale />
      </Text>
      <Text fz="var(--type-headline-md)" fw={700} c="var(--ds-primary)">
        <NumberFormatter value={1249.9} prefix="R$ " thousandSeparator="." decimalSeparator="," decimalScale={2} fixedDecimalScale />
      </Text>
      <Text fz="sm" c="var(--ds-text-2)">
        ou 10x de <NumberFormatter value={124.99} prefix="R$ " thousandSeparator="." decimalSeparator="," decimalScale={2} fixedDecimalScale /> sem juros
      </Text>
    </Stack>
  );
}
