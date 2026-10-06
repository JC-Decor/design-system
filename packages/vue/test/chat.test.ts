import { defineComponent, h, nextTick, ref } from 'vue';
import userEvent from '@testing-library/user-event';
import {
  ChatComposer,
  ChatHeader,
  ChatLayout,
  ChatMessage,
  ChatThread,
  ConversationList,
  TypingIndicator,
  buildThread,
  type ChatMessageData,
} from '../src/chat';
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
    render(() => h(ChatComposer, { onSend }));
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
    render(() => h(ChatComposer, { onSend }));
    await userEvent.type(screen.getByRole('textbox'), '   {Enter}');
    expect(onSend).not.toHaveBeenCalled();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeDisabled();
  });

  it('ignora Enter durante composição (IME)', async () => {
    const onSend = vi.fn();
    render(() => h(ChatComposer, { onSend, defaultValue: 'ã' }));
    const input = screen.getByRole('textbox');
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true, bubbles: true }));
    expect(onSend).not.toHaveBeenCalled();
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(onSend).toHaveBeenCalledWith({ text: 'ã', files: [] });
  });

  it('suporta v-model e defaultValue; botão envia', async () => {
    const text = ref('olá');
    const onSend = vi.fn();
    render(() =>
      h(ChatComposer, { modelValue: text.value, 'onUpdate:modelValue': (v: string) => (text.value = v), onSend }),
    );
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('olá');
    await userEvent.type(input, ' mundo');
    expect(text.value).toBe('olá mundo');
    text.value = 'trocado';
    await nextTick();
    expect(input).toHaveValue('trocado');
    await userEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(onSend).toHaveBeenCalledWith({ text: 'trocado', files: [] });
    expect(text.value).toBe('');
  });

  it('não controlado com defaultValue; slot #leftSection; anexos', async () => {
    const onSend = vi.fn();
    render(() =>
      h(ChatComposer, { defaultValue: 'rascunho', allowAttachments: true, onSend }, { leftSection: () => h('span', 'emoji') }),
    );
    expect(screen.getByRole('textbox')).toHaveValue('rascunho');
    expect(screen.getByText('emoji')).toBeInTheDocument();
    const file = new File(['x'], 'planta.pdf', { type: 'application/pdf' });
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    await userEvent.upload(fileInput, file);
    expect(screen.getByText('planta.pdf')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Enviar' }));
    expect(onSend).toHaveBeenCalledWith({ text: 'rascunho', files: [file] });
    expect(screen.queryByText('planta.pdf')).not.toBeInTheDocument();
  });
});

describe('ChatThread', () => {
  const users = [
    { id: 'ana', name: 'Ana' },
    { id: 'me', name: 'Eu' },
  ];

  it('renderiza mensagens próprias e de outros', () => {
    render(() =>
      h(ChatThread, {
        h: 400,
        currentUserId: 'me',
        users,
        typing: ['Ana'],
        messages: [
          { id: '1', authorId: 'ana', text: 'Olá! Como posso ajudar?', createdAt: base },
          { id: '2', authorId: 'me', text: 'Quero um orçamento', createdAt: base + min, status: 'read' },
        ],
      }),
    );
    expect(screen.getByText('Quero um orçamento').closest('[data-own]')).not.toBeNull();
    expect(screen.getByText('Olá! Como posso ajudar?').closest('[data-own]')).toBeNull();
    expect(screen.getByText('Ana está digitando…')).toBeInTheDocument();
    expect(screen.getByRole('log')).toBeInTheDocument();
    expect(screen.getByText('Quero um orçamento').closest('[data-group-start]')).not.toBeNull();
  });

  it('slot #empty e slot #content', () => {
    const { unmount } = render(() =>
      h(ChatThread, { currentUserId: 'me', messages: [] }, { empty: () => h('p', 'Sem mensagens') }),
    );
    expect(screen.getByText('Sem mensagens')).toBeInTheDocument();
    unmount();

    render(() =>
      h(
        ChatThread,
        {
          currentUserId: 'me',
          messages: [{ id: '1', authorId: 'ana', text: 'texto', createdAt: base }],
          renderContent: () => 'via prop',
        },
        { content: ({ message }: { message: ChatMessageData }) => h('strong', `custom: ${message.text}`) },
      ),
    );
    expect(screen.getByText('custom: texto')).toBeInTheDocument();
    expect(screen.queryByText('via prop')).not.toBeInTheDocument();
  });

  it('rola para o fim quando chega mensagem nova', async () => {
    const scrollTo = vi.spyOn(window.HTMLElement.prototype, 'scrollTo');
    const messages = ref<ChatMessageData[]>([{ id: '1', authorId: 'ana', text: 'oi', createdAt: base }]);
    render(() => h(ChatThread, { currentUserId: 'me', messages: messages.value }));
    expect(scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ behavior: 'auto' }));
    messages.value = [...messages.value, { id: '2', authorId: 'me', text: 'eu', createdAt: base + min }];
    await nextTick();
    await nextTick();
    expect(scrollTo).toHaveBeenLastCalledWith(expect.objectContaining({ behavior: 'smooth' }));
    scrollTo.mockRestore();
  });
});

