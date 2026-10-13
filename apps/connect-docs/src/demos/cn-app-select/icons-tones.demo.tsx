import { useState } from 'react';
import { AppSelect, SimpleGrid } from '@jcdecor/connect-ui';

export default function Demo() {
  const [status, setStatus] = useState('pendente');
  const [tipo, setTipo] = useState('ferias');

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
      <AppSelect
        label="Status da meta"
        value={status}
        onChange={setStatus}
        options={[
          { value: 'ativo', label: 'Em andamento', icon: 'target', tone: 'green' },
          { value: 'pendente', label: 'Aguardando gestor', icon: 'clock', tone: 'yellow' },
          { value: 'atrasado', label: 'Atrasada', icon: 'fire', tone: 'coral' },
          { value: 'concl', label: 'Concluída', icon: 'check', tone: 'blue' },
          { value: 'pausado', label: 'Pausada', icon: 'minus', tone: 'lavender', disabled: true },
        ]}
      />
      <AppSelect
        label="Tipo de ausência"
        value={tipo}
        onChange={setTipo}
        options={[
          { value: 'ferias', label: 'Férias', icon: 'palm' },
          { value: 'banco', label: 'Folga do banco de horas', icon: 'clock' },
          { value: 'atestado', label: 'Atestado médico', icon: 'doc' },
          { value: 'aniversario', label: 'Folga de aniversário', icon: 'cake' },
        ]}
      />
    </SimpleGrid>
  );
}
