import { ContentCard, Button } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page', maxWidth: 360 };

export default function Demo() {
  return (
    <ContentCard
      image="https://picsum.photos/seed/painel/600/600"
      imageAlt="Sala com painel ripado de madeira"
      imageHeight={200}
      kicker="Inspiração"
      title="Painel ripado na sala de TV"
      actions={
        <>
          <Button size="sm">Ver produtos</Button>
          <Button size="sm" variant="subtle">Salvar</Button>
        </>
      }
    >
      Ripas de Freijó criam profundidade e escondem a fiação da TV em uma tarde de instalação.
    </ContentCard>
  );
}
