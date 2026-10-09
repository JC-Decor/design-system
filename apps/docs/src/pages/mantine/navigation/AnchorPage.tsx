import { Anchor } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import AnchorPreviewVue from '../../../vue-demos/anchor/AnchorPreview.vue';

export default function AnchorPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Anchor"
      source="mantine"
      mantineName="anchor"
      description="Links de texto na cor --ds-link, com peso 500. Use dentro de parágrafos, rodapés e trilhas de navegação."
      importCode={`import { Anchor } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Anchor}
          name="Anchor"
          vue={{ component: AnchorPreviewVue }}
          baseProps={{ href: '#', onClick: (event: React.MouseEvent) => event.preventDefault() }}
          controls={[
            { prop: 'children', type: 'string', initialValue: 'Ver todos os pisos' },
            { prop: 'underline', type: 'segmented', data: ['hover', 'always', 'never', 'not-hover'], initialValue: 'hover' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'fw', type: 'select', data: ['400', '500', '600', '700'], initialValue: '500' },
          ]}
        />
      </Section>

      <Section title="Uso em texto">
        <P>
          O Anchor herda a família e a entrelinha do texto ao redor. Ajuste o tamanho com <code>fz</code> para acompanhar o parágrafo.
        </P>
        <Demo id="anchor/usage" />
      </Section>

      <Section title="Sublinhado">
        <P>
          O padrão é <code>underline="hover"</code>. Em blocos de texto longos, prefira <code>always</code> para que o link não dependa só da cor.
        </P>
        <Demo id="anchor/underline" />
      </Section>

      <Section title="Com ícone e links externos">
        <P>
          Para links externos use <code>target="_blank"</code> com <code>rel="noopener noreferrer"</code> e um ícone que indique a saída do site.
        </P>
        <Demo id="anchor/with-icon" />
      </Section>

      <Section title="No tema JC">
        <P>
          A cor vem de <code>--ds-link</code> (Horizon 600 no claro, Horizon 300 no escuro, ambos acima de 4,5:1) e o peso padrão é 500. O
          mesmo estilo é aplicado aos links dos <code>Breadcrumbs</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'href', type: 'string', description: 'Destino do link. Com React Router, use component={Link} e to.', vueDescription: 'Destino do link. Com Vue Router, use :component="RouterLink" e to.' },
            { name: 'component', type: 'ElementType', vueType: 'string | Component', default: "'a'", description: 'Elemento ou componente renderizado (ex.: Link do roteador).' },
            { name: 'underline', type: "'always' | 'hover' | 'not-hover' | 'never'", default: "'hover'", description: 'Quando exibir o sublinhado.' },
            { name: 'size / fz', type: 'MantineSize | string', description: 'Tamanho da fonte.' },
            { name: 'c', type: 'MantineColor', default: '--ds-link', description: 'Cor do texto; evite trocar por cores sem contraste.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Escreva o texto do link descrevendo o destino (“ver guia de instalação”), nunca “clique aqui”. Para ações que não mudam de página, use
          <code> Button variant="subtle"</code> em vez de Anchor.
        </P>
      </Section>
    </DocPage>
  );
}
