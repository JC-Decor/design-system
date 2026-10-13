import { Group, SegmentBar, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 460, centered: true };

const modelo = [
  { label: 'Presencial', value: 112 },
  { label: 'Híbrido', value: 86 },
  { label: 'Remoto', value: 50 },
];

export default function Demo() {
  return (
    <Stack gap="xs">
      <Group justify="space-between">
        <Text fz="sm" fw={600}>Modelo de trabalho</Text>
        <Text fz="sm" c="dimmed">248 colaboradores</Text>
      </Group>
      <SegmentBar segments={modelo} />
      <SegmentBar
        height={12}
        segments={[
          { label: 'Ativos', value: 230, color: 'var(--cn-tone-green-fg)' },
          { label: 'Afastados', value: 12, color: 'var(--cn-tone-yellow-fg)' },
          { label: 'Desligados', value: 6, color: 'var(--cn-tone-coral-fg)' },
        ]}
      />
    </Stack>
  );
}
