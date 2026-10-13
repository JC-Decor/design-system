import { ActionIcon, Icon } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ActionIconPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="ActionIcon"
      source="mantine"
      mantineName="action-icon"
      description="Botão só com ícone para ações compactas: editar, filtrar, mais ações, enviar mensagem. É o IconBtn (.ic-btn) do Connect."
      importCode={`import { ActionIcon } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={ActionIcon}
          name="ActionIcon"
          baseProps={{ children: <Icon name="pen" size={15} />, 'aria-label': 'Editar' }}
          codeProps={{ 'aria-label': '"Editar"' }}
          controls={[
            { prop: 'variant', type: 'select', data: ['default', 'filled', 'outline', 'danger', 'subtle', 'light', 'transparent'], initialValue: 'default' },
            { prop: 'color', type: 'color', initialValue: 'navy' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'loading', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <P>
          O padrão no tema é <code>default</code> (igual a <code>ghost</code>): superfície, borda <code>--ds-border-soft</code> e ícone em{' '}
          <code>--ds-text-2</code>, como o <code>.ic-btn</code> do Connect. Use <code>filled</code> para a ação principal de uma barra,{' '}
          <code>danger</code> para excluir e <code>subtle</code> dentro de linhas de tabela.
        </P>
        <Demo id="action-icon/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>
          <code>md</code> = 32px (o <code>IconBtn</code> padrão). Os tamanhos <code>input-*</code> igualam a altura dos campos (40px no md)
          para alinhar o botão ao lado de um input.
        </P>
        <Demo id="action-icon/sizes" />
      </Section>

      <Section title="Grupo">
        <P>
          <code>ActionIcon.Group</code> e <code>ActionIcon.GroupSection</code> montam controles segmentados, como o contador de dias de
          férias.
        </P>
        <Demo id="action-icon/group" />
      </Section>

      <Section title="Tooltip, loading e desabilitado">
        <Demo id="action-icon/states" />
      </Section>

      <Section title="Ações de card">
        <Demo id="action-icon/card-actions" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Variante padrão <code>default</code> com borda <code>--ds-border-soft</code> e ícone <code>--ds-text-2</code>; tamanhos xs 24 · sm 28 ·
          md 32 · lg 40 · xl 48px e <code>input-*</code> de 28 a 56px. Raio padrão 10px. Desabilitado mantém a cor da variante com 45% de
          opacidade, igual ao Button. As cores das variantes vêm do mesmo <code>variantColorResolver</code> do Button.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'aria-label', type: 'string', required: true, description: 'Obrigatório: descreve a ação para leitores de tela.' },
            { name: 'variant', type: 'string', default: "'default'", description: 'Mesmas variantes do Button.' },
            { name: 'size', type: "MantineSize | 'input-*' | number", default: "'md'", description: 'Tamanho do botão (o ícone é dimensionado à parte).' },
            { name: 'color', type: 'MantineColor', description: 'Cor do tema.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Troca o ícone por um Loader.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre passe <code>aria-label</code> e, em ícones menos óbvios, um <code>Tooltip</code>. Ícone com cerca de 48% do botão (15px no
          md, como no <code>IconBtn</code>). Ações destrutivas usam <code>variant="danger"</code> ou <code>color="coral"</code>.
        </P>
      </Section>
    </DocPage>
  );
}
