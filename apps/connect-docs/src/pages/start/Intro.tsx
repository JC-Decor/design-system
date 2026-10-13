import { Link } from 'react-router-dom';
import { Anchor, Avatar, Badge, Button, Card, Group, SimpleGrid, Stack, Text, ThemeIcon, Kicker, Headline, Subheadline, Icon } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

const cards = [
  { icon: 'sparkle', title: 'Fundamentos', text: 'Cores navy + tons pastel, DM Sans em escala densa, spacing, raios, sombras, ícones e movimento — com contraste AA testado.', to: '/fundamentos/cores' },
  { icon: 'gear', title: 'Mantine temado', text: 'Mais de 100 componentes do Mantine já com a cara do Painel do Colaborador, nos temas claro e escuro.', to: '/mantine/button' },
  { icon: 'users', title: 'Componentes Connect', text: 'Os componentes do app original (tipografia, ícones, ThemeToggle e os blocos de painel) refeitos sobre o Mantine.', to: '/componentes/tipografia' },
  { icon: 'chart', title: 'Tons e status', text: 'Tons de avatar/chip, prioridades e status de registros como tokens prontos para usar.', to: '/fundamentos/tons' },
] as const;

export default function Intro() {
  return (
    <DocPage
      kicker="Connect JC · DS"
      title="Design System Connect"
      description={
        <>
          O visual do <b>Connect JC — Painel do Colaborador</b> (o app interno de RH) empacotado como <b>@jcdecor/connect-ui</b>: tema, tokens e
          componentes React sobre o <b>Mantine 9</b>, para que novas telas e novos apps internos saiam iguais ao painel sem copiar CSS.
        </>
      }
    >
      <Card mt="xl" bg="var(--ds-primary-soft)" withBorder={false} shadow="none">
        <Group justify="space-between" wrap="wrap" gap="md">
          <div>
            <Kicker>Comece agora</Kicker>
            <Text ff="monospace" fw={600} mt={4} c="var(--ds-primary)">npm i @jcdecor/connect-ui @mantine/core @mantine/hooks</Text>
          </div>
          <Button component={Link} to="/instalacao" rightSection={<Icon name="arrow-r" size={16} />}>
            Guia de instalação
          </Button>
        </Group>
      </Card>

      <Section title="Irmão do DS JC Decor">
        <P>
          Este é o segundo design system do repositório <code>JC-Decor/design-system</code>. O primeiro, <b>@jcdecor/ui</b>, é o DS do e-commerce JC
          Decor. Os dois compartilham a mesma arquitetura — Mantine por baixo, variáveis <code>--ds-*</code>, mesma estrutura de
          docs — mas têm identidades diferentes: o Connect é denso, navy e pensado para painéis de uso diário.{' '}
          <Anchor href={`${import.meta.env.BASE_URL}../`}>Ver o Design System JC Decor →</Anchor>
        </P>
      </Section>

      <Section title="O que tem aqui">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" mt="md">
          {cards.map((card) => (
            <Card key={card.title} component={Link} to={card.to} style={{ textDecoration: 'none' }}>
              <ThemeIcon size={40} radius="md" variant="light">
                <Icon name={card.icon} size={22} />
              </ThemeIcon>
              <Text fw={700} mt="md" fz="var(--type-subheadline-lg)">{card.title}</Text>
              <Text fz="sm" c="var(--ds-text-2)" mt={4}>{card.text}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Section>

      <Section title="Uso rápido">
        <P>
          Envolva a aplicação com o <code>ConnectProvider</code> e importe tudo de <code>@jcdecor/connect-ui</code> — os componentes do Mantine são
          reexportados já temados, ao lado dos componentes próprios do Connect.
        </P>
        <CodeBlock
          code={`import '@mantine/core/styles.css';
import '@jcdecor/connect-ui/styles.css';
import { ConnectProvider, Card, Group, Avatar, Badge, Button, Kicker, Headline, Icon } from '@jcdecor/connect-ui';

export function App() {
  return (
    <ConnectProvider>
      <Card maw={420}>
        <Kicker>Férias · aprovação</Kicker>
        <Headline size="sm" mt={6}>Mariana Costa pediu 10 dias</Headline>
        <Group mt="md" justify="space-between">
          <Group gap="xs">
            <Avatar name="Mariana Costa" color="lavender" />
            <Badge color="yellow">Pendente</Badge>
          </Group>
          <Button leftSection={<Icon name="check" size={16} />}>Aprovar</Button>
        </Group>
      </Card>
    </ConnectProvider>
  );
}`}
        />
        <Card maw={420} mt="md">
          <Kicker>Férias · aprovação</Kicker>
          <Headline size="sm" mt={6}>Mariana Costa pediu 10 dias</Headline>
          <Group mt="md" justify="space-between">
            <Group gap="xs">
              <Avatar name="Mariana Costa" color="lavender" />
              <Badge color="yellow">Pendente</Badge>
            </Group>
            <Button leftSection={<Icon name="check" size={16} />}>Aprovar</Button>
          </Group>
        </Card>
      </Section>

      <Section title="Princípios">
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mt="md">
          {[
            ['Tokens primeiro', 'Nada de hex/px soltos: use as cores do tema (navy.6, color="green") ou as variáveis --ds-* e --cn-*, que já trocam no tema escuro.'],
            ['Mantine por baixo', 'Toda a API do Mantine continua valendo: Styles API, style props, hooks, extend(). O DS só define padrões e o visual.'],
            ['Denso e legível', 'Corpo 13,5px e controles de 40px, como no painel original — mas com todos os pares de texto acima de 4,5:1.'],
          ].map(([title, text]) => (
            <Stack key={title} gap={6}>
              <Kicker>{title}</Kicker>
              <Text fz="sm" c="var(--ds-text-2)">{text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Section>

      <Section title="Exemplo de hierarquia">
        <Card mt="md">
          <Kicker>Painel do colaborador</Kicker>
          <Headline size="lg" mt={8}>Bom dia, Rafael</Headline>
          <Subheadline c="var(--ds-text-2)" mt="xs" maw={560}>
            Você tem 3 solicitações de férias para aprovar e 2 feedbacks 1:1 agendados esta semana.
          </Subheadline>
          <Group mt="lg">
            <Button>Ver pendências</Button>
            <Button variant="ghost">Abrir agenda</Button>
            <Badge color="coral">2 atrasadas</Badge>
          </Group>
        </Card>
      </Section>
    </DocPage>
  );
}
