import { PriceTag } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';

export default function PriceTagPage() {
  return (
    <DocPage
      kicker="E-commerce"
      title="PriceTag"
      source="jc"
      sourcePath="packages/ui/src/components/PriceTag"
      description="Preço em BRL com preço anterior riscado, unidade, desconto no Pix e parcelamento — tudo formatado em pt-BR."
      importCode={`import { PriceTag } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PriceTag}
          name="PriceTag"
          controls={[
            { prop: 'value', type: 'number', initialValue: 89.9, step: 0.1 },
            { prop: 'oldValue', type: 'number', initialValue: 119.9, step: 0.1 },
            { prop: 'unit', type: 'string', initialValue: '/m²' },
            { prop: 'pixDiscount', type: 'number', initialValue: 5, min: 0, max: 100, step: 1 },
            { prop: 'size', type: 'segmented', data: ['sm', 'md', 'lg'], initialValue: 'md' },
          ]}
          baseProps={{ installments: { count: 6 } }}
          codeProps={{ installments: '{ count: 6 }' }}
        />
      </Section>

      <Section title="Uso">
        <P>
          O preço anterior só aparece quando <code>oldValue</code> é maior que <code>value</code>. O parcelamento divide <code>value</code>{' '}
          igualmente e mostra "sem juros", a menos que <code>interestFree: false</code>.
        </P>
        <Demo id="price-tag/usage" />
      </Section>

      <Section title="Variações">
        <Demo id="price-tag/variations" />
      </Section>

      <Section title="Tamanhos">
        <P><code>sm</code> para listas e carrinho, <code>md</code> nos cards de produto e <code>lg</code> na página do produto.</P>
        <Demo id="price-tag/sizes" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'value', type: 'number', required: true, description: 'Preço atual em reais.' },
            { name: 'oldValue', type: 'number', description: 'Preço "de" (riscado), exibido se maior que value.' },
            { name: 'installments', type: '{ count: number; interestFree?: boolean }', description: '"ou 10x de R$ 12,99 sem juros". interestFree padrão: true.' },
            { name: 'pixDiscount', type: 'number', description: 'Desconto no Pix em % → "R$ 85,41 no Pix (5% off)".' },
            { name: 'unit', type: 'string', description: 'Unidade (ex.: "/m²", "/rolo").' },
            { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Tamanho do valor principal.' },
            { name: '...BoxProps', type: 'BoxProps', description: 'Style props do Box.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
