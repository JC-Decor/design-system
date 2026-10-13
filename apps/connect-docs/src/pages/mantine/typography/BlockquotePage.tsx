import { Blockquote } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function BlockquotePage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Blockquote"
      source="mantine"
      mantineName="blockquote"
      description="Citações destacadas com borda primária e fundo suave — citações em comunicados, trechos de feedback 1:1, dicas e lembretes do RH."
      importCode={`import { Blockquote } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Blockquote}
          name="Blockquote"
          previewWidth={480}
          controls={[
            { prop: 'color', type: 'color', initialValue: 'navy' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'cite', type: 'string', initialValue: '— Paula Andrade, Gente & Gestão' },
            { prop: 'children', type: 'string', initialValue: 'Cuidar de quem cuida da empresa é a nossa prioridade.' },
          ]}
        />
      </Section>

      <Section title="Trecho de feedback">
        <P>
          <code>cite</code> identifica o autor e <code>icon</code> adiciona o selo circular no canto — ele usa <code>--ds-surface</code> como
          fundo para se destacar da borda.
        </P>
        <Demo id="blockquote/testimonial" />
      </Section>

      <Section title="Cores">
        <P>
          A cor padrão (navy) usa os tokens <code>--ds-primary</code> e <code>--ds-primary-soft</code>. Outras cores (green, coral, lavender…) seguem a
          regra do Mantine: borda na cor cheia e fundo com 7% de opacidade.
        </P>
        <Demo id="blockquote/colors" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'vars (navy)', type: 'vars', description: 'Borda --ds-primary e fundo --ds-primary-soft (adaptam ao tema escuro).' },
            { name: 'radius / iconSize', type: 'defaultProps', default: "'sm' / 40", description: 'Raio de 10px e selo menor que o padrão (48).' },
            { name: 'root', type: 'classNames', description: 'Texto 15px (corpo grande) em --ds-text, entrelinha 1,55, padding 22/28px.' },
            { name: 'cite', type: 'classNames', description: 'Autor em 12,5px, peso 500, --ds-text-3, sem itálico nem opacidade.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'cite', type: 'React.ReactNode', description: 'Autor/fonte da citação.' },
            { name: 'icon', type: 'React.ReactNode', description: 'Ícone no canto superior esquerdo.' },
            { name: 'iconSize', type: 'number | string', default: '40', description: 'Tamanho do selo do ícone.' },
            { name: 'color', type: 'MantineColor', default: "'navy'", description: 'Cor da borda e do fundo.' },
            { name: 'radius', type: 'MantineRadius | number', default: "'sm'", description: 'Raio dos cantos à direita.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Blockquote para citações reais, com nome e área do autor — e só publique trechos de feedback com autorização de quem recebeu. Para avisos de sistema, prefira{' '}
          <code>Alert</code>, que tem semântica de status.
        </P>
      </Section>
    </DocPage>
  );
}
