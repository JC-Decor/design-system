import { Paper, SemiCircleProgress, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 320 };

export default function Demo() {
  return (
    <Paper withBorder p="lg">
      <Stack align="center" gap="xs">
        <Text fz="sm" c="var(--ds-text-3)">
          Meta de vendas · loja Campinas
        </Text>
        <SemiCircleProgress
          value={74}
          size={220}
          thickness={16}
          labelPosition="center"
          transitionDuration={250}
          label={
            <Text component="span" fw={700} fz="xl">
              74%
            </Text>
          }
        />
        <Text fz="sm" c="var(--ds-text-2)">
          R$ 184 mil de R$ 250 mil
        </Text>
      </Stack>
    </Paper>
  );
}
