import { Group, PersonAvatar } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const people = [
  { seed: 'AS', tone: 'blue' },
  { seed: 'RM', tone: 'lavender' },
  { seed: 'JL', tone: 'green' },
  { seed: 'CF', tone: 'yellow' },
  { seed: 'BP', tone: 'coral' },
  { seed: 'TN', tone: 'ink' },
] as const;

export default function Demo() {
  return (
    <Group>
      {people.map((p) => (
        <PersonAvatar key={p.seed} seed={p.seed} tone={p.tone} />
      ))}
    </Group>
  );
}
