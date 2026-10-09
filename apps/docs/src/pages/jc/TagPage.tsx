import { Tag } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function TagPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="Tag"
      source="jc"
      sourcePath="packages/ui/src/components/Tag"
      description="Selo de status com os tons semânticos do ds.css (ds-tag-*). É um preset de Badge: tom em vez de cor, ícone padrão opcional."
      importCode={`import { Tag } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Tag}
          name="Tag"
          controls={[
            { prop: 'tone', type: 'select', data: ['primary', 'success', 'warn', 'error', 'neutral'], initialValue: 'primary' },
            { prop: 'variant', type: 'segmented', data: ['light', 'filled', 'outline', 'dot'], initialValue: 'light' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'withIcon', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Lançamento' },
          ]}
        />
      </Section>

      <Section title="Tons">
        <P>
          A linha de tags da marca. <code>withIcon</code> adiciona o ícone padrão do tom: ✓ success, ⚠ warn, ✕ error e ⓘ primary
          (neutral não tem ícone).
        </P>
        <Demo id="tag/tones" />
        <PropsTable
          rows={[
            { name: 'primary', type: 'horizon', default: 'padrão', description: 'Informação, destaque neutro-positivo.' },
            { name: 'success', type: 'evergreen', description: 'Concluído, disponível, aprovado.' },
            { name: 'warn', type: 'electric', description: 'Atenção, pendente, estoque baixo.' },
            { name: 'error', type: 'danger', description: 'Erro, cancelado, esgotado. Também usado no selo de desconto.' },
            { name: 'neutral', type: 'obsidian', description: 'Categorias e rótulos sem semântica de status.' },
          ]}
        />
      </Section>

      <Section title="Variantes">
        <P><code>light</code> é o selo suave padrão do DS. Use <code>filled</code> sobre imagens, <code>outline</code> em listas densas e <code>dot</code> para status em tabelas.</P>
        <Demo id="tag/variants" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="tag/sizes" />
      </Section>

      <Section title="Ícone customizado">
        <P>
          Passe qualquer nó em <OnlyFor framework="react"><code>leftSection</code></OnlyFor>
          <OnlyFor framework="vue">no slot <code>#leftSection</code></OnlyFor> para substituir o ícone padrão.
        </P>
        <Demo id="tag/custom-icon" />
      </Section>

      <Section title="Status em tabela">
        <Demo id="tag/order-status" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'tone', type: "'primary' | 'success' | 'warn' | 'error' | 'neutral'", default: "'primary'", description: 'Tom semântico (ds-tag-*).' },
            { name: 'variant', type: "'light' | 'filled' | 'outline' | 'dot'", default: "'light'", description: 'Estilo do selo.' },
            { name: 'withIcon', type: 'boolean', default: 'false', description: 'Mostra o ícone padrão do tom. Ignorado se leftSection for passado.' },
            { name: 'leftSection', type: 'ReactNode', vueType: 'MantineNode | slot #leftSection', description: 'Ícone/conteúdo à esquerda (substitui o ícone padrão).' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'Tamanho do Badge.' },
            { name: '...BadgeProps', type: 'BadgeProps', description: 'Demais props do Badge (radius, rightSection, fullWidth…), exceto color e variant.' },
          ]}
        />
        <P>Styles API: a do <code>Badge</code> do Mantine (<code>root · section · label</code>). A tag recebe <code>data-tone</code> com o tom.</P>
      </Section>
    </DocPage>
  );
}
