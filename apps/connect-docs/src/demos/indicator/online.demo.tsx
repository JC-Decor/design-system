import { Avatar, Group, Indicator, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const pessoas = [
  { nome: 'Ana Ribeiro', status: 'Disponível', color: 'green', visivel: true },
  { nome: 'Bruno Carvalho', status: 'Em reunião', color: 'yellow', visivel: true },
  { nome: 'Carla Mendes', status: 'De férias', color: 'ink', visivel: false },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {pessoas.map((p) => (
        <Group key={p.nome} gap="sm">
          <Indicator color={p.color} position="bottom-end" offset={6} size={12} withBorder disabled={!p.visivel}>
            <Avatar name={p.nome} color="initials" />
          </Indicator>
          <Stack gap={0}>
            <Text fz="sm" fw={600}>
              {p.nome}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              {p.status}
            </Text>
          </Stack>
        </Group>
      ))}
    </Group>
  );
}
