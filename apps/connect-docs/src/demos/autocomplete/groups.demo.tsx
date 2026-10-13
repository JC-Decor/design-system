import { Autocomplete } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const data = [
  { group: 'Buscas recentes', items: ['Saldo de férias', 'Aniversariantes do mês'] },
  { group: 'Mais buscados', items: ['Holerite', 'Banco de horas', 'Plano de saúde'] },
];

export default function Demo() {
  return <Autocomplete label="Buscar" placeholder="O que você procura?" data={data} />;
}
