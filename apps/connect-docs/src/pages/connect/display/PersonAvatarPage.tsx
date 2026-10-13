import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { Configurator } from '../../../kit/Configurator';
import { PersonAvatar } from '@jcdecor/connect-ui';

export default function PersonAvatarPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="PersonAvatar & AvatarStack"
      source="connect"
      sourcePath="packages/connect-ui/src/components/PersonAvatar"
      description="Avatar do Connect: iniciais sobre um gradiente do tom (ou foto, com volta automática para as iniciais), anel opcional e pilha com contador +N."
      importCode={`import { PersonAvatar, AvatarStack } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PersonAvatar}
          name="PersonAvatar"
          controls={[
            { prop: 'seed', type: 'string', initialValue: 'AS' },
            { prop: 'tone', type: 'color', data: ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'], initialValue: 'blue' },
            { prop: 'size', type: 'number', initialValue: 48, min: 20, max: 96, step: 2 },
            { prop: 'ring', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>
      <Section title="Tons">
        <P>Seis tons do Connect. O gradiente vai do fundo do tom para o tom suave; as iniciais usam o texto do tom. No tema escuro os tons trocam sozinhos.</P>
        <Demo id="cn-person-avatar/tones" />
      </Section>
      <Section title="Tamanhos">
        <P><code>size</code> em px (padrão 36). A fonte das iniciais acompanha: 36% do diâmetro, no mínimo 10px.</P>
        <Demo id="cn-person-avatar/sizes" />
      </Section>
      <Section title="Anel">
        <P><code>ring</code> = <code>true</code> desenha o anel duplo (superfície + navy suave) usado no Hero; <code>'sm'</code> é o anel fino da superfície, usado nas pilhas.</P>
        <Demo id="cn-person-avatar/ring" />
      </Section>
      <Section title="Foto">
        <P>Com <code>src</code> mostra a foto; se a imagem falhar, volta para as iniciais.</P>
        <Demo id="cn-person-avatar/photo" />
      </Section>
      <Section title="AvatarStack">
        <P>Pilha sobreposta (−6px) com <code>+N</code> para quem passou de <code>max</code>. O <code>name</code> de cada pessoa vira texto alternativo e tooltip nativo.</P>
        <Demo id="cn-person-avatar/stack" />
      </Section>
      <Section title="Props">
        <P>PersonAvatar (aceita também as props do Avatar do Mantine):</P>
        <PropsTable
          rows={[
            { name: 'seed', type: 'string', default: "'A'", description: 'Iniciais exibidas sem foto.' },
            { name: 'tone', type: 'ToneName', default: "'blue'", description: 'blue · lavender · green · yellow · coral · ink.' },
            { name: 'size', type: 'number', default: '36', description: 'Diâmetro em px.' },
            { name: 'ring', type: "boolean | 'sm'", default: 'false', description: 'Anel duplo (true) ou fino (sm).' },
            { name: 'src', type: 'string', description: 'Foto; falhou → iniciais.' },
            { name: 'alt', type: 'string', default: 'seed', description: 'Texto alternativo da foto.' },
          ]}
        />
        <P>AvatarStack:</P>
        <PropsTable
          rows={[
            { name: 'people', type: '{ seed; tone?; src?; name? }[]', required: true, description: 'Pessoas da pilha.' },
            { name: 'size', type: 'number', default: '28', description: 'Diâmetro de cada avatar.' },
            { name: 'max', type: 'number', default: '5', description: 'Quantos mostrar antes do +N.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li><code>&lt;Avatar seed tone ring size src /&gt;</code> → <code>&lt;PersonAvatar /&gt;</code> com as mesmas props (o nome <code>Avatar</code> é do Mantine).</li>
          <li><code>&lt;AvatarGroup people size max /&gt;</code> → <code>&lt;AvatarStack /&gt;</code>; <code>tone</code> agora é opcional e cada pessoa aceita <code>src</code> e <code>name</code>.</li>
          <li><code>resolveAvatarSrc</code> fica no app: passe a URL já resolvida em <code>src</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
