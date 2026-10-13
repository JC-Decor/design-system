import { Badge, DataTable, Group, Text, type TableColumn } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

interface Meta {
  id: string;
  titulo: string;
  dono: string;
  progresso: number;
  checkpoints: string[];
}

const rows: Meta[] = [
  { id: 'm1', titulo: 'Reduzir turnover da Expedição', dono: 'Rafael Torres', progresso: 62, checkpoints: ['Pesquisa de clima aplicada', 'Plano de carreira publicado'] },
  { id: 'm2', titulo: 'Concluir trilha de liderança', dono: 'Carla Dias', progresso: 100, checkpoints: ['Módulos 1 a 6 concluídos', 'Certificado emitido'] },
  { id: 'm3', titulo: 'Implantar avaliação 90°', dono: 'Marina Costa', progresso: 25, checkpoints: [] },
];

const columns: TableColumn<Meta>[] = [
  { label: 'Meta', key: 'titulo' },
  { label: 'Responsável', key: 'dono' },
  { label: 'Progresso', key: 'progresso', align: 'right', render: (r) => <Badge color={r.progresso === 100 ? 'green' : 'blue'}>{r.progresso}%</Badge> },
];

export default function Demo() {
  return (
    <DataTable
      aria-label="Metas do semestre"
      columns={columns}
      rows={rows}
      getRowId={(r) => r.id}
      rowExpandable={(r) => r.checkpoints.length > 0}
      renderExpandedRow={(r) => (
        <Group gap="xs">
          <Text fz="sm" fw={600}>
            Checkpoints:
          </Text>
          {r.checkpoints.map((c) => (
            <Badge key={c} color="ink">
              {c}
            </Badge>
          ))}
        </Group>
      )}
    />
  );
}
