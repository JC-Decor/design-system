import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TreeSelectPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="TreeSelect"
      source="mantine"
      mantineName="tree-select"
      description="Novo no Mantine 9: seleção em árvore expansível dentro do dropdown — ideal para a árvore de categorias (Pisos → Vinílico → Autocolante)."
      importCode={`import { TreeSelect } from '@jcdecor/ui';`}
    >
      <Section title="Seleção simples">
        <P>
          Os dados seguem o formato do <code>Tree</code> (<code>{'{ value, label, children }'}</code>). Com <code>expandOnClick</code>, clicar
          no pai expande; só folhas são selecionáveis.
        </P>
        <Demo id="tree-select/single" />
      </Section>

      <Section title="Checkbox em cascata">
        <P>
          <code>mode="checkbox"</code> marca filhos junto com o pai. <code>checkedStrategy="parent"</code> mostra só o pai quando todos os
          filhos estão marcados.
        </P>
        <Demo id="tree-select/checkbox" />
      </Section>

      <Section title="Múltiplos com busca">
        <Demo id="tree-select/searchable" />
      </Section>

      <Section title="No tema JC">
        <P>
          Opções com o mesmo hover/marcado dos demais combobox (<code>--ds-surface-2</code> e <code>--ds-primary-soft</code>), linhas da árvore
          em <code>--ds-border-soft</code> e pills de tag neutra.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'TreeNodeData[]', required: true, description: 'Árvore de nós.' },
            { name: 'mode', type: "'single' | 'multiple' | 'checkbox'", default: "'single'", description: 'Modo de seleção.' },
            { name: 'checkedStrategy', type: "'all' | 'parent' | 'child'", default: "'child'", description: 'Quais nós entram no valor (checkbox).' },
            { name: 'defaultExpandedValues / defaultExpandAll', type: 'string[] / boolean', description: 'Nós abertos inicialmente.' },
            { name: 'expandOnClick', type: 'boolean', default: 'false', description: 'Clicar no pai também expande.' },
            { name: 'searchable', type: 'boolean', default: 'false', description: 'Filtra a árvore.' },
            { name: 'maxDisplayedValues', type: 'number', description: 'Pills visíveis antes de "+N".' },
            { name: 'withLines', type: 'boolean', default: 'true', description: 'Linhas de conexão da árvore.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use valores únicos em toda a árvore (ex.: caminho <code>pisos/vinilico</code>). Expanda por padrão o ramo do valor atual para o
          usuário se localizar.
        </P>
      </Section>
    </DocPage>
  );
}
