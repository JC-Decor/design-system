import { useMemo, useState } from 'react';
import { ConnectShell, Paper, PerspectiveSwitcherContext, Text, type Perspective } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const perspectives: Record<string, Perspective> = {
  rh: {
    key: 'rh',
    label: 'Visão RH',
    user: { name: 'Marina Costa', role: 'Gerente de RH', seed: 'MC', tone: 'lavender' },
    nav: {
      primary: [
        { key: 'rh.home', icon: 'home', label: 'Início' },
        { key: 'rh.colab', icon: 'users', label: 'Colaboradores' },
      ],
      secondary: [{ key: 'rh.relat', icon: 'chart', label: 'Relatórios' }],
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
        { key: 'c.trein', icon: 'book', label: 'Treinamentos' },
      ],
      secondary: [],
    },
  },
};

export default function Demo() {
  const [key, setKey] = useState('rh');
  const perspective = perspectives[key];
  const [active, setActive] = useState('rh.home');

  // No app, este Provider fica na raiz (AppProviders); o ConnectShell lê o contexto sozinho
  const switcher = useMemo(
    () => ({
      options: [
        { key: 'rh', label: 'Visão RH', userSeed: 'MC', userTone: 'lavender' as const },
        { key: 'colab', label: 'Visão Colaborador', userSeed: 'AS', userTone: 'green' as const },
      ],
      onSwitch: (next: string) => {
        setKey(next);
        setActive(perspectives[next].nav.primary[0].key);
      },
    }),
    [],
  );

  return (
    <PerspectiveSwitcherContext.Provider value={switcher}>
      <ConnectShell mode="static" h={520} perspective={perspective} activeKey={active} onNavigate={setActive} headerTitle="Início" headerSubtitle={perspective.label}>
        <Paper withBorder radius="lg" p="lg">
          <Text fz="sm" c="var(--ds-text-2)">
            Troque de perspectiva pela pílula da sidebar: a navegação e o usuário do cabeçalho mudam juntos.
          </Text>
        </Paper>
      </ConnectShell>
    </PerspectiveSwitcherContext.Provider>
  );
}
