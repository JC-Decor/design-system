import { Table, type TableData } from '@jcdecor/ui';

const data: TableData = {
  caption: 'Estoque por categoria — atualizado hoje às 08:00',
  head: ['Categoria', 'SKUs', 'Unidades'],
  body: [
    ['Pisos vinílicos', 128, '4.210'],
    ['Papel de parede', 342, '9.875'],
    ['Painel ripado', 46, '1.032'],
    ['Cortinas', 87, '2.648'],
  ],
};

export default function Demo() {
  return <Table data={data} tabularNums />;
}
