import { Image, SimpleGrid, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      {(['cover', 'contain'] as const).map((fit) => (
        <div key={fit}>
          <Image src="https://picsum.photos/seed/luminaria/400/600" h={200} fit={fit} bg="var(--ds-surface-2)" alt="Luminária pendente" />
          <Text fz="sm" c="var(--ds-text-3)" mt="xs">
            fit="{fit}"
          </Text>
        </div>
      ))}
    </SimpleGrid>
  );
}
