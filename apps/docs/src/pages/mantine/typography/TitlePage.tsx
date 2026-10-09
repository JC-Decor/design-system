import { Title } from '@jcdecor/ui';
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
      description="Títulos h1–h6 em Poppins SemiBold, com h1 e h2 fluidos entre mobile e desktop e quebra de linha balanceada."
      importCode={`import { Title } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Title}
          name="Title"
          previewWidth={480}
          controls={[
            { prop: 'order', type: 'number', initialValue: 2, min: 1, max: 6 },
            { prop: 'ta', type: 'segmented', data: ['left', 'center', 'right'], initialValue: 'left' },
            { prop: 'children', type: 'string', initialValue: 'Revestimentos para cada ambiente' },
          ]}
        />
      </Section>

      <Section title="Níveis">
        <P>
          h1 usa o <code>display-small</code> (700) e h2 o <code>headline-large</code>; ambos variam com a largura da tela. De h3 a h6 os
          tamanhos são fixos, todos em peso 600.
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

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'headings', type: 'theme', description: 'Poppins 600 (h1 700), textWrap balance, entrelinha 1,2–1,5.' },
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
