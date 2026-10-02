import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ListPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="List"
      source="mantine"
      mantineName="list"
      description="Listas ordenadas e não ordenadas com marcadores na cor primária — instruções de instalação, itens inclusos e vantagens."
      importCode={`import { List } from '@jcdecor/ui';`}
    >
      <Section title="Instruções de instalação">
        <P>
          <code>type="ordered"</code> para passos em sequência. Os números usam <code>--ds-primary</code> em peso 600 para guiar a leitura.
        </P>
        <Demo id="list/installation" />
      </Section>

      <Section title="Com ícones">
        <P>
          <code>icon</code> no List aplica a todos os itens; no <code>List.Item</code>, substitui só aquele. Use <code>center</code> para
          alinhar o ícone ao texto.
        </P>
        <Demo id="list/icons" />
      </Section>

      <Section title="Listas aninhadas">
        <P>
          Aninhe um <code>List withPadding</code> dentro de um item e mude o <code>listStyleType</code> para diferenciar os níveis.
        </P>
        <Demo id="list/nested" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'spacing', type: 'defaultProps', default: "'xs'", description: '4px entre itens (o padrão do Mantine é 0).' },
            { name: 'item::marker', type: 'classNames', description: 'Marcadores e números em --ds-primary, peso 600.' },
            { name: 'itemIcon', type: 'classNames', description: 'Ícones em --ds-primary quando não houver cor própria.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'type', type: "'ordered' | 'unordered'", default: "'unordered'", description: 'ol ou ul.' },
            { name: 'icon', type: 'React.ReactNode', description: 'Substitui o marcador.' },
            { name: 'spacing', type: 'MantineSpacing', default: "'xs'", description: 'Espaço entre itens.' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'Tamanho da fonte.' },
            { name: 'center', type: 'boolean', default: 'false', description: 'Centraliza o ícone verticalmente.' },
            { name: 'withPadding', type: 'boolean', default: 'false', description: 'Recuo extra (listas aninhadas).' },
            { name: 'listStyleType', type: 'CSS list-style-type', description: 'disc, circle, decimal, lower-alpha…' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Comece cada passo com um verbo (“Encaixe”, “Verifique”) e mantenha uma ação por item. Use ícones de check/x para vantagens e
          restrições, mas não mais de dois tipos de ícone por lista.
        </P>
      </Section>
    </DocPage>
  );
}
