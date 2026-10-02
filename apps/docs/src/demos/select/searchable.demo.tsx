import { Select } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const categorias = ['Pisos vinílicos', 'Papel de parede', 'Painéis ripados', 'Grama sintética', 'Cortinas', 'Tatames', 'Carpetes'];

export default function Demo() {
  return (
    <Select
      label="Categoria"
      placeholder="Busque uma categoria"
      data={categorias}
      searchable
      nothingFoundMessage="Nenhuma categoria encontrada"
    />
  );
}
