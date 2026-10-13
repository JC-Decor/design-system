import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function Page() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="DetailGrid & DetailItem"
      source="connect"
      sourcePath="packages/connect-ui/src/components/DetailGrid"
      description="Grade de detalhes (.wf-preview-grid): pares rótulo/valor em colunas automáticas, usada em painéis e prévias de solicitações."
      importCode={`import { DetailGrid, DetailItem } from '@jcdecor/connect-ui';`}
    >
      <Section title="Exemplo">
        <P>Passe <code>items</code> ou componha com <code>&lt;DetailItem&gt;</code>. <code>span=&quot;full&quot;</code> ocupa a linha inteira; <code>hint</code> mostra uma linha discreta abaixo do valor.</P>
        <Demo id="cn-detail-grid/basic" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'items', type: 'DetailGridItem[]', description: '{ label, value, hint?, span?: "full" }.' },
            { name: 'minColWidth', type: 'number', default: '240', description: 'Largura mínima de cada coluna.' },
            { name: 'DetailItem.label', type: 'ReactNode', required: true, description: 'Rótulo 12px discreto.' },
            { name: 'DetailItem.children', type: 'ReactNode', description: 'Valor 14px.' },
            { name: 'DetailItem.hint / span', type: "ReactNode / 'full'", description: 'Linha extra / linha inteira.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
