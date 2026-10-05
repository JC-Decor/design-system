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
      description="Janela de diálogo que bloqueia a página para uma decisão ou um formulário curto. Centralizada, com overlay Obsidian desfocado e foco preso no conteúdo."
      importCode={`import { Modal } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';`}
    >
      <Section title="Confirmar exclusão">
        <P>
          Controle a abertura com <code>useDisclosure</code>. Em confirmações destrutivas use <code>size="sm"</code>, descreva a consequência e
          coloque o foco inicial na ação segura com <code>data-autofocus</code>.
        </P>
        <Demo id="modal/confirm-delete" />
      </Section>

      <Section title="Formulário de endereço">
        <P>
          Formulários curtos cabem em <code>size="lg"</code>. O primeiro campo recebe o foco; <kbd>Esc</kbd> e o clique fora fecham o modal.
        </P>
        <Demo id="modal/address-form" />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>size</code> aceita <code>xs</code>–<code>xl</code>, porcentagem ou px. Em telas estreitas o modal sempre respeita a margem lateral.
        </P>
        <Demo id="modal/sizes" />
      </Section>

      <Section title="Tela cheia no mobile">
        <P>
          Combine <code>fullScreen</code> com <code>useMediaQuery</code> para que, abaixo de 768px, o modal ocupe a tela toda — melhor para conteúdo
          longo e teclado virtual.
        </P>
        <Demo id="modal/fullscreen-mobile" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'centered', type: 'defaultProps', default: 'true', description: 'Modais abrem centralizados verticalmente.' },
            { name: 'radius', type: 'defaultProps', default: 'md', description: 'Raio de card (12px).' },
            { name: 'shadow', type: 'defaultProps', default: 'lg', description: '--ds-shadow-lg, que se ajusta ao tema escuro.' },
            { name: 'overlayProps', type: 'defaultProps', default: 'Obsidian 50% · blur 2', description: 'Overlay navy da marca em vez do preto.' },
            { name: 'content / header', type: 'classNames', description: 'Fundo --ds-surface; título em headline-small (20px, 600).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', required: true, description: 'Estado de abertura.' },
            { name: 'onClose', vueName: '@close', type: '() => void', vueType: 'evento', required: true, description: 'Chamado no Esc, no clique fora e no botão fechar.' },
            { name: 'title', type: 'ReactNode', vueType: 'string | slot #title', description: 'Título no cabeçalho; também vira o aria-labelledby.' },
            { name: 'size', type: "MantineSize | string | number", default: 'md', description: 'Largura do conteúdo.' },
            { name: 'fullScreen', type: 'boolean', default: 'false', description: 'Ocupa a viewport inteira.' },
            { name: 'closeOnClickOutside', type: 'boolean', default: 'true', description: 'Desative em formulários com risco de perda de dados.' },
            { name: 'trapFocus', type: 'boolean', default: 'true', description: 'Mantém o Tab dentro do modal.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use modal só para decisões que bloqueiam o fluxo; conteúdo longo ou edição lateral vai em Drawer. Nunca empilhe modais — se precisar de uma
          segunda etapa, troque o conteúdo do mesmo modal. Mantenha o foco preso (padrão), permita fechar com <kbd>Esc</kbd> e sempre ofereça uma
          saída explícita (Cancelar). O botão primário fica à direita.
        </P>
      </Section>
    </DocPage>
  );
}
