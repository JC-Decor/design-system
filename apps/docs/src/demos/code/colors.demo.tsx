import { Code, Group } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Code>status: pendente</Code>
      <Code color="var(--ds-tag-primary-bg)" c="var(--ds-tag-primary-color)">
        status: enviado
      </Code>
      <Code color="var(--ds-tag-success-bg)" c="var(--ds-tag-success-color)">
        status: entregue
      </Code>
      <Code color="var(--ds-tag-error-bg)" c="var(--ds-tag-error-color)">
        status: cancelado
      </Code>
    </Group>
  );
}
