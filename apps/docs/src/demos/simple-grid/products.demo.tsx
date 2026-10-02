import { Card, Image, SimpleGrid, Text } from '@jcdecor/ui';

const produtos = [
  { nome: 'Piso vinílico Carvalho', preco: 'R$ 89,90/m²', seed: 'piso' },
  { nome: 'Papel de parede Linho', preco: 'R$ 129,90', seed: 'papel' },
  { nome: 'Painel ripado Freijó', preco: 'R$ 349,90', seed: 'painel' },
  { nome: 'Grama sintética 32 mm', preco: 'R$ 59,90/m²', seed: 'grama' },
  { nome: 'Cortina blackout Areia', preco: 'R$ 219,90', seed: 'blackout' },
  { nome: 'Carpete Cinza Mescla', preco: 'R$ 74,90/m²', seed: 'carpete' },
];

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }} spacing="lg" verticalSpacing="lg" w="100%">
      {produtos.map((p) => (
        <Card key={p.seed} padding="md">
          <Card.Section>
            <Image src={`https://picsum.photos/seed/${p.seed}/600/400`} alt={p.nome} h={140} />
          </Card.Section>
          <Text fw={600} mt="md">
            {p.nome}
          </Text>
          <Text fz="sm" c="var(--ds-primary)" fw={600}>
            {p.preco}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
}
