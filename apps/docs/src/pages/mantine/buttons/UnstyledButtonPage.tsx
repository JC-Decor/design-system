import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';
import optionCardsCss from '../../../demos/unstyled-button/option-cards.module.css?raw';

export default function UnstyledButtonPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="UnstyledButton"
      source="mantine"
      mantineName="unstyled-button"
      description="Elemento button sem estilos (reset de borda, fundo, fonte), para criar áreas clicáveis personalizadas mantendo a semântica correta."
      importCode={`import { UnstyledButton } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <Demo id="unstyled-button/basic" />
      </Section>

      <Section title="Cards de opção">
        <P>Cards selecionáveis para forma de entrega, estilizados com CSS Modules e tokens da marca:</P>
        <Demo id="unstyled-button/option-cards" />
        <CodeBlock code={optionCardsCss} language="css" fileName="option-cards.module.css" />
      </Section>

      <Section title="No tema JC">
        <P>Sem estilos do tema — herda a fonte Poppins e a cor do texto. Todo o visual fica por conta do seu CSS, sempre com os tokens <code>--ds-*</code>.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'component', type: 'ElementType', default: "'button'", description: 'Renderiza como outro elemento (a, Link…).' },
            { name: 'children', type: 'ReactNode', description: 'Conteúdo clicável.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Garanta um estado de foco visível (<code>:focus-visible</code>) e hover. Se o resultado parecer um botão comum, use{' '}
          <code>Button</code> com a variante adequada.
        </P>
      </Section>
    </DocPage>
  );
}
