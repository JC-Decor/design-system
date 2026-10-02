import { Input } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function InputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Input"
      source="mantine"
      mantineName="input"
      description="Primitivo base de todos os campos. Use Input e Input.Wrapper para montar campos personalizados com o mesmo visual, label e mensagens de erro dos demais."
      importCode={`import { Input } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Input}
          name="Input"
          previewWidth={320}
          controls={[
            { prop: 'placeholder', type: 'string', initialValue: 'Buscar produtos' },
            { prop: 'variant', type: 'segmented', data: ['default', 'filled', 'unstyled'], initialValue: 'default' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'error', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Com Input.Wrapper">
        <P>
          <code>Input</code> não tem label próprio: envolva-o em <code>Input.Wrapper</code> para ganhar label, descrição e erro com o estilo do DS.
        </P>
        <Demo id="input/basic" />
      </Section>

      <Section title="Label, descrição e erro">
        <P>
          Passe o mesmo <code>id</code> para o wrapper e para o campo, para que o label fique associado. O <code>error</code> do wrapper mostra a
          mensagem; o do <code>Input</code> pinta a borda.
        </P>
        <Demo id="input/wrapper" />
      </Section>

      <Section title="Variantes">
        <Demo id="input/variants" />
      </Section>

      <Section title="Como botão">
        <P>
          Com <code>component="button"</code> o Input vira um gatilho com aparência de campo — útil para abrir date pickers, modais de endereço ou
          seletores próprios. Use <code>Input.Placeholder</code> para o texto vazio.
        </P>
        <Demo id="input/as-button" />
      </Section>

      <Section title="No tema JC">
        <P>
          É aqui que o DS aplica o visual de todos os campos: fundo <code>--ds-surface</code>, borda <code>--ds-border</code>, foco com borda{' '}
          <code>--ds-primary</code> e anel de 3px <code>--ds-primary-soft</code>, erro em <code>--ds-error</code>, alturas por tamanho (md = 40px,
          fonte 16px). O <code>InputWrapper</code> recebe label 500 em <code>--ds-text-2</code> e descrição em <code>--ds-text-3</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'component', type: 'ElementType', default: "'input'", description: 'Elemento renderizado (input, button, select…).' },
            { name: 'variant', type: "'default' | 'filled' | 'unstyled'", default: 'default', description: 'Estilo visual do campo.' },
            { name: 'error', type: 'boolean | ReactNode', description: 'Pinta a borda de erro e ativa aria-invalid.' },
            { name: 'leftSection / rightSection', type: 'ReactNode', description: 'Conteúdo nas laterais do campo.' },
            { name: 'pointer', type: 'boolean', description: 'Cursor de clique (para component="button").' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Prefira os componentes prontos (TextInput, NumberInput…) — eles já ligam label, descrição e erro com <code>aria-describedby</code>. Use{' '}
          <code>Input</code> direto só para campos customizados, e nesse caso garanta o <code>id</code>/<code>htmlFor</code> e um{' '}
          <code>aria-label</code> quando não houver label visível.
        </P>
      </Section>
    </DocPage>
  );
}
