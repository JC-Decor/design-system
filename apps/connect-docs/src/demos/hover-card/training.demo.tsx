import { Anchor, Badge, Group, HoverCard, Icon, Progress, Stack, Table, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 520, centered: true };

const trainings = [
  { id: 'nr35', name: 'NR-35 · Trabalho em altura', hours: 8, done: 75, due: '31/10', mandatory: true },
  { id: 'lid', name: 'Liderança e feedback 1:1', hours: 12, done: 30, due: '15/12', mandatory: false },
];

export default function Demo() {
  return (
    <Table verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Treinamento</Table.Th>
          <Table.Th ta="right">Prazo</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {trainings.map((item) => (
          <Table.Tr key={item.id}>
            <Table.Td>
              <HoverCard width={260} position="right" openDelay={200} closeDelay={100}>
                <HoverCard.Target>
                  <Anchor fz="sm" href="#" onClick={(event) => event.preventDefault()}>
                    {item.name}
                  </Anchor>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Stack gap="xs">
                    <Group gap={6}>
                      <Icon name="book" size={16} c="var(--ds-primary)" />
                      <Text fz="sm" fw={600} lh={1.3}>
                        {item.name}
                      </Text>
                    </Group>
                    <Group justify="space-between">
                      <Text fz="xs" c="var(--ds-text-3)">
                        {item.hours}h · prazo {item.due}
                      </Text>
                      {item.mandatory ? (
                        <Badge color="coral" variant="light">
                          Obrigatório
                        </Badge>
                      ) : (
                        <Badge color="lavender" variant="light">
                          Opcional
                        </Badge>
                      )}
                    </Group>
                    <Progress value={item.done} size="sm" aria-label={`${item.done}% concluído`} />
                    <Text fz="xs" c="var(--ds-text-2)">
                      {item.done}% da equipe concluiu
                    </Text>
                  </Stack>
                </HoverCard.Dropdown>
              </HoverCard>
            </Table.Td>
            <Table.Td ta="right">{item.due}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
