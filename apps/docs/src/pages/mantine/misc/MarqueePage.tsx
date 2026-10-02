import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function MarqueePage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Marquee"
      source="mantine"
      mantineName="marquee"
      description="Rola o conteúdo continuamente em loop. Use em faixas de benefícios, logos de marcas parceiras e depoimentos."
      importCode={`import { Marquee } from '@jcdecor/ui';`}
    >
      <Section title="Faixa promocional">
        <P>
          Faixa de benefícios no topo da loja: fundo Electric com texto Obsidian, <code>pauseOnHover</code> para quem quer ler e{' '}
          <code>fadeEdges={'{false}'}</code> em faixas de borda a borda.
        </P>
        <Demo id="marquee/promo" />
      </Section>

      <Section title="Marcas parceiras">
        <P>
          As bordas esmaecem na cor do fundo da página por padrão. Sobre uma superfície, passe <code>fadeEdgeColor="var(--ds-surface)"</code>.
        </P>
        <Demo id="marquee/logos" />
      </Section>

      <Section title="Vertical">
        <Demo id="marquee/vertical" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações. O esmaecimento usa <code>--mantine-color-body</code>, que no tema JC já é <code>--ds-bg</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'duration', type: 'number', default: '100000', description: 'Duração de um ciclo em ms (menor = mais rápido).' },
            { name: 'gap', type: 'MantineSpacing', default: "'md'", description: 'Espaço entre as repetições.' },
            { name: 'pauseOnHover', type: 'boolean', default: 'false', description: 'Pausa ao passar o mouse.' },
            { name: 'reverse', type: 'boolean', default: 'false', description: 'Inverte a direção.' },
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Direção da rolagem.' },
            { name: 'repeat', type: 'number', default: '4', description: 'Quantas vezes o conteúdo é repetido.' },
            { name: 'fadeEdges', type: 'boolean', default: 'true', description: 'Esmaecimento nas bordas.' },
            { name: 'fadeEdgeColor', type: 'string', default: 'body', description: 'Cor do esmaecimento (use --ds-surface sobre cards).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Não coloque informação essencial só no Marquee: conteúdo em movimento é difícil de ler. Use <code>pauseOnHover</code> e durações longas.
        </P>
      </Section>
    </DocPage>
  );
}
