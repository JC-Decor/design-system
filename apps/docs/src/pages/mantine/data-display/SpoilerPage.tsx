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
      description="Recolhe textos longos acima de uma altura máxima com um controle “Ler mais” — descrições de produto e avaliações."
      importCode={`import { Spoiler } from '@jcdecor/ui';`}
    >
      <Section title="Descrição do produto">
        <P>
          <code>maxHeight</code> define a altura visível; o controle só aparece se o conteúdo for maior. <code>showLabel</code> e{' '}
          <code>hideLabel</code> são obrigatórios.
        </P>
        <Demo id="spoiler/description" />
      </Section>

      <Section title="Avaliações com ícone">
        <P>Os rótulos aceitam qualquer nó React — inclua um chevron para reforçar a ação.</P>
        <Demo id="spoiler/reviews" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[{ name: 'control', type: 'classNames', description: 'Controle como link da marca: --ds-link, peso 600, 14px.' }]}
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
          Mostre ao menos 3 linhas antes de recolher e garanta que a primeira frase resuma o produto. Informações de compra (medidas, garantia)
          ficam melhores em <code>DataList</code> do que escondidas no Spoiler.
        </P>
      </Section>
    </DocPage>
  );
}
