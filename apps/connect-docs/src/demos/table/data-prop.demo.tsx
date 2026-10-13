import { Table, type TableData } from '@jcdecor/connect-ui';

const data: TableData = {
  caption: 'Banco de horas por equipe — atualizado hoje às 08:00',
  head: ['Equipe', 'Pessoas', 'Saldo (h)'],
  body: [
    ['Atendimento', 42, '+128,5'],
    ['Financeiro', 18, '+36,0'],
    ['Logística', 96, '−212,0'],
    ['Marketing', 12, '+8,5'],
  ],
};

export default function Demo() {
  return <Table data={data} tabularNums />;
}
