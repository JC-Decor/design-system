import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function CenterPage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Center"
      source="mantine"
      mantineName="center"
      description="Centraliza o conteúdo vertical e horizontalmente. Use em estados vazios, carregamentos e ícones alinhados a texto."
      importCode={`import { Center } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>O Center é um flex com <code>align-items</code> e <code>justify-content</code> centralizados; defina a altura para centralizar no eixo vertical.</P>
        <Demo id="center/basic" />
      </Section>

      <Section title="Inline">
        <P>
          Com <code>inline</code>, usa <code>inline-flex</code> — ideal para alinhar um ícone ao texto dentro de links e botões.
        </P>
        <Demo id="center/inline" />
      </Section>

      <Section title="Estado vazio">
        <Demo id="center/empty-state" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações: componente puramente estrutural.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable rows={[{ name: 'inline', type: 'boolean', default: 'false', description: 'Usa display inline-flex em vez de flex.' }]} />
      </Section>
    </DocPage>
  );
}
