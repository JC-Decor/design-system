import { AspectRatio, Image, SimpleGrid, Text } from '@jcdecor/ui';

const produtos = [
  { nome: 'Papel de parede Linho', seed: 'linho' },
  { nome: 'Painel ripado Freijó', seed: 'ripado' },
  { nome: 'Cortina blackout Areia', seed: 'cortina' },
  { nome: 'Tatame EVA 1 m²', seed: 'tatame' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} spacing="md" w="100%">
      {produtos.map((p) => (
        <div key={p.seed}>
          <AspectRatio ratio={1}>
            <Image src={`https://picsum.photos/seed/${p.seed}/600/400`} alt={p.nome} radius="sm" />
          </AspectRatio>
          <Text fz="sm" fw={600} mt="xs">
            {p.nome}
          </Text>
        </div>
      ))}
    </SimpleGrid>
  );
}
