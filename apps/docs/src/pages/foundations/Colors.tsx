import { Group, Stack, Text, Tag, TokenSwatch, ColorRamp, SimpleGrid, Box, Table, Badge, Button, Paper } from '@jcdecor/ui';
import { brand, ramps, semantic } from '@jcdecor/ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { CodeBlock } from '../../kit/CodeBlock';

const anchors: { key: keyof typeof brand; name: string; role: string }[] = [
  { key: 'horizon', name: 'Horizon', role: 'Ação: botões, links, preços' },
  { key: 'obsidian', name: 'Obsidian', role: 'Marca: barra superior, hero' },
  { key: 'electric', name: 'Electric', role: 'Destaque: só como fundo' },
  { key: 'evergreen', name: 'Evergreen', role: 'Sucesso, Pix, estoque' },
  { key: 'danger', name: 'Danger', role: 'Erro, desconto' },
];

const semanticRows: [string, keyof (typeof semantic)['light'], string][] = [
  ['--ds-bg', 'bg', 'Fundo da página'],
  ['--ds-surface', 'surface', 'Cards, inputs, menus'],
  ['--ds-surface-2', 'surface2', 'Hover, zebra, áreas secundárias'],
  ['--ds-text', 'text', 'Títulos e texto principal'],
  ['--ds-text-2', 'text2', 'Corpo de texto'],
  ['--ds-text-3', 'text3', 'Legendas e hints'],
  ['--ds-border', 'border', 'Bordas de campos (≥ 3:1)'],
  ['--ds-border-soft', 'borderSoft', 'Bordas de cards e divisores'],
  ['--ds-primary', 'primary', 'Ações, links, foco'],
  ['--ds-primary-soft', 'primarySoft', 'Fundos suaves de destaque'],
];

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

const contrastRows: [string, string, string][] = [
  ['Texto principal', semantic.light.text, '#FFFFFF'],
  ['Corpo', semantic.light.text2, '#FFFFFF'],
  ['Legenda', semantic.light.text3, '#FFFFFF'],
  ['Botão primário', '#FFFFFF', ramps.horizon[600]],
  ['Botão destaque', brand.obsidian, brand.electric],
  ['Selo sucesso', ramps.evergreen[700], ramps.evergreen[50]],
  ['Selo atenção', ramps.electric[700], ramps.electric[50]],
  ['Selo erro', ramps.danger[700], ramps.danger[50]],
  ['Borda de campo', semantic.light.border, '#FFFFFF'],
  ['✕ Amarelo como texto', brand.electric, '#FFFFFF'],
];

