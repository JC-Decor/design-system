import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function HoverCardPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="HoverCard"
      source="mantine"
      mantineName="hover-card"
      description="Cartão de prévia que abre ao passar o mouse sobre um link — resumo de cliente, produto ou pedido sem sair da tela."
      importCode={`import { HoverCard } from '@jcdecor/ui';`}
    >
      <Section title="Prévia do cliente">
        <P>
          Passe o mouse sobre o nome. <code>openDelay</code> evita aberturas acidentais ao mover o cursor pela página.
        </P>
        <Demo id="hover-card/customer" />
      </Section>

      <Section title="Prévia do produto">
        <P>Em tabelas de pedidos, mostre foto, preço, avaliação e estoque do item sem abrir a página do produto.</P>
        <Demo id="hover-card/product" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'shadow / radius', type: 'defaultProps', default: 'md · md', description: '--ds-shadow-md e raio de card (12px).' },
            { name: 'dropdown', type: 'classNames', description: 'Mesma superfície do Popover: --ds-surface com borda e seta --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'openDelay', type: 'number', default: '0', description: 'Atraso em ms antes de abrir (recomendado 150–300).' },
            { name: 'closeDelay', type: 'number', default: '150', description: 'Atraso para fechar; permite levar o mouse até o cartão.' },
            { name: 'width', type: "number | 'target'", description: 'Largura do cartão.' },
            { name: 'position', type: 'FloatingPosition', default: 'bottom', description: 'Posição em relação ao alvo.' },
            { name: 'withArrow', type: 'boolean', default: 'false', description: 'Mostra a seta apontando para o alvo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          HoverCard não existe no toque: o conteúdo deve ser só complementar, e o link precisa levar à página completa. Não coloque ações essenciais
          dentro dele — use Popover quando o conteúdo for interativo.
        </P>
      </Section>
    </DocPage>
  );
}
