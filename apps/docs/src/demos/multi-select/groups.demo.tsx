import { MultiSelect } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const data = [
  { group: 'Ambiente', items: ['Sala', 'Quarto', 'Cozinha', 'Banheiro', 'Área externa'] },
  { group: 'Estilo', items: ['Moderno', 'Rústico', 'Escandinavo', 'Industrial'] },
];

export default function Demo() {
  return <MultiSelect label="Filtrar inspirações" placeholder="Ambiente e estilo" data={data} defaultValue={['Sala', 'Escandinavo']} searchable />;
}
