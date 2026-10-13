import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { SkeletonBlock } from '@jcdecor/connect-ui';

export default function SkeletonBlockPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="SkeletonBlock"
      source="connect"
      sourcePath="packages/connect-ui/src/components/SkeletonBlock"
      description="Esqueletos de carregamento prontos por formato — texto, card, lista, tabela, perfil e gráfico — montados com o Skeleton do Mantine."
      importCode={`import { SkeletonBlock } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SkeletonBlock}
          name="SkeletonBlock"
          previewWidth={420}
          controls={[
            { prop: 'variant', type: 'select', data: ['text', 'card', 'list', 'table', 'profile', 'chart'], initialValue: 'text' },
            { prop: 'rows', type: 'number', initialValue: 3, min: 1, max: 8, step: 1 },
          ]}
        />
      </Section>
      <Section title="Variantes">
        <P>A raiz é <code>role="status"</code> e anuncia “Carregando…” (troque com <code>label</code>); as formas são ocultas para leitores de tela.</P>
        <Demo id="cn-skeleton-block/variants" />
      </Section>
      <Section title="Trocando pelo conteúdo">
        <Demo id="cn-skeleton-block/loading" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'variant', type: "'text' | 'card' | 'list' | 'table' | 'profile' | 'chart'", default: "'text'", description: 'Formato.' },
            { name: 'rows', type: 'number', default: '3', description: 'Linhas (text, card, list, table).' },
            { name: 'label', type: 'string', default: "'Carregando…'", description: 'Texto anunciado.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;SkeletonBlock variant rows className /&gt;</code> continua igual.</li>
          <li>O <code>&lt;Skeleton w h r /&gt;</code> avulso do connect-jc → <code>&lt;Skeleton width height radius /&gt;</code> do Mantine (já temado).</li>
        </ul>
      </Section>
    </DocPage>
  );
}
