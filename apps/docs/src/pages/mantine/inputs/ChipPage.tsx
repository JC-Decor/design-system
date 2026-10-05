import { Chip } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function ChipPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Chip"
      source="mantine"
      mantineName="chip"
      description="Botões de seleção compactos, usados como filtros na listagem de produtos. Funcionam como checkbox (vários) ou radio (um) dentro de Chip.Group."
      importCode={`import { Chip } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Chip}
          name="Chip"
          controls={[
            { prop: 'children', type: 'string', initialValue: 'Frete grátis' },
            { prop: 'variant', type: 'segmented', data: ['outline', 'filled', 'light'], initialValue: 'outline' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
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
          <OnlyFor framework="vue">
            {' '}
            No Vue o grupo é o componente <code>ChipGroup</code>, com <code>v-model</code>.
          </OnlyFor>
        </P>
        <Demo id="chip/groups" />
      </Section>

      <Section title="Variantes">
        <Demo id="chip/variants" />
      </Section>

      <Section title="Ícones, cores e tamanhos">
        <Demo id="chip/icons" />
      </Section>

      <Section title="No tema JC">
        <P>
          A variante <code>outline</code> marcada recebe o fundo suave da tag primária (<code>--ds-tag-primary-bg</code>) com borda e texto{' '}
          <code>--ds-primary</code> (como os filtros ativos do site), em vez do contorno sem fundo do Mantine. O padrão passa a ser{' '}
          <code>outline</code> (no Mantine é <code>filled</code>) e o label usa peso 500. Com <code>color</code>, o fundo segue o tom light da cor
          (ex.: verde para “Frete grátis”).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value', type: 'string', description: 'Valor dentro de Chip.Group.' },
            { name: 'checked / defaultChecked / onChange', vueName: 'v-model / defaultChecked / @change', type: 'boolean', description: 'Uso isolado.' },
            { name: 'variant', type: "'outline' | 'filled' | 'light'", default: 'outline', description: 'Estilo do estado marcado.' },
            { name: 'icon', vueName: '#icon', type: 'ReactNode', vueType: 'slot', description: 'Substitui o ✓ do estado marcado.' },
            { name: 'Chip.Group multiple', vueName: 'ChipGroup multiple', type: 'boolean', default: 'false', description: 'Permite vários selecionados.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Chip para filtrar e alternar; para ações use Button e para status use Badge. Mantenha os textos curtos e mostre um rótulo para o grupo
          (“Ambiente”, “Ordenar por”).
        </P>
      </Section>
    </DocPage>
  );
}
