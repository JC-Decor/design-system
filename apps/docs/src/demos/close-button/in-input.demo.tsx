import { useState } from 'react';
import { CloseButton, TextInput } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

export default function Demo() {
  const [value, setValue] = useState('Piso vinílico');

  return (
    <TextInput
      label="Buscar"
      placeholder="O que você procura?"
      leftSection={<IconSearch size={18} />}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value ? <CloseButton aria-label="Limpar busca" onClick={() => setValue('')} /> : null}
    />
  );
}
