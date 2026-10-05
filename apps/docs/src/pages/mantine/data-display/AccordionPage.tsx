import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function AccordionPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Accordion"
      source="mantine"
      mantineName="accordion"
      description="Seções recolhíveis para perguntas frequentes, especificações e políticas — o conteúdo fica à mão sem alongar a página."
      importCode={`import { Accordion } from '@jcdecor/ui';`}
    >
      <Section title="FAQ de entrega e troca">
        <P>
          Cada <OnlyFor framework="react"><code>Accordion.Item</code></OnlyFor><OnlyFor framework="vue"><code>AccordionItem</code></OnlyFor> precisa de um <code>value</code> único. Com <code>defaultValue</code> o primeiro item já abre
          expandido — útil quando há uma resposta mais procurada.
        </P>
        <Demo id="accordion/faq" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>default</code> usa só divisores; <code>contained</code> agrupa tudo em uma caixa; em <code>separated</code> os itens fechados
          ficam em <code>--ds-surface-2</code> e o aberto em <code>--ds-surface</code> com borda; <code>filled</code> preenche só o item aberto.
        </P>
        <Demo id="accordion/variants" />
      </Section>

      <Section title="Ícones e múltiplos abertos">
        <P>
          Use <code>icon</code> no <OnlyFor framework="react"><code>Accordion.Control</code></OnlyFor><OnlyFor framework="vue"><code>AccordionControl</code></OnlyFor> para reforçar o tema de cada seção e <code>multiple</code> para permitir
          vários itens abertos (o <code>defaultValue</code> passa a ser um array).
        </P>
        <Demo id="accordion/icons" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'item', type: 'classNames', description: 'Bordas em --ds-border-soft; preenchimento --ds-surface-2 (contained/filled e itens fechados em separated); item aberto em separated volta para --ds-surface.' },
            { name: 'label', type: 'classNames', description: 'Peso 600, 16px, cor --ds-text — mesmo peso dos títulos da marca.' },
            { name: 'chevron', type: 'classNames', description: 'Chevron em --ds-text-3, à direita.' },
            { name: 'content', type: 'classNames', description: 'Resposta em 14px, --ds-text-2, entrelinha 1,6.' },
            { name: 'control:hover', type: 'classNames', description: 'Hover em --ds-surface-2 (adapta ao tema escuro).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'default' | 'contained' | 'filled' | 'separated'", default: "'default'", description: 'Estilo visual dos itens.' },
            { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite mais de um item aberto.' },
            { name: 'defaultValue / value', vueName: 'defaultValue / v-model', type: 'string | string[] | null', description: 'Item(ns) aberto(s), não controlado / controlado.' },
            { name: 'chevronPosition', type: "'left' | 'right'", default: "'right'", description: 'Posição do chevron.' },
            { name: 'transitionDuration', type: 'number', default: '200', description: 'Duração da animação em ms.' },
            { name: 'order', type: '2 | 3 | 4 | 5 | 6', description: 'Envolve cada controle em um heading (h2–h6) para leitores de tela.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Escreva o controle como a pergunta do cliente (“Qual é o prazo de entrega?”) e mantenha a resposta curta, com link para a política
          completa. Não esconda informação crítica para a compra — preço, prazo e frete devem estar visíveis fora do acordeão. Em FAQs longas,
          use <code>order</code> para gerar headings e melhorar a navegação por leitores de tela.
        </P>
      </Section>
    </DocPage>
  );
}
