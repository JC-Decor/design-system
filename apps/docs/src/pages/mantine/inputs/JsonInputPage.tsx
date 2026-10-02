import { JsonInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function JsonInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="JsonInput"
      source="mantine"
      mantineName="json-input"
      description="Textarea com validação e formatação de JSON. Use em painéis internos para editar configurações avançadas — nunca em telas do cliente final."
      importCode={`import { JsonInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={JsonInput}
          name="JsonInput"
          previewWidth={420}
          baseProps={{ minRows: 4, autosize: true }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Configuração' },
            { prop: 'placeholder', type: 'string', initialValue: '{ "colunas": 4 }' },
            { prop: 'validationError', type: 'string', initialValue: 'JSON inválido' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'formatOnBlur', type: 'boolean', initialValue: true },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Validação e formatação">
        <P>
          Ao sair do campo o conteúdo é validado: se for inválido, aparece <code>validationError</code>; se for válido e <code>formatOnBlur</code>{' '}
          estiver ativo, é reindentado.
        </P>
        <Demo id="json-input/basic" />
      </Section>

      <Section title="Configuração do painel">
        <Demo id="json-input/config" />
      </Section>

      <Section title="No tema JC">
        <P>
          Visual de <code>Input</code> (borda, foco, erro). O texto usa a fonte monoespaçada do tema (<code>fontFamilyMonospace</code>).
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'formatOnBlur', type: 'boolean', default: 'false', description: 'Formata o JSON ao perder o foco.' },
            { name: 'validationError', type: 'ReactNode', description: 'Erro exibido quando o JSON é inválido.' },
            { name: 'indentSpaces', type: 'number', default: '2', description: 'Indentação da formatação.' },
            { name: 'serialize / deserialize', type: 'function', description: 'Substituem JSON.stringify/parse.' },
            { name: 'autosize / minRows / maxRows', type: 'boolean / number', description: 'Herdados de Textarea.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Prefira formulários estruturados sempre que possível; reserve o JsonInput para administradores. Dê uma mensagem de erro clara e valide o
          esquema no servidor antes de salvar.
        </P>
      </Section>
    </DocPage>
  );
}
