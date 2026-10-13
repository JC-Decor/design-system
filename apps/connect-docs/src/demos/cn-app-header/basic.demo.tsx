import { AppHeader, GlobalSearchBox, HeaderAction } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

export default function Demo() {
  return (
    <AppHeader
      title="Colaboradores"
      subtitle="248 ativos · atualizado às 08:12"
      breadcrumb={['Visão RH', 'Pessoas', 'Colaboradores']}
      search={<GlobalSearchBox />}
      actions={
        <>
          <HeaderAction icon="bell" label="Notificações" badge={3} />
          <HeaderAction icon="help" label="Ajuda" />
        </>
      }
      user={{ name: 'Marina Costa', role: 'Gerente de RH', seed: 'MC', tone: 'lavender' }}
      userMenuItems={[
        { key: 'perfil', label: 'Meu perfil', icon: 'user', onSelect: () => {} },
        { key: 'prefs', label: 'Preferências', icon: 'gear', onSelect: () => {} },
        { key: 'sep', type: 'separator' },
        { key: 'sair', label: 'Sair', icon: 'x', tone: 'danger', onSelect: () => {} },
      ]}
    />
  );
}
