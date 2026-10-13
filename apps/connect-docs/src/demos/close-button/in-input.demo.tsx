import { useState } from 'react';
import { CloseButton, Icon, TextInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

export default function Demo() {
  const [value, setValue] = useState('Marina');

  return (
    <TextInput
      label="Buscar colaborador"
      placeholder="Nome, cargo ou matrícula"
      leftSection={<Icon name="search" size={16} />}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value ? <CloseButton aria-label="Limpar busca" onClick={() => setValue('')} /> : null}
    />
  );
}
