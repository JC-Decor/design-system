import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function DrawerPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Drawer"
      source="mantine"
      mantineName="drawer"
      description="Painel que desliza da borda da tela. Ideal para carrinho lateral, filtros e edição rápida sem perder o contexto da lista."
      importCode={`import { Drawer } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';`}
    >
      <Section title="Carrinho lateral">
        <P>
          O padrão do e-commerce JC: itens com quantidade editável, frete, total em destaque e o CTA <b>Finalizar compra</b> em <code>size="lg"</code>.
        </P>
        <Demo id="drawer/cart" />
      </Section>

      <Section title="Filtros">
        <P>Em listagens de produtos, os filtros abrem pela direita e o botão principal mostra quantos resultados serão exibidos.</P>
        <Demo id="drawer/filters" />
      </Section>

      <Section title="Posições">
        <P>
          <code>position</code> aceita <code>left</code>, <code>right</code>, <code>top</code> e <code>bottom</code>. No mobile, <code>bottom</code>{' '}
          funciona como bottom sheet para ações rápidas.
        </P>
        <Demo id="drawer/positions" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'overlayProps', type: 'defaultProps', default: 'Obsidian 50% · blur 2', description: 'Mesmo overlay navy do Modal.' },
            { name: 'shadow', type: 'defaultProps', default: 'lg', description: '--ds-shadow-lg.' },
            { name: 'content / header', type: 'classNames', description: 'Fundo --ds-surface; título em headline-small.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'opened', type: 'boolean', required: true, description: 'Estado de abertura.' },
            { name: 'onClose', vueName: '@close', type: '() => void', vueType: 'evento', required: true, description: 'Fecha no Esc, clique fora e botão fechar.' },
            { name: 'position', type: "'left' | 'right' | 'top' | 'bottom'", default: 'left', description: 'Borda de onde o painel entra.' },
            { name: 'size', type: 'MantineSize | string | number', default: 'md', description: 'Largura (laterais) ou altura (topo/base).' },
            { name: 'title', type: 'ReactNode', vueType: 'string | slot #title', description: 'Título do cabeçalho.' },
            { name: 'offset', type: 'number | string', default: '0', description: 'Distância da borda; com radius cria um painel "flutuante".' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          O carrinho e os filtros entram pela direita; menus de navegação, pela esquerda. O foco fica preso no drawer e <kbd>Esc</kbd> fecha. Não abra
          um modal por cima de um drawer — resolva a etapa dentro do próprio painel.
        </P>
      </Section>
    </DocPage>
  );
}
