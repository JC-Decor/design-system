import { JsonInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 520 };

export default function Demo() {
  return (
    <JsonInput
      label="Configuração do banner"
      description="Formatado automaticamente ao sair do campo"
      placeholder='{ "titulo": "Semana do Piso" }'
      validationError="JSON inválido — confira vírgulas e aspas"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
