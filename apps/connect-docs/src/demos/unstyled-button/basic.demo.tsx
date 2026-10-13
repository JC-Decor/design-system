import { Group, Icon, Text, UnstyledButton } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <UnstyledButton onClick={() => undefined}>
      <Group gap="xs" c="var(--ds-primary)">
        <Icon name="calendar" size={16} />
        <Text fz="sm" fw={600} c="inherit">
          Ver calendário da equipe
        </Text>
      </Group>
    </UnstyledButton>
  );
}
