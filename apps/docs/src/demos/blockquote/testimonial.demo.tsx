import { Blockquote } from '@jcdecor/ui';
import { IconQuote } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 560 };

export default function Demo() {
  return (
    <Blockquote icon={<IconQuote size={20} />} cite="— Mariana Souza, cliente desde 2023 · São Paulo, SP" mt="lg">
      Reformei a sala inteira com o painel ripado e o piso vinílico da JC Decor. A entrega chegou antes do prazo e o atendimento me ajudou a
      calcular a quantidade certa — não sobrou nem faltou nada.
    </Blockquote>
  );
}
