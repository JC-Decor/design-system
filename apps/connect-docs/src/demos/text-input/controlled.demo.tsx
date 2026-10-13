import { useState } from 'react';
import { CloseButton, Icon, TextInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [value, setValue] = useState('Mariana');

  return (
    <TextInput
      label="Buscar colaborador"
      description={value ? `Mostrando resultados para “${value}”` : 'Digite nome, cargo ou matrícula'}
      placeholder="Ex.: Mariana Costa"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      leftSection={<Icon name="search" size={16} />}
      rightSection={value ? <CloseButton size="sm" aria-label="Limpar busca" onClick={() => setValue('')} /> : null}
    />
  );
}
