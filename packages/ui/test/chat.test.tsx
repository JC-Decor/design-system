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
