import { useState } from 'react';
import { Textarea } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const LIMITE = 280;

export default function Demo() {
  const [value, setValue] = useState('Instalaram o piso em um dia, acabamento impecável.');
  const restante = LIMITE - value.length;

  return (
    <Textarea
      label="Conte como foi sua experiência"
      description={`${restante} caracteres restantes`}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value.slice(0, LIMITE))}
      error={value.trim().length < 10 ? 'Escreva pelo menos 10 caracteres' : undefined}
      autosize
      minRows={3}
    />
  );
}
