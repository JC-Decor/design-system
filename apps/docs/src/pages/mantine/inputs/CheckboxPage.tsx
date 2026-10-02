import { Checkbox } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function CheckboxPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Checkbox"
      source="mantine"
      mantineName="checkbox"
      description="Caixa de seleção para escolhas independentes: aceitar termos, filtros, serviços adicionais. Use Checkbox.Group para listas e Checkbox.Card para opções ricas."
      importCode={`import { Checkbox } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Checkbox}
          name="Checkbox"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Receber ofertas por e-mail' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'radius', type: 'size', initialValue: 'xs' },
            { prop: 'indeterminate', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Grupo">
        <P>
          <code>Checkbox.Group</code> controla um <code>string[]</code> e fornece label, descrição e erro para o conjunto.
        </P>
        <Demo id="checkbox/group" />
      </Section>

      <Section title="Indeterminado">
        <P>Use <code>indeterminate</code> no “selecionar todos” quando só parte dos itens está marcada.</P>
        <Demo id="checkbox/indeterminate" />
      </Section>

      <Section title="Descrição, erro e desabilitado">
        <Demo id="checkbox/states" />
      </Section>

      <Section title="Cards">
        <P>
          <code>Checkbox.Card</code> torna todo o card clicável — ideal para serviços adicionais no carrinho. A borda fica Horizon quando marcado.
        </P>
        <Demo id="checkbox/cards" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="checkbox/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio padrão <code>xs</code> (4px) e cor primária Horizon. A borda da caixa desmarcada usa <code>--ds-border</code> (3:1, WCAG 1.4.11 — o gray-4 do
          Mantine fica em ~2,5:1) e o foco por teclado é o contorno de 2px <code>--ds-primary</code>. <code>Checkbox.Card</code> tem raio <code>md</code>,
          borda <code>--ds-border-soft</code> e, marcado, borda <code>--ds-primary</code> com fundo <code>--ds-primary-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'checked / defaultChecked', type: 'boolean', description: 'Estado controlado / inicial.' },
            { name: 'indeterminate', type: 'boolean', description: 'Estado parcial (traço).' },
            { name: 'label / description', type: 'ReactNode', description: 'Textos ao lado da caixa (clicáveis).' },
            { name: 'error', type: 'ReactNode', description: 'Mensagem de erro.' },
            { name: 'size', type: 'MantineSize', default: 'sm', description: 'Tamanho da caixa e do texto.' },
            { name: 'radius', type: 'MantineRadius', default: 'xs', description: 'Raio da caixa.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Checkbox é para escolhas independentes; para uma entre várias, use Radio. Escreva labels afirmativos (“Receber ofertas”, não “Não receber
          ofertas”). Nunca pré-marque consentimentos (LGPD).
        </P>
      </Section>
    </DocPage>
  );
}
