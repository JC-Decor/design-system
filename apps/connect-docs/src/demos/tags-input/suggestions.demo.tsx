import { TagsInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const sugestoes = ['urgente', 'benefícios', 'férias', 'folha de pagamento', 'onboarding', 'treinamento', 'saúde', 'evento'];

export default function Demo() {
  return (
    <TagsInput
      label="Etiquetas do comunicado"
      placeholder="Escolha ou crie uma etiqueta"
      data={sugestoes}
      defaultValue={['benefícios']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
