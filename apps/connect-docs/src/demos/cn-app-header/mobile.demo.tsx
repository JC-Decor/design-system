import { useState } from 'react';
import { AppHeader, Box, GlobalSearchBox, HeaderAction } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

export default function Demo() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box maw={420} mx="auto" style={{ borderInline: '1px solid var(--ds-border-soft)' }}>
      <AppHeader
        title="Férias"
        breadcrumb={['Visão Gestor', 'Férias e ausências']}
        showMenuButton
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((v) => !v)}
        search={<GlobalSearchBox />}
        actions={<HeaderAction icon="bell" label="Notificações" badge={12} />}
        user={{ name: 'Rafael Torres', role: 'Gestor', seed: 'RT', tone: 'blue' }}
        userMenuItems={[{ key: 'sair', label: 'Sair', icon: 'x', tone: 'danger', onSelect: () => {} }]}
      />
    </Box>
  );
}
