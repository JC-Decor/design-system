import { MultiSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const departamentos = ['Pessoas & Cultura', 'Tecnologia', 'Financeiro', 'Comercial', 'Jurídico', 'Operações', 'Marketing'];

export default function Demo() {
  return (
    <MultiSelect
      label="Destinatários do comunicado"
      placeholder="Busque departamentos"
      data={departamentos}
      defaultValue={['Tecnologia', 'Operações']}
      searchable
      clearable
      nothingFoundMessage="Nenhum departamento encontrado"
    />
  );
}
