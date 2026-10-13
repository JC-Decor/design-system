import { Avatar } from '@jcdecor/connect-ui';
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
      description="Foto ou iniciais de colaboradores, gestores e equipes. No Connect é uma pílula no tom blue por padrão."
      importCode={`import { Avatar } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Avatar}
          name="Avatar"
          controls={[
            { prop: 'name', type: 'string', initialValue: 'Ana Ribeiro' },
            { prop: 'variant', type: 'select', data: ['light', 'filled', 'outline', 'default', 'transparent', 'white'], initialValue: 'light' },
            { prop: 'color', type: 'color', initialValue: 'blue' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'xl' },
          ]}
        />
      </Section>

      <Section title="Tons e conteúdo">
        <P>
          Com <code>name</code>, as iniciais são geradas automaticamente. Sem nome nem foto, passe um ícone como filho. Na variante{' '}
          <code>light</code> cada cor usa o tom do Connect (fundo <code>bg</code> + texto <code>fg</code>): blue, lavender, green, yellow,
          coral e ink — os mesmos dos avatares do painel.
        </P>
        <Demo id="avatar/variants" />
      </Section>

      <Section title="Foto com fallback">
        <P>
          Se <code>src</code> for nulo ou a foto falhar, o Avatar mostra as iniciais de <code>name</code> (ou o ícone padrão). Sempre
          informe <code>alt</code> com o nome da pessoa.
        </P>
        <Demo id="avatar/image" />
      </Section>

      <Section title="Cor por iniciais">
        <P>
          <code>color="initials"</code> escolhe uma cor estável a partir do nome — a mesma pessoa sempre tem a mesma cor no organograma, nas
          listas de equipe e nos feedbacks 1:1.
        </P>
        <Demo id="avatar/initials" />
      </Section>

      <Section title="Grupo de pessoas">
        <P>
          <code>Avatar.Group</code> sobrepõe os avatares; combine com <code>Tooltip.Group</code> para mostrar o nome de cada pessoa da
          equipe.
        </P>
        <Demo id="avatar/group" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="avatar/sizes" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'color', type: 'defaultProps', default: "'blue'", description: 'Tom blue do Connect (fundo blue-soft, iniciais em blue escuro).' },
            { name: 'radius', type: 'defaultProps', default: "'xl'", description: 'Pílula (999px). Use radius="md" para áreas, unidades ou sistemas.' },
            { name: 'Avatar.Group', type: 'classNames', description: 'O anel entre avatares usa --ds-surface, para combinar com cards e painéis (em vez do fundo da página).' },
          ]}
        />
        <P>
          Para o avatar de pessoa com nome, cargo e status ao lado, use a versão pronta em <em>Componentes Connect</em>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'src', type: 'string | null', description: 'URL da foto.' },
            { name: 'name', type: 'string', description: 'Nome usado para gerar iniciais (e a cor com color="initials").' },
            { name: 'alt', type: 'string', description: 'Texto alternativo da foto.' },
            { name: 'variant', type: "'light' | 'filled' | 'outline' | 'default' | 'transparent' | 'white'", default: "'light'", description: 'Estilo do avatar sem foto.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Tamanho (md = 38px).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Avatares identificam pessoas — para documentos ou comunicados prefira <code>ThemeIcon</code> ou <code>Image</code>. Em grupos, mostre
          no máximo 4–5 avatares e resuma o restante (“+5”). Avatares decorativos ao lado do nome já escrito podem ter <code>alt=""</code>.
        </P>
      </Section>
    </DocPage>
  );
}
