import { useState } from 'react';
import { act } from 'react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import {
  AppHeader,
  AppSelect,
  AppSidebar,
  CellPerson,
  CellTitle,
  ConfirmDialog,
  ConnectShell,
  ContextualDrawer,
  DataTable,
  DropdownMenu,
  GlobalSearchBox,
  HeaderAction,
  PageToolbar,
  PerspectiveSwitcherContext,
  PromptDialog,
  SelectionBanner,
  TablePagination,
  ToastViewport,
  buildPageItems,
  toast,
  type Perspective,
} from '../src';
import { fireEvent, render, screen, within } from './render';

const perspective: Perspective = {
  key: 'rh',
  label: 'Visão RH',
  user: { name: 'Marina Costa', role: 'Gerente de RH', seed: 'MC', tone: 'lavender' },
  nav: {
    primary: [
      { key: 'rh.home', icon: 'home', label: 'Início' },
      {
        key: 'rh.pessoas',
        icon: 'users',
        label: 'Pessoas',
        children: [
          { key: 'rh.colab', label: 'Colaboradores' },
          { key: 'rh.ferias', label: 'Férias', badge: 4 },
        ],
      },
    ],
    secondary: [{ key: 'rh.ajuda', icon: 'help', label: 'Ajuda', badge: 2 }],
  },
};

