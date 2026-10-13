import { useState } from 'react';
import { Textarea } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

const LIMITE = 280;

export default function Demo() {
  const [value, setValue] = useState('Ótima condução da reunião de alinhamento com a equipe de Logística.');
  const restante = LIMITE - value.length;

  return (
    <Textarea
      label="Feedback para Mariana"
      description={`${restante} caracteres restantes`}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value.slice(0, LIMITE))}
      error={value.trim().length < 10 ? 'Escreva pelo menos 10 caracteres' : undefined}
      autosize
      minRows={3}
    />
  );
}
