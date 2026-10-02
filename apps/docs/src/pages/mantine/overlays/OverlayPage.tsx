import { Box, Overlay, Text, type OverlayProps } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

function OverlayPreview(props: OverlayProps) {
  return (
    <Box pos="relative" h={180} p="md" bg="var(--ds-primary-soft)" style={{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }}>
      <Text fw={600}>Conteúdo da página</Text>
      <Text fz="sm" c="var(--ds-text-2)" mt="xs">
        Piso vinílico Carvalho, papel de parede Linho e cortina blackout com frete grátis para o Sudeste.
      </Text>
      <Overlay {...props} />
    </Box>
  );
}

export default function OverlayPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Overlay"
      source="mantine"
      mantineName="overlay"
      description="Camada sobre um elemento com cor, opacidade, gradiente ou desfoque. É a base dos overlays de Modal, Drawer e LoadingOverlay."
      importCode={`import { Overlay } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={OverlayPreview}
          name="Overlay"
          previewWidth={360}
          controls={[
            { prop: 'backgroundOpacity', type: 'number', initialValue: 0.6, min: 0, max: 1, step: 0.05 },
            { prop: 'blur', type: 'number', initialValue: 0, min: 0, max: 12, step: 1 },
            { prop: 'color', type: 'select', initialValue: 'var(--dc-obsidian)', data: ['var(--dc-obsidian)', 'var(--dc-horizon)', 'var(--ds-surface)'] },
          ]}
        />
      </Section>

      <Section title="Card de produto">
        <P>
          Um gradiente navy garante legibilidade do texto sobre a foto; um segundo overlay com <code>blur</code> e <code>center</code> aparece no hover
          com o CTA.
        </P>
        <Demo id="overlay/product-card" />
      </Section>

      <Section title="Conteúdo bloqueado">
        <P>
          Com <code>color="var(--ds-surface)"</code> e <code>blur</code>, o overlay esconde conteúdo restrito e se adapta ao tema escuro.
        </P>
        <Demo id="overlay/locked-content" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'color', type: 'defaultProps', default: 'obsidian', description: 'Overlay solto usa o navy da marca (#08154B) em vez do preto; opacidade padrão 0,6.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'color', type: 'string', default: 'obsidian', description: 'Cor de fundo (aceita var() do DS).' },
            { name: 'backgroundOpacity', type: 'number', default: '0.6', description: 'Opacidade de 0 a 1.' },
            { name: 'blur', type: 'number | string', default: '0', description: 'Desfoque do que está atrás (backdrop-filter).' },
            { name: 'gradient', type: 'string', description: 'Gradiente CSS; substitui color/opacity.' },
            { name: 'center', type: 'boolean', default: 'false', description: 'Centraliza os filhos.' },
            { name: 'fixed', type: 'boolean', default: 'false', description: 'position: fixed (cobre a viewport).' },
            { name: 'radius', type: 'MantineRadius', description: 'Acompanhe o raio do container.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          O container precisa de <code>position: relative</code>. Garanta contraste AA do texto sobre o overlay (navy ≥ 0,6 com texto branco) e lembre
          que o overlay bloqueia cliques no que está embaixo.
        </P>
      </Section>
    </DocPage>
  );
}
