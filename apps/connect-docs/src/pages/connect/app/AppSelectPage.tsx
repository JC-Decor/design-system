import { useState } from 'react';
import { AppSelect, type AppSelectProps } from '@jcdecor/connect-ui';
import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { CodeBlock } from '../../../kit/CodeBlock';
import { Configurator } from '../../../kit/Configurator';
import { PropsTable } from '../../../kit/PropsTable';

const options = [
  { value: 'ferias', label: 'Férias', icon: 'palm' },
  { value: 'banco', label: 'Folga do banco de horas', icon: 'clock' },
  { value: 'atestado', label: 'Atestado médico', icon: 'doc' },
];

/** Prévia do playground com estado (o código gerado mostra só as props escolhidas). */
function PlaygroundSelect(props: Partial<AppSelectProps>) {
  const [value, setValue] = useState('');
  return <AppSelect {...props} value={value} onChange={setValue} options={options} />;
}

const migrationCode = `// connect-jc → @jcdecor/connect-ui: mesma API
import { AppSelect } from '@jcdecor/connect-ui';

<AppSelect
  label="Tipo de ausência"
  required
  value={tipo}
  onChange={setTipo}
  options={[
    { value: 'ferias', label: 'Férias', icon: 'palm' },
    { value: 'atestado', label: 'Atestado médico', icon: 'doc', tone: 'coral' },
  ]}
  error={erros.tipo}
/>`;

export default function AppSelectPage() {
  return (
    <DocPage
      kicker="Componentes Connect · App"
      title="AppSelect"
      source="connect"
      sourcePath="packages/connect-ui/src/components/AppSelect"
      description="O select customizado do Connect (.sel-*), agora sobre o Combobox do Mantine: gatilho que perde os cantos de baixo ao abrir, opções com ícone, tom e check, spinner de carregamento, ajuda, erro e marca de obrigatório."
      importCode={`import { AppSelect } from '@jcdecor/connect-ui';\nimport type { SelectOption } from '@jcdecor/connect-ui';`}
    >
      <Section title="Playground">
        <Configurator
          component={PlaygroundSelect}
          name="AppSelect"
          previewWidth={320}
          codeProps={{ value: 'tipo', onChange: 'setTipo', options: 'opcoes' }}
          controls={[
            { prop: 'label', type: 'string', initialValue: 'Tipo de ausência' },
            { prop: 'placeholder', type: 'string', initialValue: 'Selecione...' },
            { prop: 'helperText', type: 'string', initialValue: '' },
            { prop: 'error', type: 'string', initialValue: '' },
            { prop: 'required', type: 'boolean', initialValue: false },
            { prop: 'disabled', type: 'boolean', initialValue: false },
            { prop: 'loading', type: 'boolean', initialValue: false },
          ]}
        />
      </Section>

      <Section title="Uso">
        <P>
          Controlado por <code>value</code>/<code>onChange</code> (string). Sem valor, mostra o <code>placeholder</code>. Teclado: ↓/↑
          abrem e navegam, Home/End vão às pontas, Enter/Espaço escolhem, Esc fecha, Tab sai.
        </P>
        <Demo id="cn-app-select/basic" />
      </Section>

      <Section title="Ícones e tons">
        <P>
          Cada opção pode ter <code>icon</code> (ícone do Connect) e <code>tone</code>: o texto da opção fica no tom e, quando ela é a
          escolhida, o gatilho assume o fundo e o texto do tom — bom para status. Opções com <code>disabled</code> são puladas pelo teclado.
        </P>
        <Demo id="cn-app-select/icons-tones" />
      </Section>

      <Section title="Estados">
        <P>
          <code>required</code> mostra o asterisco coral; <code>helperText</code> aparece sob o campo e é substituído por{' '}
          <code>error</code> (borda coral, <code>role="alert"</code>). <code>loading</code> troca a seta por um spinner e não abre;{' '}
          <code>disabled</code> esmaece.
        </P>
        <Demo id="cn-app-select/states" />
      </Section>

      <Section title="Props">
        <PropsTable
          rows={[
            { name: 'value', type: 'string', required: true, description: 'Valor selecionado ("" = nenhum).' },
            { name: 'onChange', type: '(value: string) => void', required: true, description: 'Chamado ao escolher uma opção.' },
            { name: 'options', type: 'SelectOption[]', required: true, description: '{ value, label, icon?, tone?, disabled? }.' },
            { name: 'label', type: 'string', description: 'Rótulo acima (12,5/600).' },
            { name: 'placeholder', type: 'string', default: "'Selecione...'", description: 'Texto sem seleção.' },
            { name: 'required', type: 'boolean', description: 'Asterisco e aria-required.' },
            { name: 'disabled', type: 'boolean', description: 'Desabilita o gatilho.' },
            { name: 'loading', type: 'boolean', description: 'Spinner no lugar da seta; não abre.' },
            { name: 'error', type: 'string', description: 'Mensagem de erro (substitui o helperText).' },
            { name: 'helperText', type: 'string', description: 'Texto de ajuda.' },
            { name: 'withinPortal', type: 'boolean', default: 'true', description: 'Lista em Portal. Use false dentro de Popover/Menu (ex.: filtros do PageToolbar).' },
            { name: 'comboboxProps', type: 'ComboboxProps', description: 'Props repassadas ao Combobox do Mantine.' },
            { name: 'id / className / style / aria-label', type: '—', description: 'Repasse para o gatilho/raiz.' },
          ]}
        />
      </Section>

      <Section title="Migrando do connect-jc">
        <P>
          Mesma API e mesmo visual: troque o import. Novas props opcionais: <code>withinPortal</code>, <code>comboboxProps</code> e{' '}
          <code>id</code>. As classes <code>.sel-*</code> deixam de ser necessárias no CSS global.
        </P>
        <CodeBlock code={migrationCode} language="tsx" />
      </Section>
    </DocPage>
  );
}
