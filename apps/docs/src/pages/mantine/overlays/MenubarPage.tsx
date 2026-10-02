import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function MenubarPage() {
  return (
    <DocPage
      kicker="Mantine · Overlays"
      title="Menubar"
      source="mantine"
      mantineName="menubar"
      description="Barra de menus horizontal no estilo de aplicativo desktop (Arquivo, Editar, Exibir). Novo no Mantine 9, com navegação completa por setas."
      importCode={`import { Menu, Menubar } from '@jcdecor/ui';`}
    >
      <Section title="Painel de edição">
        <P>
          Cada <code>Menubar.Menu</code> aceita as props do <code>Menu</code>. Com o padrão <code>trigger="click"</code>, o primeiro clique abre um
          menu e, a partir daí, passar o mouse troca entre eles — como em apps desktop. Dentro do dropdown use os itens do <code>Menu</code>, incluindo
          checkbox e radio.
        </P>
        <Demo id="menubar/panel" />
      </Section>

      <Section title="Abrir no hover">
        <P>
          <code>trigger="hover"</code> abre ao passar o mouse; útil em navegações densas do painel administrativo.
        </P>
        <Demo id="menubar/hover" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'target', type: 'classNames', description: 'Texto --ds-text (500), raio sm; hover e aberto em --ds-surface-2; aberto com texto primário.' },
            { name: 'dropdown', type: 'herdado do Menu', description: 'Mesma superfície do Menu: --ds-surface, --ds-border-soft, --ds-shadow-md.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'trigger', type: "'click' | 'hover'", default: 'click', description: 'Como o primeiro menu é aberto.' },
            { name: 'openIndex', type: 'number | null', description: 'Índice do menu aberto (controlado).' },
            { name: 'onOpenChange', type: '(index: number | null) => void', description: 'Chamado quando o menu aberto muda.' },
            { name: 'loop', type: 'boolean', default: 'true', description: 'Setas ←/→ voltam do último para o primeiro menu.' },
            { name: 'position', type: 'FloatingPosition', default: 'bottom-start', description: 'Posição dos dropdowns.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Reserve a Menubar para ferramentas do painel (editor de catálogo, relatórios) — no site público use a navegação do cabeçalho. Dê um{' '}
          <code>aria-label</code> à barra, mostre atalhos com <code>Kbd</code> e desabilite (não esconda) menus indisponíveis. <kbd>←</kbd>/<kbd>→</kbd>{' '}
          trocam de menu, <kbd>↓</kbd> entra no dropdown e <kbd>Esc</kbd> fecha.
        </P>
      </Section>
    </DocPage>
  );
}
