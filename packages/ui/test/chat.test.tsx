import userEvent from '@testing-library/user-event';
import { ChatComposer, ChatThread, ConversationList, buildThread, type ChatMessageData } from '../src/chat';
import { render, screen } from './render';

const base = new Date(2026, 9, 2, 10, 0).getTime();
const min = 60 * 1000;

describe('buildThread', () => {
  it('agrupa mensagens consecutivas e insere separador de data', () => {
    const messages: ChatMessageData[] = [
      { id: '1', authorId: 'a', text: 'oi', createdAt: base },
      { id: '2', authorId: 'a', text: 'tudo bem?', createdAt: base + min },
      { id: '3', authorId: 'a', text: '?', createdAt: base + 2 * min },
      { id: '4', authorId: 'b', text: 'sim', createdAt: base + 3 * min },
      { id: '5', authorId: 'a', text: 'depois', createdAt: base + 60 * min },
    ];
    const items = buildThread(messages, 5 * min, new Date(base));
    expect(items[0]).toMatchObject({ type: 'separator', label: 'Hoje' });
    const positions = items.filter((i) => i.type === 'message').map((i) => (i as any).position);
    expect(positions).toEqual(['first', 'middle', 'last', 'single', 'single']);
  });
});

describe('ChatComposer', () => {
  it('Enter envia e limpa; Shift+Enter quebra linha', async () => {
    const onSend = vi.fn();
    render(<ChatComposer onSend={onSend} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'linha 1{Shift>}{Enter}{/Shift}linha 2');
    expect(onSend).not.toHaveBeenCalled();
    expect(input).toHaveValue('linha 1\nlinha 2');
    await userEvent.type(input, '{Enter}');
    expect(onSend).toHaveBeenCalledWith({ text: 'linha 1\nlinha 2', files: [] });
    expect(input).toHaveValue('');
  });

  it('não envia vazio', async () => {
    const onSend = vi.fn();
    render(<ChatComposer onSend={onSend} />);
    await userEvent.type(screen.getByRole('textbox'), '   {Enter}');
    expect(onSend).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled();
  });
});

describe('ChatThread', () => {
  it('renderiza mensagens próprias e de outros', () => {
    render(
      <ChatThread
        h={400}
        currentUserId="me"
        users={[{ id: 'ana', name: 'Ana' }, { id: 'me', name: 'Eu' }]}
        typing={['Ana']}
        messages={[
          { id: '1', authorId: 'ana', text: 'Olá! Como posso ajudar?', createdAt: base },
          { id: '2', authorId: 'me', text: 'Quero um orçamento', createdAt: base + min, status: 'read' },
        ]}
      />,
    );
    expect(screen.getByText('Quero um orçamento').closest('[data-own]')).not.toBeNull();
    expect(screen.getByText('Olá! Como posso ajudar?').closest('[data-own]')).toBeNull();
    expect(screen.getByText('Ana está digitando…')).toBeInTheDocument();
  });
});

describe('ConversationList', () => {
  it('filtra pela busca e seleciona', async () => {
    const onSelect = vi.fn();
    render(
      <ConversationList
        onSelect={onSelect}
        conversations={[
          { id: '1', name: 'Maria Souza', lastMessage: 'Obrigada!', unread: 2 },
          { id: '2', name: 'João Lima', lastMessage: 'Qual o prazo?' },
        ]}
      />,
    );
    await userEvent.type(screen.getByRole('textbox'), 'prazo');
    expect(screen.queryByText('Maria Souza')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('João Lima'));
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: '2' }));
  });
});

describe('ChatComposer (resposta em andamento)', () => {
  it('loading bloqueia o envio, mantém o texto e mostra o botão de interromper', async () => {
    const onSend = vi.fn();
    const onStop = vi.fn();
    render(<ChatComposer onSend={onSend} loading onStop={onStop} rightSection={<span>extra</span>} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'próxima pergunta{Enter}');
    expect(onSend).not.toHaveBeenCalled();
    expect(input).toHaveValue('próxima pergunta');
    expect(input).not.toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Enviar' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Interromper' }));
    expect(onStop).toHaveBeenCalledTimes(1);
    expect(screen.getByText('extra')).toBeInTheDocument();
  });

  it('sendDisabled bloqueia o envio sem desabilitar o campo', async () => {
    const onSend = vi.fn();
    render(<ChatComposer onSend={onSend} sendDisabled />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, 'oi{Enter}');
    expect(onSend).not.toHaveBeenCalled();
    expect(input).not.toBeDisabled();
    expect(input).toHaveValue('oi');
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled();
  });
});

describe('ChatThread (assistente)', () => {
  it('variant plain, avatar customizado e footer', () => {
    render(
      <ChatThread
        h={400}
        currentUserId="me"
        users={[{ id: 'bot', name: 'Assistente' }]}
        renderAvatar={(m) => (m.authorId === 'bot' ? <span data-testid="bot-avatar" /> : null)}
        footer={<span>Buscando arquivos…</span>}
        messages={[
          { id: '1', authorId: 'me', text: 'Resuma o pedido', createdAt: base },
          { id: '2', authorId: 'bot', text: 'Resumo', createdAt: base + min, variant: 'plain' },
        ]}
      />,
    );
    expect(screen.getByText('Resumo').closest('[data-variant="plain"]')).not.toBeNull();
    expect(screen.getByText('Resuma o pedido').closest('[data-variant="plain"]')).toBeNull();
    expect(screen.getByTestId('bot-avatar')).toBeInTheDocument();
    expect(screen.getByText('Buscando arquivos…')).toBeInTheDocument();
  });
});

describe('ConversationList (ações e ícone)', () => {
  it('renderActions não seleciona a conversa e renderIcon substitui o avatar', async () => {
    const onSelect = vi.fn();
    const onDelete = vi.fn();
    render(
      <ConversationList
        searchable={false}
        activeId="1"
        onSelect={onSelect}
        renderIcon={() => <span data-testid="icon" />}
        renderActions={(c) => (
          <button type="button" onClick={() => onDelete(c.id)}>
            Excluir {c.name}
          </button>
        )}
        conversations={[{ id: '1', name: 'Pedido 123' }]}
      />,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Excluir Pedido 123' }));
    expect(onDelete).toHaveBeenCalledWith('1');
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveAttribute('data-active');
    await userEvent.click(screen.getByText('Pedido 123'));
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: '1' }));
  });
});
