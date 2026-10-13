import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function Page() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="InlineNotice"
      source="connect"
      sourcePath="packages/connect-ui/src/components/InlineNotice"
      description="Aviso em linha (.wf-notice): caixa suave com ícone, título na cor do tom e texto. Para avisos dispensáveis use o Alert do Mantine."
      importCode={`import { InlineNotice } from '@jcdecor/connect-ui';`}
    >
      <Section title="Exemplo">
        <P>O tom padrão <code>info</code> usa o navy suave do Connect; <code>success</code>, <code>warning</code>, <code>danger</code> e <code>neutral</code> usam os tons verde, âmbar, coral e cinza.</P>
        <Demo id="cn-inline-notice/tones" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'tone', type: "'info' | 'success' | 'warning' | 'danger' | 'neutral'", default: "'info'", description: 'Cor da caixa, do ícone e do título.' },
            { name: 'title', type: 'ReactNode', description: 'Título em destaque.' },
            { name: 'icon', type: 'string | false', description: 'Ícone do Connect; false esconde. Padrão por tom.' },
            { name: 'children', type: 'ReactNode', description: 'Texto do aviso.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
