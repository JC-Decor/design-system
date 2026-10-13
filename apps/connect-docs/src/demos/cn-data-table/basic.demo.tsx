import { Badge, CellPerson, DataTable, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Colaborador {
  id: number;
  nome: string;
  cargo: string;
  iniciais: string;
  equipe: string;
  admissao: string;
  status: 'Ativo' | 'Férias' | 'Experiência';
}

const statusColor = { Ativo: 'green', Férias: 'blue', Experiência: 'yellow' } as const;

const rows: Colaborador[] = [
  { id: 1, nome: 'Ana Souza', cargo: 'Analista de RH', iniciais: 'AS', equipe: 'Recursos Humanos', admissao: '12/03/2021', status: 'Ativo' },
  { id: 2, nome: 'Bruno Lima', cargo: 'Analista de Logística', iniciais: 'BL', equipe: 'Expedição', admissao: '02/09/2025', status: 'Experiência' },
  { id: 3, nome: 'Carla Dias', cargo: 'Coordenadora Comercial', iniciais: 'CD', equipe: 'Comercial', admissao: '18/07/2019', status: 'Férias' },
  { id: 4, nome: 'Diego Martins', cargo: 'Desenvolvedor', iniciais: 'DM', equipe: 'Tecnologia', admissao: '05/01/2023', status: 'Ativo' },
];

const columns: TableColumn<Colaborador>[] = [
  { label: 'Colaborador', key: 'nome', render: (r) => <CellPerson name={r.nome} role={r.cargo} seed={r.iniciais} tone="lavender" /> },
  { label: 'Equipe', key: 'equipe' },
  { label: 'Admissão', key: 'admissao', w: 120 },
  { label: 'Status', key: 'status', align: 'right', render: (r) => <Badge color={statusColor[r.status]}>{r.status}</Badge> },
];

export default function Demo() {
  return <DataTable aria-label="Colaboradores" columns={columns} rows={rows} getRowId={(r) => r.id} />;
}
