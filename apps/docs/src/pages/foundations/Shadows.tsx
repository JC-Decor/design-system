import { Box, Paper, SimpleGrid, Text } from '@jcdecor/ui';
import { semantic } from '@jcdecor/ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';
import { useFramework } from '../../kit/framework';

const shadows = [
  { name: 'sm', cssVar: '--ds-shadow-sm', value: semantic.light.shadowSm, usage: 'Cards em repouso (padrão do Card)' },
  { name: 'md', cssVar: '--ds-shadow-md', value: semantic.light.shadowMd, usage: 'Menus, popovers, notificações, hover de card' },
  { name: 'lg', cssVar: '--ds-shadow-lg', value: semantic.light.shadowLg, usage: 'Modais, drawers, elementos flutuantes' },
];

const radii = [
  { name: 'xs', value: '4px', usage: 'Checkbox, elementos pequenos' },
  { name: 'sm', value: '8px', usage: 'Padrão: botões, inputs, menus (--ds-radius-sm)' },
  { name: 'md', value: '12px', usage: 'Cards, Paper, modais, alertas (--ds-radius)' },
  { name: 'lg', value: '16px', usage: 'Banners e imagens de destaque' },
  { name: 'xl', value: '99px', usage: 'Pílulas: badges, switch, progress, avatar' },
];

export default function Shadows() {
  const vue = useFramework().framework === 'vue';
  return (
    <DocPage
      kicker="Fundamentos"
      title="Sombras & raios"
      description="Três níveis de elevação com sombras tingidas de Obsidian e uma escala de raios do quadrado suave à pílula."
    >
      <Section title="Sombras">
        <P>
          As sombras usam Obsidian com baixa opacidade no tema claro e preto mais denso no escuro — as variáveis <code>--ds-shadow-*</code> trocam
          automaticamente. No Mantine, <code>shadow="sm" | "md" | "lg"</code> aponta para elas.
        </P>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt="lg" p="lg" bg="var(--ds-bg)" style={{ borderRadius: 'var(--ds-radius)' }}>
          {shadows.map((s) => (
            <Paper key={s.name} shadow={s.name} p="lg" h={150} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Text fw={600}>shadow="{s.name}"</Text>
              <Text fz="xs" ff="monospace" c="var(--ds-text-3)">
                var({s.cssVar})
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
        <PropsTable rows={shadows.map((s) => ({ name: s.name, type: s.cssVar, default: s.value, description: s.usage }))} />
        <P>
          Há também <code>xs</code> (<code>0 1px 2px rgba(5,13,58,.06)</code>) e <code>xl</code> (<code>0 20px 48px rgba(5,13,58,.22)</code>) para casos
          pontuais; estes não mudam no tema escuro.
        </P>
      </Section>

      <Section title="Raios">
        <P>
          O raio padrão do tema (<code>defaultRadius</code>) é <code>sm</code> = 8px. Card e Paper usam <code>md</code> = 12px por padrão.
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
        <PropsTable rows={radii.map((r) => ({ name: r.name, type: `--mantine-radius-${r.name}`, default: r.value, description: r.usage }))} />
      </Section>

      <Section title="Como usar">
        <CodeBlock
          code={`${vue ? '<!-- Props do Mantine (template Vue) -->' : '// Props do Mantine'}
<Paper shadow="md" radius="lg" p="lg">…</Paper>
<Button radius="xl">Pílula</Button>

// CSS (adapta ao tema escuro)
.produto:hover {
  box-shadow: var(--ds-shadow-md);
  border-radius: var(--ds-radius);     /* 12px */
}
.chip { border-radius: var(--ds-radius-sm); } /* 8px */`}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Elevação comunica camada, não importância: use <code>sm</code> no conteúdo, <code>md</code> para o que flutua sobre ele e <code>lg</code> só
          para o que bloqueia a página. Não misture raios diferentes em elementos aninhados — o filho deve ter raio menor ou igual ao pai.
        </P>
      </Section>
    </DocPage>
  );
}
