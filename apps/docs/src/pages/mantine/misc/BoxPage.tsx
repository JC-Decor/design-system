import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function BoxPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Box"
      source="mantine"
      mantineName="box"
      description="Componente base de todos os componentes do Mantine: um elemento polimórfico que aceita style props. Use para blocos simples sem precisar de CSS próprio."
      importCode={`import { Box } from '@jcdecor/ui';`}
    >
      <Section title="Style props">
        <P>
          Props como <code>p</code>, <code>m</code>, <code>bg</code>, <code>c</code>, <code>maw</code> e <code>fw</code> viram estilos; muitas aceitam
          objetos por breakpoint. Use os tokens <code>--ds-*</code> para cores que adaptam ao tema escuro.
        </P>
        <Demo id="box/style-props" />
      </Section>

      <Section title="Elemento polimórfico">
        <P>
          A prop <code>component</code> troca o elemento renderizado (<code>a</code>, <code>section</code>, <code>Link</code> do React Router…),
          mantendo as style props.
        </P>
        <Demo id="box/component" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem customizações. As style props resolvem a escala da marca: <code>p="md"</code> = 16px, <code>c="horizon.6"</code> = azul Horizon,{' '}
          <code>bdrs="md"</code> = 12px.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'component', type: 'ElementType', default: "'div'", description: 'Elemento ou componente renderizado.' },
            { name: 'mod', type: 'Record<string, any> | string', description: 'Adiciona data-attributes (ex.: mod={{ active }} → data-active).' },
            { name: 'hiddenFrom / visibleFrom', type: 'MantineBreakpoint', description: 'Oculta ou mostra a partir de um breakpoint.' },
            { name: 'style props', type: 'p, m, bg, c, w, h, maw…', description: 'Atalhos de estilo, responsivos.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Style props são ótimas para ajustes pontuais. Quando um bloco tem muitos estilos ou estados (hover, data-attributes), prefira um CSS
          module com variáveis <code>--ds-*</code>.
        </P>
      </Section>
    </DocPage>
  );
}
