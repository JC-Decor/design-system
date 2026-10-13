import { useState } from 'react';
import {
  Badge,
  Button,
  CellPerson,
  ConnectShell,
  DataTable,
  GlobalSearchBox,
  HeaderAction,
  Icon,
  PageToolbar,
  Paper,
  type Perspective,
} from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

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
          { key: 'rh.ferias', label: 'Férias' },
          { key: 'rh.vagas', label: 'Solicitações de vagas', badge: 3 },
        ],
      },
      { key: 'rh.docs', icon: 'doc', label: 'Documentos' },
    ],
    secondary: [
      { key: 'rh.relat', icon: 'chart', label: 'Relatórios' },
      { key: 'rh.ajuda', icon: 'help', label: 'Ajuda' },
    ],
  },
};

const titles: Record<string, string> = {
  'rh.home': 'Início',
  'rh.agenda': 'Agenda',
  'rh.colab': 'Colaboradores',
  'rh.ferias': 'Férias',
  'rh.vagas': 'Solicitações de vagas',
  'rh.docs': 'Documentos',
  'rh.relat': 'Relatórios',
  'rh.ajuda': 'Ajuda',
};

const colaboradores = [
  { id: 1, nome: 'Ana Souza', cargo: 'Analista de RH', iniciais: 'AS', equipe: 'Recursos Humanos', status: 'Ativo' },
  { id: 2, nome: 'Bruno Lima', cargo: 'Analista de Logística', iniciais: 'BL', equipe: 'Expedição', status: 'Experiência' },
  { id: 3, nome: 'Carla Dias', cargo: 'Coordenadora Comercial', iniciais: 'CD', equipe: 'Comercial', status: 'Férias' },
];

export default function Demo() {
  const [active, setActive] = useState('rh.colab');

  return (
    <ConnectShell
      mode="static"
      h={640}
      perspective={perspective}
      activeKey={active}
      onNavigate={setActive}
      headerTitle={titles[active]}
      breadcrumb={['Visão RH', titles[active]]}
      headerProps={{
        search: <GlobalSearchBox />,
        actions: <HeaderAction icon="bell" label="Notificações" badge={3} />,
        userMenuItems: [
          { key: 'perfil', label: 'Meu perfil', icon: 'user', onSelect: () => {} },
          { key: 'sair', label: 'Sair', icon: 'x', tone: 'danger', onSelect: () => {} },
        ],
      }}
    >
      <Paper radius="lg" withBorder style={{ overflow: 'hidden' }}>
        <div style={{ padding: '18px 22px 0' }}>
          <PageToolbar
            chips={[
              { key: 'todos', label: 'Todos', count: 248 },
              { key: 'experiencia', label: 'Em experiência', tone: 'yellow', count: 12 },
            ]}
            activeChip="todos"
            searchPlaceholder="Buscar colaborador..."
            actions={<Button leftSection={<Icon name="user-plus" size={15} />}>Novo colaborador</Button>}
          />
        </div>
        <DataTable
          aria-label="Colaboradores"
          rows={colaboradores}
          getRowId={(r) => r.id}
          columns={[
            { label: 'Colaborador', key: 'nome', render: (r) => <CellPerson name={r.nome} role={r.cargo} seed={r.iniciais} /> },
            { label: 'Equipe', key: 'equipe' },
            { label: 'Status', key: 'status', align: 'right', render: (r) => <Badge color="ink">{r.status}</Badge> },
          ]}
        />
      </Paper>
    </ConnectShell>
  );
}
