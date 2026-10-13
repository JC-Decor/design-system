import { useState } from 'react';
import { Box, ConnectShell, GlobalSearchBox, HeaderAction, Paper, Text, type Perspective } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

const perspective: Perspective = {
  key: 'gestor',
  label: 'Visão Gestor',
  user: { name: 'Rafael Torres', role: 'Gestor', seed: 'RT', tone: 'blue' },
  nav: {
    primary: [
      { key: 'g.home', icon: 'home', label: 'Início' },
      { key: 'g.team', icon: 'users', label: 'Minha equipe' },
      { key: 'g.feed', icon: 'chat', label: 'Feedbacks', badge: 2 },
      { key: 'g.ferias', icon: 'palm', label: 'Férias e ausências' },
      { key: 'g.ponto', icon: 'clock', label: 'Ponto da equipe' },
    ],
    secondary: [{ key: 'g.alertas', icon: 'bell', label: 'Alertas' }],
  },
};

export default function Demo() {
  const [active, setActive] = useState('g.team');
  const label = perspective.nav.primary.find((i) => i.key === active)?.label ?? 'Alertas';

  return (
    <Box maw={390} mx="auto" my="md" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 20, overflow: 'hidden' }}>
      {/* forceMobile: gaveta + hambúrguer mesmo em tela larga (aqui, para simular um celular) */}
      <ConnectShell
        mode="static"
        h={640}
        forceMobile
        perspective={perspective}
        activeKey={active}
        onNavigate={setActive}
        headerTitle={label}
        breadcrumb={['Visão Gestor', label]}
        headerProps={{ search: <GlobalSearchBox />, actions: <HeaderAction icon="bell" label="Notificações" badge={5} /> }}
      >
        <Paper withBorder radius="lg" p="lg">
          <Text fw={700}>Toque no ☰ para abrir o menu</Text>
          <Text fz="sm" c="var(--ds-text-3)" mt={4}>
            A gaveta fecha ao escolher um item, ao tocar no fundo escurecido ou com Esc.
          </Text>
        </Paper>
      </ConnectShell>
    </Box>
  );
}
