import { Image, SimpleGrid, Text } from '@jcdecor/connect-ui';

const FALLBACK = 'https://placehold.co/600x400/F3F2FA/6B6F85?text=Sem+imagem';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <div>
        <Image src="https://picsum.photos/seed/treinamento/600/400" fallbackSrc={FALLBACK} h={180} alt="Capa do treinamento de segurança" />
        <Text fz="sm" c="var(--ds-text-3)" mt="xs">
          Imagem carregada
        </Text>
      </div>
      <div>
        <Image src={null} fallbackSrc={FALLBACK} h={180} alt="Comunicado sem imagem de capa" />
        <Text fz="sm" c="var(--ds-text-3)" mt="xs">
          Sem capa: usa fallbackSrc
        </Text>
      </div>
    </SimpleGrid>
  );
}
