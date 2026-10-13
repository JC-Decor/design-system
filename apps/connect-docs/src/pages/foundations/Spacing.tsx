import { Anchor, Box, Group, Stack, Text } from '@jcdecor/connect-ui';
import { spacing } from '@jcdecor/connect-ui/tokens';
import { Link } from 'react-router-dom';
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
      description="Passos de 2/4px usados no Connect, de 0 a 64px. Use sempre um token — nunca um valor solto."
    >
      <Section title="Escala">
        <P>
          Cada passo vira a variável <code>--sp-N</code> (ex.: <code>--sp-22</code>) e está disponível em JS via <code>spacing</code> de{' '}
          <code>@jcdecor/connect-ui/tokens</code>. Os passos 6, 10, 14 e 22 vêm do app original (gaps de chips, padding de cards).
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
                h={14}
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
          ajustados à densidade do Connect. Para outros passos, use a variável CSS ou um número em px.
        </P>
        <PropsTable
          rows={[
            { name: 'xs', type: '--sp-6', default: '6px', description: 'Ícone + texto, gap entre chips' },
            { name: 'sm', type: '--sp-10', default: '10px', description: 'Grupos de botões, campos relacionados' },
            { name: 'md', type: '--sp-16', default: '16px', description: 'Padrão entre elementos de um card' },
            { name: 'lg', type: '--sp-22', default: '22px', description: 'Padding de card (padrão do Card), gap entre cards' },
            { name: 'xl', type: '--sp-28', default: '28px', description: 'Separação entre blocos, margem lateral no desktop' },
          ]}
        />
        <Demo id="spacing/mantine-sizes" />
      </Section>

      <Section title="Variáveis CSS">
        <P>Para valores fora de xs–xl (ex.: 4, 12, 40), use <code>var(--sp-N)</code> direto nas style props ou em CSS modules.</P>
        <Demo id="spacing/css-vars" />
      </Section>

      <Section title="Densidade">
        <P>
          O Connect tem três densidades de painel — compacta (16px), regular (22px) e confortável (28px) — expostas como <code>--cn-pad</code> e pelas
          classes <code>.cn-density-*</code>. Veja{' '}
          <Anchor component={Link} to="/fundamentos/movimento-e-densidade">
            Movimento & densidade
          </Anchor>
          .
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Espaços internos menores que externos: o padding de um card (22) é maior que o gap entre seus itens (10–16). Entre seções de página use 28–40.
          Prefira os passos da escala; o painel é denso, então resista a aumentar paddings “para respirar” — use a densidade confortável quando for o caso.
        </P>
      </Section>
    </DocPage>
  );
}