export default function Colors() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Cores"
      description="Paleta calibrada a partir do site jcdecor.com.br: rampas perceptuais (OKLCH), neutros frios no matiz do azul e todos os pares validados em WCAG AA. Clique em uma amostra para copiar."
    >
      <Section title="Cores-âncora">
        <Group gap="sm" mt="md" align="flex-start">
          {anchors.map(({ key, name, role }) => (
            <Stack key={key} gap={6} w={150}>
              <TokenSwatch name={name} value={brand[key]} cssVar={`--dc-${key}`} />
              <Text fz="xs" c="var(--ds-text-3)">{role}</Text>
            </Stack>
          ))}
        </Group>
      </Section>

      <Section title="Proporção 60 · 30 · 10" description="A regra clássica de composição evita que as cores briguem: muito neutro, azul estruturando e amarelo só onde precisa chamar atenção.">
        <Box mt="md" style={{ display: 'flex', height: 56, borderRadius: 'var(--ds-radius)', overflow: 'hidden', border: '1px solid var(--ds-border-soft)' }}>
          <Box style={{ flex: 60, background: ramps.gray[50], display: 'grid', placeItems: 'center' }}><Text fz="sm" fw={600} c={ramps.gray[700]}>60% neutros</Text></Box>
          <Box style={{ flex: 30, background: ramps.horizon[600], display: 'grid', placeItems: 'center' }}><Text fz="sm" fw={600} c="#fff">30% azul / navy</Text></Box>
          <Box style={{ flex: 10, background: brand.electric, display: 'grid', placeItems: 'center' }}><Text fz="sm" fw={600} c={brand.obsidian}>10%</Text></Box>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 3 }} mt="md" spacing="md">
          <P><b>Neutros frios</b> (cinza com um toque do azul, croma 0,012) para fundo, superfícies e texto. Combinam com o azul em vez de criar o contraste de temperatura do bege.</P>
          <P><b>Azul Horizon #2663EB</b> para ações e preços, <b>navy</b> para a marca. São a mesma família de matiz (≈ 263°), então convivem sem disputar.</P>
          <P><b>Amarelo Electric</b> é quase complementar ao azul (≈ 95° vs 263°) e por isso chama muita atenção. Use pouco: selos, cupons, CTAs de campanha, sempre com texto navy.</P>
        </SimpleGrid>
        <Group mt="sm">
          <Button>Comprar agora</Button>
          <Button variant="outline">Ver detalhes</Button>
          <Button variant="accent">Cupom JCMAIO</Button>
          <Badge color="evergreen" variant="filled">-5% no Pix</Badge>
          <Badge color="danger" variant="filled">30% OFF</Badge>
        </Group>
      </Section>

      <Section title="Rampas">
        <P>Cada cor tem 10 tons de 50 a 900, gerados em OKLCH (claridade perceptualmente uniforme). No Mantine, <code>horizon.6</code> é o tom 600; os filled usam o 600 no tema claro e o 400 no escuro.</P>
        <Stack gap="sm" mt="md">
          {(Object.keys(ramps) as (keyof typeof ramps)[]).map((name) => (
            <div key={name}>
              <Text fz="xs" fw={600} c="var(--ds-text-3)" tt="uppercase" mb={4}>{name}</Text>
              <ColorRamp steps={Object.entries(ramps[name]).map(([label, value]) => ({ label, value }))} />
            </div>
          ))}
        </Stack>
      </Section>

      <Section title="Contraste" description="Razões WCAG calculadas a partir dos tokens. AA exige 4,5:1 para texto e 3:1 para bordas e componentes.">
        <Paper withBorder mt="md" style={{ overflow: 'hidden' }}>
          <Table>
            <Table.Thead>
              <Table.Tr><Table.Th>Uso</Table.Th><Table.Th>Exemplo</Table.Th><Table.Th style={{ textAlign: 'right' }}>Razão</Table.Th><Table.Th>WCAG</Table.Th></Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {contrastRows.map(([label, fg, bg]) => {
                const r = ratio(fg, bg);
                const isBorder = label.startsWith('Borda');
                const pass = r >= (isBorder ? 3 : 4.5);
                return (
                  <Table.Tr key={label}>
                    <Table.Td>{label}</Table.Td>
                    <Table.Td>
                      <Box px="sm" py={4} style={{ background: bg, color: fg, borderRadius: 6, display: 'inline-block', fontWeight: 600, border: isBorder ? `1px solid ${fg}` : '1px solid var(--ds-border-soft)' }}>
                        {isBorder ? <span style={{ color: semantic.light.text3 }}>Nome do produto</span> : 'Aa Piso vinílico'}
                      </Box>
                    </Table.Td>
                    <Table.Td style={{ textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{r.toFixed(2).replace('.', ',')}:1</Table.Td>
                    <Table.Td>{pass ? <Tag tone="success" withIcon>{r >= 7 && !isBorder ? 'AAA' : 'AA'}</Tag> : <Tag tone="error" withIcon>Reprova</Tag>}</Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Paper>
      </Section>

      <Section title="Feedback">
        <Group mt="md">
          <Tag tone="success" withIcon>Sucesso</Tag>
          <Tag tone="warn" withIcon>Atenção</Tag>
          <Tag tone="error" withIcon>Erro</Tag>
          <Tag tone="primary">Info</Tag>
          <Tag tone="neutral">Neutro</Tag>
        </Group>
        <P>Selos usam fundo 50 + texto 700 da mesma cor (≥ 6:1). Vermelho e verde nunca são a única pista: combine com ícone ou texto, pensando em daltonismo.</P>
      </Section>

      <Section title="Tokens semânticos" description="Mudam automaticamente entre o tema claro e o escuro.">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs" mt="md">
          {semanticRows.map(([cssVar, key, usage]) => (
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
      </Section>

      <Section title="Como usar">
        <CodeBlock
          code={`// Props de cor do Mantine: nome da cor + índice (6 = tom 600)
<Button color="evergreen">Confirmar</Button>
<Text c="horizon.7">Texto azul</Text>
<Box bg="electric.0">Fundo amarelo bem suave</Box>

// Tokens semânticos (adaptam ao tema escuro)
<Text c="var(--ds-text-2)">Corpo</Text>
<Paper bg="var(--ds-surface-2)" />

// Em JS (ex.: canvas, e-mail)
import { brand, ramps } from '@jcdecor/ui/tokens';
brand.horizon;      // '#2663EB'
ramps.horizon[700]; // '#0F4ACF'`}
        />
      </Section>
    </DocPage>
  );
}
