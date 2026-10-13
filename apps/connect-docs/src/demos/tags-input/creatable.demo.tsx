import { TagsInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <TagsInput
      label="Competências"
      description="Digite e pressione Enter ou vírgula para criar uma competência"
      placeholder="Nova competência"
      defaultValue={['comunicação', 'trabalho em equipe']}
      splitChars={[',', 'Enter']}
      clearable
    />
  );
}
