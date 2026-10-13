import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function HoverCardPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="HoverCard"
      source="mantine"
      mantineName="hover-card"
      description="Cartão de prévia que abre ao passar o mouse sobre um link — resumo de um colaborador, gestor ou treinamento sem sair da tela."
      importCode={`import { HoverCard } from '@jcdecor/connect-ui';`}
    >
      <Section title="Prévia do colaborador">
        <P>
          Passe o mouse sobre o nome. <code>openDelay</code> evita aberturas acidentais ao mover o cursor pela página.
        </P>
        <Demo id="hover-card/employee" />
      </Section>

      <Section title="Prévia em tabela">
        <P>Em tabelas de treinamentos, mostre carga horária, obrigatoriedade e o progresso da equipe sem abrir a página do curso.</P>
        <Demo id="hover-card/training" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'shadow / radius', type: 'defaultProps', default: 'md · md', description: '--ds-shadow-md (shadow-2) e raio 14px.' },
            { name: 'dropdown', type: 'classNames', description: 'Mesma superfície do Popover: --ds-surface com borda e seta --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'openDelay', type: 'number', default: '0', description: 'Atraso em ms antes de abrir (recomendado 150–300).' },
            { name: 'closeDelay', type: 'number', default: '150', description: 'Atraso para fechar; permite levar o mouse até o cartão.' },
            { name: 'width', type: "number | 'target'", description: 'Largura do cartão.' },
            { name: 'position', type: 'FloatingPosition', default: 'bottom', description: 'Posição em relação ao alvo.' },
            { name: 'withArrow', type: 'boolean', default: 'false', description: 'Mostra a seta apontando para o alvo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          HoverCard não existe no toque: o conteúdo deve ser só complementar, e o link precisa levar à página completa. Não coloque ações essenciais
          dentro dele — use Popover quando o conteúdo for interativo.
        </P>
      </Section>
    </DocPage>
  );
}
