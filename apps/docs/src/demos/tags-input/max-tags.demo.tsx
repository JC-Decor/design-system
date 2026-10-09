import { useState } from 'react';
import { TagsInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [value, setValue] = useState<string[]>(['sala', 'quarto']);

  return (
    <TagsInput
      label="Ambientes do projeto"
      description={`${value.length} de 4 ambientes`}
      placeholder={value.length >= 4 ? undefined : 'Adicionar ambiente'}
      value={value}
      onChange={setValue}
      maxTags={4}
      data={['sala', 'quarto', 'cozinha', 'banheiro', 'varanda', 'escritório']}
    />
  );
}
