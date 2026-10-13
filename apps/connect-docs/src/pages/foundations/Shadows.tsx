import { Box, Paper, SimpleGrid, Text } from '@jcdecor/connect-ui';
import { radius, semantic } from '@jcdecor/connect-ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

const shadows = [
  { name: 'sm', cssVar: '--ds-shadow-sm', connect: '--shadow-1', value: semantic.light.shadowSm, usage: 'Cards em repouso (padrão do Card); xs aponta para o mesmo valor' },
  { name: 'md', cssVar: '--ds-shadow-md', connect: '--shadow-2', value: semantic.light.shadowMd, usage: 'Menus, popovers, notificações, hover de card' },
  { name: 'lg', cssVar: '--ds-shadow-lg', connect: '--shadow-3', value: semantic.light.shadowLg, usage: 'Modais, drawers, elementos flutuantes' },
];

const radii = [
  { name: 'xs', value: radius.xs, cssVar: '--ds-radius-xs', usage: 'Checkbox, Kbd, elementos pequenos' },
  { name: 'sm', value: radius.sm, cssVar: '--ds-radius-sm', usage: 'Padrão: botões, inputs, menus' },
  { name: 'md', value: radius.md, cssVar: '--ds-radius', usage: 'Popovers, alertas, imagens' },
  { name: 'lg', value: radius.lg, cssVar: '--ds-radius-lg', usage: 'Cards, modais, drawers' },
  { name: 'xl', value: radius.pill, cssVar: '—', usage: 'Pílulas: badges, chips, avatar, switch' },
];

export default function Shadows() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Sombras & raios"
      description="Três níveis de elevação com sombras suaves tingidas de navy e raios generosos: controles 10px, cards 20px, chips em pílula."
    >
      <Section title="Sombras">
        <P>
          São as <code>--shadow-1/2/3</code> do Connect: as duas primeiras usam um ink-navy (<code>rgba(20,24,60,…)</code>) quase imperceptível, a
          terceira é tingida de navy (<code>rgba(7,1,107,.10)</code>). No escuro viram preto mais denso — as variáveis <code>--ds-shadow-*</code> trocam
          sozinhas. No Mantine, <code>shadow="sm" | "md" | "lg"</code> aponta para elas.
        </P>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt="lg" p="lg" bg="var(--ds-bg)" style={{ borderRadius: 'var(--ds-radius-lg)' }}>
          {shadows.map((s) => (
            <Paper key={s.name} shadow={s.name} radius="lg" p="lg" h={150} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Text fw={700}>shadow="{s.name}"</Text>
              <Text fz="xs" ff="monospace" c="var(--ds-text-3)">
                var({s.cssVar}) · {s.connect}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
        <PropsTable rows={shadows.map((s) => ({ name: s.name, type: s.cssVar, default: s.value, description: s.usage }))} />
        <P>
          Há também <code>xl</code> (<code>0 24px 64px rgba(20,24,60,.22)</code>) para casos pontuais, que não muda no tema escuro. O botão primário tem
          sombra colorida própria (<code>--cn-btn-shadow</code>, navy a 22%) que cresce no hover.
        </P>
      </Section>

      <Section title="Raios">
        <P>
          O raio padrão do tema (<code>defaultRadius</code>) é <code>sm</code> = 10px. O <code>Card</code> usa <code>lg</code> = 20px por padrão, e{' '}
          <code>Badge</code>/<code>Avatar</code> usam <code>xl</code> (pílula).
        </P>
        <SimpleGrid cols={{ base: 2, sm: 5 }} spacing="md" mt="lg">
          {radii.map((r) => (
            <Box key={r.name} ta="center">
              <Box
                h={88}
                mb="sm"
                style={{
                  borderRadius: `var(--mantine-radius-${r.name})`,
                  background: 'var(--ds-primary-soft)',
                  border: '2px solid var(--ds-primary)',
                }}
              />
              <Text fw={600} fz="sm">
                radius="{r.name}"
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                {r.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <PropsTable rows={radii.map((r) => ({ name: r.name, type: `--mantine-radius-${r.name}`, default: r.value, description: <>{r.usage}{r.cssVar !== '—' && <> · <code>{r.cssVar}</code></>}</> }))} />
      </Section>

      <Section title="Como usar">
        <CodeBlock
          code={`// Props do Mantine
<Paper shadow="md" radius="lg" p="lg">…</Paper>
<Button radius="xl">Pílula</Button>

/* CSS (adapta ao tema escuro) */
.cardColaborador:hover {
  box-shadow: var(--ds-shadow-md);
  border-radius: var(--ds-radius-lg);  /* 20px */
}
.chip { border-radius: 999px; }`}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Elevação comunica camada, não importância: <code>sm</code> no conteúdo, <code>md</code> para o que flutua sobre ele e <code>lg</code> só para o
          que bloqueia a página. Em elementos aninhados, o filho tem raio menor que o pai (card 20 → bloco interno 14 → botão 10).
        </P>
      </Section>
    </DocPage>
  );
}
