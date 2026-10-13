import { Anchor, Box, Code, Stack, Text } from '@jcdecor/connect-ui';
import { typography, type TypographyToken } from '@jcdecor/connect-ui/tokens';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const weightName: Record<number, string> = { 400: 'Regular', 500: 'Medium', 600: 'SemiBold', 700: 'Bold' };

const sample = (token: TypographyToken) => {
  if (token === 'displayLg') return 'Bom dia, Rafael';
  if (token.startsWith('display')) return 'Painel do Colaborador';
  if (token === 'headlineLg') return 'Solicitações de férias';
  if (token === 'headlineMd') return 'Aprovar 10 dias de férias?';
  if (token === 'headlineSm') return 'Banco de horas da equipe';
  if (token.startsWith('subheadline')) return 'Mariana Costa pediu férias de 12 a 21 de janeiro. O saldo dela é de 18 dias.';
  if (token === 'button') return 'Aprovar solicitação';
  if (token === 'eyebrow') return 'FÉRIAS · APROVAÇÃO';
  return 'Atualizado há 5 min · visível só para gestores';
};

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const tokens = Object.keys(typography) as TypographyToken[];

export default function Typography() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Tipografia"
      description="DM Sans em uma escala densa, pensada para painéis de uso diário: corpo de 13,5px, rótulos de 12,5px, títulos de card 16/700 e título de página 26/700. DM Mono nos eyebrows e números."
    >
      <Section title="Escala tipográfica">
        <P>
          Tamanhos em px; quando há dois valores (<code>desktop/mobile</code>) o estilo é fluido — só os títulos de destaque. Os valores vêm de{' '}
          <code>typography</code> em <code>@jcdecor/connect-ui/tokens</code>.
        </P>
        <Stack gap={0} mt="md">
          {tokens.map((token) => {
            const t = typography[token];
            const mono = token === 'eyebrow';
            return (
              <Box key={token} py="md" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
                <Text fz="xs" fw={500} c="var(--ds-text-3)" ff="monospace" mb={6}>
                  {t.label} · {t.px}px · {weightName[t.weight]}
                </Text>
                <Text
                  fz={t.size}
                  fw={t.weight}
                  lh={t.lineHeight}
                  c={mono || token === 'disclaimer' ? 'var(--ds-text-3)' : 'var(--ds-text)'}
                  ff={mono ? 'monospace' : undefined}
                  lts={t.letterSpacing === '0' ? undefined : t.letterSpacing}
                >
                  {sample(token)}
                </Text>
              </Box>
            );
          })}
        </Stack>
      </Section>

      <Section title="Variáveis CSS">
        <P>
          Cada estilo vira uma variável <code>--type-*</code>, disponível em qualquer CSS ou style prop. Os nomes seguem o DS JC Decor (
          <code>subheadline-*</code> = corpo) para que os overrides do Mantine sejam compartilhados entre os dois sistemas.
        </P>
        <PropsTable
          rows={tokens.map((token) => ({
            name: `--type-${kebab(token)}`,
            type: typography[token].size,
            default: `${typography[token].weight} / ${typography[token].lineHeight}`,
            description: `${typography[token].label} (${typography[token].px}px)`,
          }))}
        />
        <Demo id="typography-scale/css-vars" />
      </Section>

      <Section title="Title h1–h6">
        <P>
          O tema mapeia os headings do Mantine para a escala do Connect, então <code>&lt;Title order={'{n}'}&gt;</code> já sai com tamanho, peso e
          entrelinha corretos, além de <code>text-wrap: balance</code>. Todos são Bold, como no app original.
        </P>
        <PropsTable
          rows={[
            { name: 'h1', type: '--type-display-sm', default: '700', description: 'Título da página · 26px' },
            { name: 'h2', type: '--type-headline-lg', default: '700', description: 'Título de seção · 22px' },
            { name: 'h3', type: '--type-headline-md', default: '700', description: 'Título de diálogo · 18px' },
            { name: 'h4', type: '--type-headline-sm', default: '700', description: 'Título de card · 16px' },
            { name: 'h5', type: '15px', default: '700', description: 'Grupo / título pequeno' },
            { name: 'h6', type: '13.5px', default: '700', description: 'Rótulo de bloco' },
          ]}
        />
        <Demo id="typography-scale/titles" />
      </Section>

      <Section title="Tamanhos de texto do Mantine">
        <P>
          As props <code>size</code>/<code>fz</code> de <Code>Text</Code> usam a mesma escala: <code>xs</code> 11,5 (legenda), <code>sm</code> 12,5
          (rótulos, tabelas), <code>md</code> 13,5 (corpo, padrão), <code>lg</code> 15 (lead) e <code>xl</code> 16. Campos usam 13px como o{' '}
          <code>.sel-trigger</code> do Connect.
        </P>
        <Demo id="typography-scale/text-sizes" />
      </Section>

      <Section title="Componentes de tipografia">
        <P>
          Para cabeçalhos de página e de card, prefira os componentes semânticos <code>Display</code>, <code>Headline</code>, <code>Subheadline</code>,{' '}
          <code>Disclaimer</code> e <code>Kicker</code> (o eyebrow mono em caixa-alta). Detalhes em{' '}
          <Anchor component={Link} to="/componentes/tipografia">
            Display, Headline…
          </Anchor>
          .
        </P>
        <Demo id="typography-scale/components" />
      </Section>

      <Section title="Em JS">
        <CodeBlock
          language="ts"
          code={`import { typography, fontFamily, fontFamilyMonospace } from '@jcdecor/connect-ui/tokens';

typography.headlineSm;
// { size: '16px', weight: 700, lineHeight: 1.35, letterSpacing: '-0.01em', px: '16', label: 'card-title' }
fontFamily; // "'DM Sans', system-ui, …"`}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Um único título de página (h1) por tela e sem pular níveis de heading. Corpo em <code>var(--ds-text-2)</code>; <code>--ds-text-3</code> só para
          legendas e metadados — nunca <code>--ds-text-4</code> em texto. Números em tabelas e KPIs ficam melhores com{' '}
          <code>font-variant-numeric: tabular-nums</code>. Títulos grandes pedem tracking negativo; caixa-alta (eyebrows) pede positivo. Como o corpo já
          é pequeno, evite descer abaixo de 11,5px.
        </P>
      </Section>
    </DocPage>
  );
}
