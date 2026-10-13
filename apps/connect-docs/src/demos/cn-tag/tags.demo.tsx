import { Group, Stack, Tag } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      <Group>
        <Tag>CLT</Tag>
        <Tag tone="lavender">Gestor</Tag>
        <Tag tone="blue">Remoto</Tag>
        <Tag tone="green">Efetivado</Tag>
        <Tag tone="yellow">Experiência</Tag>
        <Tag tone="coral">Aviso prévio</Tag>
        <Tag tone="ink">Estagiário</Tag>
      </Group>
    </Stack>
  );
}
