import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TableOfContentsPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="TableOfContents"
      source="mantine"
      mantineName="table-of-contents"
      description="Sumário que lê os títulos da página e destaca a seção visível enquanto o usuário rola — ideal para guias de instalação e fichas técnicas."
      importCode={`import { TableOfContents } from '@jcdecor/ui';`}
    >
      <Section title="Uso">
        <P>
          O componente usa o hook <code>useScrollSpy</code>: informe em <code>scrollSpyOptions.selector</code> quais títulos ler e, se o conteúdo
          rolar dentro de um contêiner, passe-o em <code>scrollHost</code>. Em <code>getControlProps</code> defina o texto e o clique de cada item.
          Role o guia abaixo e troque a variante.
        </P>
        <Demo id="table-of-contents/usage" />
      </Section>

      <Section title="Profundidade">
        <P>
          A profundidade de cada título vem da tag (<code>h2</code>, <code>h3</code>…) ou de <code>getDepth</code>. Itens com profundidade a
          partir de <code>minDepthToOffset</code> recebem recuo de <code>depthOffset</code> por nível, como “Nivelamento” no exemplo acima.
        </P>
      </Section>

      <Section title="No tema JC">
        <P>
          O próprio menu “Nesta página” desta documentação é um TableOfContents com <code>variant="light"</code>, <code>size="sm"</code> e{' '}
          <code>radius="sm"</code>. No tema, o hover dos itens usa <code>--ds-surface-2</code>, os itens inativos ficam em{' '}
          <code>--ds-text-2</code> e o ativo usa o fundo suave da cor (<code>--ds-primary-soft</code> com texto Horizon).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'scrollSpyOptions', type: 'UseScrollSpyOptions', description: 'selector, getDepth, getValue, scrollHost e offset dos títulos.' },
            { name: 'getControlProps', type: '({ active, data }) => props', description: 'Props de cada item (children, onClick, component…).' },
            { name: 'variant', type: "'light' | 'filled' | 'none'", default: "'filled'", description: 'Estilo do item ativo.' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'Fonte e espaçamento dos itens.' },
            { name: 'minDepthToOffset / depthOffset', type: 'number', default: '1 / 20', description: 'Recuo de subtítulos.' },
            { name: 'reinitializeRef', type: 'RefObject<() => void>', vueType: 'Ref<(() => void) | null>', description: 'Relê os títulos quando o conteúdo muda.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use em páginas com quatro ou mais seções. Mantenha o sumário fixo (<code>position: sticky</code>) na lateral do desktop e esconda-o no
          mobile. Os títulos precisam de <code>id</code> únicos para que os links sejam compartilháveis.
        </P>
      </Section>
    </DocPage>
  );
}
