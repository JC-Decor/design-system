import { Anchor, Box, Code, Stack, Text } from '@jcdecor/ui';
import { typography, type TypographyToken } from '@jcdecor/ui/tokens';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const weightName: Record<number, string> = { 400: 'Regular', 500: 'Medium', 600: 'SemiBold', 700: 'Bold' };

const sample = (token: TypographyToken) => {
  if (token === 'displayLg') return 'Aa';
  if (token.startsWith('display')) return 'Clareza move sistemas.';
  if (token.startsWith('headline')) return 'Hierarquia legível para momentos de produto.';
  if (token.startsWith('subheadline')) return 'Texto de apoio que mantém a estrutura calma e clara.';
  if (token === 'button') return 'Adicionar ao carrinho';
  return 'Microcopy para notas, orientação e suporte legal.';
};

const kebab = (s: string) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
const tokens = Object.keys(typography) as TypographyToken[];

export default function Typography() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Tipografia"
      description="Poppins, a fonte do site, em uma escala de razão ~1,25 sobre base 16px. Texto de leitura e de interface tem tamanho fixo; só os títulos de destaque se adaptam à tela."
    >
      <Section title="Escala tipográfica">
        <P>
          Tamanhos em px; quando há dois valores (<code>desktop/mobile</code>) o estilo é fluido. Os valores vêm de <code>typography</code> em{' '}
          <code>@jcdecor/ui/tokens</code>.
        </P>
        <Stack gap={0} mt="md">
          {tokens.map((token) => {
            const t = typography[token];
            return (
              <Box key={token} py="lg" style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
                <Text fz="xs" fw={500} c="var(--ds-text-3)" ff="monospace" mb={6}>
                  {t.label} · {t.px}px · {weightName[t.weight]}
                </Text>
                <Text fz={t.size} fw={t.weight} lh={t.lineHeight} c="var(--ds-text)" lts={t.letterSpacing === '0' ? undefined : t.letterSpacing}>
                  {sample(token)}
                </Text>
              </Box>
            );
          })}
        </Stack>
      </Section>

      <Section title="Variáveis CSS">
        <P>
          Cada estilo vira uma variável <code>--type-*</code>, disponível em qualquer CSS ou prop de estilo. Os nomes foram mantidos
          (<code>subheadline-*</code> = corpo) para não quebrar código existente.
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
          O tema mapeia os headings do Mantine para a escala da marca, então <code>&lt;Title order={'{n}'}&gt;</code> já sai com o tamanho, peso e
          entrelinha corretos, além de <code>text-wrap: balance</code> e cor <code>--ds-text</code>.
        </P>
        <PropsTable
          rows={[
            { name: 'h1', type: '--type-display-sm', default: '700', description: 'Título da página · 40/32px' },
            { name: 'h2', type: '--type-headline-lg', default: '600', description: 'Seção ("Ofertas imperdíveis") · 32/26px' },
            { name: 'h3', type: '--type-headline-md', default: '600', description: 'Subseção · 24px' },
            { name: 'h4', type: '--type-headline-sm', default: '600', description: 'Título de card/modal · 20px' },
            { name: 'h5', type: '18px', default: '600', description: 'Grupo / título pequeno' },
            { name: 'h6', type: '16px', default: '600', description: 'Rótulo de bloco' },
          ]}
        />
        <Demo id="typography-scale/titles" />
      </Section>

      <Section title="Tamanhos de texto do Mantine">
        <P>
          As props <code>size</code>/<code>fz</code> de <Code>Text</Code> usam a mesma escala: <code>xs</code> 12 (legenda), <code>sm</code> 14 (UI densa,
          tabelas), <code>md</code> 16 (corpo, padrão), <code>lg</code> 18 (lead) e <code>xl</code> 20. Campos usam 16px, que evita o zoom automático do iOS.
        </P>
        <Demo id="typography-scale/text-sizes" />
      </Section>

      <Section title="Componentes de tipografia">
        <P>
          Para textos de marketing e páginas de produto, prefira os componentes semânticos <code>Display</code>, <code>Headline</code>,{' '}
          <code>Subheadline</code>, <code>Disclaimer</code> e <code>Kicker</code>. Veja todos os detalhes em{' '}
          <Anchor component={Link} to="/componentes/tipografia">
            Display, Headline…
          </Anchor>
          .
        </P>
        <Demo id="typography-scale/components" />
      </Section>

      <Section title="Em JS">
        <CodeBlock
          code={`import { typography } from '@jcdecor/ui/tokens';

typography.headlineLg;
// { size: 'clamp(26px, 0.9vw + 21px, 32px)', weight: 600, lineHeight: 1.25, letterSpacing: '-0.01em', px: '32/26', … }`}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use um único Display por página e não pule níveis de heading. Limite parágrafos a ~65 caracteres por linha (<code>maw={'{640}'}</code>).
          Para corpo use <code>Text</code> com <code>var(--ds-text-2)</code>; reserve <code>--ds-text-3</code> para legendas. Evite pesos abaixo de 400 e
          acima de 700: a Poppins fica fina demais ou pesada demais em tela. Títulos grandes pedem tracking levemente negativo; caixa-alta pede positivo.
        </P>
      </Section>
    </DocPage>
  );
}
