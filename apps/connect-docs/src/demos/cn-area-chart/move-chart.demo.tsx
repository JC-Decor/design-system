import { MoveChart } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

const movimentacao = [
  { m: 'Mai', admissoes: 14, desligamentos: 6, ativo: 231 },
  { m: 'Jun', admissoes: 18, desligamentos: 9, ativo: 240 },
  { m: 'Jul', admissoes: 11, desligamentos: 5, ativo: 246 },
  { m: 'Ago', admissoes: 22, desligamentos: 8, ativo: 260 },
  { m: 'Set', admissoes: 16, desligamentos: 12, ativo: 264 },
  { m: 'Out', admissoes: 25, desligamentos: 7, ativo: 282 },
];

export default function Demo() {
  return <MoveChart data={movimentacao} onPeriodClick={() => {}} />;
}
