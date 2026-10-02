import { Anchor, Card } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function CardPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Card"
      source="mantine"
      mantineName="card"
      description="Superfície branca com borda suave e sombra pequena sobre o fundo cinza-frio da página — a base de cards de produto, conteúdo e resumos."
      importCode={`import { Card } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Card}
          name="Card"
          baseProps={{ style: { minWidth: 260 } }}
          controls={[
            { prop: 'shadow', type: 'select', data: ['none', 'xs', 'sm', 'md', 'lg', 'xl'], initialValue: 'sm' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'padding', type: 'size', initialValue: 'lg' },
            { prop: 'withBorder', type: 'boolean', initialValue: true },
            { prop: 'children', type: 'string', initialValue: 'Conteúdo do card' },
          ]}
        />
      </Section>

      <Section title="Card de produto">
        <P>
          O <code>Card</code> já vem com <code>withBorder</code>, <code>shadow="sm"</code>, <code>radius="md"</code> (12px) e{' '}
          <code>padding="lg"</code> (24px) — o equivalente ao <code>.ds-card</code>. Use <code>Card.Section</code> para conteúdo de borda a
          borda, como a foto do produto.
        </P>
        <Demo id="card/product" />
      </Section>

      <Section title="Resumo do pedido">
        <P>
          <code>Card.Section withBorder inheritPadding</code> cria um cabeçalho separado por divisor, mantendo o padding horizontal do card.
        </P>
        <Demo id="card/order-summary" />
      </Section>

      <Section title="Cards de conteúdo">
        <Demo id="card/content" />
      </Section>

      <Section title="Card como link">
        <P>
          Com <code>component="a"</code> (ou o <code>Link</code> do roteador) o card inteiro vira a área de clique — mantenha um único link por
          card.
        </P>
        <Demo id="card/link" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: "'md'", description: '12px, como os cards de produto do site.' },
            { name: 'padding', type: 'defaultProps', default: "'lg'", description: '24px.' },
            { name: 'shadow', type: 'defaultProps', default: "'sm'", description: '--ds-shadow-sm (mais forte no tema escuro).' },
            { name: 'withBorder', type: 'defaultProps', default: 'true', description: 'Borda --ds-border-soft.' },
          ]}
        />
        <P>
          Para superfícies genéricas sem sombra, veja{' '}
          <Anchor component={Link} to="/mantine/paper">
            Paper
          </Anchor>
          ; para cards prontos,{' '}
          <Anchor component={Link} to="/ecommerce/product-card">
            ProductCard
          </Anchor>
          ,{' '}
          <Anchor component={Link} to="/componentes/content-card">
            ContentCard
          </Anchor>{' '}
          e{' '}
          <Anchor component={Link} to="/componentes/kpi-card">
            KpiCard
          </Anchor>
          .
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Não aninhe Cards com sombra: dentro de um Card, use <code>Paper withBorder</code> ou um fundo <code>--ds-surface-2</code>. Mantenha
          uma única ação primária por card e alinhe os preços na mesma altura em grades de produtos.
        </P>
      </Section>
    </DocPage>
  );
}
