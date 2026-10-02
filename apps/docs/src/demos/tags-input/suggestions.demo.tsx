import { TagsInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const sugestoes = ['lançamento', 'mais vendido', 'antimofo', 'lavável', 'autocolante', 'acústico', 'antiderrapante', 'pet friendly'];

export default function Demo() {
  return (
    <TagsInput
      label="Selos de destaque"
      placeholder="Escolha ou crie um selo"
      data={sugestoes}
      defaultValue={['lançamento']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
