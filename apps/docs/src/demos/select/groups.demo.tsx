import { Select } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const data = [
  { group: 'Pisos', items: ['Vinílico em régua', 'Vinílico autocolante', 'Laminado'] },
  { group: 'Paredes', items: ['Papel de parede', 'Painel ripado', 'Rodapé'] },
  { group: 'Decoração', items: ['Cortina blackout', 'Persiana rolô', 'Tapete'] },
];

export default function Demo() {
  return <Select label="Produto" placeholder="Escolha um produto" data={data} searchable />;
}
