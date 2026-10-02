import { NavLink } from '@jcdecor/ui';
import { IconShoppingBag } from '@tabler/icons-react';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function NavLinkPage() {
  return (
    <DocPage
      kicker="Mantine · Navegação"
      title="NavLink"
      source="mantine"
      mantineName="nav-link"
      description="Item de navegação para menus laterais do painel e da área do cliente, com ícone, descrição, estado ativo e subníveis."
      importCode={`import { NavLink } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={NavLink}
          name="NavLink"
          previewWidth={280}
          baseProps={{ href: '#', leftSection: <IconShoppingBag size={18} />, onClick: (event: React.MouseEvent) => event.preventDefault() }}
          codeProps={{ leftSection: '<IconShoppingBag size={18} />' }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Pedidos' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'active', type: 'boolean', initialValue: true },
            { prop: 'variant', type: 'segmented', data: ['light', 'filled', 'subtle'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Menu lateral">
        <P>
          Controle o item ativo com <code>active</code>. Itens com filhos viram grupos expansíveis; ajuste o recuo com <code>childrenOffset</code>.
          Com React Router, use <code>component={'{Link}'}</code> e <code>to</code>.
        </P>
        <Demo id="nav-link/sidebar" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>light</code> (padrão) usa o fundo suave da cor; <code>filled</code> fica com fundo cheio e <code>subtle</code> só destaca no hover.
        </P>
        <Demo id="nav-link/variants" />
      </Section>

      <Section title="Descrição e desabilitado">
        <Demo id="nav-link/description" />
      </Section>

      <Section title="No tema JC">
        <P>
          Raio de 8px (<code>--ds-radius-sm</code>), rótulo em peso 500 e 600 quando ativo. O hover usa <code>--ds-surface-2</code>. A variante padrão
          passou a ser <code>light</code> explícita, então o item ativo usa as cores de tag da marca (<code>--ds-tag-primary-*</code>) — Horizon 50
          com texto Horizon 700 no claro, azul translúcido com Horizon 300 no escuro.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', description: 'Texto principal do item.' },
            { name: 'description', type: 'ReactNode', description: 'Linha secundária abaixo do rótulo.' },
            { name: 'leftSection / rightSection', type: 'ReactNode', description: 'Ícone à esquerda; contador ou seta à direita.' },
            { name: 'active', type: 'boolean', default: 'false', description: 'Marca o item como página atual.' },
            { name: 'variant', type: "'light' | 'filled' | 'subtle'", default: "'light'", description: 'Estilo do estado ativo.' },
            { name: 'children', type: 'ReactNode', description: 'NavLinks filhos (grupo expansível).' },
            { name: 'defaultOpened / opened', type: 'boolean', description: 'Estado do grupo (não controlado / controlado).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Agrupe no máximo dois níveis. Use ícones consistentes em todos os itens do mesmo nível ou em nenhum. Contadores (<code>Badge</code>) só
          para o que exige ação, como pedidos pendentes.
        </P>
      </Section>
    </DocPage>
  );
}
