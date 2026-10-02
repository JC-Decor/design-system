import { BackgroundImage, SimpleGrid, Text } from '@jcdecor/ui';

const categorias = [
  { nome: 'Pisos', seed: 'piso' },
  { nome: 'Painéis ripados', seed: 'painel' },
  { nome: 'Papel de parede', seed: 'parede' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      {categorias.map((cat) => (
        <BackgroundImage key={cat.nome} src={`https://picsum.photos/seed/${cat.seed}/600/400`} h={160}>
          <Text
            fw={600}
            c="white"
            p="md"
            h="100%"
            style={{ display: 'flex', alignItems: 'flex-end', borderRadius: 'inherit', background: 'linear-gradient(0deg, color-mix(in srgb, var(--dc-obsidian) 80%, transparent), transparent 60%)' }}
          >
            {cat.nome}
          </Text>
        </BackgroundImage>
      ))}
    </SimpleGrid>
  );
}
