import { Card, Group, Image, ScrollArea, Text } from '@jcdecor/ui';

const ambientes = ['sala', 'quarto', 'cozinha', 'escritorio', 'varanda', 'banheiro', 'closet', 'jardim'];

export default function Demo() {
  return (
    <ScrollArea type="always" scrollbars="x" offsetScrollbars w="100%">
      <Group wrap="nowrap" gap="md">
        {ambientes.map((ambiente) => (
          <Card key={ambiente} padding="sm" w={180} style={{ flexShrink: 0 }}>
            <Card.Section>
              <Image src={`https://picsum.photos/seed/${ambiente}/600/400`} alt={ambiente} h={110} />
            </Card.Section>
            <Text fw={600} fz="sm" mt="sm" tt="capitalize">
              {ambiente}
            </Text>
          </Card>
        ))}
      </Group>
    </ScrollArea>
  );
}
