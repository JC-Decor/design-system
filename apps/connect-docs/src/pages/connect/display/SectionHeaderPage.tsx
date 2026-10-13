import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { SectionHeader } from '@jcdecor/connect-ui';

export default function SectionHeaderPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="SectionHeader"
      source="connect"
      sourcePath="packages/connect-ui/src/components/SectionHeader"
      description="Cabeçalho de seção: título 20/700 com selo, descrição, ilustração decorativa opcional (oculta no mobile) e ações à direita."
      importCode={`import { SectionHeader } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={SectionHeader}
          name="SectionHeader"
          centered={false}
          controls={[
            { prop: 'title', type: 'string', initialValue: 'Banco de horas' },
            { prop: 'description', type: 'string', initialValue: 'Saldo da equipe em outubro' },
            { prop: 'compact', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>
      <Section title="Variações">
        <Demo id="cn-section-header/usage" />
      </Section>
      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título.' },
            { name: 'description', type: 'ReactNode', description: 'Descrição.' },
            { name: 'badge', type: 'ReactNode', description: 'Selo ao lado do título.' },
            { name: 'actions', type: 'ReactNode', description: 'Ações.' },
            { name: 'illustration', type: 'IllustrationName | string', description: 'Nome do catálogo ou URL da arte.' },
            { name: 'compact', type: 'boolean', description: 'Título 17px, arte menor.' },
            { name: 'order', type: '2 | 3 | 4', default: '2', description: 'Nível do título.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props; <code>illustration</code> aceita os mesmos nomes de antes (ou uma URL).</li>
        </ul>
      </Section>
    </DocPage>
  );
}
