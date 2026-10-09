import { Textarea } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Textarea
      label="Observações do pedido"
      description="O campo cresce conforme você digita (até 6 linhas)"
      placeholder="Ex.: entregar no período da manhã, interfone 42"
      autosize
      minRows={2}
      maxRows={6}
    />
  );
}
