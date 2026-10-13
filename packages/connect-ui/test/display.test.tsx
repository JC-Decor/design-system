import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import {
  ActivityTimeline,
  AlertsCard,
  AnimatedSection,
  AreaChart,
  AvatarStack,
  CardFootLink,
  CardHeader,
  EmptyStateIllustration,
  EmptyStatePanel,
  ExpandableCard,
  FilterChip,
  Hero,
  HeroArt,
  Illustration,
  IllustrationStrip,
  KpiCard,
  MetaPill,
  MetricRevealCard,
  MetricSummaryCard,
  MiniSpark,
  MotionWrapper,
  MoveChart,
  PersonAvatar,
  PrioBadge,
  ProgressBar,
  QuickActions,
  ResourceState,
  SectionHeader,
  SectionLabel,
  SegmentBar,
  SkeletonBlock,
  StatusBadge,
  TabSwitcher,
  Tag,
  ToneRing,
  describeResourceError,
} from '../src';
import { fireEvent, render, screen } from './render';

const chartData = [
  { m: 'Jan', admissoes: 12, desligamentos: 4, ativo: 240 },
  { m: 'Fev', admissoes: 18, desligamentos: 6, ativo: 252 },
  { m: 'Mar', admissoes: 9, desligamentos: 3, ativo: 258 },
];

describe('PersonAvatar / AvatarStack', () => {
  it('mostra as iniciais com tom e anel', () => {
    const { container } = render(<PersonAvatar seed="AS" tone="green" ring />);
    expect(screen.getByText('AS')).toBeInTheDocument();
    const root = container.querySelector('[data-tone="green"]')!;
    expect(root).toHaveAttribute('data-ring', 'lg');
  });

  it('mostra +N para o excedente', () => {
    const people = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((seed) => ({ seed }));
    render(<AvatarStack people={people} max={4} />);
    expect(screen.getByText('+3')).toHaveAttribute('aria-label', 'mais 3 pessoas');
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', '7 pessoas');
  });
});

