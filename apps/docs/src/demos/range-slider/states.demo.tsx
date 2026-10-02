import { RangeSlider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Stack w="100%" gap="xl">
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb={40}>
          Labels sempre visíveis · tamanho lg
        </Text>
        <RangeSlider size="lg" labelAlwaysOn defaultValue={[20, 65]} label={(v) => `${v}%`} thumbFromLabel="Desconto mínimo" thumbToLabel="Desconto máximo" />
      </div>
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb="xs">
          Desabilitado
        </Text>
        <RangeSlider disabled defaultValue={[30, 70]} thumbFromLabel="Mínimo" thumbToLabel="Máximo" />
      </div>
    </Stack>
  );
}
