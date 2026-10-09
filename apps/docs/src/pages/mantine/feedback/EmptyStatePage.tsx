import { EmptyState } from '@jcdecor/ui';
import { IconShoppingCart } from '@tabler/icons-react';
import { IconShoppingCart as IconShoppingCartVue } from '@tabler/icons-vue';
import { h } from 'vue';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function EmptyStatePage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Feedback"
      title="EmptyState"
      source="mantine"
      mantineName="empty-state"
      description="Novo no Mantine 9: ícone, título, descrição e ações para listas vazias, buscas sem resultado e falhas de carregamento."
      importCode={`import { EmptyState } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={EmptyState}
          name="EmptyState"
          previewWidth={420}
          baseProps={{ icon: <IconShoppingCart /> }}
          codeProps={{ icon: '<IconShoppingCart />' }}
          vue={{ baseProps: { icon: h(IconShoppingCartVue) } }}
          controls={[
            { prop: 'title', type: 'string', initialValue: 'Seu carrinho está vazio' },
            { prop: 'description', type: 'string', initialValue: 'Explore as coleções de pisos, papéis de parede e cortinas.' },
            { prop: 'variant', type: 'segmented', data: ['light', 'filled'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'align', type: 'segmented', data: ['center', 'left', 'right'], initialValue: 'center' },
          ]}
        />
      </Section>

      <Section title="Busca sem resultado">
        <P>
          A forma curta usa as props <code>icon</code>, <code>title</code> e <code>description</code>; as ações entram como filhos em{' '}
          <code>{vue ? 'EmptyStateActions' : 'EmptyState.Actions'}</code>.
        </P>
        <Demo id="empty-state/search" />
      </Section>

      <Section title="Indicador">
        <P>
          Sem <code>variant</code>, o ícone aparece em tom suave. <code>withIndicatorBackground</code> adiciona um círculo neutro;{' '}
          <code>light</code> e <code>filled</code> usam a cor.
        </P>
        <Demo id="empty-state/variants" />
      </Section>

      <Section title="Composição e alinhamento">
        <P>
          Para controle total use as partes <code>{vue ? 'EmptyStateIndicator' : 'EmptyState.Indicator'}</code>, <code>Title</code>, <code>Description</code> e{' '}
          <code>Actions</code>. Com <code>align="left"</code>, o indicador vai para o lado — bom para cards e painéis estreitos.
        </P>
        <Demo id="empty-state/compound" />
      </Section>

      <Section title="Erro de carregamento">
        <Demo id="empty-state/error" />
      </Section>

      <Section title="No tema JC">
        <P>
          A variante <code>light</code> usa as cores das tags (<code>--ds-tag-*</code>) no indicador, como os Badges. O fundo neutro de{' '}
          <code>withIndicatorBackground</code> foi trocado por <code>--ds-surface-2</code> (o padrão do Mantine no escuro tinha a mesma cor
          dos cards e sumia); o ícone sem variante fica em <code>--ds-text-3</code>. O título usa <code>--ds-text</code> e a descrição <code>--ds-text-2</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'icon', type: 'ReactNode', vueType: 'VNode | slot #icon', description: 'Ícone ou ilustração do indicador.' },
            { name: 'title / description', type: 'ReactNode', vueType: 'string | slot #title / #description', description: 'Título e texto de apoio.' },
            { name: 'variant', type: "'light' | 'filled'", description: 'Indicador com fundo colorido. Sem variante, ícone em tom suave.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor do indicador nas variantes.' },
            { name: 'withIndicatorBackground', type: 'boolean', default: 'false', description: 'Círculo neutro atrás do ícone.' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'Indicador, espaçamento e fontes.' },
            { name: 'align', type: "'center' | 'left' | 'right'", default: "'center'", description: 'Alinhamento do conteúdo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Diga por que está vazio e ofereça a próxima ação (“Limpar filtros”, “Ir para a loja”). Use <code>color="danger"</code> só para erros —
          uma lista vazia não é um erro. Evite ilustrações grandes em áreas pequenas, como dropdowns.
        </P>
      </Section>
    </DocPage>
  );
}
