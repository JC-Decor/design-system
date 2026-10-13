import { useState } from 'react';
import { Box, SimpleGrid, Text, TextInput, Tooltip, UnstyledButton, Icon, iconNames } from '@jcdecor/connect-ui';
import { useClipboard } from '@mantine/hooks';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

function Gallery() {
  const [query, setQuery] = useState('');
  const clipboard = useClipboard({ timeout: 1200 });
  const [copied, setCopied] = useState<string | null>(null);
  const filtered = iconNames.filter((name) => name.includes(query.trim().toLowerCase()));

  return (
    <>
      <TextInput
        mt="md"
        maw={320}
        placeholder="Buscar ícone…"
        aria-label="Buscar ícone"
        leftSection={<Icon name="search" size={16} />}
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <Text fz="xs" c="var(--ds-text-3)" mt="xs">
        {filtered.length} de {iconNames.length} ícones · clique para copiar o nome
      </Text>
      <SimpleGrid cols={{ base: 3, xs: 4, sm: 6, md: 8 }} spacing="xs" mt="md">
        {filtered.map((name) => (
          <Tooltip key={name} label={clipboard.copied && copied === name ? 'Copiado!' : `Copiar "${name}"`} withArrow>
            <UnstyledButton
              onClick={() => {
                clipboard.copy(name);
                setCopied(name);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
                padding: '14px 6px 10px',
                borderRadius: 'var(--ds-radius)',
                border: '1px solid var(--ds-border-soft)',
                background: 'var(--ds-surface)',
                color: 'var(--ds-text)',
              }}
            >
              <Icon name={name} size={22} />
              <Text fz={11} ff="monospace" c="var(--ds-text-3)" ta="center" style={{ wordBreak: 'break-all' }}>
                {name}
              </Text>
            </UnstyledButton>
          </Tooltip>
        ))}
      </SimpleGrid>
      {filtered.length === 0 && (
        <Box mt="md">
          <Text fz="sm" c="var(--ds-text-3)">
            Nenhum ícone com “{query}”. Para outros desenhos, use o <code>@tabler/icons-react</code> com <code>stroke={'{1.6}'}</code>.
          </Text>
        </Box>
      )}
    </>
  );
}

export default function Icons() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Ícones"
      description="O conjunto de ícones de traço do Connect (traço 1,6px, grade de 24px, cantos arredondados), desenhados em currentColor."
      importCode={`import { Icon, iconNames } from '@jcdecor/connect-ui';`}
    >
      <Section title="Galeria">
        <Gallery />
      </Section>

      <Section title="Uso">
        <P>
          O ícone herda a cor do texto. Sem <code>aria-label</code> ele fica oculto para leitores de tela (decorativo); quando o ícone é a única informação
          — por exemplo num <code>ActionIcon</code> — dê o rótulo ao botão ou ao próprio ícone.
        </P>
        <Demo id="icons/usage" />
        <PropsTable
          rows={[
            { name: 'name', type: 'IconName', required: true, description: <>Nome do ícone (lista em <code>iconNames</code>). Nome desconhecido não renderiza nada.</> },
            { name: 'size', type: 'number', default: '20', description: 'Largura e altura em px. Use 16 em botões, 18 em ActionIcon e 20–22 na navegação.' },
            { name: 'stroke', type: 'number', default: '1.6', description: 'Espessura do traço.' },
            { name: 'aria-label', type: 'string', description: 'Torna o ícone significativo (role="img"); sem ele, aria-hidden.' },
            { name: '...BoxProps', type: 'BoxProps', description: 'Style props do Mantine (c, m, style…).' },
          ]}
        />
      </Section>

      <Section title="Tabler como complemento">
        <P>
          O <code>@tabler/icons-react</code> já é dependência do pacote e tem o mesmo estilo de traço. Use-o quando faltar um desenho no conjunto do
          Connect, com <code>stroke={'{1.6}'}</code> para combinar.
        </P>
      </Section>
    </DocPage>
  );
}
