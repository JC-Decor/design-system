import { Group, JcLogo, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

// variant="auto" (padrão): azul no tema claro, branco no tema escuro. Alterne o tema no topo da página.
export default function Demo() {
  return (
    <Group gap="xl" align="center">
      <JcLogo size={48} />
      <Text fz="sm" c="dimmed">← muda com o tema</Text>
    </Group>
  );
}
