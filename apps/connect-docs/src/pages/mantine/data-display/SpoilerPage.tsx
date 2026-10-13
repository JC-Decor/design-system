import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function SpoilerPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Spoiler"
      source="mantine"
      mantineName="spoiler"
      description="Recolhe textos longos acima de uma altura máxima com um controle “Ler mais” — comunicados, descrições de vaga e históricos de feedback."
      importCode={`import { Spoiler } from '@jcdecor/connect-ui';`}
    >
      <Section title="Comunicado longo">
        <P>
          <code>maxHeight</code> define a altura visível; o controle só aparece se o conteúdo for maior. <code>showLabel</code> e{' '}
          <code>hideLabel</code> são obrigatórios.
        </P>
        <Demo id="spoiler/announcement" />
      </Section>

      <Section title="Feedbacks com ícone">
        <P>
          Os rótulos aceitam qualquer nó React — inclua um chevron (<code>Icon name="chev"</code>) para reforçar a
          ação.
        </P>
        <Demo id="spoiler/feedbacks" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[{ name: 'control', type: 'classNames', description: 'Controle como link do Connect: --ds-link, peso 600, 12,5px.' }]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'maxHeight', type: 'number', default: '100', description: 'Altura máxima (px) quando recolhido.' },
            { name: 'showLabel', type: 'React.ReactNode', required: true, description: 'Rótulo para expandir.' },
            { name: 'hideLabel', type: 'React.ReactNode', required: true, description: 'Rótulo para recolher.' },
            { name: 'expanded / onExpandedChange', type: 'boolean / (v) => void', description: 'Modo controlado.' },
            { name: 'transitionDuration', type: 'number', default: '200', description: 'Duração da animação em ms.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre ao menos 3 linhas antes de recolher e garanta que a primeira frase resuma o comunicado. Prazos e ações obrigatórias
          (“inclua dependentes até 30/11”) não podem ficar escondidos no Spoiler — destaque-os em um <code>Alert</code> ou{' '}
          <code>DataList</code>.
        </P>
      </Section>
    </DocPage>
  );
}
