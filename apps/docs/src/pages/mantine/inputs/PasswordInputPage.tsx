import { PasswordInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function PasswordInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="PasswordInput"
      source="mantine"
      mantineName="password-input"
      description="Campo de senha com botão para mostrar/ocultar o texto. Use em login, cadastro e troca de senha da conta do cliente."
      importCode={`import { PasswordInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PasswordInput}
          name="PasswordInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Senha' },
            { prop: 'placeholder', type: 'string', initialValue: 'Sua senha' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'withAsterisk', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso básico">
        <Demo id="password-input/basic" />
      </Section>

      <Section title="Ícone, erro e desabilitado">
        <Demo id="password-input/states" />
      </Section>

      <Section title="Visibilidade sincronizada">
        <P>
          Controle{' '}
          <OnlyFor framework="react"><code>visible</code> e <code>onVisibilityChange</code></OnlyFor>
          <OnlyFor framework="vue">a visibilidade com <code>v-model:visible</code></OnlyFor> para que “Nova senha” e “Confirme a senha” mostrem/ocultem juntos.
        </P>
        <Demo id="password-input/synced" />
      </Section>

      <Section title="Indicador de força">
        <P>Combine com Progress e uma lista de requisitos para orientar o cliente enquanto digita.</P>
        <Demo id="password-input/strength" />
      </Section>

      <Section title="No tema JC">
        <P>
          Herda todo o visual de <code>Input</code> (borda, foco, erro, md = 40px). O botão de visibilidade usa as cores neutras do tema; nenhum
          override específico foi necessário.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'visible', vueName: 'v-model:visible', type: 'boolean', description: 'Visibilidade controlada.' },
            { name: 'defaultVisible', type: 'boolean', default: 'false', description: 'Visibilidade inicial (não controlado).' },
            { name: 'onVisibilityChange', vueName: '@update:visible', type: '(visible: boolean) => void', description: 'Chamado ao clicar no botão de olho.' },
            { name: 'visibilityToggleIcon', type: 'FC<{ reveal: boolean }>', vueType: 'Component | slot #visibilityToggleIcon="{ reveal }"', description: 'Ícone customizado do botão.' },
            { name: 'error', type: 'ReactNode', vueType: 'string | slot', description: 'Mensagem de erro.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Mostre os requisitos da senha <em>antes</em> do erro, não só depois do envio. Use <code>autoComplete="current-password"</code> no login e{' '}
          <code>"new-password"</code> no cadastro para que gerenciadores de senha funcionem. Nunca desabilite colar no campo.
        </P>
      </Section>
    </DocPage>
  );
}
