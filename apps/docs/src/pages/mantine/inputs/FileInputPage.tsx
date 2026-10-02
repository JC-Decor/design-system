import { FileInput } from '@jcdecor/ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

export default function FileInputPage() {
  return (
    <DocPage
      kicker="Mantine · Inputs"
      title="FileInput"
      source="mantine"
      mantineName="file-input"
      description="Campo para anexar arquivos com aparência de input. Use para fotos do ambiente, projetos e comprovantes; para arrastar e soltar, prefira um Dropzone."
      importCode={`import { FileInput } from '@jcdecor/ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={FileInput}
          name="FileInput"
          previewWidth={320}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Foto do ambiente' },
            { prop: 'placeholder', type: 'string', initialValue: 'Escolher arquivo' },
            { prop: 'description', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'size', type: 'size', initialValue: 'md' },
            { prop: 'radius', type: 'size', initialValue: 'sm' },
            { prop: 'multiple', type: 'boolean', initialValue: false },
            { prop: 'clearable', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Tipo de arquivo e limpar">
        <P>
          <code>accept</code> filtra os tipos no seletor do sistema; <code>clearable</code> mostra um botão para remover o arquivo.
        </P>
        <Demo id="file-input/basic" />
      </Section>

      <Section title="Vários arquivos">
        <P>
          Com <code>multiple</code> o valor é um <code>File[]</code>. Use <code>valueComponent</code> para mostrar cada arquivo como um Pill.
        </P>
        <Demo id="file-input/multiple" />
      </Section>

      <Section title="Obrigatório, erro e desabilitado">
        <Demo id="file-input/states" />
      </Section>

      <Section title="No tema JC">
        <P>
          Visual de <code>Input</code> com tamanho <code>md</code>; o placeholder usa <code>--ds-text-3</code> como nos demais campos. O botão de
          limpar usa o CloseButton do tema.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'accept', type: 'string', description: 'Tipos MIME/extensões aceitos.' },
            { name: 'multiple', type: 'boolean', default: 'false', description: 'Permite vários arquivos (valor File[]).' },
            { name: 'value / onChange', type: 'File | File[] | null', description: 'Uso controlado.' },
            { name: 'clearable', type: 'boolean', default: 'false', description: 'Botão para remover a seleção.' },
            { name: 'valueComponent', type: 'FC<{ value }>', description: 'Renderização customizada do valor.' },
            { name: 'capture', type: "boolean | 'user' | 'environment'", description: 'Abre a câmera no celular.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Diga no <code>description</code> quais formatos e qual tamanho máximo são aceitos. <code>accept</code> não substitui validação: confira tipo
          e tamanho no cliente e no servidor, e mostre um erro claro (“A imagem deve ter até 10 MB”).
        </P>
      </Section>
    </DocPage>
  );
}
