import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function Page() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="FormGrid"
      source="connect"
      sourcePath="packages/connect-ui/src/components/FormGrid"
      description="Grade de formulário (.wf-form-grid): campos simples dividem colunas automáticas; textareas, editores e blocos que não são campos ocupam a linha inteira."
      importCode={`import { FormGrid } from '@jcdecor/connect-ui';`}
    >
      <Section title="Exemplo">
        <P>As regras olham para os filhos diretos: wrappers de input do Mantine (TextInput, Select, NumberInput…) viram colunas; os que contêm textarea ou contenteditable, e qualquer outro elemento, ocupam a linha. Force com <code>data-span=&quot;auto&quot;</code> ou <code>data-span=&quot;full&quot;</code>.</P>
        <Demo id="cn-form-grid/basic" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'minColWidth', type: 'number', default: '240', description: 'Largura mínima de cada coluna antes de quebrar.' },
            { name: 'gap', type: 'number', default: '12', description: 'Espaço entre campos em px.' },
            { name: '...BoxProps', type: 'BoxProps', description: 'Props de estilo do Mantine.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
