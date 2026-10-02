import { Chip, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      <Chip defaultChecked variant="filled">
        filled
      </Chip>
      <Chip defaultChecked variant="outline">
        outline (padrão)
      </Chip>
      <Chip defaultChecked variant="light">
        light
      </Chip>
      <Chip variant="outline">desmarcado</Chip>
      <Chip disabled>desabilitado</Chip>
    </Group>
  );
}
