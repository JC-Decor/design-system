import { CloseButton, Group } from '@jcdecor/ui';
import { IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <CloseButton aria-label="Fechar" />
      <CloseButton aria-label="Fechar" variant="transparent" />
      <CloseButton aria-label="Fechar" icon={<IconX size={18} stroke={1.5} />} />
      <CloseButton aria-label="Fechar" disabled />
    </Group>
  );
}