describe('ChatMessage', () => {
  it('não renderiza bolha sem conteúdo; mensagem de sistema', () => {
    render(() => [
      h(ChatMessage, { own: true, status: 'read', createdAt: base, 'data-testid': 'msg' }),
      h(ChatMessage, { system: true }, () => 'Conversa iniciada'),
    ]);
    const msg = screen.getByTestId('msg');
    expect(msg).toHaveAttribute('data-own');
    expect(msg.querySelector('[class*="bubble"]:not([class*="bubbleColumn"])')).toBeNull();
    expect(screen.getByLabelText('Lida')).toBeInTheDocument();
    expect(screen.getByText('Conversa iniciada')).toHaveAttribute('role', 'status');
  });
});

describe('TypingIndicator', () => {
  it('rótulos em pt-BR', () => {
    render(() => h(TypingIndicator, { names: ['Ana', 'Bruno', 'Carla'] }));
    expect(screen.getByText('Ana e mais 2 estão digitando…')).toBeInTheDocument();
  });
});

describe('ConversationList', () => {
  it('filtra pela busca e seleciona', async () => {
    const onSelect = vi.fn();
    render(() =>
      h(ConversationList, {
        onSelect,
        conversations: [
          { id: '1', name: 'Maria Souza', lastMessage: 'Obrigada!', unread: 2 },
          { id: '2', name: 'João Lima', lastMessage: 'Qual o prazo?' },
        ],
      }),
    );
    await userEvent.type(screen.getByRole('textbox'), 'prazo');
    expect(screen.queryByText('Maria Souza')).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('João Lima'));
    expect(onSelect).toHaveBeenCalledWith(expect.objectContaining({ id: '2' }));
  });

  it('vazio padrão e slot #empty', async () => {
    render(() => h(ConversationList, { conversations: [] }));
    expect(screen.getByText('Nenhuma conversa encontrada')).toBeInTheDocument();
    render(() => h(ConversationList, { conversations: [], searchable: false }, { empty: () => 'Nada aqui' }));
    expect(screen.getByText('Nada aqui')).toBeInTheDocument();
  });
});

describe('ChatLayout / ChatHeader', () => {
  it('slots, botão voltar só com @back', async () => {
    const onBack = vi.fn();
    render(() =>
      h(
        ChatLayout,
        { height: 500 },
        {
          sidebar: () => h('nav', 'lista'),
          header: () => h(ChatHeader, { title: 'Maria', onBack }, { subtitle: () => 'online', actions: () => h('button', 'Menu') }),
          default: () => h('div', 'mensagens'),
          composer: () => h('div', 'composer'),
        },
      ),
    );
    expect(screen.getByText('lista').closest('aside')).not.toBeNull();
    expect(screen.getByText('Maria')).toBeInTheDocument();
    expect(screen.getByText('online')).toBeInTheDocument();
    expect(screen.getByText('mensagens')).toBeInTheDocument();
    expect(screen.getByText('composer')).toBeInTheDocument();
    expect(document.querySelector('[data-mobile-view="thread"]')).not.toBeNull();
    await userEvent.click(screen.getByRole('button', { name: 'Voltar' }));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it('sem sidebar vira chat único; sem @back não há botão voltar', () => {
    const Wrapper = defineComponent({
      setup: () => () => h(ChatLayout, null, { header: () => h(ChatHeader, { title: 'Suporte' }), default: () => 'x' }),
    });
    render(() => h(Wrapper));
    expect(document.querySelector('[data-single]')).not.toBeNull();
    expect(screen.queryByRole('button', { name: 'Voltar' })).not.toBeInTheDocument();
  });
});

describe('ChatComposer (resposta em andamento)', () => {
  it('loading bloqueia o envio, mantém o texto e mostra o botão de interromper', async () => {
    const onSend = vi.fn();
    const onStop = vi.fn();
    render(() =>
      h(ChatComposer, { onSend, onStop, loading: true }, { rightSection: () => h('span', 'extra') }),
    );
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
    render(() => h(ChatComposer, { onSend, sendDisabled: true }));
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
    render(() =>
      h(
        ChatThread,
        {
          h: 400,
          currentUserId: 'me',
          users: [{ id: 'bot', name: 'Assistente' }],
          messages: [
            { id: '1', authorId: 'me', text: 'Resuma o pedido', createdAt: base },
            { id: '2', authorId: 'bot', text: 'Resumo', createdAt: base + min, variant: 'plain' },
          ],
        },
        {
          avatar: ({ message }: { message: ChatMessageData }) =>
            message.authorId === 'bot' ? h('span', { 'data-testid': 'bot-avatar' }) : null,
          footer: () => h('span', 'Buscando arquivos…'),
        },
      ),
    );
    expect(screen.getByText('Resumo').closest('[data-variant="plain"]')).not.toBeNull();
    expect(screen.getByText('Resuma o pedido').closest('[data-variant="plain"]')).toBeNull();
    expect(screen.getByTestId('bot-avatar')).toBeInTheDocument();
    expect(screen.getByText('Buscando arquivos…')).toBeInTheDocument();
  });
});

describe('ConversationList (ações e ícone)', () => {
  it('slot #actions não seleciona a conversa e #icon substitui o avatar', async () => {
    const onSelect = vi.fn();
    const onDelete = vi.fn();
    render(() =>
      h(
        ConversationList,
        { searchable: false, activeId: '1', onSelect, conversations: [{ id: '1', name: 'Pedido 123' }] },
        {
          icon: () => h('span', { 'data-testid': 'icon' }),
          actions: ({ conversation }: { conversation: { id: string; name: string } }) =>
            h('button', { type: 'button', onClick: () => onDelete(conversation.id) }, `Excluir ${conversation.name}`),
        },
      ),
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
