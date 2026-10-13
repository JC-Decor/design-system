import { Chip } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ChipPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Chip"
      source="mantine"
      mantineName="chip"
      description="Botões de seleção compactos, usados como filtros em listas de colaboradores, solicitações e comunicados. Funcionam como checkbox (vários) ou radio (um) dentro de Chip.Group."
      importCode={`import { Chip } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Chip}
          name="Chip"
          controls={[
            { prop: 'children', type: 'string', initialValue: 'Em férias' },
            { prop: 'variant', type: 'segmented', data: ['outline', 'filled', 'light'], initialValue: 'outline' },
            { prop: 'color', type: 'color', initialValue: 'navy' },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'defaultChecked', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Grupos">
        <P>
          <code>Chip.Group multiple</code> trabalha com <code>string[]</code>; sem <code>multiple</code>, com uma única <code>string</code>.
        </P>
        <Demo id="chip/groups" />
      </Section>

      <Section title="Variantes">
        <Demo id="chip/variants" />
      </Section>

      <Section title="Ícones, cores e tamanhos">
        <Demo id="chip/icons" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Segue o <code>.chip</code> do Connect: pílula com label 12,5px/500; desmarcado tem fundo <code>--ds-surface</code>, borda{' '}
          <code>--ds-border-soft</code> e texto <code>--ds-text-2</code>. Marcado, a variante <code>outline</code> perde a borda e ganha o fundo e o
          texto do tom <code>light</code> da cor (navy por padrão) em peso 600, em vez do contorno sem fundo do Mantine. O padrão passa a ser{' '}
          <code>outline</code> (no Mantine é <code>filled</code>). Com <code>color</code>, o fundo segue o tom da cor (ex.: verde para “Ativos”).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'string', description: 'Valor dentro de Chip.Group.' },
            { name: 'checked / defaultChecked / onChange', type: 'boolean', description: 'Uso isolado.' },
            { name: 'variant', type: "'outline' | 'filled' | 'light'", default: 'outline', description: 'Estilo do estado marcado.' },
            { name: 'icon', type: 'ReactNode', description: 'Substitui o ✓ do estado marcado.' },
            { name: 'Chip.Group multiple', type: 'boolean', default: 'false', description: 'Permite vários selecionados.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Chip para filtrar e alternar; para ações use Button e para status use Badge. Mantenha os textos curtos e mostre um rótulo para o grupo
          (“Departamento”, “Status”).
        </P>
      </Section>
    </DocPage>
  );
}
