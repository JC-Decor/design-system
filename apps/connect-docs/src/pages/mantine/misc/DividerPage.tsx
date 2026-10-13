import { Divider } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function DividerPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Divider"
      source="mantine"
      mantineName="divider"
      description="Linha horizontal ou vertical para separar conteúdos, com rótulo opcional. Use entre seções de um card, itens de menu e blocos de formulário, como na admissão."
      importCode={`import { Divider } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Divider}
          name="Divider"
          previewWidth={320}
          controls={[
            { prop: 'variant', type: 'segmented', data: ['solid', 'dashed', 'dotted'], initialValue: 'solid' },
            { prop: 'size', type: 'size', initialValue: 'xs' },
            { prop: 'labelPosition', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'center' },
            { prop: 'label', type: 'string', initialValue: 'ou entre com' },
          ]}
        />
      </Section>

      <Section title="Rótulos">
        <Demo id="divider/labels" />
      </Section>

      <Section title="Variantes e cores">
        <P>
          O padrão usa <code>--ds-border-soft</code>. Use <code>color</code> só para dar ênfase, como uma divisória primária sob um título.
        </P>
        <Demo id="divider/variants" />
      </Section>

      <Section title="Vertical">
        <P>
          Com <code>orientation="vertical"</code>, a linha acompanha a altura do container flex.
        </P>
        <Demo id="divider/vertical" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: '--divider-color', type: 'classNames.root', default: 'var(--ds-border-soft)', description: 'Mesma linha suave dos cards e tabelas do painel; adapta ao escuro.' },
          ]}
        />
        <P>
          O rótulo usa <code>--mantine-color-dimmed</code>, que no tema Connect aponta para <code>--ds-text-3</code>, no tamanho <code>xs</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', description: 'Conteúdo exibido sobre a linha (só horizontal).' },
            { name: 'labelPosition', type: "'left' | 'center' | 'right'", default: "'left'", description: 'Posição do rótulo.' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção.' },
            { name: 'variant', type: "'solid' | 'dashed' | 'dotted'", default: "'solid'", description: 'Estilo da linha.' },
            { name: 'size', type: 'MantineSize | number', default: "'xs'", description: 'Espessura (xs = 1px).' },
            { name: 'color', type: 'MantineColor', description: 'Cor da linha.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
