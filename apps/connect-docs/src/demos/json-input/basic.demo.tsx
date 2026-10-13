import { JsonInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 520 };

export default function Demo() {
  return (
    <JsonInput
      label="Campos extras da admissão"
      description="Formatado automaticamente ao sair do campo"
      placeholder='{ "tamanhoUniforme": "M" }'
      validationError="JSON inválido — confira vírgulas e aspas"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
