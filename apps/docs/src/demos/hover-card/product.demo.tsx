import { Anchor, Badge, Group, HoverCard, Image, Rating, Stack, Table, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 520, centered: true };

const items = [
  { sku: 'PV-CAR-26', name: 'Piso vinílico Carvalho Natural', seed: 'carvalho', price: 'R$ 249,90', stock: 342, rating: 4.7 },
  { sku: 'PP-FOL-10', name: 'Papel de parede Folhagem', seed: 'folhagem', price: 'R$ 159,90', stock: 0, rating: 4.4 },
];

export default function Demo() {
  return (
    <Table verticalSpacing="sm">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Produto</Table.Th>
          <Table.Th ta="right">Qtd.</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {items.map((item) => (
          <Table.Tr key={item.sku}>
            <Table.Td>
              <HoverCard width={260} position="right" withArrow openDelay={200} closeDelay={100}>
                <HoverCard.Target>
                  <Anchor fz="sm" href="#" onClick={(event) => event.preventDefault()}>
                    {item.name}
                  </Anchor>
                </HoverCard.Target>
                <HoverCard.Dropdown p="sm">
                  <Stack gap="xs">
                    <Image src={`https://picsum.photos/seed/${item.seed}/520/320`} h={120} radius="sm" alt="" />
                    <Text fz="sm" fw={600} lh={1.3}>
                      {item.name}
                    </Text>
                    <Group justify="space-between">
                      <Text fw={700} c="var(--ds-primary)">
                        {item.price}
                      </Text>
                      <Rating value={item.rating} fractions={2} readOnly size="xs" />
                    </Group>
                    <Group justify="space-between">
                      <Text fz="xs" c="var(--ds-text-3)">
                        SKU {item.sku}
                      </Text>
                      {item.stock > 0 ? <Badge color="evergreen">{item.stock} em estoque</Badge> : <Badge color="danger">Esgotado</Badge>}
                    </Group>
                  </Stack>
                </HoverCard.Dropdown>
              </HoverCard>
            </Table.Td>
            <Table.Td ta="right">{item.sku === 'PV-CAR-26' ? 6 : 4}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
