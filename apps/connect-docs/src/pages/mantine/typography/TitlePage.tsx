import { Title } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function TitlePage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Title"
      source="mantine"
      mantineName="title"
      description="Títulos h1–h6 em DM Sans Bold (700), na escala do Connect — título de página 26px, de seção 22px, de card 16px — com quebra de linha balanceada."
      importCode={`import { Title } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Title}
          name="Title"
          previewWidth={480}
          controls={[
            { prop: 'order', type: 'number', initialValue: 2, min: 1, max: 6 },
            { prop: 'ta', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'left' },
            { prop: 'children', type: 'string', initialValue: 'Banco de horas' },
          ]}
        />
      </Section>

      <Section title="Níveis">
        <P>
          h1 é o título de página (26px), h2 o de seção (22px), h3 o de diálogo (18px) e h4 o de card (16px); h5 e h6 ficam em 15 e 13,5px.
          Todos têm tamanho fixo, peso 700 e tracking levemente negativo nos maiores.
        </P>
        <Demo id="title/orders" />
      </Section>

      <Section title="Tamanho independente da semântica">
        <P>
          <code>order</code> define a tag (para SEO e leitores de tela) e <code>size</code> o visual — mantenha a hierarquia correta mesmo
          quando o design pede um título menor.
        </P>
        <Demo id="title/size" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'headings', type: 'theme', description: 'DM Sans 700 em todos os níveis, textWrap balance, entrelinha 1,2–1,45.' },
            { name: 'root', type: 'classNames', description: 'Cor --ds-text em vez do preto puro.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'order', type: '1 | 2 | 3 | 4 | 5 | 6', default: '1', description: 'Nível do heading (h1–h6).' },
            { name: 'size', type: "'h1'…'h6' | string", description: 'Tamanho visual, independente de order.' },
            { name: 'lineClamp', type: 'number', description: 'Limita o número de linhas.' },
            { name: 'textWrap', type: "'wrap' | 'balance' | 'pretty' | …", default: "'balance'", description: 'Quebra de linha.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Um único h1 por página. Não pule níveis (h2 → h4) e não use Title apenas para deixar um texto em negrito — use{' '}
          <code>Text fw={'{600}'}</code>.
        </P>
      </Section>
    </DocPage>
  );
}