describe('Badges, chips e tags', () => {
  it('PrioBadge usa o rótulo padrão da prioridade', () => {
    render(<PrioBadge tone="high" dot />);
    expect(screen.getByText('Alta')).toBeInTheDocument();
  });

  it('StatusBadge mostra o status em pt-BR', () => {
    render(<StatusBadge status="concl" />);
    expect(screen.getByText('Concluído')).toBeInTheDocument();
  });

  it('FilterChip alterna aria-pressed e mostra contador', () => {
    const onClick = vi.fn();
    render(
      <FilterChip active count={12} icon="calendar" onClick={onClick}>
        Férias
      </FilterChip>,
    );
    const chip = screen.getByRole('button', { name: /Férias/ });
    expect(chip).toHaveAttribute('aria-pressed', 'true');
    expect(chip).toHaveAttribute('data-active');
    expect(screen.getByText('12')).toBeInTheDocument();
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('Tag e MetaPill', () => {
    render(
      <>
        <Tag tone="lavender">CLT</Tag>
        <MetaPill active>Comercial</MetaPill>
      </>,
    );
    expect(screen.getByText('CLT')).toHaveAttribute('data-tone', 'lavender');
    expect(screen.getByText('Comercial')).toHaveAttribute('data-active');
  });
});

describe('Cards', () => {
  it('CardHeader, SectionLabel e CardFootLink', () => {
    const onClick = vi.fn();
    render(
      <>
        <CardHeader eyebrow="Equipe" title="Banco de horas" sub="Saldo do mês" actions={<button type="button">Filtrar</button>} />
        <SectionLabel title="Aniversariantes" action={<a href="#a">Ver todos</a>} />
        <CardFootLink onClick={onClick}>Ver todos os alertas</CardFootLink>
      </>,
    );
    expect(screen.getByRole('heading', { name: 'Banco de horas' })).toBeInTheDocument();
    expect(screen.getByText('Equipe')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Aniversariantes' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /Ver todos os alertas/ }));
    expect(onClick).toHaveBeenCalled();
  });

  it('CardFootLink vira link com href', () => {
    render(<CardFootLink href="/comunicados">Ver comunicados</CardFootLink>);
    expect(screen.getByRole('link', { name: /Ver comunicados/ })).toHaveAttribute('href', '/comunicados');
  });
});

describe('Progresso', () => {
  it('ProgressBar limita o valor entre 0 e 100%', () => {
    render(<ProgressBar value={30} max={20} tone="green" aria-label="Metas" />);
    expect(screen.getByRole('progressbar', { name: 'Metas' })).toHaveAttribute('aria-valuenow', '100');
  });

  it('ToneRing mostra a porcentagem ou o rótulo', () => {
    const { rerender } = render(<ToneRing value={3} max={4} />);
    expect(screen.getByText('75%')).toBeInTheDocument();
    rerender(<ToneRing value={3} max={4} label="3/4" />);
    expect(screen.getByText('3/4')).toBeInTheDocument();
  });

  it('SegmentBar descreve os segmentos', () => {
    render(<SegmentBar segments={[{ label: 'Presencial', value: 3 }, { label: 'Remoto', value: 1 }]} withTooltip={false} />);
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Presencial: 3, Remoto: 1');
  });
});

describe('SkeletonBlock', () => {
  it.each(['text', 'card', 'list', 'table', 'profile', 'chart'] as const)('renderiza a variante %s', (variant) => {
    const { container } = render(<SkeletonBlock variant={variant} rows={2} />);
    expect(screen.getByRole('status')).toHaveTextContent('Carregando…');
    expect(container.querySelector(`[data-variant="${variant}"]`)).not.toBeNull();
  });
});

describe('Estados vazios e ilustrações', () => {
  it('EmptyStatePanel usa textos da variante e ações', () => {
    const onAction = vi.fn();
    render(<EmptyStatePanel variant="no-results" actionLabel="Limpar filtros" onAction={onAction} />);
    expect(screen.getByText('Nenhum resultado')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Limpar filtros' }));
    expect(onAction).toHaveBeenCalled();
  });

  it('EmptyStatePanel com module usa o layout ilustrado', () => {
    const { container } = render(<EmptyStatePanel module="documents" title="Nenhum documento" compact />);
    expect(container.querySelector('[data-module="documents"][data-variant="compact"]')).not.toBeNull();
  });

  it('EmptyStateIllustration com src renderiza a imagem', () => {
    render(<EmptyStateIllustration illustration="/arte.svg" illustrationAlt="Pessoas conversando" title="Sem feedbacks" variant="full" />);
    expect(screen.getByAltText('Pessoas conversando')).toHaveAttribute('src', '/arte.svg');
  });

  it('Illustration e IllustrationStrip', () => {
    render(
      <>
        <Illustration src="/a.svg" alt="Equipe" size="lg" tone="muted" />
        <IllustrationStrip src="/b.svg" eyebrow="Novidade" title="Trilhas de treinamento" desc="Conheça" />
      </>,
    );
    const img = screen.getByAltText('Equipe');
    expect(img).toHaveAttribute('data-size', 'lg');
    expect(img).toHaveAttribute('data-tone', 'muted');
    expect(screen.getByRole('heading', { name: 'Trilhas de treinamento' })).toBeInTheDocument();
  });
});

describe('ResourceState', () => {
  const child = () => <div>Carregado</div>;

  it('mostra esqueleto carregando', () => {
    render(
      <ResourceState isLoading error={null} data={undefined}>
        {child}
      </ResourceState>,
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.queryByText('Carregado')).toBeNull();
  });

  it('mostra vazio', () => {
    render(
      <ResourceState isLoading={false} error={null} data={[] as number[]} isEmpty={(d) => !d?.length}>
        {child}
      </ResourceState>,
    );
    expect(screen.getByText('Nenhum dado encontrado')).toBeInTheDocument();
  });

  it('mostra erro em pt-BR primeiro, detalhe depois, ref e retry', () => {
    const onRetry = vi.fn();
    const error = Object.assign(new Error('Saldo de férias indisponível.'), { status: 500, correlationId: 'corr-1' });
    const { container } = render(
      <ResourceState isLoading={false} error={error} data={undefined} onRetry={onRetry}>
        {child}
      </ResourceState>,
    );
    const text = container.textContent ?? '';
    expect(text).toContain('Não foi possível carregar');
    expect(text.indexOf('Ocorreu um erro inesperado')).toBeLessThan(text.indexOf('Saldo de férias indisponível.'));
    expect(text).toContain('ref: corr-1');
    fireEvent.click(screen.getByRole('button', { name: /Tentar novamente/ }));
    expect(onRetry).toHaveBeenCalledTimes(1);
  });

  it.each([401, 403])('bloqueia acesso em %s sem retry', (status) => {
    render(
      <ResourceState isLoading={false} error={{ status, message: 'Bloqueado' }} data={undefined} onRetry={vi.fn()}>
        {child}
      </ResourceState>,
    );
    expect(screen.getByText('Acesso restrito')).toBeInTheDocument();
    expect(screen.queryByText(/Tentar novamente/)).toBeNull();
  });

  it('renderiza os dados', () => {
    render(
      <ResourceState isLoading={false} error={null} data={[1]}>
        {(d) => <div>{d.length} colaborador</div>}
      </ResourceState>,
    );
    expect(screen.getByText('1 colaborador')).toBeInTheDocument();
  });

  it('describeResourceError classifica validação', () => {
    expect(describeResourceError({ status: 400, message: 'Unsupported $filter' }).title).toBe('Não foi possível validar os dados');
  });
});

describe('Linha do tempo e abas', () => {
  it('ActivityTimeline lista eventos', () => {
    render(
      <ActivityTimeline
        events={[
          { when: 'Hoje, 09:42', who: { seed: 'MS', tone: 'green', name: 'Marina Souza' }, what: 'teve as férias', to: 'Aprovadas', by: 'Carlos Lima', tone: 'green' },
        ]}
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Aprovadas')).toBeInTheDocument();
    expect(screen.getByText('Hoje, 09:42 · por Carlos Lima')).toBeInTheDocument();
  });

  it('TabSwitcher navega com setas e pula desabilitadas', () => {
    function Tabs() {
      const [active, setActive] = useState('todos');
      return (
        <TabSwitcher
          activeKey={active}
          onChange={setActive}
          tabs={[
            { key: 'todos', label: 'Todos', count: 12 },
            { key: 'pendentes', label: 'Pendentes', disabled: true },
            { key: 'aprovados', label: 'Aprovados' },
          ]}
        />
      );
    }
    render(<Tabs />);
    const tabs = screen.getAllByRole('tab');
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Filtros');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    fireEvent.keyDown(tabs[0], { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: 'Aprovados' })).toHaveAttribute('aria-selected', 'true');
    fireEvent.click(screen.getByRole('tab', { name: 'Pendentes' }));
    expect(screen.getByRole('tab', { name: 'Aprovados' })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Métricas', () => {
  it('MetricSummaryCard', () => {
    render(<MetricSummaryCard tone="yellow" icon="clock" label="Banco de horas" value="+12h" sub="no mês" />);
    expect(screen.getByText('+12h')).toBeInTheDocument();
  });

  it('KpiCard mostra variação e botão de mais opções', () => {
    const onMore = vi.fn();
    render(<KpiCard kpi={{ label: 'Colaboradores ativos', value: '248', delta: '+4,2%', deltaTone: 'pos', sub: 'vs. mês anterior', tone: 'green', icon: 'users' }} onMore={onMore} />);
    expect(screen.getByText('248')).toBeInTheDocument();
    expect(screen.getByLabelText('Alta')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Mais opções' }));
    expect(onMore).toHaveBeenCalled();
  });

  it('MiniSpark desenha uma linha', () => {
    const { container } = render(<MiniSpark data={[1, 3, 2, 5]} />);
    expect(container.querySelector('path')?.getAttribute('d')).toMatch(/^M0\.0 /);
  });

  it('MetricRevealCard revela o detalhe ao clicar', () => {
    render(
      <MetricRevealCard label="Turnover" value="2,1%" status="Estável">
        <p>Detalhe por área</p>
      </MetricRevealCard>,
    );
    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(trigger);
    expect(screen.getByText('Detalhe por área')).toBeInTheDocument();
  });
});

describe('Gráfico', () => {
  it('AreaChart tem descrição acessível e tooltip no hover', () => {
    const { container } = render(
      <AreaChart data={chartData} labels={[{ key: 'admissoes', text: 'Admissões' }, { key: 'desligamentos', text: 'Desligamentos' }]} />,
    );
    const svg = screen.getByRole('img');
    expect(svg.getAttribute('aria-label')).toContain('Admissões e Desligamentos de Jan a Mar');
    svg.getBoundingClientRect = () => ({ left: 0, width: 720, top: 0, height: 240, right: 720, bottom: 240, x: 0, y: 0, toJSON: () => ({}) });
    fireEvent.mouseMove(svg, { clientX: 700 });
    expect(container.textContent).toContain('Mar');
    expect(screen.getByRole('status')).toHaveTextContent('Admissões9');
    fireEvent.mouseLeave(svg);
    expect(screen.queryByRole('status')).toBeNull();
  });

  it('MoveChart monta card com legenda', () => {
    render(<MoveChart data={chartData} />);
    expect(screen.getByRole('heading', { name: 'Movimentação de pessoas' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Últimos 6 meses/ })).toBeInTheDocument();
  });
});

describe('Cards de painel', () => {
  it('AlertsCard lista alertas clicáveis', () => {
    const onClick = vi.fn();
    render(
      <AlertsCard
        onFilter={vi.fn()}
        items={[{ tone: 'high', icon: 'doc-clock', title: '3 documentos vencendo', desc: 'ASO de 3 colaboradores', meta: 'Vence em 2 dias', onClick }]}
      />,
    );
    expect(screen.getByText('Alertas importantes')).toBeInTheDocument();
    expect(screen.getByText('Alta')).toBeInTheDocument();
    fireEvent.keyDown(screen.getByRole('button', { name: /3 documentos vencendo/ }), { key: 'Enter' });
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Filtrar alertas' })).toBeInTheDocument();
  });

  it('QuickActions respeita desabilitado', () => {
    const onClick = vi.fn();
    render(<QuickActions items={[{ icon: 'palm', title: 'Solicitar férias', desc: 'Agende seu descanso', onClick, disabled: true }]} />);
    const button = screen.getByRole('button', { name: /Solicitar férias/ });
    expect(button).toBeDisabled();
  });

  it('ExpandableCard alterna por clique e teclado', () => {
    const onChange = vi.fn();
    render(
      <ExpandableCard title="Comunicado de benefícios" summary="Novo plano odontológico" onExpandedChange={onChange}>
        <p>Detalhes do plano</p>
      </ExpandableCard>,
    );
    const trigger = screen.getByRole('button', { name: /Comunicado de benefícios/ });
    expect(screen.getByText('Detalhes do plano').closest('[hidden]')).not.toBeNull();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    fireEvent.keyDown(trigger, { key: 'Enter' });
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('ExpandableCard desabilitado não abre', () => {
    render(
      <ExpandableCard title="Arquivado" disabled>
        <p>x</p>
      </ExpandableCard>,
    );
    const trigger = screen.getByRole('button', { name: /Arquivado/ });
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('Seções e hero', () => {
  it('SectionHeader', () => {
    render(<SectionHeader title="Treinamentos" description="Trilhas obrigatórias" badge={<Tag>4</Tag>} actions={<button type="button">Nova trilha</button>} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Treinamentos' })).toBeInTheDocument();
  });

  it('Hero com CTAs e arte padrão', () => {
    const onCta = vi.fn();
    const { container } = render(<Hero eyebrow="Painel do gestor" title="Bom dia, Ana" sub="Você tem 4 aprovações" ctaPrimary="Ver aprovações" onCtaPrimary={onCta} ctaSecondary="Minha equipe" />);
    fireEvent.click(screen.getByRole('button', { name: /Ver aprovações/ }));
    expect(onCta).toHaveBeenCalled();
    expect(container.textContent).toContain('Onboarding ativo');
  });

  it('Hero com ilustração e HeroArt customizado', () => {
    render(
      <>
        <Hero title="Férias" illustration="/ferias.svg" illustrationAlt="Pessoa descansando" />
        <HeroArt people={[{ seed: 'Z', tone: 'coral' }]} tags={[{ label: '2 contratações', tone: 'blue' }]} />
      </>,
    );
    expect(screen.getByAltText('Pessoa descansando')).toBeInTheDocument();
    expect(screen.getByText('2 contratações')).toBeInTheDocument();
  });
});

describe('Movimento', () => {
  it('MotionWrapper aplica a animação e o atraso', () => {
    render(
      <MotionWrapper variant="scale" delay={120} data-testid="m">
        Conteúdo
      </MotionWrapper>,
    );
    const el = screen.getByTestId('m');
    expect(el).toHaveAttribute('data-motion', 'scale');
    expect(el.style.getPropertyValue('--motion-delay')).toBe('120ms');
  });

  it('MotionWrapper respeita prefers-reduced-motion', () => {
    const original = window.matchMedia;
    window.matchMedia = ((query: string) => ({ ...original(query), matches: query.includes('reduce') })) as typeof window.matchMedia;
    render(
      <MotionWrapper variant="slideUp" data-testid="m">
        Conteúdo
      </MotionWrapper>,
    );
    expect(screen.getByTestId('m')).not.toHaveAttribute('data-motion');
    window.matchMedia = original;
  });

  it('AnimatedSection monta cabeçalho e corpo', () => {
    render(
      <AnimatedSection title="Aniversariantes do mês" description="Celebre com a equipe">
        <p>Lista</p>
      </AnimatedSection>,
    );
    expect(screen.getByRole('heading', { name: 'Aniversariantes do mês' })).toBeInTheDocument();
    expect(screen.getByText('Lista')).toBeInTheDocument();
  });
});
