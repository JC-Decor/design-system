import { Group, SpartanHelmet } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

// Monocromático: mesma cor no traço e na crista, face transparente
export default function Demo() {
  return (
    <Group gap="xl">
      {['horizon.6', 'obsidian.6', 'evergreen.6', 'var(--ds-text)'].map((c) => (
        <SpartanHelmet key={c} size={72} color={c} crestColor={c} faceColor="transparent" />
      ))}
    </Group>
  );
}
