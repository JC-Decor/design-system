import { Rating } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function RatingPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Rating"
      source="mantine"
      mantineName="rating"
      description="Estrelas para avaliar produtos e exibir a nota média. Interativo no formulário de avaliação e somente leitura nos cards e na página do produto."
      importCode={`import { Rating } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Rating}
          name="Rating"
          controls={[
            { prop: 'defaultValue', type: 'number', initialValue: 4, min: 0, max: 5, step: 0.5 },
            { prop: 'fractions', type: 'number', initialValue: 1, min: 1, max: 4, step: 1 },
            { prop: 'count', type: 'number', initialValue: 5, min: 1, max: 10, step: 1 },
            { prop: 'size', type: 'size', initialValue: 'sm' },
            { prop: 'readOnly', type: 'boolean', initialValue: false },
            { prop: 'highlightSelectedOnly', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Avaliar um produto">
        <P>
          Use <code>getSymbolLabel</code> para que leitores de tela anunciem “4 de 5 estrelas” em português.
        </P>
        <Demo id="rating/basic" />
      </Section>

      <Section title="Nota média (somente leitura)">
        <P>
          Com <code>readOnly</code> e <code>fractions</code> a nota média aparece com precisão de décimos.
        </P>
        <Demo id="rating/readonly" />
      </Section>

      <Section title="Frações, símbolos e quantidade">
        <Demo id="rating/variations" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="rating/sizes" />
      </Section>

      <Section title="No tema JC">
        <P>
          A cor padrão passa de <code>yellow</code> para <code>electric.4</code> (âmbar — o amarelo Electric puro some sobre o branco); no tema
          escuro as estrelas usam <code>electric.3</code>. As vazias usam <code>--ds-border-soft</code> (claro) e <code>--ds-border</code> (escuro). Passar <code>color</code> substitui as duas.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / defaultValue', type: 'number', description: 'Nota atual.' },
            { name: 'onChange', type: '(value: number) => void', description: 'Ao escolher uma nota.' },
            { name: 'fractions', type: 'number', default: '1', description: 'Divisões por estrela (2 = meia).' },
            { name: 'count', type: 'number', default: '5', description: 'Quantidade de símbolos.' },
            { name: 'readOnly', type: 'boolean', default: 'false', description: 'Somente exibição.' },
            { name: 'emptySymbol / fullSymbol', type: 'ReactNode | (value) => ReactNode', description: 'Símbolos customizados.' },
            { name: 'getSymbolLabel', type: '(index) => string', description: 'Label acessível de cada símbolo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre mostre a nota em número e a quantidade de avaliações ao lado das estrelas — cor e forma sozinhas não bastam. Em listas, use{' '}
          <code>readOnly</code> e <code>aria-label</code> com a nota (“Nota média 4,6 de 5”).
        </P>
      </Section>
    </DocPage>
  );
}
