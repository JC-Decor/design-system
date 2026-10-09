import { Card, Group, Image, Scroller, Text } from '@jcdecor/ui';

const produtos = ['piso', 'papel', 'painel', 'grama', 'cortina', 'tatame', 'carpete', 'rodape'];

export default function Demo() {
  return (
    <Scroller w="100%" scrollAmount={400} controlSize={40} edgeGradientColor="var(--ds-surface)">
      <Group wrap="nowrap" gap="md" py="xs">
        {produtos.map((p) => (
          <Card key={p} padding="sm" w={200} style={{ flexShrink: 0 }}>
            <Card.Section>
              <Image src={`https://picsum.photos/seed/${p}/600/400`} alt={p} h={120} draggable={false} />
            </Card.Section>
            <Text fw={600} fz="sm" mt="sm" tt="capitalize">
              {p}
            </Text>
          </Card>
        ))}
      </Group>
    </Scroller>
  );
}
