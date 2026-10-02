import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';

export default function SupportPattern() {
  return (
    <DocPage
      kicker="Padrões"
      title="Atendimento (chat)"
      description="Inbox de suporte da loja: filtros de conversas, chat com o cliente e cartão lateral com dados de contato e status do pedido."
    >
      <Section title="Exemplo">
        <P>
          Filtre por <b>Todas</b>, <b>Não lidas</b> ou <b>Pedidos</b>, selecione um cliente e
          responda — a mensagem é marcada como lida e o cliente responde em seguida. O cartão do
          cliente fica ao lado do chat quando há espaço (≥ 1080px de largura do contêiner) e abaixo
          dele no restante; no mobile o chat alterna entre lista e conversa.
        </P>
        <Demo id="patterns/support" />
      </Section>

      <Section title="Composição">
        <P>
          <code>ChatLayout</code> com <code>sidebar</code> = <code>SegmentedControl</code> +{' '}
          <code>ConversationList</code>, <code>ChatHeader</code> com ação “Resolver”,{' '}
          <code>ChatThread</code> e <code>ChatComposer</code> com anexos. Ao lado, um{' '}
          <code>Card</code> com <code>Avatar</code>, contatos e uma <code>Timeline</code> do pedido.
          O <code>Grid type="container"</code> posiciona as colunas pela largura do contêiner (e
          não da janela), então o padrão se adapta mesmo dentro de painéis estreitos.
        </P>
        <P>
          Para colocar conteúdo acima da lista dentro da sidebar, envolva a{' '}
          <code>ConversationList</code> em um contêiner flex com <code>flex: 1; min-height: 0</code>{' '}
          — ela ocupa 100% da altura disponível e rola sozinha.
        </P>
      </Section>
    </DocPage>
  );
}
