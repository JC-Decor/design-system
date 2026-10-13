import { Image, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      <Image src="https://picsum.photos/seed/integracao/600/400" alt="Turma de integração de novos colaboradores" />
      <Image src="https://picsum.photos/seed/workshop/600/400" alt="Workshop de liderança na sede" />
      <Image src="https://picsum.photos/seed/voluntariado/600/400" alt="Equipe em ação de voluntariado" />
    </SimpleGrid>
  );
}
