import { Badge, Box, Group, Paper, SimpleGrid, Table, Text } from '@jcdecor/connect-ui';
import { darkTones, priorities, semantic, statuses, tones, toneNames, type PrioName, type StatusName } from '@jcdecor/connect-ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { CodeBlock } from '../../kit/CodeBlock';
import { PropsTable } from '../../kit/PropsTable';

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const ratio = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
const fmt = (r: number) => `${r.toFixed(1).replace('.', ',')}:1`;

const usage: Record<string, string> = {
  blue: 'Informação, concluído, avatares',
  lavender: 'Destaques suaves, pausado, feedbacks',
  green: 'Sucesso, ativo, prioridade baixa',
  yellow: 'Atenção, pendente, prioridade média',
  coral: 'Erro, atrasado, prioridade alta',
  ink: 'Neutro, rascunho, metadados',
};

export default function Tones() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Tons, status e prioridades"
      description="Os tons pastel do Connect (avatares, chips, badges, ícones de KPI) e as listas prontas de prioridades e status de registros — exportadas como tones, priorities e statuses."
    >
      <Section title="Tons">
        <P>
          Cada tom tem três valores: <code>bg</code> (fundo de chip/avatar), <code>fg</code> (texto e ícone) e <code>soft</code> (fundo mais claro,
          para áreas maiores). No escuro, os fundos ficam translúcidos e o texto vira a versão clara do tom. A coluna de contraste mostra o par{' '}
          <code>fg</code> sobre <code>bg</code> — todos passam AA (4,5:1), inclusive no tema escuro, sobre a superfície.
        </P>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt="md">
          {toneNames.map((tone) => {
            const t = tones[tone];
            const d = darkTones[tone];
            return (
              <Paper key={tone} withBorder radius="lg" p="md">
                <Group justify="space-between" mb="sm">
                  <Text fw={700} ff="monospace">{tone}</Text>
                  <Badge color="green">{fmt(ratio(t.fg, t.bg))}</Badge>
                </Group>
                <Group gap={6} wrap="nowrap">
                  {(['bg', 'soft'] as const).map((k) => (
                    <Box key={k} px="sm" py={6} style={{ flex: 1, background: t[k], color: t.fg, borderRadius: 'var(--ds-radius-sm)', border: '1px solid var(--ds-border-soft)' }}>
                      <Text fz="xs" fw={600} c="inherit">{k}</Text>
                      <Text fz={11} ff="monospace" c="inherit">{t[k]}</Text>
                    </Box>
                  ))}
                  <Box px="sm" py={6} style={{ flex: 1, background: semantic.dark.surface, color: d.fg, borderRadius: 'var(--ds-radius-sm)' }}>
                    <Text fz="xs" fw={600} c="inherit">escuro</Text>
                    <Text fz={11} ff="monospace" c="inherit">{d.fg}</Text>
                  </Box>
                </Group>
                <Text fz="xs" c="var(--ds-text-3)" mt="sm">
                  fg {t.fg} · <code>color="{t.color}"</code> · {usage[tone]}
                </Text>
              </Paper>
            );
          })}
        </SimpleGrid>
        <Demo id="tones/badges" title="Nos componentes do Mantine" description='Use color="<tom>"; Badge, ThemeIcon e a variante light já usam o bg/fg do tom.' />
        <Demo id="tones/css-vars" title="Em CSS" description="--cn-tone-<tom>-bg | fg | soft, trocando no tema escuro." />
      </Section>

      <Section title="Prioridades">
        <P>
          <code>priorities</code> mapeia as prioridades do Connect para um tom e um rótulo em pt-BR. Como sempre há rótulo de texto, a cor nunca é a única
          pista.
        </P>
        <PropsTable
          rows={(Object.keys(priorities) as PrioName[]).map((prio) => ({
            name: prio,
            type: priorities[prio].tone,
            default: priorities[prio].label,
            description: <Badge color={tones[priorities[prio].tone].color}>{priorities[prio].label}</Badge>,
          }))}
        />
        <Demo id="tones/priorities" />
      </Section>

      <Section title="Status de registros">
        <P>
          <code>statuses</code> traz os status usados em listas e tabelas (colaboradores, solicitações, metas, documentos): tom, cor do <i>dot</i> (tom 500
          da rampa) e rótulo. O dot é decorativo — o rótulo carrega a informação.
        </P>
        <Paper withBorder mt="md" style={{ overflow: 'hidden' }}>
          <Table>
            <Table.Thead>
              <Table.Tr><Table.Th>Chave</Table.Th><Table.Th>Tom</Table.Th><Table.Th>Dot</Table.Th><Table.Th>Exemplo</Table.Th></Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {(Object.keys(statuses) as StatusName[]).map((key) => {
                const s = statuses[key];
                return (
                  <Table.Tr key={key}>
                    <Table.Td ff="monospace">{key}</Table.Td>
                    <Table.Td>{s.tone}</Table.Td>
                    <Table.Td>
                      <Group gap={6}>
                        <Box w={8} h={8} bg={s.dot} style={{ borderRadius: '50%' }} />
                        <Text fz="xs" ff="monospace">{s.dot}</Text>
                      </Group>
                    </Table.Td>
                    <Table.Td><Badge color={tones[s.tone].color}>{s.label}</Badge></Table.Td>
                  </Table.Tr>
                );
              })}
            </Table.Tbody>
          </Table>
        </Paper>
        <Demo id="tones/statuses" title="Badge com dot" />
      </Section>

      <Section title="Em JS">
        <CodeBlock
          code={`import { tones, priorities, statuses } from '@jcdecor/connect-ui';

tones.lavender;        // { bg: '#EAE5FB', fg: '#4B3DB8', soft: '#F4F1FE', color: 'lavender' }
priorities.high;       // { tone: 'coral', label: 'Alta' }
statuses.pendente;     // { tone: 'yellow', dot: '#D49C0B', label: 'Pendente' }

<Badge color={tones[statuses.pendente.tone].color}>{statuses.pendente.label}</Badge>`}
        />
      </Section>
    </DocPage>
  );
}
