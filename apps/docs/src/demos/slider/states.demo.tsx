import { Slider, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Stack w="100%" gap="xl">
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb={40}>
          Label sempre visível
        </Text>
        <Slider defaultValue={60} labelAlwaysOn label={(v) => `${v}%`} thumbLabel="Desconto progressivo" />
      </div>
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb="xs">
          Cor de sucesso
        </Text>
        <Slider defaultValue={80} color="evergreen" thumbLabel="Meta de vendas" />
      </div>
      <div>
        <Text fz="sm" c="var(--ds-text-2)" mb="xs">
          Desabilitado
        </Text>
        <Slider defaultValue={40} disabled thumbLabel="Desabilitado" />
      </div>
    </Stack>
  );
}
