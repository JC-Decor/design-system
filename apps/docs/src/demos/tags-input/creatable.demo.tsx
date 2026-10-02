import { TagsInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <TagsInput
      label="Tags do produto"
      description="Digite e pressione Enter ou vírgula para criar uma tag"
      placeholder="Nova tag"
      defaultValue={['impermeável', 'fácil instalação']}
      splitChars={[',', 'Enter']}
      clearable
    />
  );
}
