import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function HeroPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="Hero & HeroArt"
      source="connect"
      sourcePath="packages/connect-ui/src/components/Hero"
      description="Hero do painel: saudação, subtítulo, CTAs e meta à esquerda; à direita a arte animada do Connect (manchas, avatares e etiquetas flutuando) ou a sua ilustração."
      importCode={`import { Hero, HeroArt } from '@jcdecor/connect-ui';`}
    >
      <Section title="Uso">
        <Demo id="cn-hero/usage" />
      </Section>
      <Section title="Compacto com ilustração">
        <P><code>compact</code> reduz o padding, o título (30px) e a altura da arte. <code>illustration</code> troca a arte padrão pela sua imagem; <code>art</code> aceita qualquer nó.</P>
        <Demo id="cn-hero/illustration" />
      </Section>
      <Section title="HeroArt">
        <P>A arte é decorativa (<code>aria-hidden</code>), usa as variáveis de tom (funciona no escuro) e para de flutuar com <code>prefers-reduced-motion</code>.</P>
        <Demo id="cn-hero/art" />
      </Section>
      <Section title="Props">
        <P>Hero:</P>
        <PropsTable
          rows={[
            { name: 'title', type: 'ReactNode', required: true, description: 'Título 38px.' },
            { name: 'eyebrow', type: 'ReactNode', description: 'Selo com ✦.' },
            { name: 'sub', type: 'ReactNode', description: 'Subtítulo.' },
            { name: 'ctaPrimary / onCtaPrimary', type: 'string / () => void', description: 'Botão principal.' },
            { name: 'ctaSecondary / onCtaSecondary', type: 'string / () => void', description: 'Botão ghost.' },
            { name: 'primary', type: 'string', description: 'Cor do botão principal (cor Mantine ou CSS).' },
            { name: 'footMeta', type: 'ReactNode', description: 'Rodapé tracejado.' },
            { name: 'compact', type: 'boolean', description: 'Versão baixa.' },
            { name: 'illustration / illustrationAlt', type: 'IllustrationName | string / string', description: 'Imagem à direita: nome do catálogo ou URL.' },
            { name: 'art', type: 'ReactNode', description: 'Arte própria.' },
          ]}
        />
        <P>HeroArt:</P>
        <PropsTable
          rows={[
            { name: 'people', type: '{ seed; tone; src?; name? }[]', description: 'Até 5 avatares.' },
            { name: 'tags', type: '{ label; tone }[]', description: 'Até 2 etiquetas.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props de texto. Os CTAs ganharam <code>onCtaPrimary</code>/<code>onCtaSecondary</code> (antes não tinham ação).</li>
          <li><code>illustration</code> aceita o nome do catálogo (como antes) ou uma URL; <code>slotId</code>/<code>useImage</code> saíram (use <code>art</code>).</li>
          <li>Avatares e etiquetas do HeroArt agora são configuráveis por <code>people</code>/<code>tags</code>.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
