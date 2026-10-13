import { CloseButton, Group, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <CloseButton aria-label="Fechar" />
      <CloseButton aria-label="Fechar" variant="transparent" />
      <CloseButton aria-label="Fechar" icon={<Icon name="x" size={16} />} />
      <CloseButton aria-label="Fechar" disabled />
    </Group>
  );
}
