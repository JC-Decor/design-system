import { TextInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function TextInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="TextInput"
      source="mantine"
      mantineName="text-input"
      description="Campo de texto de uma linha para nomes, e-mails, buscas e códigos. É a base visual de todos os campos do DS: 40px de altura, texto de 16px e anel de foco Horizon."
      importCode={`import { TextInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={TextInput}
          name="TextInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Nome do produto' },
            { prop: 'placeholder', type: 'string', initialValue: 'Ex.: Piso vinílico' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'variant', type: 'segmented', data: ['default', 'filled', 'unstyled'], initialValue: 'default' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'withAsterisk', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Ícones e seções">
        <P>
          Use <code>leftSection</code> para ícones que ajudam a reconhecer o campo (busca, e-mail) e <code>rightSection</code> para unidades ou ações.
          Ícones de 16px.
        </P>
        <Demo id="text-input/sections" />
      </Section>

      <Section title="Descrição, erro e estados">
        <P>
          Labels usam peso 500 em <code>--ds-text-2</code> e descrições <code>--ds-text-3</code>. Com <code>error</code> a borda vira{' '}
          <code>--ds-error</code> e o anel de foco usa <code>--ds-error-bg</code>.
        </P>
        <Demo id="text-input/states" />
      </Section>

      <Section title="Controlado">
        <Demo id="text-input/controlled" />
      </Section>

      <Section title="Tamanhos">
        <P>As alturas são as mesmas dos botões, então campo e botão lado a lado ficam alinhados.</P>
        <Demo id="text-input/sizes" />
        <PropsTable
          rows={[
            { name: 'xs', type: '28px · 12px', description: 'Filtros densos em tabelas' },
            { name: 'sm', type: '32px · 14px', description: 'Toolbars e filtros' },
            { name: 'md', type: '40px · 16px', default: 'padrão', description: 'Formulários (alinha com Button md)' },
            { name: 'lg', type: '48px · 16px', description: 'Busca em destaque, checkout mobile' },
            { name: 'xl', type: '56px · 18px', description: 'Hero / landing' },
          ]}
        />
      </Section>

      <Section title="Em um formulário">
        <P>
          Campos lado a lado com o botão alinhado pela base (<code>align="flex-end"</code>).
        </P>
        <Demo id="text-input/form" />
      </Section>

      <Section title="No tema JC">
        <P>
          Fundo <code>--ds-surface</code>, borda <code>--ds-border</code> (contraste 3:1), placeholder <code>--ds-text-3</code>, foco com borda{' '}
          <code>--ds-primary</code> + sombra de 3px <code>--ds-primary-soft</code>, tamanho padrão <code>md</code> e raio de 8px. Tudo vem de{' '}
          <code>Input</code>/<code>InputWrapper</code>, então vale para qualquer campo do Mantine.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'label', type: 'ReactNode', description: 'Rótulo visível, ligado ao campo via htmlFor.' },
            { name: 'description', type: 'ReactNode', description: 'Texto de ajuda abaixo do label.' },
            { name: 'error', type: 'ReactNode | boolean', description: 'Mensagem de erro; ativa aria-invalid.' },
            { name: 'leftSection / rightSection', type: 'ReactNode', description: 'Ícone, unidade ou ação dentro do campo.' },
            { name: 'size', type: 'MantineSize', default: 'md', description: 'Altura e fonte do campo.' },
            { name: 'withAsterisk', type: 'boolean', default: 'false', description: 'Mostra * de obrigatório (não valida sozinho).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Sempre use <code>label</code> visível — placeholder não substitui label e some ao digitar. Mensagens de erro devem dizer como corrigir (“Informe
          um CEP com 8 dígitos”). Use o <code>type</code> e <code>autoComplete</code> corretos (<code>email</code>, <code>tel</code>,{' '}
          <code>postal-code</code>) para ativar o teclado e o preenchimento automático no celular.
        </P>
      </Section>
    </DocPage>
  );
}
