import { Badge, Group, Stack, Text, priorities, tones, type PrioName } from '@jcdecor/connect-ui';

const tarefas: { titulo: string; prio: PrioName }[] = [
  { titulo: 'Enviar documentos de admissão', prio: 'high' },
  { titulo: 'Agendar feedback 1:1 com a equipe', prio: 'med' },
  { titulo: 'Atualizar foto do perfil', prio: 'low' },
  { titulo: 'Novo comunicado sobre benefícios', prio: 'info' },
];

export default function Demo() {
  return (
    <Stack gap="xs">
      {tarefas.map(({ titulo, prio }) => (
        <Group key={titulo} justify="space-between" wrap="nowrap">
          <Text fz="sm">{titulo}</Text>
          <Badge color={tones[priorities[prio].tone].color}>{priorities[prio].label}</Badge>
        </Group>
      ))}
    </Stack>
  );
}