describe('DropdownMenu', () => {
  it('abre pelo gatilho e chama onSelect', () => {
    const onSelect = vi.fn();
    render(
      <DropdownMenu
        trigger={<button type="button">Mais ações</button>}
        items={[
          { key: 'edit', label: 'Editar', icon: 'pen', onSelect },
          { key: 'sep', type: 'separator' },
          { key: 'del', label: 'Excluir', tone: 'danger', onSelect: () => {} },
        ]}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Mais ações' }));
    expect(screen.getByRole('menuitem', { name: 'Excluir' })).toHaveAttribute('data-tone', 'danger');
    fireEvent.click(screen.getByRole('menuitem', { name: 'Editar' }));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});

describe('ConfirmDialog / PromptDialog', () => {
  it('confirma, cancela e mostra "Aguarde…" em loading', () => {
    const onConfirm = vi.fn();
    const onOpenChange = vi.fn();
    const { rerender } = render(
      <ConfirmDialog open onOpenChange={onOpenChange} title="Excluir comunicado?" description="Esta ação não pode ser desfeita." tone="danger" confirmLabel="Excluir" onConfirm={onConfirm} />,
    );
    expect(screen.getByRole('dialog')).toHaveAccessibleName('Excluir comunicado?');
    fireEvent.click(screen.getByRole('button', { name: 'Excluir' }));
    expect(onConfirm).toHaveBeenCalled();
    fireEvent.click(screen.getByRole('button', { name: 'Cancelar' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    rerender(<ConfirmDialog open onOpenChange={onOpenChange} title="Excluir?" onConfirm={onConfirm} loading />);
    expect(screen.getByRole('button', { name: 'Aguarde…' })).toBeDisabled();
  });

  it('PromptDialog envia o valor aparado com Enter e bloqueia vazio', () => {
    const onConfirm = vi.fn();
    render(<PromptDialog open onOpenChange={() => {}} title="Renomear pasta" label="Nome" defaultValue="  Admissões  " onConfirm={onConfirm} />);
    const input = screen.getByLabelText('Nome');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onConfirm).toHaveBeenCalledWith('Admissões');
    fireEvent.change(input, { target: { value: '   ' } });
    expect(screen.getByRole('button', { name: 'Confirmar' })).toBeDisabled();
  });
});

describe('ContextualDrawer', () => {
  it('renderiza cabeçalho, corpo e rodapé e fecha pelo botão', () => {
    const onOpenChange = vi.fn();
    render(
      <ContextualDrawer open onOpenChange={onOpenChange} title="Solicitação de férias" description="Ana Souza · 15 dias" footer={<button>Aprovar</button>}>
        Corpo do painel
      </ContextualDrawer>,
    );
    expect(screen.getByRole('dialog')).toHaveAccessibleName('Solicitação de férias');
    expect(screen.getByText('Corpo do painel')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fechar painel' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

describe('AppSelect', () => {
  const options = [
    { value: 'ativo', label: 'Ativo', icon: 'check', tone: 'green' as const },
    { value: 'ferias', label: 'Em férias', icon: 'palm' },
    { value: 'desligado', label: 'Desligado', disabled: true },
  ];

  it('abre, mostra o selecionado com check e escolhe outra opção', () => {
    const onChange = vi.fn();
    render(<AppSelect label="Situação" required value="ativo" onChange={onChange} options={options} helperText="Situação atual no RH" />);
    const trigger = screen.getByRole('button', { name: /Situação/ });
    expect(trigger).toHaveTextContent('Ativo');
    expect(screen.getByText('Situação atual no RH')).toBeInTheDocument();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('data-open');
    expect(screen.getByRole('option', { name: 'Ativo' })).toHaveAttribute('aria-selected', 'true');
    fireEvent.click(screen.getByRole('option', { name: 'Em férias' }));
    expect(onChange).toHaveBeenCalledWith('ferias');
  });

  it('mostra erro e bloqueia abertura em loading', () => {
    render(<AppSelect aria-label="Gestor" value="" onChange={() => {}} options={options} error="Escolha um gestor" loading />);
    expect(screen.getByRole('alert')).toHaveTextContent('Escolha um gestor');
    const trigger = screen.getByRole('button', { name: 'Gestor' });
    expect(trigger).toHaveTextContent('Selecione...');
    fireEvent.click(trigger);
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
  });
});

describe('Toast', () => {
  afterEach(() => {
    act(() => toast.clear());
    vi.useRealTimers();
  });

  it('empilha até 3, enfileira o resto e fecha sozinho', () => {
    vi.useFakeTimers();
    render(<ToastViewport />);
    act(() => {
      toast.success('Férias aprovadas.');
      toast.error('Falha ao enviar o comunicado.');
      toast.info('Ponto sincronizado.');
      toast.info('Na fila');
    });
    expect(screen.getAllByRole('status')).toHaveLength(2);
    expect(screen.getByRole('alert')).toHaveTextContent('Falha ao enviar o comunicado.');
    expect(screen.queryByText('Na fila')).not.toBeInTheDocument();
    act(() => vi.advanceTimersByTime(5000));
    expect(screen.queryByText('Férias aprovadas.')).not.toBeInTheDocument();
    expect(screen.getByText('Na fila')).toBeInTheDocument();
    fireEvent.click(within(screen.getByRole('alert')).getByRole('button', { name: 'Fechar notificação' }));
    expect(screen.queryByText('Falha ao enviar o comunicado.')).not.toBeInTheDocument();
  });
});

describe('AppSidebar', () => {
  it('marca o ativo, abre o grupo do filho ativo e navega', () => {
    const onNavigate = vi.fn();
    render(<AppSidebar perspective={perspective} activeKey="rh.ferias" onNavigate={onNavigate} />);
    expect(screen.getByRole('complementary', { name: 'Menu principal' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Pessoas/ })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('button', { name: /Férias/ })).toHaveAttribute('aria-current', 'page');
    fireEvent.click(screen.getByRole('button', { name: /Início/ }));
    expect(onNavigate).toHaveBeenCalledWith('rh.home');
    fireEvent.click(screen.getByRole('button', { name: /Pessoas/ }));
    expect(screen.queryByRole('button', { name: /Colaboradores/ })).not.toBeInTheDocument();
  });

  it('troca de perspectiva pelo seletor e mostra o botão de fechar na gaveta', () => {
    const onSwitch = vi.fn();
    const onClose = vi.fn();
    render(
      <AppSidebar
        perspective={perspective}
        activeKey="rh.home"
        onNavigate={() => {}}
        perspectiveOptions={[
          { key: 'rh', label: 'Visão RH', userSeed: 'RH', userTone: 'lavender' },
          { key: 'gestor', label: 'Visão Gestor', userSeed: 'GT', userTone: 'blue' },
        ]}
        onSwitchPerspective={onSwitch}
        isDrawer
        onClose={onClose}
      />,
    );
    fireEvent.click(screen.getByRole('button', { name: /Trocar perspectiva/ }));
    fireEvent.click(screen.getByRole('menuitem', { name: /Visão Gestor/ }));
    expect(onSwitch).toHaveBeenCalledWith('gestor');
    fireEvent.click(screen.getByRole('button', { name: 'Fechar menu' }));
    expect(onClose).toHaveBeenCalled();
  });
});

describe('AppHeader', () => {
  it('mostra trilha, título, ação com selo e menu do usuário', () => {
    const onLogout = vi.fn();
    render(
      <AppHeader
        title="Colaboradores"
        subtitle="248 ativos"
        breadcrumb={['Visão RH', 'Pessoas', 'Colaboradores']}
        user={perspective.user}
        actions={<HeaderAction icon="bell" label="Notificações" badge={3} />}
        userMenuItems={[{ key: 'logout', label: 'Sair', tone: 'danger', onSelect: onLogout }]}
      />,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Colaboradores' })).toBeInTheDocument();
    expect(screen.getByText('Colaboradores', { selector: '[aria-current="page"]' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Notificações (3)' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Menu do usuário' }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Sair' }));
    expect(onLogout).toHaveBeenCalled();
  });

  it('modo compacto: hambúrguer e busca recolhida', () => {
    const onMenuToggle = vi.fn();
    render(<AppHeader title="Início" showMenuButton onMenuToggle={onMenuToggle} search={<GlobalSearchBox />} withThemeToggle={false} />);
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
    expect(onMenuToggle).toHaveBeenCalled();
    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Abrir busca' }));
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Fechar busca' })).toHaveLength(2);
  });
});

describe('ConnectShell', () => {
  it('renderiza sidebar, cabeçalho e conteúdo; gaveta abre pelo hambúrguer', () => {
    render(
      <PerspectiveSwitcherContext.Provider value={{ options: [], onSwitch: () => {} }}>
        <ConnectShell perspective={perspective} activeKey="rh.home" onNavigate={() => {}} headerTitle="Início" forceMobile mode="static">
          <p>Conteúdo da página</p>
        </ConnectShell>
      </PerspectiveSwitcherContext.Provider>,
    );
    expect(screen.getByText('Conteúdo da página')).toBeInTheDocument();
    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    expect(toggle).toHaveAttribute('aria-controls', 'app-sidebar');
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: 'Fechar menu', expanded: true })).toHaveAttribute('aria-controls', 'app-sidebar');
  });
});

describe('GlobalSearchBox', () => {
  it('mostra grupos e seleciona um resultado', () => {
    const onSelect = vi.fn();
    function Demo() {
      const [q, setQ] = useState('');
      return (
        <GlobalSearchBox
          value={q}
          onChange={setQ}
          onSelect={onSelect}
          groups={[{ key: 'people', title: 'Pessoas', icon: 'users', items: [{ id: 1, label: 'Ana Souza', meta: 'Analista de RH' }] }]}
        />
      );
    }
    render(<Demo />);
    const input = screen.getByRole('searchbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'an' } });
    expect(screen.getByText('Pessoas')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('option', { name: /Ana Souza/ }));
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }), expect.objectContaining({ key: 'people' }));
    expect(input).toHaveValue('');
  });

  it('mostra estados de busca vazia e erro', () => {
    const { rerender } = render(<GlobalSearchBox defaultValue="xyz" groups={[]} />);
    fireEvent.focus(screen.getByRole('searchbox'));
    expect(screen.getByText('Nenhum resultado para “xyz”.')).toBeInTheDocument();
    rerender(<GlobalSearchBox defaultValue="xyz" groups={[]} error />);
    expect(screen.getByText('Não foi possível concluir a busca.')).toBeInTheDocument();
  });
});

describe('PageToolbar', () => {
  it('chips, busca e menu de colunas (mantém ao menos uma visível)', () => {
    const onChipClick = vi.fn();
    const onSearchChange = vi.fn();
    const onColumnVisibilityChange = vi.fn();
    render(
      <PageToolbar
        chips={[
          { key: 'todos', label: 'Todos', count: 48 },
          { key: 'pendentes', label: 'Pendentes', tone: 'yellow', count: 6 },
        ]}
        activeChip="todos"
        onChipClick={onChipClick}
        searchValue=""
        onSearchChange={onSearchChange}
        searchPlaceholder="Buscar colaborador..."
        columnOptions={[{ key: 'nome', label: 'Nome' }, { key: 'cargo', label: 'Cargo' }]}
        columnVisibility={{ cargo: false }}
        onColumnVisibilityChange={onColumnVisibilityChange}
      />,
    );
    expect(screen.getByRole('button', { name: /Todos/ })).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(screen.getByRole('button', { name: /Pendentes/ }));
    expect(onChipClick).toHaveBeenCalledWith('pendentes');
    fireEvent.change(screen.getByLabelText('Buscar colaborador...'), { target: { value: 'ana' } });
    expect(onSearchChange).toHaveBeenCalledWith('ana');
    fireEvent.click(screen.getByRole('button', { name: /Colunas/ }));
    fireEvent.click(screen.getByRole('menuitem', { name: 'Nome (visível)' }));
    expect(onColumnVisibilityChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByRole('menuitem', { name: 'Cargo (oculta)' }));
    expect(onColumnVisibilityChange).toHaveBeenCalledWith({ cargo: true });
  });

  it('filtros: marca ativo e limpa', () => {
    const onFiltersClear = vi.fn();
    render(
      <PageToolbar
        search={false}
        filters={[{ key: 'area', label: 'Área', value: 'rh', onChange: () => {}, options: [{ value: 'rh', label: 'RH' }] }]}
        onFiltersClear={onFiltersClear}
      />,
    );
    const button = screen.getByRole('button', { name: /Filtros/ });
    expect(button).toHaveAttribute('data-active');
    fireEvent.click(button);
    fireEvent.click(screen.getByRole('button', { name: 'Limpar filtros' }));
    expect(onFiltersClear).toHaveBeenCalled();
  });
});

describe('SelectionBanner', () => {
  it('some sem seleção e oferece selecionar todos', () => {
    const onSelectAllMatching = vi.fn();
    const props = { matchingTotal: 120, showSelectAllMatching: true, entityLabel: 'colaborador', entityLabelPlural: 'colaboradores', onSelectAllMatching, onClear: () => {} };
    const { rerender } = render(<SelectionBanner selectedCount={0} allMatching={false} {...props} />);
    expect(screen.queryByRole('region', { name: 'Ações em massa' })).not.toBeInTheDocument();
    rerender(<SelectionBanner selectedCount={1} allMatching={false} {...props} />);
    expect(screen.getByText('1 colaborador selecionado(s)')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Selecionar todos os 120/ }));
    expect(onSelectAllMatching).toHaveBeenCalled();
    rerender(<SelectionBanner selectedCount={10} allMatching {...props} showSelectAllMatching={false} />);
    expect(screen.getByText('Todos os 120 colaboradores filtrados selecionados')).toBeInTheDocument();
  });
});

describe('DataTable', () => {
  type Row = { id: number; nome: string; dias: number };
  const rows: Row[] = [
    { id: 1, nome: 'Bruno Lima', dias: 10 },
    { id: 2, nome: 'Ana Souza', dias: 30 },
    { id: 3, nome: 'Carla Dias', dias: 15 },
  ];
  const columns = [
    { label: 'Colaborador', key: 'nome', sortable: true, render: (r: Row) => <CellPerson name={r.nome} seed="AS" role="Vendas" /> },
    { label: 'Dias', key: 'dias', sortable: true, align: 'right' as const },
  ];
  const names = () => screen.getAllByRole('row').slice(1).map((r) => within(r).getAllByRole('cell')[2]?.textContent ?? '');

  it('ordena pelo cabeçalho (asc → desc → original)', () => {
    render(<DataTable columns={columns} rows={rows} sortable selectable getRowId={(r) => r.id} />);
    const header = screen.getByRole('button', { name: /Dias/ });
    fireEvent.click(header);
    expect(names()).toEqual(['10', '15', '30']);
    fireEvent.click(header);
    expect(names()).toEqual(['30', '15', '10']);
    expect(screen.getByRole('columnheader', { name: /Dias/ })).toHaveAttribute('aria-sort', 'descending');
    fireEvent.click(header);
    expect(names()).toEqual(['10', '30', '15']);
  });

  it('seleciona linhas e todas da página, preservando o tipo do id', () => {
    const onSelectedRowsChange = vi.fn();
    render(<DataTable columns={columns} rows={rows} selectable getRowId={(r) => r.id} selectedRows={[99]} onSelectedRowsChange={onSelectedRowsChange} />);
    fireEvent.click(screen.getByLabelText('Selecionar registro 2'));
    expect(onSelectedRowsChange).toHaveBeenLastCalledWith([99, 2]);
    fireEvent.click(screen.getByLabelText('Selecionar todos os registros desta página'));
    expect(onSelectedRowsChange).toHaveBeenLastCalledWith([99, 1, 2, 3]);
  });

  it('expande linhas, chama onRowClick e abre ações', () => {
    const onRowClick = vi.fn();
    const onSelect = vi.fn();
    const { rerender } = render(
      <DataTable columns={columns} rows={rows} rowExpandable renderExpandedRow={(r) => <p>Detalhes de {r.nome}</p>} onRowClick={onRowClick} />,
    );
    fireEvent.click(screen.getAllByRole('button', { name: 'Expandir' })[0]);
    expect(screen.getByText('Detalhes de Bruno Lima')).toBeInTheDocument();
    fireEvent.keyDown(screen.getAllByRole('row')[3], { key: 'Enter' });
    expect(onRowClick).toHaveBeenCalledWith(rows[1]);
    rerender(<DataTable columns={columns} rows={rows} rowActions={() => [{ key: 'ver', label: 'Ver perfil', onSelect }]} />);
    fireEvent.click(screen.getAllByRole('button', { name: 'Ações' })[0]);
    fireEvent.click(screen.getByRole('menuitem', { name: 'Ver perfil' }));
    expect(onSelect).toHaveBeenCalled();
  });

  it('esconde colunas, mostra vazio e carregando', () => {
    const { rerender } = render(<DataTable columns={columns} rows={rows} columnVisibility={{ dias: false }} />);
    expect(screen.queryByRole('columnheader', { name: /Dias/ })).not.toBeInTheDocument();
    rerender(<DataTable columns={columns} rows={[]} emptyTitle="Nenhum colaborador" />);
    expect(screen.getByText('Nenhum colaborador')).toBeInTheDocument();
    rerender(<DataTable columns={columns} rows={[]} loading />);
    expect(screen.getByLabelText('Carregando registros')).toBeInTheDocument();
  });

  it('CellTitle e paginação', () => {
    const onPageChange = vi.fn();
    render(
      <>
        <CellTitle title="Contrato de experiência" subtitle="PDF · 2 páginas" icon="doc" tone="blue" />
        <TablePagination total={48} page={1} pageSize={10} onPageChange={onPageChange} />
      </>,
    );
    expect(screen.getByText('Contrato de experiência')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Paginação' })).toHaveTextContent('Mostrando 1-10 de 48');
    expect(screen.getByRole('button', { name: 'Página anterior' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Página 3' }));
    expect(onPageChange).toHaveBeenCalledWith(3);
    expect(buildPageItems(6, 12)).toEqual([1, 'ellipsis', 5, 6, 7, 'ellipsis', 12]);
  });
});
