import { Stack, Switch } from '@jcdecor/ui';
import { IconCheck, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack>
      <Switch size="lg" onLabel="SIM" offLabel="NÃO" defaultChecked label="Aceita produtos similares" />
      <Switch
        size="md"
        defaultChecked
        label="Mostrar preço com Pix"
        thumbIcon={<IconCheck size={12} color="var(--mantine-color-horizon-6)" stroke={3} />}
      />
      <Switch label="Modo de férias da loja" labelPosition="left" thumbIcon={<IconX size={12} stroke={3} />} />
    </Stack>
  );
}
