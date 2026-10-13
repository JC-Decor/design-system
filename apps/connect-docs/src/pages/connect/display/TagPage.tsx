import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { Tag } from '@jcdecor/connect-ui';

export default function TagPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="Tag & MetaPill"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Tag"
      description="Etiquetas não clicáveis: Tag (retangular, raio 6px — .tag / .tag-lav) para categorias e MetaPill (pílula — .pill) para metadados como área, cidade e contagens."
      importCode={`import { Tag, MetaPill } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Tag}
          name="Tag"
          controls={[
            { prop: 'tone', type: 'select', data: ['neutral', 'blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'neutral' },
            { prop: 'children', type: 'string', initialValue: 'CLT' },
          ]}
        />
      </Section>
      <Section title="Tag">
        <P><code>neutral</code> = <code>.tag</code> cinza; <code>lavender</code> = <code>.tag-lav</code>. Os demais tons seguem o mesmo padrão.</P>
        <Demo id="cn-tag/tags" />
      </Section>
      <Section title="MetaPill">
        <P>Pílula de metadado com ícone opcional; <code>active</code> = <code>.pill-on</code> (navy suave).</P>
        <Demo id="cn-tag/pills" />
      </Section>
      <Section title="Props">
        <P>Tag:</P>
        <PropsTable
          rows={[
            { name: 'tone', type: "'neutral' | ToneName", default: "'neutral'", description: 'Cor da etiqueta.' },
          ]}
        />
        <P>MetaPill:</P>
        <PropsTable
          rows={[
            { name: 'active', type: 'boolean', description: 'Destaque navy suave.' },
            { name: 'icon', type: 'string', description: 'Ícone do Connect (12px).' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;span className="tag"&gt;</code> → <code>&lt;Tag&gt;</code>; <code>className="tag tag-lav"</code> → <code>&lt;Tag tone="lavender"&gt;</code>.</li>
          <li><code>&lt;span className="pill"&gt;</code> → <code>&lt;MetaPill&gt;</code>; <code>pill pill-on</code> → <code>&lt;MetaPill active&gt;</code>. (<code>Pill</code> é do Mantine.)</li>
        </ul>
      </Section>
    </DocPage>
  );
}
