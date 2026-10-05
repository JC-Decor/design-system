import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function TreePage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Tree"
      source="mantine"
      mantineName="tree"
      description="Lista hierárquica expansível para categorias do catálogo, estruturas de pastas e filtros aninhados."
      importCode={`import { Tree, useTree } from '@jcdecor/ui';`}
    >
      <Section title="Categorias do catálogo">
        <P>
          Os dados são uma lista de <code>{'{ label, value, children }'}</code>, com <code>value</code> único. Personalize cada nó com{' '}
          <OnlyFor framework="react">
            <code>renderNode</code> e espalhe <code>elementProps</code> no elemento raiz
          </OnlyFor>
          <OnlyFor framework="vue">
            o slot <code>#node</code> e aplique <code>v-bind="elementProps"</code> no elemento raiz
          </OnlyFor>{' '}
          para manter clique, foco e estado selecionado.
        </P>
        <Demo id="tree/categories" />
      </Section>

      <Section title="Filtro com checkboxes">
        <P>
          O hook <code>useTree</code> controla expansão, seleção e marcação. Com{' '}
          <OnlyFor framework="react"><code>Checkbox.Indicator</code></OnlyFor>
          <OnlyFor framework="vue"><code>CheckboxIndicator</code></OnlyFor> e{' '}
          <code>tree.isNodeIndeterminate</code>, marcar um pai marca todos os filhos e o pai fica parcial quando só alguns estão marcados.
        </P>
        <Demo id="tree/checkboxes" />
      </Section>

      <Section title="Linhas de conexão">
        <P>
          <code>withLines</code> desenha as linhas entre pais e filhos — útil para listas de materiais por ambiente. Use{' '}
          <code>getTreeExpandedState(data, '*')</code> para começar com tudo aberto.
        </P>
        <Demo id="tree/with-lines" />
      </Section>

      <Section title="No tema JC">
        <P>
          Rótulos com raio <code>--ds-radius-sm</code>, hover em <code>--ds-surface-2</code> e nó selecionado em <code>--ds-primary-soft</code>{' '}
          com texto <code>--ds-primary</code> — no lugar do cinza padrão do Mantine, que quase sumia no tema escuro. As linhas de conexão usam{' '}
          <code>--ds-border-soft</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'data', type: 'TreeNodeData[]', required: true, description: 'Nós da árvore: label, value e children.' },
            { name: 'tree', type: 'TreeController', description: 'Instância de useTree para controlar o estado.' },
            { name: 'renderNode', type: '(payload) => ReactNode', description: 'Renderização personalizada de cada nó.', vueName: '#node', vueType: 'slot (payload)', vueDescription: 'Slot com a renderização personalizada de cada nó (a prop renderNode também existe).' },
            { name: 'selectOnClick', type: 'boolean', default: 'false', description: 'Seleciona o nó ao clicar.' },
            { name: 'expandOnClick', type: 'boolean', default: 'true', description: 'Expande/recolhe o nó ao clicar.' },
            { name: 'levelOffset', type: 'MantineSpacing', default: "'lg'", description: 'Recuo de cada nível.' },
            { name: 'withLines', type: 'boolean', default: 'false', description: 'Mostra linhas de conexão.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Limite a três níveis de profundidade e mostre um indicador (seta ou pasta) nos nós que têm filhos. Para escolher uma categoria em um
          formulário, use <code>TreeSelect</code>.
        </P>
      </Section>
    </DocPage>
  );
}
