import { Textarea } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <Textarea
      label="Justificativa do ajuste de ponto"
      description="O campo cresce conforme você digita (até 6 linhas)"
      placeholder="Ex.: esqueci de registrar a saída do almoço em 08/10"
      autosize
      minRows={2}
      maxRows={6}
    />
  );
}
