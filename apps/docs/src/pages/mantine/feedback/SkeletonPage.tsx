import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function SkeletonPage() {
  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="Skeleton"
      source="mantine"
      mantineName="skeleton"
      description="Reserva o espaço do conteúdo enquanto ele carrega, no mesmo formato do componente final."
      importCode={`import { Skeleton } from '@jcdecor/ui';`}
    >
      <Section title="Card de produto">
        <P>
          Envolva o conteúdo real com <code>Skeleton visible={'{loading}'}</code>: o tamanho vem do próprio conteúdo e o layout não “pula” quando
          os dados chegam.
        </P>
        <Demo id="skeleton/product-card" />
      </Section>

      <Section title="Lista de pedidos">
        <P>Sem filhos, defina <code>height</code> e <code>width</code>. <code>circle</code> cria um círculo para avatares.</P>
        <Demo id="skeleton/order-list" />
      </Section>

      <Section title="Formas">
        <P>
          Use <code>radius</code> igual ao do componente final (botões <code>sm</code>, cards <code>md</code>, badges <code>xl</code>).{' '}
          <code>animate={'{false}'}</code> desliga a pulsação.
        </P>
        <Demo id="skeleton/shapes" />
      </Section>

      <Section title="No tema JC">
        <P>
          O bloco usa <code>gray.2</code> no claro (mais suave que o <code>gray.3</code> padrão, sem pesar sobre cards brancos) e{' '}
          <code>dark.4</code> no escuro, que se destaca de cards em <code>--ds-surface</code>. Raio padrão do tema (<code>sm</code>, 8px).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'visible', type: 'boolean', default: 'true', description: 'Mostra o skeleton sobre o conteúdo.' },
            { name: 'height / width', type: 'CSSProperties', description: 'Tamanho quando não há filhos.' },
            { name: 'circle', type: 'boolean', default: 'false', description: 'Forma circular (largura = altura).' },
            { name: 'radius', type: 'MantineRadius | number', default: "'sm'", description: 'Raio dos cantos.' },
            { name: 'animate', type: 'boolean', default: 'true', description: 'Animação de pulsação.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Imite a estrutura real (imagem, título, preço, botão) e não detalhe demais. Se o carregamento passar de alguns segundos, mostre uma
          mensagem; se falhar, troque por um <code>EmptyState</code> de erro.
        </P>
      </Section>
    </DocPage>
  );
}
