import { TagsInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function TagsInputPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="TagsInput"
      source="mantine"
      mantineName="tags-input"
      description="Campo para criar uma lista de valores livres, com sugestões opcionais. Perfeito para tags de produto e palavras-chave."
      importCode={`import { TagsInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={TagsInput}
          name="TagsInput"
          previewWidth={360}
          baseProps={{ defaultValue: ['impermeável', 'lavável'] }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Tags do produto' },
            { prop: 'placeholder', type: 'string', initialValue: 'Nova tag' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'clearable', type: 'boolean', initialValue: false },
            { prop: 'allowDuplicates', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Criar tags">
        <P>
          Por padrão, Enter cria a tag. Com <code>splitChars</code> outros caracteres (vírgula, espaço) também separam — colar
          "antimofo, lavável" cria duas tags.
        </P>
        <Demo id="tags-input/creatable" />
      </Section>

      <Section title="Com sugestões">
        <Demo id="tags-input/suggestions" />
      </Section>

      <Section title="Máximo de tags">
        <Demo id="tags-input/max-tags" />
      </Section>

      <Section title="No tema JC">
        <P>As tags usam o mesmo visual das pills do MultiSelect (tag neutra da marca), mantendo consistência entre os campos de múltiplos valores.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'value / onChange', type: 'string[]', description: 'Tags controladas.' },
            { name: 'data', type: 'ComboboxStringData', description: 'Sugestões opcionais.' },
            { name: 'splitChars', type: 'string[]', default: "[',']", description: 'Caracteres que separam tags ao digitar/colar.' },
            { name: 'maxTags', type: 'number', description: 'Limite de tags.' },
            { name: 'allowDuplicates', type: 'boolean', default: 'false', description: 'Permite tags repetidas.' },
            { name: 'acceptValueOnBlur', type: 'boolean', default: 'true', description: 'Cria a tag ao sair do campo.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>Normalize as tags (minúsculas, sem espaços extras) no <code>onChange</code> para evitar duplicatas como "Lavável" e "lavável".</P>
      </Section>
    </DocPage>
  );
}
