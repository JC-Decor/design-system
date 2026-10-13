import { useState } from 'react';
import { AppSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 320 };

export default function Demo() {
  const [equipe, setEquipe] = useState('');

  return (
    <AppSelect
      label="Equipe"
      placeholder="Selecione a equipe..."
      value={equipe}
      onChange={setEquipe}
      helperText="O gestor da equipe aprova as solicitações."
      options={[
        { value: 'comercial', label: 'Comercial' },
        { value: 'expedicao', label: 'Expedição' },
        { value: 'financeiro', label: 'Financeiro' },
        { value: 'rh', label: 'Recursos Humanos' },
        { value: 'ti', label: 'Tecnologia' },
      ]}
    />
  );
}
