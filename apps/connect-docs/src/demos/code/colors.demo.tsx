import { Code, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Code>status: rascunho</Code>
      <Code color="var(--cn-tone-yellow-bg)" c="var(--cn-tone-yellow-fg)">
        status: pendente
      </Code>
      <Code color="var(--cn-tone-green-bg)" c="var(--cn-tone-green-fg)">
        status: ativo
      </Code>
      <Code color="var(--cn-tone-coral-bg)" c="var(--cn-tone-coral-fg)">
        status: atrasado
      </Code>
    </Group>
  );
}
