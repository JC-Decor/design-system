import { Group, StatusBadge } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const statuses = ['ativo', 'pendente', 'atrasado', 'concl', 'rascunho', 'pausado'] as const;

export default function Demo() {
  return (
    <Group justify="center">
      {statuses.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
      <StatusBadge status="pendente">Aguardando gestor</StatusBadge>
    </Group>
  );
}
