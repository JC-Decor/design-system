import { useState } from 'react';
import { AppSidebar, Box, type Perspective } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

const perspective: Perspective = {
  key: 'rh',
  label: 'Visão RH',
  user: { name: 'Marina Costa', role: 'Gerente de RH', seed: 'MC', tone: 'lavender' },
  nav: {
    primary: [
      { key: 'rh.home', icon: 'home', label: 'Início' },
      { key: 'rh.agenda', icon: 'calendar', label: 'Agenda' },
      {
        key: 'rh.pessoas',
        icon: 'users',
        label: 'Pessoas',
        children: [
          { key: 'rh.colab', label: 'Colaboradores' },
          { key: 'rh.metas', label: 'Metas' },
          { key: 'rh.vagas', label: 'Solicitações de vagas', badge: 3 },
          { key: 'rh.ferias', label: 'Férias' },
          { key: 'rh.ponto', label: 'Ponto' },
        ],
      },
      {
        key: 'rh.docs',
        icon: 'doc',
        label: 'Documentos',
        children: [
          { key: 'rh.docs.cargos', label: 'Descrição de cargos' },
          { key: 'rh.docs.assinaturas', label: 'Assinaturas' },
        ],
      },
    ],
    secondary: [
      { key: 'rh.relat', icon: 'chart', label: 'Relatórios' },
      { key: 'rh.com', icon: 'megaphone', label: 'Comunicações' },
      { key: 'rh.alertas', icon: 'bell', label: 'Alertas', badge: 12 },
      { key: 'rh.ajuda', icon: 'help', label: 'Ajuda' },
    ],
  },
};

export default function Demo() {
  const [active, setActive] = useState('rh.ferias');

  return (
    <Box h={720}>
      <AppSidebar perspective={perspective} activeKey={active} onNavigate={setActive} />
    </Box>
  );
}
