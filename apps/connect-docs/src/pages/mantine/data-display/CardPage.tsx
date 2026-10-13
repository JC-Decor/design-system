import { Anchor, Card } from '@jcdecor/connect-ui';
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
      description="O .card do Connect: superfície com raio 20, padding 22, borda --line e sombra-1 sobre o fundo da página — a base de perfis, solicitações, comunicados e resumos do painel."
      importCode={`import { Card } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Card}
          name="Card"
          baseProps={{ style: { minWidth: 260 } }}
          controls={[
            { prop: 'shadow', type: 'select', data: ['none', 'xs', 'sm', 'md', 'lg', 'xl'], initialValue: 'sm' },
            { prop: 'radius', type: 'size', initialValue: 'lg' },
            { prop: 'padding', type: 'size', initialValue: 'lg' },
            { prop: 'withBorder', type: 'boolean', initialValue: true },
            { prop: 'children', type: 'string', initialValue: 'Conteúdo do card' },
          ]}
        />
      </Section>

      <Section title="Card de colaborador">
        <P>
          O <code>Card</code> já vem com <code>withBorder</code>, <code>shadow="sm"</code> (sombra-1), <code>radius="lg"</code> (20px) e{' '}
          <code>padding="lg"</code> (22px) — o equivalente ao <code>.card</code> do Connect. Basta compor o conteúdo: avatar, nome em 16/700,
          cargo em texto-3 e as ações no rodapé.
        </P>
        <Demo id="card/employee" />
      </Section>

      <Section title="Solicitação de férias aprovada">
        <P>
          <code>Card.Section withBorder inheritPadding</code> cria um cabeçalho separado por divisor, mantendo o padding horizontal do card.
        </P>
        <Demo id="card/vacation-request" />
      </Section>

      <Section title="Comunicados e treinamentos">
        <Demo id="card/content" />
      </Section>

      <Section title="Card como link">
        <P>
          Com <code>component="a"</code> (ou o <code>Link</code> do roteador) o card inteiro vira a área de clique — mantenha um único link por
          card. Use <code>Card.Section</code> para conteúdo de borda a borda, como a imagem do comunicado.
        </P>
        <Demo id="card/link" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: "'lg'", description: '20px, o raio dos cards do painel.' },
            { name: 'padding', type: 'defaultProps', default: "'lg'", description: '22px (--pad na densidade regular).' },
            { name: 'shadow', type: 'defaultProps', default: "'sm'", description: 'Sombra-1 do Connect (--ds-shadow-sm), ajustada no tema escuro.' },
            { name: 'withBorder', type: 'defaultProps', default: 'true', description: 'Borda 1px --ds-border-soft (--line).' },
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface nos dois temas.' },
          ]}
        />
        <P>
          Para superfícies genéricas sem sombra, veja{' '}
          <Anchor component={Link} to="/mantine/paper">
            Paper
          </Anchor>
          . Cards prontos do painel (KPI, perfil de colaborador) estão em <em>Componentes Connect</em>.
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Não aninhe Cards com sombra: dentro de um Card, use <code>Paper withBorder</code> ou um fundo <code>--ds-surface-2</code>. Mantenha
          uma única ação primária por card e use o mesmo padding em toda a grade — cards lado a lado com densidades diferentes quebram o ritmo
          do dashboard.
        </P>
      </Section>
    </DocPage>
  );
}
