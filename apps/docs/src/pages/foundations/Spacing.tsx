import { Box, Group, Stack, Text } from '@jcdecor/ui';
import { spacing } from '@jcdecor/ui/tokens';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

const steps = Object.keys(spacing)
  .map(Number)
  .sort((a, b) => a - b) as (keyof typeof spacing)[];

export default function Spacing() {
  return (
    <DocPage
      kicker="Fundamentos"
      title="Espaçamento"
      description="Escala spacing/N do Figma: passos de 4px de 0 a 100px. Use sempre um token — nunca um valor solto."
    >
      <Section title="Escala">
        <P>
          Cada passo vira a variável <code>--sp-N</code> (ex.: <code>--sp-24</code>) e está disponível em JS via <code>spacing</code> de{' '}
          <code>@jcdecor/ui/tokens</code>.
        </P>
        <Stack gap={6} mt="md">
          {steps.map((step) => (
            <Group key={step} gap="md" wrap="nowrap">
              <Text fz="sm" ff="monospace" fw={600} w={64} style={{ flexShrink: 0 }}>
                --sp-{step}
              </Text>
              <Text fz="xs" c="var(--ds-text-3)" w={48} ta="right" style={{ flexShrink: 0 }}>
                {spacing[step]}
              </Text>
              <Box
                h={16}
                w={spacing[step]}
                style={{
                  background: 'var(--ds-primary)',
                  borderRadius: 3,
                  minWidth: step === 0 ? 2 : undefined,
                  opacity: step === 0 ? 0.3 : 1,
                }}
              />
            </Group>
          ))}
        </Stack>
      </Section>

      <Section title="Mapeamento no Mantine">
        <P>
          As props de espaçamento do Mantine (<code>p</code>, <code>m</code>, <code>gap</code>, <code>spacing</code>…) aceitam os tamanhos abaixo,
          apontados para a escala da marca. Para outros passos, use a variável CSS ou um número em px.
        </P>
        <PropsTable
          rows={[
            { name: 'xs', type: '--sp-4', default: '4px', description: 'Ícone + texto, chips internos' },
            { name: 'sm', type: '--sp-8', default: '8px', description: 'Grupos de botões, campos relacionados' },
            { name: 'md', type: '--sp-16', default: '16px', description: 'Padrão entre elementos de um card' },
            { name: 'lg', type: '--sp-24', default: '24px', description: 'Padding de cards, gap do grid' },
            { name: 'xl', type: '--sp-32', default: '32px', description: 'Separação entre blocos' },
          ]}
        />
        <Demo id="spacing/mantine-sizes" />
      </Section>

      <Section title="Variáveis CSS">
        <P>Para valores fora de xs–xl (ex.: 12, 48, 64), use <code>var(--sp-N)</code> direto nas props de estilo ou no CSS Modules.</P>
        <Demo id="spacing/css-vars" />
      </Section>

      <Section title="Boas práticas">
        <P>
          Espaços internos menores que externos: o padding de um card (24) é maior que o gap entre seus itens (8–16). Entre seções de página, use
          48–80. Evite valores fora da escala de 4px.
        </P>
      </Section>
    </DocPage>
  );
}
