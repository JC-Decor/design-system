import { useState } from 'react';
import { AppSidebar, Box, type Perspective, type PerspectiveOption } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

const perspectives: Record<string, Perspective> = {
  rh: {
    key: 'rh',
    label: 'Visão RH',
    user: { name: 'Marina Costa', role: 'Gerente de RH', seed: 'MC', tone: 'lavender' },
    nav: {
      primary: [
        { key: 'rh.home', icon: 'home', label: 'Início' },
        { key: 'rh.colab', icon: 'users', label: 'Colaboradores' },
        { key: 'rh.vagas', icon: 'briefcase', label: 'Vagas', badge: 3 },
      ],
      secondary: [{ key: 'rh.relat', icon: 'chart', label: 'Relatórios' }],
    },
  },
  gestor: {
    key: 'gestor',
    label: 'Visão Gestor',
    user: { name: 'Rafael Torres', role: 'Gestor', seed: 'RT', tone: 'blue' },
    nav: {
      primary: [
        { key: 'g.home', icon: 'home', label: 'Início' },
        { key: 'g.team', icon: 'users', label: 'Minha equipe' },
        { key: 'g.feed', icon: 'chat', label: 'Feedbacks', badge: 2 },
        { key: 'g.ferias', icon: 'palm', label: 'Férias e ausências' },
      ],
      secondary: [{ key: 'g.alertas', icon: 'bell', label: 'Alertas' }],
    },
  },
  colab: {
    key: 'colab',
    label: 'Visão Colaborador',
    user: { name: 'Ana Souza', role: 'Analista de RH', seed: 'AS', tone: 'green' },
    nav: {
      primary: [
        { key: 'c.home', icon: 'home', label: 'Início' },
        { key: 'c.ponto', icon: 'clock', label: 'Meu ponto' },
        { key: 'c.docs', icon: 'doc', label: 'Meus documentos' },
        { key: 'c.trein', icon: 'book', label: 'Treinamentos' },
      ],
      secondary: [],
    },
  },
};

const options: PerspectiveOption[] = [
  { key: 'rh', label: 'Visão RH', userSeed: 'MC', userTone: 'lavender' },
  { key: 'gestor', label: 'Visão Gestor', userSeed: 'RT', userTone: 'blue' },
  { key: 'colab', label: 'Visão Colaborador', userSeed: 'AS', userTone: 'green' },
];

export default function Demo() {
  const [key, setKey] = useState('gestor');
  const perspective = perspectives[key];
  const [active, setActive] = useState('g.home');

  return (
    <Box h={560}>
      <AppSidebar
        perspective={perspective}
        activeKey={active}
        onNavigate={setActive}
        perspectiveOptions={options}
        onSwitchPerspective={(next) => {
          setKey(next);
          setActive(perspectives[next].nav.primary[0].key);
        }}
      />
    </Box>
  );
}
