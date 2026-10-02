import { Autocomplete } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const data = [
  { group: 'Buscas recentes', items: ['Rodapé branco', 'Cola para papel de parede'] },
  { group: 'Mais buscados', items: ['Piso vinílico', 'Painel ripado', 'Grama sintética'] },
];

export default function Demo() {
  return <Autocomplete label="Buscar" placeholder="Digite um produto" data={data} />;
}
