import { Link } from 'react-router-dom';
import { Anchor, Group, Stack, Text, TokenSwatch, ColorRamp, SimpleGrid, Box, Table, Badge, Button, Paper, Icon } from '@jcdecor/connect-ui';
import { brand, ramps, semantic, darkNeutrals } from '@jcdecor/connect-ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

const anchors: { name: string; value: string; cssVar: string; role: string }[] = [
  { name: 'Navy', value: brand.navy, cssVar: '--cn-navy', role: 'Primária: botões, links, item ativo, sidebar' },
  { name: 'Ink', value: brand.ink, cssVar: '--cn-ink', role: 'Texto principal (16,6:1)' },
  { name: 'Lavender', value: ramps.lavender[600], cssVar: '--cn-lavender-600', role: 'Pausado, destaques suaves' },
  { name: 'Blue', value: ramps.blue[500], cssVar: '--cn-blue-500', role: 'Informação, concluído' },
  { name: 'Green', value: ramps.green[500], cssVar: '--cn-green-500', role: 'Sucesso, ativo' },
  { name: 'Yellow', value: ramps.yellow[400], cssVar: '--cn-yellow-400', role: 'Atenção, pendente (só fundo/dot)' },
  { name: 'Coral', value: ramps.coral[500], cssVar: '--cn-coral-500', role: 'Erro, perigo, atrasado' },
];

const semanticRows: [string, keyof (typeof semantic)['light'], string][] = [
  ['--ds-bg', 'bg', 'Fundo da página (--bg)'],
  ['--ds-surface', 'surface', 'Cards, inputs, menus (--surface)'],
  ['--ds-surface-2', 'surface2', 'Hover de linhas, trilhos (--bg-2)'],
  ['--ds-surface-tint', 'surfaceTint', 'Cabeçalho de tabela (--surface-tint)'],
  ['--ds-text', 'text', 'Títulos e texto principal (--ink)'],
  ['--ds-text-2', 'text2', 'Corpo de texto (--ink-2)'],
  ['--ds-text-3', 'text3', 'Legendas, hints, eyebrows (--muted, ajustado)'],
  ['--ds-text-4', 'text4', 'Só decorativo: ícones, separadores (--muted-2)'],
  ['--ds-border', 'border', 'Contorno de campos e botões outline (--line-2)'],
  ['--ds-border-soft', 'borderSoft', 'Bordas de cards e divisores (--line)'],
  ['--ds-primary', 'primary', 'Ações, links, foco'],
  ['--ds-primary-hover', 'primaryHover', 'Hover do primário'],
];

const softRows: [string, keyof (typeof semantic)['light'], string][] = [
  ['--ds-primary-soft', 'primarySoft', 'Item ativo, fundos suaves de destaque'],
  ['--ds-primary-tint', 'primaryTint', 'Hover sobre o soft'],
];

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

type Kind = 'texto' | 'borda' | 'decorativo';
const contrastRows: [string, string, string, Kind][] = [
  ['Texto principal (ink)', semantic.light.text, semantic.light.surface, 'texto'],
  ['Corpo (ink-2)', semantic.light.text2, semantic.light.surface, 'texto'],
  ['Legenda (texto-3, #6B6F84)', semantic.light.text3, semantic.light.surface, 'texto'],
  ['Legenda sobre o fundo da página', semantic.light.text3, semantic.light.bg, 'texto'],
  ['✕ --muted original do Connect', ramps.gray[500], semantic.light.surface, 'texto'],
  ['Botão primário', '#FFFFFF', brand.navy, 'texto'],
  ['Botão danger', '#FFFFFF', ramps.coral[600], 'texto'],
  ['Filled yellow (texto âmbar)', ramps.yellow[900], ramps.yellow[400], 'texto'],
  ['Escuro: texto-3 sobre superfície', semantic.dark.text3, semantic.dark.surface, 'texto'],
  ['Escuro: primário sobre fundo', semantic.dark.primary, semantic.dark.bg, 'texto'],
  ['Borda de campo (--line-2)', semantic.light.border, semantic.light.surface, 'decorativo'],
];

