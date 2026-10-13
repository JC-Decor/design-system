import { Card, SemiCircleProgress, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 320 };

export default function Demo() {
  return (
    <Card>
      <Stack align="center" gap="xs">
        <Text fz="sm" c="var(--ds-text-3)">
          Vagas preenchidas · Q4
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
          37 de 50 contratações
        </Text>
      </Stack>
    </Card>
  );
}
