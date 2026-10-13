import { MultiSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const data = [
  { group: 'Unidade', items: ['São Paulo', 'Campinas', 'Curitiba', 'Remoto'] },
  { group: 'Regime', items: ['CLT', 'PJ', 'Estágio', 'Jovem aprendiz'] },
];

export default function Demo() {
  return <MultiSelect label="Filtrar colaboradores" placeholder="Unidade e regime" data={data} defaultValue={['São Paulo', 'CLT']} searchable />;
}
