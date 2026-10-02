import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TimelinePage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Timeline"
      source="mantine"
      mantineName="timeline"
      description="Sequência de eventos com marcadores — rastreio de pedidos, histórico de trocas e etapas de um serviço de instalação."
      importCode={`import { Timeline } from '@jcdecor/ui';`}
    >
      <Section title="Rastreio do pedido">
        <P>
          <code>active</code> é o índice da última etapa concluída: os itens até ele ficam na cor primária. Use <code>lineVariant="dashed"</code>{' '}
          na etapa prevista.
        </P>
        <Demo id="timeline/tracking" />
      </Section>

      <Section title="Cores por status">
        <P>
          Cada <code>Timeline.Item</code> aceita <code>color</code>. Para Electric use o tom 300 (<code>color="electric.3"</code>) com o ícone em navy
          (<code>var(--mantine-color-obsidian-6)</code>) para manter o contraste.
        </P>
        <Demo id="timeline/status" />
      </Section>

      <Section title="Sem ícones">
        <Demo id="timeline/simple" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'bulletSize / lineWidth', type: 'defaultProps', default: '24 / 2', description: 'Marcadores e trilho mais finos que o padrão (20 / 4).' },
            { name: 'item', type: 'classNames', description: 'Trilho inativo em --ds-border-soft.' },
            { name: 'itemBullet', type: 'classNames', description: 'Marcador inativo sobre --ds-surface com ícone --ds-text-3; ativo com a cor do item.' },
            { name: 'itemTitle', type: 'classNames', description: 'Título em peso 600, --ds-text.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'active', type: 'number', default: '-1', description: 'Índice do último item ativo.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor dos itens ativos.' },
            { name: 'bulletSize', type: 'number', default: '24', description: 'Tamanho do marcador.' },
            { name: 'lineWidth', type: 'number', default: '2', description: 'Espessura do trilho.' },
            { name: 'align', type: "'left' | 'right'", default: "'left'", description: 'Lado dos marcadores.' },
            { name: 'reverseActive', type: 'boolean', default: 'false', description: 'Ativa do último para o primeiro.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Ordene do mais antigo para o mais recente (ou use <code>reverseActive</code> para o inverso) e inclua data e hora em cada etapa. Não
          dependa só da cor para indicar falhas: use ícone e texto (“Item avariado na coleta”).
        </P>
      </Section>
    </DocPage>
  );
}
