import { ActionIcon } from '@jcdecor/ui';
import { IconHeart } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';
import ActionIconPreviewVue from '../../../vue-demos/action-icon/ActionIconPreview.vue';

export default function ActionIconPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="ActionIcon"
      source="mantine"
      mantineName="action-icon"
      description="Botão só com ícone para ações compactas: favoritar, editar, compartilhar, quantidade. Mesmas variantes do Button."
      importCode={`import { ActionIcon } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ActionIcon}
          name="ActionIcon"
          baseProps={{ children: <IconHeart size={18} />, 'aria-label': 'Favoritar' }}
          codeProps={{ 'aria-label': '"Favoritar"' }}
          vue={{ component: ActionIconPreviewVue }}
          controls={[
            { prop: 'variant', type: 'select', data: ['subtle', 'filled', 'outline', 'accent', 'light', 'default', 'transparent'], initialValue: 'subtle' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'loading', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <P>
          O padrão no tema é <code>subtle</code> (ghost): ícone em <code>--ds-text-2</code> e hover em <code>--ds-surface-2</code>. Use{' '}
          <code>filled</code> para a ação principal de um card e <code>default</code> sobre imagens.
        </P>
        <Demo id="action-icon/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>
          Os tamanhos <code>input-*</code> igualam a altura dos campos (40px no md) para alinhar o ícone ao lado de um input.
        </P>
        <Demo id="action-icon/sizes" />
      </Section>

      <Section title="Grupo">
        <P><code>{vue ? 'ActionIconGroup' : 'ActionIcon.Group'}</code> e <code>{vue ? 'ActionIconGroupSection' : 'ActionIcon.GroupSection'}</code> montam controles segmentados, como o seletor de quantidade.</P>
        <Demo id="action-icon/group" />
      </Section>

      <Section title="Tooltip, loading e desabilitado">
        <Demo id="action-icon/states" />
      </Section>

      <Section title="Sobre imagens">
        <Demo id="action-icon/on-image" />
      </Section>

      <Section title="No tema JC">
        <P>
          Variante padrão <code>subtle</code>, raio de 8px, tamanhos em passos de 8px (md = 32px) e anel de foco Horizon. Desabilitado mantém a
          cor da variante com 45% de opacidade, igual ao Button. A variante <code>default</code> usa <code>--ds-surface</code> e borda{' '}
          <code>--ds-border-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'aria-label', type: 'string', required: true, description: 'Obrigatório: descreve a ação para leitores de tela.' },
            { name: 'variant', type: 'string', default: "'subtle'", description: 'Mesmas variantes do Button.' },
            { name: 'size', type: "MantineSize | 'input-*' | number", default: "'md'", description: 'Tamanho do botão (o ícone é dimensionado à parte).' },
            { name: 'color', type: 'MantineColor', description: 'Cor do tema.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Troca o ícone por um Loader.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre passe <code>aria-label</code> e, em ícones menos óbvios, um <code>Tooltip</code>. Ícones de 18px no md e 16px no sm. Ações
          destrutivas usam <code>color="danger"</code>.
        </P>
      </Section>
    </DocPage>
  );
}
