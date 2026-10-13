import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { PropsTable } from '../../../kit/PropsTable';

const migrationCode = `// connect-jc (Radix)
import { DropdownMenu } from '@/components/ui/DropdownMenu';

// @jcdecor/connect-ui (Mantine Menu) — mesma API
import { DropdownMenu } from '@jcdecor/connect-ui';

<DropdownMenu
  align="end"
  trigger={<ActionIcon aria-label="Ações"><Icon name="dots-v" size={14} /></ActionIcon>}
  items={[
    { key: 'editar', label: 'Editar', icon: 'pen', onSelect: editar },
    { key: 'sep', type: 'separator' },
    { key: 'excluir', label: 'Excluir', icon: 'trash', tone: 'danger', onSelect: excluir },
  ]}
/>`;

export default function DropdownMenuPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="DropdownMenu"
      source="connect"
      sourcePath="packages/connect-ui/src/components/DropdownMenu"
      description="Menu de ações a partir de um botão (o ⋮ das linhas, o chip do usuário). Itens com ícone, separadores, rótulos de seção, itens desabilitados e destrutivos em coral."
      importCode={`import { DropdownMenu } from '@jcdecor/connect-ui';\nimport type { DropdownMenuEntry } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <P>
          Passe o gatilho em <code>trigger</code> (um elemento que aceite <code>ref</code>, como <code>Button</code> ou{' '}
          <code>ActionIcon</code>) e a lista em <code>items</code>. O ícone pode ser o nome de um ícone do Connect ou um nó React.
          Navegação por setas, Enter/Espaço para escolher e Esc devolve o foco ao gatilho.
        </P>
        <Demo id="cn-dropdown-menu/basic" />
      </Section>

      <Section title="Alinhamento e lado">
        <P>
          <code>align</code> alinha o menu ao início, centro ou fim do gatilho (padrão <code>end</code>); <code>side="top"</code> abre
          para cima. <code>sideOffset</code> controla a distância (6px).
        </P>
        <Demo id="cn-dropdown-menu/align" />
      </Section>

      <Section title="Entradas">
        <PropsTable
          rows={[
            { name: '{ key, label, onSelect }', type: 'DropdownMenuItem', description: 'Item clicável. Opcionais: icon (string | ReactNode), disabled, tone ("default" | "danger").' },
            { name: "{ key, type: 'separator' }", type: 'DropdownMenuSeparator', description: 'Linha divisória (.dd-sep).' },
            { name: "{ key, type: 'label', label }", type: 'DropdownMenuLabel', description: 'Rótulo de seção (novo — não existia no connect-jc).' },
          ]}
        />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'trigger', type: 'ReactElement', required: true, description: 'Elemento que abre o menu.' },
            { name: 'items', type: 'DropdownMenuEntry[]', required: true, description: 'Itens, separadores e rótulos.' },
            { name: 'align', type: "'start' | 'center' | 'end'", default: "'end'", description: 'Alinhamento em relação ao gatilho.' },
            { name: 'side', type: "'top' | 'bottom'", default: "'bottom'", description: 'Lado em que o menu abre.' },
            { name: 'sideOffset', type: 'number', default: '6', description: 'Distância do gatilho em px.' },
            { name: 'width', type: 'number | "target"', description: 'Largura do menu (mínimo 180px).' },
            { name: '...MenuProps', type: 'MenuProps', description: 'Demais props do Menu do Mantine (opened, onChange, withinPortal…).' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API do componente Radix: troque só o import. As classes <code>.dd-menu</code>/<code>.dd-item</code> deixam de existir —
          o visual vem do componente. Novidades: entradas <code>type: 'label'</code> e as props do <code>Menu</code> do Mantine.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
