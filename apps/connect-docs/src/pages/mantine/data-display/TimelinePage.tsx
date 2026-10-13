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
      description="Sequência de eventos com marcadores — admissão, fluxo de aprovação de solicitações e etapas do ciclo de avaliação."
      importCode={`import { Timeline } from '@jcdecor/connect-ui';`}
    >
      <Section title="Timeline de admissão">
        <P>
          <code>active</code> é o índice da última etapa concluída: os itens até ele ficam na cor primária. Use <code>lineVariant="dashed"</code>{' '}
          na etapa prevista.
        </P>
        <Demo id="timeline/onboarding" />
      </Section>

      <Section title="Cores por status">
        <P>
          Cada <code>Timeline.Item</code> aceita <code>color</code> — use as cores de status do Connect: green (aprovado), yellow (pendente),
          coral (recusado/atrasado). O ícone do marcador é branco; no amarelo use o tom 400 (<code>color="yellow.4"</code>) com o ícone em{' '}
          <code>var(--mantine-color-yellow-9)</code> para manter o contraste.
        </P>
        <Demo id="timeline/status" />
      </Section>

      <Section title="Sem ícones (ciclo de avaliação)">
        <Demo id="timeline/simple" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'bulletSize / lineWidth', type: 'defaultProps', default: '24 / 2', description: 'Marcadores e trilho mais finos que o padrão (20 / 4).' },
            { name: 'item', type: 'classNames', description: 'Trilho inativo em --ds-border-soft.' },
            { name: 'itemBullet', type: 'classNames', description: 'Marcador inativo sobre --ds-surface com ícone --ds-text-3; ativo com a cor do item.' },
            { name: 'itemTitle', type: 'classNames', description: 'Título em peso 600, --ds-text.' },
          ]}
        />
        <P>
          No tema escuro o primário (navy 3) é claro, então o ícone dos marcadores ativos sem cor própria passa a ser escuro. Para o feed de
          atividades do painel (quem fez o quê e quando), há uma versão pronta em <em>Componentes Connect</em>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'active', type: 'number', default: '-1', description: 'Índice do último item ativo.' },
            { name: 'color', type: 'MantineColor', default: "'navy'", description: 'Cor dos itens ativos.' },
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
          dependa só da cor para indicar falhas: use ícone e texto (“Primeira data recusada”).
        </P>
      </Section>
    </DocPage>
  );
}
