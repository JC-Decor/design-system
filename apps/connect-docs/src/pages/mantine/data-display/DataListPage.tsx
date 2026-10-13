import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function DataListPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="DataList"
      source="mantine"
      mantineName="data-list"
      description="Lista de pares rótulo–valor (dl/dt/dd) para dados cadastrais, detalhes de solicitações e resumos. Novo no Mantine 9."
      importCode={`import { DataList } from '@jcdecor/connect-ui';`}
    >
      <Section title="Dados do colaborador">
        <P>
          Cada <code>DataList.Item</code> combina um <code>ItemLabel</code> (dt) e um <code>ItemValue</code> (dd). <code>withDivider</code>{' '}
          separa as linhas e <code>labelWidth</code> alinha os valores em coluna.
        </P>
        <Demo id="data-list/profile" />
      </Section>

      <Section title="Orientação vertical">
        <P>
          <code>orientation="vertical"</code> empilha rótulo e valor — bom para o cabeçalho de uma solicitação em grade.
        </P>
        <Demo id="data-list/vertical" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'itemLabel', type: 'classNames', description: 'Rótulo em --ds-text-3.' },
            { name: 'itemValue', type: 'classNames', description: 'Valor em --ds-text, peso 500.' },
            { name: 'withDivider', type: 'classNames', description: 'Divisores em --ds-border-soft (o padrão do Mantine usa a borda forte de campos).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Rótulo ao lado ou acima do valor.' },
            { name: 'withDivider', type: 'boolean', default: 'false', description: 'Borda entre os itens.' },
            { name: 'labelWidth', type: 'CSS minWidth', default: "'120px'", description: 'Largura mínima do rótulo.' },
            { name: 'size', type: 'MantineSize', default: "'sm'", description: 'Tamanho da fonte e entrelinha.' },
            { name: 'gap', type: 'MantineSpacing', default: "'sm'", description: 'Espaço entre itens.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use DataList para dados de leitura; para comparar vários colaboradores lado a lado, use <code>Table</code>. Mantenha os rótulos
          curtos e iguais em todas as fichas e use os formatos brasileiros (<code>14/03/2022</code>, <code>44h</code>, <code>R$ 1.234,56</code>).
        </P>
      </Section>
    </DocPage>
  );
}
