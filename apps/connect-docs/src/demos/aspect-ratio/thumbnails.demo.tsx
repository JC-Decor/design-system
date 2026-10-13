import { AspectRatio, Image, SimpleGrid, Text } from '@jcdecor/connect-ui';

const treinamentos = [
  { nome: 'Integração de novos colaboradores', seed: 'integracao' },
  { nome: 'Segurança no trabalho', seed: 'seguranca' },
  { nome: 'Feedback e 1:1', seed: 'feedback' },
  { nome: 'Liderança de equipes', seed: 'lideranca' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} spacing="md" w="100%">
      {treinamentos.map((t) => (
        <div key={t.seed}>
          <AspectRatio ratio={1}>
            <Image src={`https://picsum.photos/seed/${t.seed}/600/400`} alt={t.nome} radius="md" />
          </AspectRatio>
          <Text fz="sm" fw={600} mt="xs">
            {t.nome}
          </Text>
        </div>
      ))}
    </SimpleGrid>
  );
}
