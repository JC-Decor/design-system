import { AppHeader, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

export default function Demo() {
  return (
    <Stack gap={0}>
      {/* Só o título */}
      <AppHeader title="Início" withThemeToggle={false} />
      {/* Usuário sem menu (chip estático) e foto */}
      <AppHeader
        title="Meus documentos"
        breadcrumb={['Visão Colaborador', 'Documentos']}
        user={{ name: 'Ana Souza', role: 'Analista de RH', seed: 'AS', tone: 'green', picture: 'https://i.pravatar.cc/80?img=45' }}
      />
    </Stack>
  );
}
