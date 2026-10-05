import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function FloatingWindowPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="FloatingWindow"
      source="mantine"
      mantineName="floating-window"
      description="Janela arrastável (e opcionalmente redimensionável) que flutua sobre a página sem bloqueá-la. Novo no Mantine 9."
      importCode={`import { FloatingWindow } from '@jcdecor/ui';`}
    >
      <Section title="Calculadora arrastável">
        <P>
          <code>dragHandleSelector</code> restringe o arraste ao cabeçalho e <code>excludeDragHandleSelector</code> mantém o botão fechar clicável.
          Por padrão a janela fica presa à viewport (<code>constrainToViewport</code>).
        </P>
        <Demo id="floating-window/calculator" />
      </Section>

      <Section title="Redimensionável">
        <P>
          Defina <code>dimensions</code> com limites e inclua <code>{vue ? 'FloatingWindowResizeHandle' : 'FloatingWindow.ResizeHandle'}</code> — ele não tem estilo, então posicione-o no canto.
          O handle também responde às setas do teclado.
        </P>
        <Demo id="floating-window/notes" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius / shadow', type: 'defaultProps', default: 'md · lg', description: 'Raio de card e --ds-shadow-lg.' },
            { name: 'withBorder', type: 'defaultProps', default: 'true', description: 'Borda --ds-border-soft.' },
            { name: 'root', type: 'classNames', description: 'Fundo --ds-surface — mesma superfície de Dialog e ActionBar.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'initialPosition', type: '{ top?, left?, right?, bottom? }', description: 'Posição inicial na viewport.' },
            { name: 'dragHandleSelector', type: 'string', description: 'Seletor da área de arraste (padrão: a janela toda).' },
            { name: 'excludeDragHandleSelector', type: 'string', description: 'Elementos dentro do handle que não iniciam arraste.' },
            { name: 'constrainToViewport', type: 'boolean', default: 'true', description: 'Impede que a janela saia da tela.' },
            { name: 'dimensions', type: 'FloatingWindowDimensions', description: 'Tamanho inicial e limites para o ResizeHandle.' },
            { name: 'axis', type: "'x' | 'y'", description: 'Restringe o arraste a um eixo.' },
            { name: 'withinPortal', type: 'boolean', default: 'true', description: 'Renderiza no body.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use para ferramentas auxiliares do painel (calculadora, anotações, chat de atendimento) que precisam ficar visíveis enquanto o usuário trabalha.
          Sempre ofereça um botão fechar acessível e não abra mais de uma janela ao mesmo tempo. No mobile, prefira Drawer em <code>bottom</code>.
        </P>
      </Section>
    </DocPage>
  );
}
