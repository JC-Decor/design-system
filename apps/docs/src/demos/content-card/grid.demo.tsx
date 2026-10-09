import { ContentCard, Button, SimpleGrid } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

const guides = [
  {
    seed: 'vinilico',
    kicker: 'Pisos vinílicos',
    title: 'Clicado ou autocolante?',
    body: 'Compare durabilidade, preço por m² e o tipo de contrapiso ideal para cada um.',
  },
  {
    seed: 'parede',
    kicker: 'Papel de parede',
    title: 'Quantos rolos eu preciso?',
    body: 'Meça altura e largura das paredes e descubra a quantidade certa, com sobra para o encaixe.',
  },
  {
    seed: 'grama',
    kicker: 'Grama sintética',
    title: 'Varanda verde o ano todo',
    body: 'Sem rega e sem poda: veja como preparar a base e fixar as emendas.',
  },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      {guides.map((guide) => (
        <ContentCard
          key={guide.seed}
          image={`https://picsum.photos/seed/${guide.seed}/600/600`}
          imageHeight={160}
          kicker={guide.kicker}
          title={guide.title}
          actions={<Button size="sm" variant="outline">Ler guia</Button>}
        >
          {guide.body}
        </ContentCard>
      ))}
    </SimpleGrid>
  );
}
