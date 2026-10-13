import { useState } from 'react';
import { TagsInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [value, setValue] = useState<string[]>(['liderança', 'inglês']);

  return (
    <TagsInput
      label="Áreas de desenvolvimento do PDI"
      description={`${value.length} de 4 áreas`}
      placeholder={value.length >= 4 ? undefined : 'Adicionar área'}
      value={value}
      onChange={setValue}
      maxTags={4}
      data={['liderança', 'inglês', 'negociação', 'oratória', 'análise de dados', 'gestão de projetos']}
    />
  );
}
