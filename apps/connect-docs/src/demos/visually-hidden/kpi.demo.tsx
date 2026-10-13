import { Badge, Group, Paper, Text, VisuallyHidden } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page' };

export default function Demo() {
  return (
    <Paper withBorder p="lg" miw={240}>
      <Text fz="xs" c="var(--ds-text-3)">
        Colaboradores ativos
      </Text>
      <Group gap="xs" mt={4}>
        <Text fz={26} fw={700}>
          248
        </Text>
        <Badge variant="light" color="green">
          <VisuallyHidden>Aumento de</VisuallyHidden>
          ↑ 3,2%
          <VisuallyHidden>em relação ao mês anterior</VisuallyHidden>
        </Badge>
      </Group>
    </Paper>
  );
}
