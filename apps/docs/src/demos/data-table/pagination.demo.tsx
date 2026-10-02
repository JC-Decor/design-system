import { DataTable, type DataTableColumn } from '@jcdecor/ui';

interface Keyword {
  keyword: string;
  volume: number;
  position: number;
}

const terms = [
  'piso vinilico autocolante 505', 'piso vinilico clicado', 'piso laminado', 'rodape poliestireno',
  'papel de parede 3d', 'papel de parede infantil', 'papel de parede cozinha', 'painel ripado sala',
  'painel ripado cabeceira', 'grama sintetica 25mm', 'grama sintetica varanda', 'cortina blackout',
  'cortina de linho', 'persiana rolo', 'manta acustica', 'adesivo de azulejo',
];

const data: Keyword[] = terms.map((keyword, i) => ({
  keyword,
  volume: Math.round(127237 / (i + 1)),
  position: Number((1.4 + i * 0.7).toFixed(1)),
}));

const columns: DataTableColumn<Keyword>[] = [
  { key: 'keyword', header: 'Palavra-chave', sortable: true },
  { key: 'volume', header: 'Buscas/mês', numeric: true, sortable: true },
  { key: 'position', header: 'Posição média', numeric: true, sortable: true, format: { minimumFractionDigits: 1 } },
];

export default function Demo() {
  return <DataTable columns={columns} data={data} pageSize={5} rowKey={(row) => row.keyword} />;
}
