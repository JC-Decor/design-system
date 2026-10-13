import { BackgroundImage, SimpleGrid, Text } from '@jcdecor/connect-ui';

const unidades = [
  { nome: 'Sede · São Paulo', seed: 'escritorio' },
  { nome: 'Centro de distribuição', seed: 'galpao' },
  { nome: 'Fábrica · Joinville', seed: 'fabrica' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      {unidades.map((unidade) => (
        <BackgroundImage key={unidade.nome} src={`https://picsum.photos/seed/${unidade.seed}/600/400`} h={160}>
          <Text
            fw={600}
            c="white"
            p="md"
            h="100%"
            style={{ display: 'flex', alignItems: 'flex-end', borderRadius: 'inherit', background: 'linear-gradient(0deg, color-mix(in srgb, var(--cn-navy-900) 80%, transparent), transparent 60%)' }}
          >
            {unidade.nome}
          </Text>
        </BackgroundImage>
      ))}
    </SimpleGrid>
  );
}
