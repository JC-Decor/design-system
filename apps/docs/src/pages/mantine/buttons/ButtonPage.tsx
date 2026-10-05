import { Button } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function ButtonPage() {
  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="Button"
      source="mantine"
      mantineName="button"
      description="Botões da marca: primário azul Horizon, secundário com contorno, destaque Electric e ghost."
      importCode={`import { Button } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Button}
          name="Button"
          controls={[
            { prop: 'variant', type: 'select', data: ['filled', 'outline', 'accent', 'subtle', 'light', 'default', 'transparent'], initialValue: 'filled' },
            { prop: 'color', type: 'color', initialValue: 'horizon' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
            { prop: 'loading', type: 'boolean', initialValue: false },
            { prop: 'fullWidth', type: 'boolean', initialValue: false },
            { prop: 'children', type: 'string', initialValue: 'Ação primária' },
          ]}
        />
      </Section>

      <Section title="Variantes da marca">
        <P>
          As variantes do ds.css mapeiam para variantes do Mantine: <code>filled</code> = primária, <code>outline</code> = secundária,{' '}
          <code>accent</code> = destaque (nova) e <code>subtle</code> = ghost.
        </P>
        <Demo id="button/variants" />
        <PropsTable
          rows={[
            { name: 'filled', type: 'ds-btn-primary', default: 'padrão', description: 'Fundo Horizon, texto branco; hover Horizon 700.' },
            { name: 'outline', type: 'ds-btn-secondary', description: 'Contorno e texto primários; hover com fundo primary-soft.' },
            { name: 'accent', type: 'ds-btn-accent', description: 'Fundo Electric, texto Obsidian. Use para CTAs promocionais.' },
            { name: 'subtle', type: 'ds-btn-ghost', description: 'Sem fundo; texto-2 e hover em surface-2. Ações terciárias.' },
          ]}
        />
      </Section>

      <Section title="Tamanhos">
        <P>Alturas em passos de 8px: <code>md</code> 40px (padrão, 14px SemiBold), <code>lg</code> 48px para mobile e checkout, <code>sm</code> 32px para áreas densas.</P>
        <Demo id="button/sizes" />
      </Section>

      <Section title="Ícones e loading">
        <Demo id="button/sections" />
      </Section>

      <Section title="Cores">
        <P>Qualquer cor do tema pode ser usada; as variantes <code>light</code> usam as cores semânticas das tags.</P>
        <Demo id="button/colors" />
      </Section>

      <Section title="Largura total">
        <Demo id="button/full-width" />
      </Section>

      <Section title="No tema JC">
        <P>
          Alturas e paddings por tamanho em passos de 8px (md = 40px), peso 600, transição suave de cor/borda e estado desabilitado com
          opacidade 45% mantendo as cores da variante (em vez do cinza padrão do Mantine). As cores vêm do <code>variantColorResolver</code>{' '}
          da marca.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'filled' | 'outline' | 'accent' | 'subtle' | 'light' | …", default: "'filled'", description: 'Hierarquia visual do botão.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor do tema.' },
            { name: 'size', type: 'MantineSize', default: "'md'", description: 'xs 28 · sm 32 · md 40 · lg 48 · xl 56px.' },
            { name: 'leftSection / rightSection', type: 'ReactNode', vueType: 'string | slot #leftSection / #rightSection', description: 'Ícones antes/depois do texto.' },
            { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra Loader e bloqueia cliques.' },
            { name: 'fullWidth', type: 'boolean', default: 'false', description: 'Ocupa toda a largura.' },
            { name: 'component', type: 'ElementType', vueType: 'string | Component', description: 'Renderiza como link (a, Link do router…).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>Use no máximo um botão primário por bloco. Prefira <code>accent</code> apenas em campanhas e banners; em painéis internos use primário/secundário.</P>
      </Section>
    </DocPage>
  );
}
