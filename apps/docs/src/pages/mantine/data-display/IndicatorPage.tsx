import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function IndicatorPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Indicator"
      source="mantine"
      mantineName="indicator"
      description="Ponto ou contador sobre outro elemento — itens no carrinho, notificações não lidas e status online de atendentes."
      importCode={`import { Indicator } from '@jcdecor/ui';`}
    >
      <Section title="Contador do carrinho">
        <P>
          O tema usa <code>danger</code> como cor padrão (convenção de contadores). Com <code>withBorder</code> o anel acompanha a superfície
          onde o ícone está. <code>processing</code> anima o ponto para chamar atenção a algo novo.
        </P>
        <Demo id="indicator/cart" />
      </Section>

      <Section title="Status online">
        <P>
          Combine com <code>Avatar</code> usando <code>position="bottom-end"</code>. Use <code>disabled</code> para esconder o indicador sem
          desmontar o componente e sempre mostre o status em texto também.
        </P>
        <Demo id="indicator/online" />
      </Section>

      <Section title="Posições">
        <Demo id="indicator/positions" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'color', type: 'defaultProps', default: "'danger'", description: 'Vermelho da marca para contadores; troque para evergreen (online) ou horizon.' },
            { name: 'indicator', type: 'classNames', description: 'Peso 600, números tabulares e anel (withBorder) em --ds-surface.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', vueName: 'label / #label', type: 'React.ReactNode', vueType: 'MantineNode | slot', description: 'Conteúdo do indicador (ex.: contagem).' },
            { name: 'size', type: 'number | string', default: '10', description: 'Altura (e largura mínima) do indicador.' },
            { name: 'position', type: "'top-end' | 'bottom-end' | 'middle-start' | …", default: "'top-end'", description: 'Posição relativa ao filho.' },
            { name: 'offset', type: 'number', default: '0', description: 'Desloca o indicador para dentro (útil em avatares circulares).' },
            { name: 'withBorder', type: 'boolean', default: 'false', description: 'Anel de 2px na cor da superfície.' },
            { name: 'processing', type: 'boolean', default: 'false', description: 'Animação de pulso.' },
            { name: 'disabled', type: 'boolean', default: 'false', description: 'Esconde o indicador.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Limite contagens a “99+”. O indicador é visual: inclua a informação no <code>aria-label</code> do botão (“Carrinho, 3 itens”). Evite
          mais de um indicador animado (<code>processing</code>) por tela.
        </P>
      </Section>
    </DocPage>
  );
}
