import { Badge, Box, Group, statuses, tones, type StatusName } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group gap="xs">
      {(Object.keys(statuses) as StatusName[]).map((status) => {
        const s = statuses[status];
        return (
          <Badge
            key={status}
            color={tones[s.tone].color}
            leftSection={<Box w={6} h={6} bg={s.dot} style={{ borderRadius: '50%' }} />}
          >
            {s.label}
          </Badge>
        );
      })}
    </Group>
  );
}
