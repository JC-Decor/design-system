import { Blockquote, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 560 };

export default function Demo() {
  return (
    <Blockquote icon={<Icon name="chat" size={18} />} cite="— Paula Andrade, gestora de Gente & Gestão · feedback 1:1 de setembro" mt="lg">
      A integração dos novos analistas foi a melhor que já tivemos: roteiro claro, padrinhos definidos e todo mundo produtivo na primeira
      semana. Vamos usar o seu modelo nas outras áreas.
    </Blockquote>
  );
}
