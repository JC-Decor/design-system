import { MultiSelect } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

export default function Demo() {
  return (
    <MultiSelect
      label="Categorias de interesse"
      placeholder="Busque categorias"
      data={categorias}
      defaultValue={['Pisos vinílicos', 'Cortinas']}
      searchable
      clearable
      nothingFoundMessage="Nenhuma categoria encontrada"
    />
  );
}
