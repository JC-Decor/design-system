import { Radio } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function RadioPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Radio"
      source="mantine"
      mantineName="radio"
      description="Opções mutuamente exclusivas sempre visíveis, como forma de pagamento, entrega ou acabamento. Use Radio.Group para o conjunto e Radio.Card para opções com detalhes."
      importCode={`import { Radio } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Radio}
          name="Radio"
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Retirar na loja' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'defaultChecked', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Grupo">
        <Demo id="radio/group" />
      </Section>

      <Section title="Descrição e desabilitado">
        <Demo id="radio/states" />
      </Section>

      <Section title="Cards">
        <P>
          <code>Radio.Card</code> transforma toda a área em alvo de clique — ideal para opções de frete e pagamento.
        </P>
        <Demo id="radio/cards" />
      </Section>

      <Section title="Validação">
        <Demo id="radio/error" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="radio/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          Cor primária Horizon; o círculo desmarcado usa a borda <code>--ds-border</code> (3:1) e o foco por teclado é o contorno de 2px{' '}
          <code>--ds-primary</code>. <code>Radio.Card</code> tem raio <code>md</code> e, marcado, borda <code>--ds-primary</code> com fundo{' '}
          <code>--ds-primary-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'Radio.Group value / onChange', type: 'string', description: 'Valor selecionado do grupo.' },
            { name: 'value', type: 'string', required: true, description: 'Valor da opção.' },
            { name: 'label / description', type: 'ReactNode', description: 'Textos da opção.' },
            { name: 'error', type: 'ReactNode', description: 'Erro (no Radio.Group, para o conjunto).' },
            { name: 'size', type: 'MantineSize', default: 'sm', description: 'Tamanho do círculo e do texto.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use para 2 a ~5 opções; acima disso, Select. Sempre dê um label ao grupo (ele vira o <code>legend</code> do fieldset). Pré-selecione a opção
          mais comum quando houver uma escolha segura, mas não em consentimentos.
        </P>
      </Section>
    </DocPage>
  );
}
