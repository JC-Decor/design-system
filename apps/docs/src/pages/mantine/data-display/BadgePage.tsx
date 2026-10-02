import { Anchor, Badge } from '@jcdecor/ui';
import { Link } from 'react-router-dom';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function BadgePage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Badge"
      source="mantine"
      mantineName="badge"
      description="Selos compactos para status, categorias e contagens. Por padrão usam a variante light com as cores semânticas das tags da marca."
      importCode={`import { Badge } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Badge}
          name="Badge"
          controls={[
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'dot', 'default', 'transparent'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
            { prop: 'children', type: 'string', initialValue: 'Em estoque' },
          ]}
        />
      </Section>

      <Section title="Cores semânticas">
        <P>
          Na variante <code>light</code>, cada família de cor usa os tokens <code>--ds-tag-*</code>: horizon = info, evergreen = sucesso, electric =
          atenção (texto marrom para contraste), danger = erro e obsidian = neutro. Os tons já vêm corrigidos para o tema escuro.
        </P>
        <Demo id="badge/colors" />
        <PropsTable
          rows={[
            { name: 'horizon', type: '--ds-tag-primary-*', default: 'padrão', description: 'Informativo, novidades, filtros ativos.' },
            { name: 'evergreen', type: '--ds-tag-success-*', description: 'Pago, entregue, em estoque.' },
            { name: 'electric', type: '--ds-tag-warn-*', description: 'Pendente, últimas unidades, promoções.' },
            { name: 'danger', type: '--ds-tag-error-*', description: 'Cancelado, esgotado, falha.' },
            { name: 'obsidian', type: '--ds-tag-neutral-*', description: 'Rascunho, arquivado, metadados.' },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <Demo id="badge/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>
          O tamanho <code>md</code> foi ajustado ao <code>.ds-tag</code>: 24px de altura, 12px de fonte e 8px de padding horizontal.
        </P>
        <Demo id="badge/sizes" />
      </Section>

      <Section title="Com ícones">
        <Demo id="badge/sections" />
      </Section>

      <Section title="Status de pedidos">
        <Demo id="badge/order-status" />
      </Section>

      <Section title="O que o DS customizou">
        <P>
          <code>variant="light"</code> e <code>radius="xl"</code> (pílula) são os padrões; o texto não é mais caixa-alta (<code>text-transform: none</code>),
          com peso 600 e sem espaçamento extra entre letras. Para selos com ícone de status prontos, veja também o componente{' '}
          <Anchor component={Link} to="/componentes/tag">
            Tag
          </Anchor>
          .
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Badges não são clicáveis — para filtros use <code>Chip</code>. Mantenha o texto curto (1–2 palavras) e não dependa só da cor: o rótulo deve
          comunicar o status sozinho.
        </P>
      </Section>
    </DocPage>
  );
}
