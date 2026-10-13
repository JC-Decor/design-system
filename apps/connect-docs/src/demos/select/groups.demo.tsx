import { Select } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data = [
  { group: 'Pessoas & Cultura', items: ['Analista de RH', 'Business Partner', 'Coordenador de DP'] },
  { group: 'Tecnologia', items: ['Desenvolvedor Front-end', 'Analista de Dados', 'Product Manager'] },
  { group: 'Operações', items: ['Supervisor de Logística', 'Assistente Administrativo', 'Comprador'] },
];

export default function Demo() {
  return <Select label="Cargo" placeholder="Escolha um cargo" data={data} searchable />;
}
