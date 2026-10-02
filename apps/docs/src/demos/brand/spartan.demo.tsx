import { Group, Paper, SpartanHelmet } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl" align="center">
      <SpartanHelmet size={120} />
      <SpartanHelmet size={120} crestColor="danger.6" />
      <SpartanHelmet size={120} crestColor="electric.3" color="obsidian.6" faceColor="obsidian.0" />
      <Paper p="md" bg="horizon.6" radius="md">
        <SpartanHelmet size={96} color="#FFFFFF" crestColor="electric.3" faceColor="horizon.6" />
      </Paper>
    </Group>
  );
}
