import { Avatar, GreekFrame, SimpleGrid, Stack, Text } from '@jcdecor/ui';

const team = [
  { name: 'Ana Souza', role: 'Atendimento', img: 47 },
  { name: 'Bruno Lima', role: 'Instalação', img: 12 },
  { name: 'Carla Dias', role: 'Projetos', img: 32 },
  { name: 'Diego Rocha', role: 'Logística', img: 53 },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} spacing="lg">
      {team.map((p) => (
        <Stack key={p.name} align="center" gap={6}>
          <GreekFrame size={112}>
            <Avatar src={`https://i.pravatar.cc/240?img=${p.img}`} size="100%" radius="50%" alt={p.name} />
          </GreekFrame>
          <Text fw={600} fz="sm">{p.name}</Text>
          <Text fz="xs" c="dimmed">{p.role}</Text>
        </Stack>
      ))}
    </SimpleGrid>
  );
}
