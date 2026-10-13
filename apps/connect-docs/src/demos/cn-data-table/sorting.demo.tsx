import { DataTable, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Saldo {
  id: number;
  nome: string;
  equipe: string;
  horas: number;
  diasFerias: number;
}

const rows: Saldo[] = [
  { id: 1, nome: 'Ana Souza', equipe: 'Recursos Humanos', horas: 12.5, diasFerias: 30 },
  { id: 2, nome: 'Bruno Lima', equipe: 'Expedição', horas: -3, diasFerias: 0 },
  { id: 3, nome: 'Carla Dias', equipe: 'Comercial', horas: 41, diasFerias: 15 },
  { id: 4, nome: 'Diego Martins', equipe: 'Tecnologia', horas: 7.25, diasFerias: 20 },
  { id: 5, nome: 'Érica Nunes', equipe: 'Financeiro', horas: 0, diasFerias: 10 },
];

const fmtHoras = (h: number) => `${h < 0 ? '−' : ''}${Math.floor(Math.abs(h))}h${String(Math.round((Math.abs(h) % 1) * 60)).padStart(2, '0')}`;

const columns: TableColumn<Saldo>[] = [
  { label: 'Colaborador', key: 'nome', sortable: true },
  { label: 'Equipe', key: 'equipe', sortable: true },
  {
    label: 'Banco de horas',
    key: 'horas',
    sortable: true,
    align: 'right',
    render: (r) => <span style={{ color: r.horas < 0 ? 'var(--ds-error)' : undefined, fontVariantNumeric: 'tabular-nums' }}>{fmtHoras(r.horas)}</span>,
  },
  { label: 'Férias a vencer', key: 'diasFerias', sortable: true, align: 'right', render: (r) => `${r.diasFerias} dias` },
];

export default function Demo() {
  return <DataTable aria-label="Banco de horas" columns={columns} rows={rows} getRowId={(r) => r.id} sortable dense />;
}
