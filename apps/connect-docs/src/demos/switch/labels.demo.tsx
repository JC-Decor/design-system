import { Icon, Stack, Switch } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack>
      <Switch size="lg" onLabel="SIM" offLabel="NÃO" defaultChecked label="Disponível para hora extra" />
      <Switch
        size="md"
        defaultChecked
        label="Exigir confirmação de leitura"
        thumbIcon={<Icon name="check" size={12} stroke={2.5} c="var(--mantine-color-navy-6)" />}
      />
      <Switch label="Modo ausente (férias)" labelPosition="left" thumbIcon={<Icon name="x" size={12} stroke={2.5} />} />
    </Stack>
  );
}
