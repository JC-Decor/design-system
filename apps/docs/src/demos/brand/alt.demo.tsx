import { Group, JcLogoAlt, Paper } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="lg" align="center">
      <JcLogoAlt size={72} />
      <JcLogoAlt size={72} color="horizon.6" strokeColor="none" />
      <JcLogoAlt size={72} color="obsidian.6" lettersColor="electric.3" strokeColor="none" />
      <Paper p="md" bg="obsidian.6" radius="md">
        <JcLogoAlt size={56} variant="dark" lettersColor="obsidian.6" />
      </Paper>
    </Group>
  );
}
