import { Highlight } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function HighlightPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Highlight"
      source="mantine"
      mantineName="highlight"
      description="Destaca automaticamente os termos buscados dentro de um texto — resultados de busca, autocompletar e filtros."
      importCode={`import { Highlight } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Highlight}
          name="Highlight"
          controls={[
            { prop: 'highlight', type: 'string', initialValue: 'vinílico' },
            { prop: 'color', type: 'color', initialValue: 'electric' },
            { prop: 'children', type: 'string', initialValue: 'Piso vinílico Carvalho Natural — vinílico click de 5 mm' },
          ]}
        />
      </Section>

      <Section title="Busca de produtos">
        <P>
          A busca não diferencia maiúsculas, mas diferencia acentos (“vinilico” não encontra “vinílico”). O destaque usa{' '}
          <code>Mark</code>, com fundo Electric e texto <code>--ds-text</code>.
        </P>
        <Demo id="highlight/search" />
      </Section>

      <Section title="Vários termos">
        <P>
          Passe um array em <code>highlight</code> e use <code>highlightStyles</code> para ajustar o estilo de cada destaque.
        </P>
        <Demo id="highlight/multiple" />
      </Section>

      <Section title="No tema JC">
        <P>
          Highlight herda o tema do <code>Mark</code>: amarelo apenas como preenchimento (Electric 200 no claro, Electric translúcido no escuro)
          e texto sempre <code>--ds-text</code> — nunca texto amarelo.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'highlight', type: 'string | string[]', required: true, description: 'Termo(s) a destacar.' },
            { name: 'children', vueName: 'slot padrão', type: 'string', required: true, description: 'Texto completo (apenas string).' },
            { name: 'color', type: 'MantineColor', default: "'electric'", description: 'Cor do destaque.' },
            { name: 'highlightStyles', type: 'CSSProperties', description: 'Estilos extras dos trechos destacados.' },
            { name: 'wholeWord', type: 'boolean', default: 'false', description: 'Destaca só palavras inteiras.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Destaque apenas o termo buscado, não frases inteiras. Para marcar trechos fixos (sem busca), use <code>Mark</code> diretamente.
        </P>
      </Section>
    </DocPage>
  );
}
