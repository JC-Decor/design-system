import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function DialogPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Dialog"
      source="mantine"
      mantineName="dialog"
      description="Caixa fixa em um canto da tela que não bloqueia a página — para avisos de cookies, convites e confirmações discretas."
      importCode={`import { Dialog } from '@jcdecor/ui';`}
    >
      <Section title="Aviso de cookies">
        <P>
          Diferente do Modal, o Dialog não tem overlay nem prende o foco: o usuário continua navegando. <code>position</code> escolhe o canto — aqui,
          inferior esquerdo.
        </P>
        <Demo id="dialog/cookies" />
      </Section>

      <Section title="Convite da newsletter">
        <P>Na posição padrão (inferior direita, 30px das bordas) com botão de fechar.</P>
        <Demo id="dialog/newsletter" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: 'md', description: 'Raio de card (12px).' },
            { name: 'shadow', type: 'defaultProps', default: 'lg', description: '--ds-shadow-lg.' },
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface, borda --ds-border-soft — igual a ActionBar e FloatingWindow.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', required: true, description: 'Estado de abertura.' },
            { name: 'onClose', type: '() => void', description: 'Chamado pelo botão fechar.' },
            { name: 'withCloseButton', type: 'boolean', default: 'false', description: 'Mostra o X no canto.' },
            { name: 'size', type: 'MantineSize | number', default: 'md', description: 'Largura (md = 340px).' },
            { name: 'position', type: 'AffixPosition', default: '{ bottom: 30, right: 30 }', description: 'Canto da viewport.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Um Dialog por vez e nunca em cima do botão do WhatsApp ou do CTA do carrinho. Ele não fecha com <kbd>Esc</kbd> nem prende o foco — se a
          resposta for obrigatória, use Modal.
        </P>
      </Section>
    </DocPage>
  );
}
