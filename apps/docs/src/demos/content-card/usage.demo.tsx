import { ContentCard, Button } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, background: 'page', maxWidth: 360 };

export default function Demo() {
  return (
    <ContentCard kicker="Exemplo" title="Card de conteúdo" actions={<Button size="sm">Abrir</Button>}>
      Superfície branca sobre o fundo LightGray, borda suave e sombra pequena.
    </ContentCard>
  );
}