export default function Colors() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Cores"
      description="Navy #07016B como primária, neutros frios “ink” e cinco tons pastel. Rampas OKLCH de 50 a 900 com os hex originais do Connect fixados nos tons onde o app os usa. Clique em uma amostra para copiar."
    >
      <Section title="Cores-âncora">
        <Group gap="sm" mt="md" align="flex-start">
          {anchors.map(({ name, value, cssVar, role }) => (
            <Stack key={name} gap={6} w={150}>
              <TokenSwatch name={name} value={value} cssVar={cssVar} />
              <Text fz="xs" c="var(--ds-text-3)">{role}</Text>
            </Stack>
          ))}
        </Group>
      </Section>

      <Section title="Composição" description="O painel é quase todo neutro: fundo #F6F7FB, cards brancos e texto ink. O navy estrutura (sidebar, ações, item ativo) e os tons pastel só aparecem em avatares, chips, badges e ícones de KPI.">
        <Box mt="md" style={{ display: 'flex', height: 56, borderRadius: 'var(--ds-radius)', overflow: 'hidden', border: '1px solid var(--ds-border-soft)' }}>
          <Box style={{ flex: 70, background: ramps.gray[50], display: 'grid', placeItems: 'center' }}><Text fz="sm" fw={600} c={ramps.gray[700]}>~70% neutros</Text></Box>
          <Box style={{ flex: 20, background: brand.navy, display: 'grid', placeItems: 'center' }}><Text fz="sm" fw={600} c="#fff">~20% navy</Text></Box>
          <Box style={{ flex: 10, display: 'flex' }}>
            {(['lavender', 'blue', 'green', 'yellow', 'coral'] as const).map((tone) => (
              <Box key={tone} style={{ flex: 1, background: ramps[tone][100] }} />
            ))}
          </Box>
        </Box>
        <Group mt="md">
          <Button leftSection={<Icon name="plus" size={16} />}>Novo comunicado</Button>
          <Button variant="ghost">Exportar</Button>
          <Button variant="danger">Desligar colaborador</Button>
          <Badge color="green">Ativo</Badge>
          <Badge color="yellow">Pendente</Badge>
          <Badge color="coral">Atrasado</Badge>
        </Group>
      </Section>

      <Section title="Rampas">
        <P>
          Cada cor tem 10 tons de 50 a 900, interpolados em OKLCH (claridade perceptualmente uniforme) entre os hex do Connect. No Mantine,{' '}
          <code>navy.6</code> é o tom 600; os filled usam o 600 no claro e o 300 no escuro (com texto ink). Âncoras fixadas: 50 = <i>soft</i> do tom,
          100 = <i>bg</i> do tom, 500 = dot de status, 700/800 = texto do tom. Na rampa <code>gray</code> (= <code>ink</code>): 50 = --bg, 100 = --bg-2,
          200 = --line-2, 500 = --muted, 700 = --ink-2, 900 = --ink.
        </P>
        <Stack gap="sm" mt="md">
          {(Object.keys(ramps) as (keyof typeof ramps)[]).map((name) => (
            <div key={name}>
              <Text fz="xs" fw={600} c="var(--ds-text-3)" tt="uppercase" mb={4} ff="monospace">
                {name === 'gray' ? 'gray · ink' : name}
              </Text>
              <ColorRamp steps={Object.entries(ramps[name]).map(([label, value]) => ({ label, value }))} />
            </div>
          ))}
          <div>
            <Text fz="xs" fw={600} c="var(--ds-text-3)" tt="uppercase" mb={4} ff="monospace">dark (slate do tema escuro, 0 → 9)</Text>
            <ColorRamp steps={darkNeutrals.map((value, i) => ({ label: String(i), value }))} />
          </div>
        </Stack>
        <P>
          Aliases: <code>red</code> e <code>pink</code> → coral, <code>indigo</code> → navy, <code>violet</code>/<code>grape</code> → lavender,{' '}
          <code>cyan</code> → blue, <code>teal</code>/<code>lime</code> → green, <code>orange</code> → yellow. Prefira os nomes do Connect.
        </P>
      </Section>

      <Section title="Contraste" description="Razões WCAG calculadas a partir dos tokens. AA exige 4,5:1 para texto.">
        <Paper withBorder mt="md" style={{ overflow: 'hidden' }}>
          <Table>
            <Table.Thead>
              <Table.Tr><Table.Th>Uso</Table.Th><Table.Th>Exemplo</Table.Th><Table.Th style={{ textAlign: 'right' }}>Razão</Table.Th><Table.Th>WCAG</Table.Th></Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {contrastRows.map(([label, fg, bg, kind]) => {
                const r = ratio(fg, bg);
                const isBorder = kind === 'decorativo';
                return (
                  <Table.Tr key={label}>
                    <Table.Td>{label}</Table.Td>
                    <Table.Td>
                      <Box px="sm" py={4} style={{ background: bg, color: fg, borderRadius: 6, display: 'inline-block', fontWeight: 600, border: `1px solid ${isBorder ? fg : 'var(--ds-border-soft)'}` }}>
                        {isBorder ? <span style={{ color: semantic.light.text3 }}>Buscar colaborador</span> : 'Aa Férias'}
                      </Box>
                    </Table.Td>
                    <Table.Td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r.toFixed(2).replace('.', ',')}:1</Table.Td>
                    <Table.Td>
                      {isBorder ? (
                        <Badge color="ink">Decorativa</Badge>
                      ) : r >= 4.5 ? (
                        <Badge color="green">{r >= 7 ? 'AAA' : 'AA'}</Badge>
                      ) : (
                        <Badge color="coral">Reprova</Badge>
                      )}
                    </Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Paper>
        <P>
          <b>Decisões de acessibilidade.</b> O <code>--muted</code> original do Connect (#7A7E92) dá só 4,0:1 sobre branco; para texto ele foi escurecido
          para <b>#6B6F84</b> (4,9:1) em <code>--ds-text-3</code>. O #7A7E92 continua na rampa (<code>gray.5</code>) e o <code>--muted-2</code> (#9095A8)
          virou <code>--ds-text-4</code>, só para ícones e separadores. As bordas de campo (<code>--line</code>/<code>--line-2</code>) foram mantidas como no
          Connect e são decorativas (abaixo de 3:1): o indicador acessível de um campo é o rótulo e, no foco, a borda navy com o anel{' '}
          <code>--ds-focus-ring</code>. Esses pares são verificados em <code>packages/connect-ui/test/contrast.test.ts</code> — mudar um token que quebre AA
          quebra o teste.
        </P>
      </Section>

      <Section title="Tokens semânticos" description="Mudam automaticamente entre o tema claro e o escuro (à esquerda claro, à direita escuro).">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs" mt="md">
          {[...semanticRows, ...softRows].map(([cssVar, key, usage]) => (
            <Group key={cssVar} gap="sm" wrap="nowrap" p="xs" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius-sm)', background: 'var(--ds-surface)' }}>
              <Group gap={0} wrap="nowrap">
                <Box w={28} h={28} style={{ background: semantic.light[key], border: '1px solid var(--ds-border-soft)', borderRadius: '6px 0 0 6px' }} title="claro" />
                <Box w={28} h={28} style={{ background: semantic.dark[key], border: '1px solid var(--ds-border-soft)', borderRadius: '0 6px 6px 0' }} title="escuro" />
              </Group>
              <div style={{ minWidth: 0 }}>
                <Text fz="sm" fw={600} ff="monospace">{cssVar}</Text>
                <Text fz="xs" c="var(--ds-text-3)">{usage}</Text>
              </div>
            </Group>
          ))}
        </SimpleGrid>
        <P>
          Feedback: <code>--ds-success</code> (green.6), <code>--ds-warn</code> (yellow.4), <code>--ds-error</code> (coral.5) e os fundos{' '}
          <code>--ds-success-bg</code>, <code>--ds-warn-bg</code>, <code>--ds-error-bg</code>. Para tons de avatar/chip, veja{' '}
          <Anchor component={Link} to="/fundamentos/tons">Tons, status e prioridades</Anchor>.
        </P>
      </Section>

      <Section title="Como usar">
        <CodeBlock
          code={`// Props de cor do Mantine: nome da cor + índice (6 = tom 600)
<Button color="green">Aprovar</Button>
<Badge color="coral">Atrasado</Badge>
<Text c="navy.7">Texto navy</Text>
<Box bg="lavender.0">Fundo lavanda bem suave</Box>

// Tokens semânticos (adaptam ao tema escuro)
<Text c="var(--ds-text-3)">Atualizado há 5 min</Text>
<Paper bg="var(--ds-surface-2)" />

// Em JS (ex.: canvas, e-mail)
import { brand, ramps, semantic } from '@jcdecor/connect-ui/tokens';
brand.navy;          // '#07016B'
ramps.coral[500];    // '#D94B36'
semantic.light.text3 // '#6B6F84'`}
        />
      </Section>
    </DocPage>
  );
}
