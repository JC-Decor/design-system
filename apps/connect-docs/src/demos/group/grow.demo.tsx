import { Button, Group, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 520 };

export default function Demo() {
  return (
    <Stack gap="lg" w="100%">
      <div>
        <Text fz="xs" c="var(--ds-text-3)" mb={4}>
          grow
        </Text>
        <Group grow>
          <Button variant="ghost">Recusar</Button>
          <Button>Aprovar férias</Button>
        </Group>
      </div>
      <div>
        <Text fz="xs" c="var(--ds-text-3)" mb={4}>
          grow + preventGrowOverflow={'{false}'}
        </Text>
        <Group grow preventGrowOverflow={false} wrap="nowrap">
          <Button variant="ghost">Voltar</Button>
          <Button>Enviar solicitação ao gestor</Button>
        </Group>
      </div>
    </Stack>
  );
}
