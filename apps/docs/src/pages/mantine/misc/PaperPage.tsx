import { Anchor, Paper } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function PaperPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Paper"
      source="mantine"
      mantineName="paper"
      description="Superfície genérica com fundo, raio, borda e sombra opcionais. Use para agrupar conteúdo sobre o fundo da página, como resumos e blocos de formulário."
      importCode={`import { Paper } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Paper}
          name="Paper"
          baseProps={{ style: { minWidth: 260 } }}
          controls={[
            { prop: 'shadow', type: 'select', data: ['none', 'xs', 'sm', 'md', 'lg', 'xl'], initialValue: 'none' },
            { prop: 'radius', type: 'size', initialValue: 'md' },
            { prop: 'p', type: 'size', initialValue: 'lg', label: 'p (padding)' },
            { prop: 'withBorder', type: 'boolean', initialValue: true },
            { prop: 'children', type: 'string', initialValue: 'Superfície da marca' },
          ]}
        />
      </Section>

      <Section title="Sombras">
        <P>
          As sombras <code>sm</code>, <code>md</code> e <code>lg</code> são os tokens <code>--ds-shadow-*</code>, mais fortes no tema escuro para
          manter a separação.
        </P>
        <Demo id="paper/shadows" />
      </Section>

      <Section title="Resumo com borda">
        <Demo id="paper/summary" />
      </Section>

      <Section title="Superfícies aninhadas">
        <P>
          Dentro de uma superfície com sombra, diferencie blocos com <code>withBorder</code> ou fundo <code>--ds-surface-2</code> — nunca outra sombra.
        </P>
        <Demo id="paper/nested" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: "'md' · 12px", description: 'Raio padrão das superfícies da marca (--ds-radius).' },
            { name: 'root', type: 'classNames', default: '--ds-surface · --ds-text', description: 'Fundo e cor de texto semânticos; adaptam ao tema escuro.' },
            { name: '--paper-border-color', type: 'classNames.root', default: 'var(--ds-border-soft)', description: 'Borda suave usada em cards e divisores.' },
          ]}
        />
        <P>
          Para cards de produto e conteúdo, veja{' '}
          <Anchor component={Link} to="/mantine/card">
            Card
          </Anchor>
          , que já vem com borda, sombra e padding.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'shadow', type: 'MantineShadow', description: 'Sombra (xs–xl).' },
            { name: 'radius', type: 'MantineRadius', default: "'md'", description: 'Raio da borda.' },
            { name: 'withBorder', type: 'boolean', default: 'false', description: 'Borda --ds-border-soft.' },
            { name: 'component', type: 'ElementType', default: "'div'", description: 'Elemento renderizado (ex.: section, form).' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
