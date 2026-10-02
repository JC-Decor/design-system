import { Avatar, Group, Indicator, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const atendentes = [
  { nome: 'Ana Ribeiro', status: 'Online', color: 'evergreen', ativo: true },
  { nome: 'Bruno Carvalho', status: 'Ausente', color: 'electric', ativo: true },
  { nome: 'Carla Mendes', status: 'Offline', color: 'gray', ativo: false },
];

export default function Demo() {
  return (
    <Group gap="xl">
      {atendentes.map((a) => (
        <Group key={a.nome} gap="sm">
          <Indicator color={a.color} position="bottom-end" offset={6} size={12} withBorder disabled={!a.ativo}>
            <Avatar name={a.nome} color="initials" />
          </Indicator>
          <Stack gap={0}>
            <Text fz="sm" fw={600}>
              {a.nome}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              {a.status}
            </Text>
          </Stack>
        </Group>
      ))}
    </Group>
  );
}
