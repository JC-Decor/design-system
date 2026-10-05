import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function SplitterPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Splitter"
      source="mantine"
      mantineName="splitter"
      description="Divide uma área em painéis redimensionáveis por arraste ou teclado. Use em telas mestre-detalhe do painel, editores e pré-visualizações."
      importCode={`import { Splitter } from '@jcdecor/ui';`}
    >
      <Section title="Mestre-detalhe">
        <P>
          <OnlyFor framework="react">
            Cada <code>Splitter.Pane</code> recebe um <code>defaultSize</code>: número ou <code>%</code> são tamanhos flexíveis; <code>px</code>/
            <code>rem</code> são fixos.
          </OnlyFor>
          <OnlyFor framework="vue">
            Cada <code>SplitterPane</code> recebe um <code>default-size</code> em porcentagem (número). No Mantine Vue não há painéis em{' '}
            <code>px</code>/<code>rem</code>: todos os tamanhos são flexíveis.
          </OnlyFor>{' '}
          Limite com <code>min</code> e <code>max</code>. A divisória é focável: use as setas (Shift + seta para passos
          maiores) e duplo clique para restaurar.
        </P>
        <Demo id="splitter/basic" />
      </Section>

      <Section title="Vertical">
        <Demo id="splitter/vertical" />
      </Section>

      <Section title="Painel recolhível">
        <P>
          Com <code>collapsible</code>, o painel recolhe ao ser arrastado abaixo de <code>collapseThreshold</code>.{' '}
          <OnlyFor framework="react">Painéis em px mantêm o tamanho quando a janela muda.</OnlyFor>
          <OnlyFor framework="vue">
            No Vue, passe <code>:collapsible="true"</code>: o atributo sem valor não é reconhecido pelo Splitter do Mantine Vue 3.5.
          </OnlyFor>
        </P>
        <Demo id="splitter/collapsible" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'handle', type: 'classNames', default: '--ds-border-soft', description: 'A linha usa a cor de divisores da marca em vez do fundo da página; fica --ds-primary ao arrastar/focar.' },
            { name: 'thumb', type: 'classNames', default: '--ds-surface · --ds-border', description: 'Alça com superfície e borda dos tokens (adapta ao escuro) e anel de foco primário.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção dos painéis.' },
            { name: 'sizes / onSizeChange', type: 'SplitterPaneSize[]', description: 'Modo controlado.', vueName: 'v-model:sizes / @size-change', vueType: 'number[]' },
            { name: 'withHandle', type: 'boolean', default: 'true', description: 'Mostra a alça com ícone de arraste.' },
            { name: 'lineSize', type: 'number | string', default: '2', description: 'Espessura da divisória.' },
            { name: 'step / shiftStep', type: 'SplitterStep', default: '1 / 10', description: 'Passo do teclado (%).' },
            { name: 'Pane defaultSize', type: 'SplitterPaneSize', description: 'Tamanho inicial (obrigatório).', required: true, vueName: 'SplitterPane default-size', vueType: 'number', vueDescription: 'Tamanho inicial em % (obrigatório).' },
            { name: 'Pane min / max', type: 'SplitterPaneSize', description: 'Limites do painel.', vueName: 'SplitterPane min / max', vueType: 'number', vueDescription: 'Limites do painel em %.' },
            { name: 'Pane collapsible', type: 'boolean', default: 'false', description: 'Permite recolher o painel.', vueName: 'SplitterPane collapsible' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre defina <code>min</code> para que o conteúdo não fique ilegível. No mobile, prefira empilhar o conteúdo ou usar abas — arrastar
          divisórias em telas pequenas é difícil.
        </P>
      </Section>
    </DocPage>
  );
}
