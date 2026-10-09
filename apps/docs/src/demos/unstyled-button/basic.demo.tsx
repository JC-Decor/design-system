import { Group, Text, UnstyledButton } from '@jcdecor/ui';
import { IconRuler } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <UnstyledButton onClick={() => undefined}>
      <Group gap="xs">
        <IconRuler size={18} color="var(--ds-primary)" />
        <Text fz="sm" fw={500} c="var(--ds-primary)">
          Calcular quantidade de m²
        </Text>
      </Group>
    </UnstyledButton>
  );
}
