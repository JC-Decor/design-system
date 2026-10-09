import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function ChatHeaderPage() {
  return (
    <DocPage
      kicker="Chat"
      title="ChatHeader & TypingIndicator"
      source="chat"
      sourcePath="packages/ui/src/chat/ChatLayout.tsx"
      description="Cabeçalho da conversa com avatar, presença, subtítulo e ações — e o indicador animado de “digitando…”."
      importCode={`import { ChatHeader, TypingIndicator } from '@jcdecor/ui/chat';`}
    >
      <Section title="ChatHeader">
        <P>
          <code>online</code> adiciona o ponto verde ao avatar. Use{' '}
          <OnlyFor framework="react">
            <code>actions</code>
          </OnlyFor>
          <OnlyFor framework="vue">
            o slot <code>#actions</code>
          </OnlyFor>{' '}
          para ligar, transferir ou encerrar o atendimento.
        </P>
        <Demo id="chat-header/usage" />
      </Section>

      <Section title="Iniciais e título customizado">
        <P>
          Sem <code>avatar</code>, passe <code>avatarName</code> para mostrar as iniciais. Sem
          nenhum dos dois, o avatar é omitido.
        </P>
        <Demo id="chat-header/initials" />
      </Section>

      <Section title="Botão voltar">
        <P>
          Com{' '}
          <OnlyFor framework="react">
            <code>onBack</code>
          </OnlyFor>
          <OnlyFor framework="vue">
            um listener <code>@back</code>
          </OnlyFor>
          , o cabeçalho mostra uma seta de voltar{' '}
          <b>apenas em telas pequenas</b> (até 48em) — use junto com <code>mobileView</code> do{' '}
          <code>ChatLayout</code>. Reduza a janela para ver o botão.
        </P>
        <Demo id="chat-header/back" />
      </Section>

      <Section title="TypingIndicator">
        <P>
          Sem nomes mostra só os pontinhos; com nomes, o texto se ajusta para 1, 2 ou mais pessoas.
          A animação respeita <code>prefers-reduced-motion</code>.
        </P>
        <Demo id="chat-header/typing" />
      </Section>

      <Section title="Props">
        <P>
          <b>ChatHeader</b>
        </P>
        <PropsTable
          rows={[
            {
              name: 'title',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #title',
              required: true,
              description: 'Nome da conversa.',
            },
            {
              name: 'subtitle',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #subtitle',
              description: 'Status, “digitando…”, setor…',
            },
            { name: 'avatar', type: 'string', description: 'URL da foto.' },
            { name: 'avatarName', type: 'string', description: 'Nome para iniciais do avatar.' },
            {
              name: 'online',
              type: 'boolean',
              default: 'false',
              description: 'Indicador verde de presença.',
            },
            {
              name: 'actions',
              type: 'ReactNode',
              vueType: 'MantineNode | slot #actions',
              description: 'Ações à direita.',
            },
            {
              name: 'onBack',
              type: '() => void',
              vueName: '@back',
              vueType: '() => void',
              description: 'Exibe botão voltar no mobile.',
              vueDescription: 'Emitido no clique do botão voltar. Com listener, o botão aparece no mobile.',
            },
          ]}
        />
        <P>
          <b>TypingIndicator</b>
        </P>
        <PropsTable
          rows={[
            {
              name: 'names',
              type: 'string[]',
              default: '[]',
              description: 'Nomes de quem está digitando. Vazio = só os pontinhos.',
            },
          ]}
        />
        <P>
          Ambos aceitam props de <code>Box</code>.
        </P>
      </Section>
    </DocPage>
  );
}
