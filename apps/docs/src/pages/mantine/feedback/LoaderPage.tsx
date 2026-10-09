import { Loader } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function LoaderPage() {
  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Loader"
      source="mantine"
      mantineName="loader"
      description="Indicador de carregamento para esperas curtas e de duração desconhecida."
      importCode={`import { Loader } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Loader}
          name="Loader"
          controls={[
            { prop: 'type', type: 'segmented', data: ['oval', 'dots', 'bars'], initialValue: 'oval' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
          ]}
        />
      </Section>

      <Section title="Tipos">
        <P>
          O padrão do DS é <code>oval</code>. <code>dots</code> funciona bem dentro de botões e mensagens de chat; <code>bars</code> em painéis
          de dados.
        </P>
        <Demo id="loader/types" />
      </Section>

      <Section title="Tamanhos e cores">
        <Demo id="loader/sizes-colors" />
      </Section>

      <Section title="Em contexto">
        <P>
          Prefira dizer o que está carregando. Em botões use a prop <code>loading</code> — o Button já mostra o Loader e bloqueia novos cliques;
          ajuste o tipo com <code>loaderProps</code>.
        </P>
        <Demo id="loader/in-context" />
      </Section>

      <Section title="No tema JC">
        <P>
          Tipo padrão <code>oval</code> na cor primária: Horizon 600 no claro e Horizon 400 no escuro — os dois com contraste acima de 3:1
          sobre <code>--ds-surface</code>. Dentro de botões, o loader herda a cor do texto do botão.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'type', type: "'oval' | 'dots' | 'bars'", default: "'oval'", description: 'Formato da animação.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Tamanho (md = 36px).' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor do loader.' },
            { name: 'loaders', type: 'MantineLoadersRecord', description: 'Registra loaders personalizados.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Quando o formato do conteúdo é conhecido (cards, listas), prefira <code>Skeleton</code>. Para esperas acima de alguns segundos, mostre
          progresso real com <code>Progress</code>. Não use vários loaders na mesma área.
        </P>
      </Section>
    </DocPage>
  );
}
