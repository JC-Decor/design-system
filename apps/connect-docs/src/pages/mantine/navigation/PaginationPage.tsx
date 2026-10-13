import { Pagination } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function PaginationPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="Pagination"
      source="mantine"
      mantineName="pagination"
      description="Navegação entre páginas de listas longas — colaboradores, solicitações e registros de ponto."
      importCode={`import { Pagination } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Pagination}
          name="Pagination"
          baseProps={{ total: 12, defaultValue: 3 }}
          codeProps={{ total: '12' }}
          controls={[
            { prop: 'color', type: 'color', initialValue: 'navy' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'withEdges', type: 'boolean', initialValue: false },
            { prop: 'withControls', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Lista de colaboradores">
        <P>
          Controle a página com <code>value</code> e <code>onChange</code> e mostre a contagem de itens ao lado, para a pessoa saber quanto
          ainda há na lista.
        </P>
        <Demo id="pagination/listing" />
      </Section>

      <Section title="Bordas, irmãos e limites">
        <P>
          <code>withEdges</code> adiciona os botões de primeira/última página; <code>siblings</code> e <code>boundaries</code> controlam quantas
          páginas aparecem ao redor da atual e nas pontas.
        </P>
        <Demo id="pagination/options" />
      </Section>

      <Section title="Composição">
        <P>
          Com <code>Pagination.Root</code> e as partes <code>Previous</code>, <code>Next</code>, <code>First</code>, <code>Last</code> e{' '}
          <code>Items</code>, monte layouts compactos — por exemplo, para o mobile.
        </P>
        <Demo id="pagination/compound" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Controles com raio <code>sm</code> (10px), fundo <code>--ds-surface</code>, borda <code>--ds-border-soft</code> e hover em{' '}
          <code>--ds-surface-2</code>, como o <code>.pag-btn</code> do Connect. A página ativa usa o preenchimento navy em peso 600 — no tema
          escuro o tom fica claro e o número escuro, para manter o contraste.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'total', type: 'number', required: true, description: 'Número total de páginas.' },
            { name: 'value / defaultValue', type: 'number', description: 'Página atual (controlada / não controlada), começa em 1.' },
            { name: 'onChange', type: '(page: number) => void', description: 'Chamado ao trocar de página.' },
            { name: 'siblings', type: 'number', default: '1', description: 'Páginas visíveis de cada lado da atual.' },
            { name: 'boundaries', type: 'number', default: '1', description: 'Páginas visíveis no início e no fim.' },
            { name: 'withEdges', type: 'boolean', default: 'false', description: 'Mostra botões de primeira e última página.' },
            { name: 'radius', type: 'MantineRadius', default: "'sm'", description: 'Raio dos controles.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Role a página até o topo da lista ao trocar de página e mantenha o número da página na URL (<code>?pagina=3</code>) para que a pessoa
          possa voltar e compartilhar o link. Para feeds infinitos, prefira um botão “Carregar mais”.
        </P>
      </Section>
    </DocPage>
  );
}
