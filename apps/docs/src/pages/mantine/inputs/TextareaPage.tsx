import { Textarea } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function TextareaPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="Textarea"
      source="mantine"
      mantineName="textarea"
      description="Campo de texto de várias linhas para observações do pedido, avaliações e mensagens ao atendimento. Pode crescer automaticamente com o conteúdo."
      importCode={`import { Textarea } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={Textarea}
          name="Textarea"
          previewWidth={360}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Observações do pedido' },
            { prop: 'placeholder', type: 'string', initialValue: 'Ex.: entregar pela manhã' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'autosize', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Autosize">
        <P>
          Com <code>autosize</code> a altura acompanha o texto entre <code>minRows</code> e <code>maxRows</code>.
        </P>
        <Demo id="textarea/autosize" />
      </Section>

      <Section title="Contador de caracteres">
        <Demo id="textarea/counter" />
      </Section>

      <Section title="Redimensionar, erro e desabilitado">
        <Demo id="textarea/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Mesmo visual de <code>Input</code>: fundo <code>--ds-surface</code>, borda <code>--ds-border</code>, foco Horizon e texto de 16px. A altura
          mínima vem das linhas, não da altura de 40px dos campos de uma linha.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'autosize', type: 'boolean', default: 'false', description: 'Cresce com o conteúdo.' },
            { name: 'minRows / maxRows', type: 'number', description: 'Limites de linhas com autosize.' },
            { name: 'resize', type: "'none' | 'vertical' | 'both'", default: 'none', description: 'Permite redimensionar arrastando.' },
            { name: 'maxLength', type: 'number', description: 'Limite nativo de caracteres.' },
            { name: 'error', type: 'ReactNode', description: 'Mensagem de erro.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Informe o limite de caracteres no <code>description</code> e mostre quanto falta. Use placeholder apenas como exemplo de preenchimento,
          com o label sempre visível.
        </P>
      </Section>
    </DocPage>
  );
}
