import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ModalPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Modal"
      source="mantine"
      mantineName="modal"
      description="Janela de diálogo que bloqueia a página para uma decisão ou um formulário curto. Centralizada, com painel de raio 20, overlay ink translúcido desfocado e foco preso no conteúdo."
      importCode={`import { Modal } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';`}
    >
      <Section title="Confirmar desligamento">
        <P>
          Controle a abertura com <code>useDisclosure</code>. Em confirmações destrutivas use <code>size="sm"</code>, descreva a consequência
          (quem é afetado, o que acontece com férias e banco de horas), use o botão <code>variant="danger"</code> e coloque o foco inicial na
          ação segura com <code>data-autofocus</code>. O Connect também tem um diálogo de confirmação pronto em Componentes Connect.
        </P>
        <Demo id="modal/confirm-termination" />
      </Section>

      <Section title="Solicitação de férias">
        <P>
          Formulários curtos cabem em <code>size="lg"</code>. O primeiro campo recebe o foco; <kbd>Esc</kbd> e o clique fora fecham o modal.
          Ações no rodapé: Cancelar em <code>ghost</code> e a ação primária à direita.
        </P>
        <Demo id="modal/vacation-form" />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>size</code> aceita <code>xs</code>–<code>xl</code>, porcentagem ou px. Em telas estreitas o modal sempre respeita a margem lateral.
        </P>
        <Demo id="modal/sizes" />
      </Section>

      <Section title="Tela cheia no mobile">
        <P>
          Combine <code>fullScreen</code> com <code>useMediaQuery</code> para que, abaixo de 768px, o modal ocupe a tela toda — melhor para textos
          longos (políticas, termos de ciência) e teclado virtual.
        </P>
        <Demo id="modal/fullscreen-mobile" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'centered', type: 'defaultProps', default: 'true', description: 'Modais abrem centralizados verticalmente (.dialog-panel do Connect).' },
            { name: 'radius', type: 'defaultProps', default: 'lg', description: 'Painel com raio 20px, o mesmo dos cards.' },
            { name: 'padding', type: 'defaultProps', default: 'xl', description: 'Respiro interno de 28px.' },
            { name: 'shadow', type: 'defaultProps', default: 'xl', description: 'Sombra profunda 0 24px 64px rgba(20,24,60,.22).' },
            { name: 'overlayProps', type: 'defaultProps', default: 'ink 36% · blur 2', description: 'rgba(14,16,34,.36) com backdrop blur de 2px (.dialog-overlay).' },
            { name: 'content / header', type: 'classNames', description: 'Fundo --ds-surface e borda 1px --ds-border-soft; adapta ao tema escuro.' },
            { name: 'title', type: 'classNames', description: 'Título 18px/700 (dialog-title), letter-spacing -0,012em, cor --ds-text.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', required: true, description: 'Estado de abertura.' },
            { name: 'onClose', type: '() => void', required: true, description: 'Chamado no Esc, no clique fora e no botão fechar.' },
            { name: 'title', type: 'ReactNode', description: 'Título no cabeçalho; também vira o aria-labelledby.' },
            { name: 'size', type: "MantineSize | string | number", default: 'md', description: 'Largura do conteúdo.' },
            { name: 'fullScreen', type: 'boolean', default: 'false', description: 'Ocupa a viewport inteira.' },
            { name: 'closeOnClickOutside', type: 'boolean', default: 'true', description: 'Desative em formulários com risco de perda de dados.' },
            { name: 'trapFocus', type: 'boolean', default: 'true', description: 'Mantém o Tab dentro do modal.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use modal só para decisões que bloqueiam o fluxo (desligar, reprovar, publicar comunicado); edição de colaborador e conteúdo longo vão
          em Drawer. Nunca empilhe modais — se precisar de uma
          segunda etapa, troque o conteúdo do mesmo modal. Mantenha o foco preso (padrão), permita fechar com <kbd>Esc</kbd> e sempre ofereça uma
          saída explícita (Cancelar). O botão primário fica à direita.
        </P>
      </Section>
    </DocPage>
  );
}
