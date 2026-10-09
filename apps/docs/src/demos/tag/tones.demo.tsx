import { Tag, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tag tone="success" withIcon>Sucesso</Tag>
      <Tag tone="warn" withIcon>Atenção</Tag>
      <Tag tone="error" withIcon>Erro</Tag>
      <Tag tone="primary">Info</Tag>
      <Tag tone="neutral">Neutro</Tag>
    </Group>
  );
}
