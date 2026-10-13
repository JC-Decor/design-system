import { describe, expect, it, vi } from 'vitest';
import {
  CellPerson,
  ConfirmDialog,
  ConnectProvider,
  ContextualDrawer,
  DetailGrid,
  DetailItem,
  FilterChip,
  FormGrid,
  FormModal,
  InlineNotice,
  PersonAvatar,
  ProgressBar,
  PromptDialog,
  TextInput,
  Textarea,
  tones,
} from '../src';
import { fireEvent, render, screen } from './render';

describe('FormModal', () => {
  it('liga título e subtítulo ao diálogo e fecha pelo botão', () => {
    const onOpenChange = vi.fn();
    render(
      <FormModal open onOpenChange={onOpenChange} title="Novo setor" description="Preencha os dados do setor" footer={<button>Salvar</button>}>
        <TextInput label="Nome" />
      </FormModal>,
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Novo setor');
    expect(dialog).toHaveAccessibleDescription('Preencha os dados do setor');
    expect(screen.getByRole('textbox', { name: 'Nome' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('envolve corpo e rodapé num form quando recebe onSubmit', () => {
    const onSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <FormModal open onOpenChange={() => {}} title="Editar" onSubmit={onSubmit} footer={<button type="submit">Salvar</button>}>
        <TextInput label="Nome" />
      </FormModal>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Salvar' }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('usa a grade de campos por padrão e empilha com layout="stack"', () => {
    const { rerender } = render(
      <FormModal open onOpenChange={() => {}} title="A">
        <Textarea label="Descrição" />
      </FormModal>,
    );
    expect(screen.getByRole('textbox', { name: 'Descrição' }).closest('[data-layout]')).toHaveAttribute('data-layout', 'grid');
    rerender(
      <FormModal open onOpenChange={() => {}} title="A" layout="stack">
        <Textarea label="Descrição" />
      </FormModal>,
    );
    expect(screen.getByRole('textbox', { name: 'Descrição' }).closest('[data-layout]')).toHaveAttribute('data-layout', 'stack');
  });
});

describe('FormGrid', () => {
  it('aplica a largura mínima das colunas', () => {
    render(
      <FormGrid minColWidth={200} data-testid="grid">
        <TextInput label="A" />
      </FormGrid>,
    );
    expect(screen.getByTestId('grid').style.getPropertyValue('--fg-min')).toBe('200px');
  });
});

describe('InlineNotice', () => {
  it('mostra título e texto no tom', () => {
    render(
      <InlineNotice tone="warning" title="Atenção" data-testid="notice">
        Prazo vence amanhã
      </InlineNotice>,
    );
    expect(screen.getByText('Atenção')).toBeInTheDocument();
    expect(screen.getByText('Prazo vence amanhã')).toBeInTheDocument();
    expect(screen.getByTestId('notice')).toHaveAttribute('data-tone', 'warning');
  });
});

describe('DetailGrid', () => {
  it('renderiza itens e filhos como pares rótulo/valor', () => {
    render(
      <DetailGrid items={[{ label: 'Início', value: '01/11' }, { label: 'Motivo', value: 'Viagem', span: 'full' }]}>
        <DetailItem label="Dias">10</DetailItem>
      </DetailGrid>,
    );
    expect(screen.getByText('Início').nextSibling).toHaveTextContent('01/11');
    expect(screen.getByText('Motivo').parentElement).toHaveAttribute('data-span', 'full');
    expect(screen.getByText('Dias').nextSibling).toHaveTextContent('10');
  });
});

describe('ContextualDrawer (0.2)', () => {
  it('mantém o botão de fechar com header próprio quando withCloseButton', () => {
    const onOpenChange = vi.fn();
    render(
      <ContextualDrawer open onOpenChange={onOpenChange} title="Detalhes" header={<h2>Cabeçalho próprio</h2>} withCloseButton>
        Corpo
      </ContextualDrawer>,
    );
    fireEvent.click(screen.getByRole('button', { name: 'Fechar painel' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('não duplica o fechar com header próprio por padrão e aceita largura fixa', () => {
    render(
      <ContextualDrawer open onOpenChange={() => {}} title="Detalhes" header={<h2>Cab</h2>} size={460} bodyPadding={0}>
        <span>Corpo</span>
      </ContextualDrawer>,
    );
    expect(screen.queryByRole('button', { name: 'Fechar painel' })).not.toBeInTheDocument();
    expect(screen.getByText('Corpo').parentElement).toHaveStyle({ padding: '0px' });
  });
});

describe('theme.other.resolveAvatarSrc', () => {
  it('resolve a foto do PersonAvatar e do CellPerson', () => {
    const resolveAvatarSrc = (src?: string | null) => (src ? `/proxy${src}` : null);
    render(
      <ConnectProvider env="test" theme={{ other: { resolveAvatarSrc } }}>
        <PersonAvatar seed="AS" src="/media/a.png" alt="Ana" />
        <CellPerson name="Bruno" seed="BR" src="/media/b.png" />
      </ConnectProvider>,
    );
    const srcs = Array.from(document.querySelectorAll('img')).map((img) => img.getAttribute('src'));
    expect(srcs).toEqual(['/proxy/media/a.png', '/proxy/media/b.png']);
  });
});

describe('ajustes 0.2', () => {
  it('FilterChip filled marca a variante', () => {
    render(
      <FilterChip active variant="filled" tone="navy">
        Todos
      </FilterChip>,
    );
    expect(screen.getByRole('button', { name: 'Todos' })).toHaveAttribute('data-variant', 'filled');
  });

  it('ProgressBar aceita cor livre', () => {
    render(<ProgressBar value={40} color="var(--ds-text-3)" aria-label="Sem acordo" />);
    expect(screen.getByLabelText('Sem acordo')).toBeInTheDocument();
  });

  it('tem o tom navy', () => {
    expect(tones.navy.color).toBe('navy');
  });
});

describe('classes do painel não vazam para o contêiner do Mantine', () => {
  const own = (el: Element) => Array.from(el.classList).filter((c) => !c.startsWith('m_') && !c.startsWith('mantine-'));

  it.each([
    ['ConfirmDialog', () => <ConfirmDialog open onOpenChange={() => {}} title="Excluir?" onConfirm={() => {}} />],
    ['PromptDialog', () => <PromptDialog open onOpenChange={() => {}} title="Renomear" label="Nome" onConfirm={() => {}} />],
    ['FormModal', () => <FormModal open onOpenChange={() => {}} title="Novo" />],
    ['ContextualDrawer', () => <ContextualDrawer open onOpenChange={() => {}} title="Painel">x</ContextualDrawer>],
  ])('%s', (_name, ui) => {
    render(ui());
    const dialog = screen.getByRole('dialog');
    const inner = dialog.parentElement!;
    const shared = own(dialog).filter((c) => inner.classList.contains(c));
    expect(shared).toEqual([]);
  });
});
