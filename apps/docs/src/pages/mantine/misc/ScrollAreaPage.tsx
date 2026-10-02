import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ScrollAreaPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="ScrollArea"
      source="mantine"
      mantineName="scroll-area"
      description="Área rolável com barras de rolagem customizadas e consistentes entre navegadores. Use em listas com altura limitada, carrosséis horizontais e painéis laterais."
      importCode={`import { ScrollArea } from '@jcdecor/ui';`}
    >
      <Section title="Vertical">
        <P>
          Defina a altura (<code>h</code>) e o conteúdo excedente rola. Por padrão (<code>type="hover"</code>), a barra aparece ao passar o mouse.
        </P>
        <Demo id="scroll-area/basic" />
      </Section>

      <Section title="Horizontal">
        <P>
          <code>scrollbars="x"</code> limita a rolagem ao eixo horizontal; <code>offsetScrollbars</code> reserva espaço para a barra não cobrir o
          conteúdo.
        </P>
        <Demo id="scroll-area/horizontal" />
      </Section>

      <Section title="Autosize">
        <P>
          <code>ScrollArea.Autosize</code> cresce com o conteúdo até <code>mah</code> e só então passa a rolar — ideal para listas de itens do
          carrinho.
        </P>
        <Demo id="scroll-area/autosize" />
      </Section>

      <Section title="Carregamento sob demanda">
        <P>
          <code>onBottomReached</code> dispara ao chegar ao fim — use para carregar mais itens.
        </P>
        <Demo id="scroll-area/infinite" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'thumb', type: 'classNames', default: '--ds-border', description: 'Polegar no tom de borda dos campos (hover em --ds-text-3), legível no claro e no escuro.' },
            { name: 'scrollbar', type: 'classNames', default: 'transparente', description: 'Trilho sem fundo no hover, para não destacar sobre superfícies.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'type', type: "'auto' | 'always' | 'scroll' | 'hover' | 'never'", default: "'hover'", description: 'Quando as barras aparecem.' },
            { name: 'scrollbars', type: "'x' | 'y' | 'xy' | false", default: "'xy'", description: 'Eixos com rolagem.' },
            { name: 'scrollbarSize', type: 'number | string', default: '12', description: 'Espessura da barra.' },
            { name: 'offsetScrollbars', type: "boolean | 'x' | 'y' | 'present'", description: 'Reserva espaço para as barras.' },
            { name: 'viewportRef', type: 'Ref<HTMLDivElement>', description: 'Ref do viewport (scroll programático).' },
            { name: 'onBottomReached', type: '() => void', description: 'Chamado ao rolar até o fim.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Evite rolagem dentro de rolagem na mesma direção. Em listas longas do painel, prefira paginação ou rolagem da página inteira; use
          ScrollArea para blocos de altura limitada.
        </P>
      </Section>
    </DocPage>
  );
}
