import { Avatar } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function AvatarPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="Avatar"
      source="mantine"
      mantineName="avatar"
      description="Foto ou iniciais de clientes, atendentes e vendedores. Circular e na cor Horizon por padrão."
      importCode={`import { Avatar } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Avatar}
          name="Avatar"
          controls={[
            { prop: 'name', type: 'string', initialValue: 'Ana Ribeiro' },
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'default', 'transparent', 'white'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
          ]}
        />
      </Section>

      <Section title="Variantes e conteúdo">
        <P>
          Com <code>name</code>, as iniciais são geradas automaticamente. Sem nome nem imagem, passe um ícone como filho. A variante{' '}
          <code>light</code> usa as cores semânticas das tags da marca.
        </P>
        <Demo id="avatar/variants" />
      </Section>

      <Section title="Imagem com fallback">
        <P>
          Se <code>src</code> for nulo ou a imagem falhar, o Avatar mostra as iniciais de <code>name</code> (ou o ícone padrão). Sempre
          informe <code>alt</code>.
        </P>
        <Demo id="avatar/image" />
      </Section>

      <Section title="Cor por iniciais">
        <P>
          <code>color="initials"</code> escolhe uma cor estável a partir do nome — a mesma pessoa sempre tem a mesma cor em listas de
          conversas e pedidos.
        </P>
        <Demo id="avatar/initials" />
      </Section>

      <Section title="Grupo de atendentes">
        <P>
          <code>Avatar.Group</code> sobrepõe os avatares; combine com <code>Tooltip.Group</code> para mostrar o nome de cada atendente.
        </P>
        <Demo id="avatar/group" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="avatar/sizes" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'color', type: 'defaultProps', default: "'horizon'", description: 'Cor primária da marca.' },
            { name: 'radius', type: 'defaultProps', default: "'xl'", description: 'Circular. Use radius="sm" para logos de marcas e lojas.' },
            { name: 'Avatar.Group', type: 'classNames', description: 'O anel entre avatares usa --ds-surface, para combinar com cards e painéis (em vez do fundo da página).' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'src', type: 'string | null', description: 'URL da imagem.' },
            { name: 'name', type: 'string', description: 'Nome usado para gerar iniciais (e a cor com color="initials").' },
            { name: 'alt', type: 'string', description: 'Texto alternativo da imagem.' },
            { name: 'variant', type: "'light' | 'filled' | 'outline' | 'default' | 'transparent' | 'white'", default: "'light'", description: 'Estilo do avatar sem imagem.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Tamanho (md = 38px).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Avatares identificam pessoas — não use para produtos (prefira <code>Image</code>). Em grupos, mostre no máximo 4–5 avatares e
          resuma o restante (“+5”). Avatares decorativos ao lado do nome podem ter <code>alt=""</code>.
        </P>
      </Section>
    </DocPage>
  );
}
