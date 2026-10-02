import { Link } from 'react-router-dom';
import { Button, Card, Group, SimpleGrid, Text, ThemeIcon, PromoBanner, Kicker, Display, Subheadline, Tag } from '@jcdecor/ui';
import { IconBrush, IconComponents, IconMessages, IconChartBar, IconShoppingBag, IconLayoutDashboard } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

const cards = [
  { icon: IconBrush, title: 'Fundamentos', text: 'Cores, tipografia Poppins, spacing, sombras e grid — tokens com contraste AA validado.', to: '/fundamentos/cores' },
  { icon: IconComponents, title: 'Mantine temado', text: 'Mais de 100 componentes do Mantine já com a cara da JC Decor.', to: '/mantine/button' },
  { icon: IconLayoutDashboard, title: 'Componentes JC', text: 'KPI, Tag, PromoBanner, TopNav, DataTable e outros específicos da marca.', to: '/componentes/kpi-card' },
  { icon: IconShoppingBag, title: 'E-commerce', text: 'ProductCard, PriceTag com parcelamento e Pix, CouponCode.', to: '/ecommerce/product-card' },
  { icon: IconMessages, title: 'Chat', text: 'Bolhas, conversa, composer, lista de conversas e layout de atendimento.', to: '/chat' },
  { icon: IconChartBar, title: 'Gráficos', text: 'Line, Area, Bar, Donut e Sparkline na paleta da marca, em pt-BR.', to: '/graficos' },
];

export default function Intro() {
  return (
    <DocPage
      kicker="JC Decor · DS"
      title="Design System"
      description={
        <>
          Tokens e componentes alinhados ao site jcdecor.com.br, empacotados como <b>@jcdecor/ui</b>: um tema e uma
          biblioteca React sobre o <b>Mantine</b>, prontos para importar em qualquer projeto.
        </>
      }
    >
      <PromoBanner radius="md" mt="xl" highlight="npm i @jcdecor/ui">
        Comece agora:
      </PromoBanner>

      <Section title="O que tem aqui">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md" mt="md">
          {cards.map((card) => (
            <Card key={card.title} component={Link} to={card.to} style={{ textDecoration: 'none' }}>
              <ThemeIcon size={40} radius="md" variant="light">
                <card.icon size={22} />
              </ThemeIcon>
              <Text fw={600} mt="md" fz="var(--type-subheadline-lg)">{card.title}</Text>
              <Text fz="sm" c="var(--ds-text-2)" mt={4}>{card.text}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Section>

      <Section title="Uso rápido">
        <P>Envolva a aplicação com o <code>JcProvider</code> e importe tudo de <code>@jcdecor/ui</code> — os componentes do Mantine são reexportados já temados.</P>
        <CodeBlock
          code={`import '@mantine/core/styles.css';
import '@jcdecor/ui/styles.css';
import { JcProvider, Button, KpiCard, Tag } from '@jcdecor/ui';

export function App() {
  return (
    <JcProvider>
      <KpiCard label="Acessos (60d)" value={54959} delta={-5.6} />
      <Tag tone="success" withIcon>Sucesso</Tag>
      <Button variant="accent">Destaque</Button>
    </JcProvider>
  );
}`}
        />
      </Section>

      <Section title="Princípios">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="md">
          {[
            ['Tokens primeiro', 'Nunca hex/px/fonte hard-coded que os tokens já carregam. Use as cores do tema (horizon.6) ou as variáveis --ds-*.'],
            ['Mantine por baixo', 'Toda a API do Mantine continua valendo: Styles API, props de estilo, hooks, temas. O DS só define padrões.'],
            ['Claro e escuro', 'O tema claro é o padrão da marca; o escuro (painéis internos) é mapeado da mesma paleta.'],
          ].map(([title, text]) => (
            <div key={title}>
              <Kicker>{title}</Kicker>
              <Text fz="sm" c="var(--ds-text-2)" mt={6}>{text}</Text>
            </div>
          ))}
        </SimpleGrid>
      </Section>

      <Section title="Exemplo de hierarquia">
        <Card mt="md" padding="xl">
          <Kicker>Coleção 2026</Kicker>
          <Display size="sm" mt={8}>Clareza move sistemas.</Display>
          <Subheadline size="lg" c="var(--ds-text-2)" mt="sm" maw={560}>
            Texto de apoio que mantém a estrutura calma e clara.
          </Subheadline>
          <Group mt="lg">
            <Button>Ação primária</Button>
            <Button variant="outline">Secundária</Button>
            <Tag tone="warn" withIcon>Atenção</Tag>
          </Group>
        </Card>
      </Section>
    </DocPage>
  );
}
