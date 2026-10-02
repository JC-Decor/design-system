import { Group, JcLogo, Paper } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Group gap="md" grow>
      <Paper p="lg" bg="obsidian.6">
        <JcLogo size={40} variant="dark" shieldColor="electric.3" />
      </Paper>
      <Paper p="lg" bg="electric.3">
        <JcLogo size={40} color="obsidian.6" />
      </Paper>
      <Paper p="lg" withBorder>
        <JcLogo size={40} shieldColor="horizon.6" lettersColor="obsidian.6" wordmarkColor="var(--ds-text)" />
      </Paper>
      <Paper p="lg" withBorder>
        <JcLogo size={40} color="var(--ds-text)" />
      </Paper>
    </Group>
  );
}
