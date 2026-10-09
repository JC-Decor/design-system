import { PromoBanner } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { Configurator } from '../../kit/Configurator';
import { PropsTable } from '../../kit/PropsTable';
import { OnlyFor } from '../../kit/framework';

export default function PromoBannerPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="PromoBanner"
      source="jc"
      sourcePath="packages/ui/src/components/PromoBanner"
      description="Faixa promocional do topo do site e de campanhas: texto centralizado, destaque de cupom e botão de fechar opcional."
      importCode={`import { PromoBanner } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PromoBanner}
          name="PromoBanner"
          controls={[
            { prop: 'variant', type: 'segmented', data: ['horizon', 'electric', 'obsidian'], initialValue: 'horizon' },
            { prop: 'children', type: 'string', initialValue: '5% OFF na 1ª compra' },
            { prop: 'highlight', type: 'string', initialValue: 'cupom: JCMAIO' },
            { prop: 'withCloseButton', type: 'boolean', initialValue: false },
          ]}
          previewWidth={560}
        />
      </Section>

      <Section title="Full-bleed">
        <P>Por padrão o banner ocupa toda a largura, sem raio — o uso típico acima do <code>TopNav</code> ou do header da loja.</P>
        <Demo id="promo-banner/full-bleed" />
      </Section>

      <Section title="Variantes">
        <P>
          <code>horizon</code> (azul com destaque Electric), <code>electric</code> (amarelo com destaque Horizon) e <code>obsidian</code>.
          Passe <code>radius</code> para usar o banner dentro de páginas e cards.
        </P>
        <Demo id="promo-banner/variants" />
      </Section>

      <Section title="Ícone e destaque inline">
        <P>
          <code>highlight</code> é renderizado ao final do texto. Para destacar no meio da frase, use <code>&lt;strong&gt;</code> dentro de{' '}
          <code>children</code> — recebe a mesma cor.
        </P>
        <Demo id="promo-banner/icon" />
      </Section>

      <Section title="Botão de fechar">
        <P>
          <OnlyFor framework="react">
            Com <code>withCloseButton</code> o banner se esconde sozinho e chama <code>onClose</code>. O estado é interno: para lembrar a
            escolha entre visitas, salve em <code>onClose</code> (ex.: localStorage) e não renderize o banner.
          </OnlyFor>
          <OnlyFor framework="vue">
            Com <code>with-close-button</code> o banner se esconde sozinho e emite <code>@close</code>. Para controlar a visibilidade (ou
            mostrar de novo), use <code>v-model:opened</code>; para lembrar a escolha entre visitas, salve no <code>@close</code> (ex.:
            localStorage).
          </OnlyFor>
        </P>
        <Demo id="promo-banner/close" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'variant', type: "'horizon' | 'electric' | 'obsidian'", default: "'horizon'", description: 'Esquema de cores.' },
            { name: 'children', vueName: '#default', type: 'ReactNode', vueType: 'slot', description: 'Texto do banner. <strong> recebe a cor de destaque.' },
            { name: 'highlight', type: 'ReactNode', vueType: 'MantineNode | slot #highlight', description: 'Trecho destacado ao final (ex.: cupom).' },
            { name: 'icon', type: 'ReactNode', vueType: 'MantineNode | slot #icon', description: 'Ícone à esquerda do texto.' },
            { name: 'withCloseButton', type: 'boolean', default: 'false', description: 'Exibe o botão de fechar.' },
            { name: 'onClose', vueName: '@close', type: '() => void', vueType: '() => void', description: 'Chamado ao fechar o banner.', vueDescription: 'Emitido ao clicar no botão de fechar.' },
            { name: 'v-model:opened', type: 'boolean', only: 'vue', description: <>Visibilidade controlada (opcional). Ao fechar, emite <code>update:opened</code> com <code>false</code>; volte para <code>true</code> para mostrar de novo.</> },
            { name: 'radius', type: 'MantineRadius', description: 'Arredonda os cantos. Sem valor = full-bleed.' },
          ]}
        />
        <P>
          Styles API: <code>root · content · highlight · close</code>. Variáveis: <code>--banner-bg</code>, <code>--banner-color</code>,{' '}
          <code>--banner-highlight</code>, <code>--banner-radius</code>.
        </P>
      </Section>
    </DocPage>
  );
}
