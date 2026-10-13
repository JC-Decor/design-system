import { RangeSlider, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Stack w="100%" gap="xl">
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb={40}>
          Labels sempre visíveis · tamanho lg
        </Text>
        <RangeSlider
          size="lg"
          min={0}
          max={20}
          minRange={1}
          labelAlwaysOn
          defaultValue={[2, 8]}
          label={(v) => `${v} anos`}
          thumbFromLabel="Tempo de casa mínimo"
          thumbToLabel="Tempo de casa máximo"
        />
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
