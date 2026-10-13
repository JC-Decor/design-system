import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function SplitterPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Splitter"
      source="mantine"
      mantineName="splitter"
      description="Divide uma área em painéis redimensionáveis por arraste ou teclado. Use em telas mestre-detalhe (lista de colaboradores + perfil), editores de comunicados e pré-visualizações."
      importCode={`import { Splitter } from '@jcdecor/connect-ui';`}
    >
      <Section title="Mestre-detalhe">
        <P>
          Cada <code>Splitter.Pane</code> recebe um <code>defaultSize</code>: número ou <code>%</code> são tamanhos flexíveis; <code>px</code>/
          <code>rem</code> são fixos. Limite com <code>min</code> e <code>max</code>. A divisória é focável: use as setas (Shift + seta para passos
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
          Painéis em px mantêm o tamanho quando a janela muda.
        </P>
        <Demo id="splitter/collapsible" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'handle', type: 'classNames', default: '--ds-border-soft', description: 'A linha usa a cor de divisores em vez do fundo da página; --ds-border no hover e --ds-primary ao arrastar/focar.' },
            { name: 'thumb', type: 'classNames', default: '--ds-surface · --ds-border-soft', description: 'Alça com superfície, borda suave e --ds-shadow-sm (adapta ao escuro); ativa ganha borda primária e anel --ds-primary-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção dos painéis.' },
            { name: 'sizes / onSizeChange', type: 'SplitterPaneSize[]', description: 'Modo controlado.' },
            { name: 'withHandle', type: 'boolean', default: 'true', description: 'Mostra a alça com ícone de arraste.' },
            { name: 'lineSize', type: 'number | string', default: '2', description: 'Espessura da divisória.' },
            { name: 'step / shiftStep', type: 'SplitterStep', default: '1 / 10', description: 'Passo do teclado (%).' },
            { name: 'Pane defaultSize', type: 'SplitterPaneSize', description: 'Tamanho inicial (obrigatório).', required: true },
            { name: 'Pane min / max', type: 'SplitterPaneSize', description: 'Limites do painel.' },
            { name: 'Pane collapsible', type: 'boolean', default: 'false', description: 'Permite recolher o painel.' },
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
