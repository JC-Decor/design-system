import { useState } from 'react';
import { AppSidebar, Box, Group, Text, type Perspective } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

const perspective: Perspective = {
  key: 'colab',
  label: 'Visão Colaborador',
  user: { name: 'Ana Souza', role: 'Analista de RH', seed: 'AS', tone: 'green' },
  nav: {
    primary: [
      { key: 'c.home', icon: 'home', label: 'Início' },
      { key: 'c.ponto', icon: 'clock', label: 'Meu ponto' },
      { key: 'c.ferias', icon: 'palm', label: 'Minhas férias' },
      { key: 'c.uniformes', icon: 'shirt', label: 'Uniformes' },
    ],
    secondary: [{ key: 'c.ajuda', icon: 'help', label: 'Ajuda' }],
  },
};

export default function Demo() {
  const [active, setActive] = useState('c.ponto');

  return (
    <Group gap={0} align="stretch" h={460}>
      {/* Gradiente próprio, marca personalizada e sem rodapé */}
      <AppSidebar
        perspective={perspective}
        activeKey={active}
        onNavigate={setActive}
        width={232}
        primary="linear-gradient(180deg, #07016B 0%, #33218D 100%)"
        logo={
          <Text fw={700} fz={18} c="white" lts="-0.01em">
            Connect<span style={{ opacity: 0.6 }}> JC</span>
          </Text>
        }
        footer={null}
      />
      {/* Modo gaveta (mobile): largura fluida e botão de fechar */}
      <Box w={280} style={{ borderLeft: '1px solid rgba(255,255,255,.12)' }}>
        <AppSidebar perspective={perspective} activeKey={active} onNavigate={setActive} isDrawer onClose={() => {}} id="sidebar-gaveta" />
      </Box>
    </Group>
  );
}
