import { useState } from 'react';
import { CloseButton, TextInput } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [value, setValue] = useState('Painel ripado');

  return (
    <TextInput
      label="Buscar na loja"
      description={value ? `Mostrando resultados para “${value}”` : 'Digite o nome de um produto'}
      placeholder="Ex.: papel de parede"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      leftSection={<IconSearch size={16} />}
      rightSection={value ? <CloseButton size="sm" aria-label="Limpar busca" onClick={() => setValue('')} /> : null}
    />
  );
}
