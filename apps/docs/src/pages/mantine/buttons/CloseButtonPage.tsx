import { CloseButton } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { useFramework } from '../../../kit/framework';

export default function CloseButtonPage() {
  const vue = useFramework().framework === 'vue';

  return (
    <DocPage
      kicker="Mantine · Buttons"
      title="CloseButton"
      source="mantine"
      mantineName="close-button"
      description="Botão de fechar/limpar com ícone X. Usado em modais, avisos, notificações e campos com limpar."
      importCode={`import { CloseButton } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={CloseButton}
          name="CloseButton"
          baseProps={{ 'aria-label': 'Fechar' }}
          codeProps={{ 'aria-label': '"Fechar"' }}
          controls={[
            { prop: 'variant', type: 'segmented', data: ['subtle', 'transparent'], initialValue: 'subtle' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Variações">
        <P>Troque o ícone com <code>{vue ? '#icon' : 'icon'}</code>; <code>variant="transparent"</code> remove o fundo do hover.</P>
        <Demo id="close-button/basic" />
      </Section>

      <Section title="Tamanhos">
        <Demo id="close-button/sizes" />
      </Section>

      <Section title="Limpar campo">
        <Demo id="close-button/in-input" />
      </Section>

      <Section title="Fechar aviso">
        <Demo id="close-button/banner" />
      </Section>

      <Section title="No tema JC">
        <P>
          Ícone em <code>--ds-text-2</code>, que vira <code>--ds-text</code> no hover, raio de 8px e anel de foco Horizon. O fundo do hover é
          uma camada translúcida de <code>--ds-text</code> (8%), então funciona sobre <code>--ds-surface</code>, <code>--ds-primary-soft</code>,
          alertas e no tema escuro sem "apagar" o fundo.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'aria-label', type: 'string', required: true, description: 'Ex.: "Fechar aviso", "Limpar busca".' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Tamanho do botão.' },
            { name: 'iconSize', type: 'number | string', description: 'Tamanho do X.' },
            { name: 'icon', type: 'ReactNode', vueType: 'VNode | slot #icon', description: 'Ícone personalizado.' },
            { name: 'variant', type: "'subtle' | 'transparent'", default: "'subtle'", description: 'Com ou sem fundo no hover.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>Posicione no canto superior direito do container que ele fecha e descreva o alvo no <code>aria-label</code>.</P>
      </Section>
    </DocPage>
  );
}
