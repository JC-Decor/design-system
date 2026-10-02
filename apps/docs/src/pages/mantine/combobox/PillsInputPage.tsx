import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function PillsInputPage() {
  return (
    <DocPage
      kicker="Mantine · Combobox"
      title="PillsInput"
      source="mantine"
      mantineName="pills-input"
      description="Base de baixo nível para campos com pills: combine com Pill.Group e Combobox para montar seleções múltiplas sob medida."
      importCode={`import { PillsInput, Pill } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          <code>PillsInput</code> desenha a caixa do input; dentro dele, <code>Pill.Group</code> organiza as pills e{' '}
          <code>PillsInput.Field</code> é o campo de texto.
        </P>
        <Demo id="pills-input/basic" />
      </Section>

      <Section title="Com Combobox">
        <P>
          Um MultiSelect próprio: busca, marcação com ícone, Backspace remove a última pill. Use <code>Combobox.DropdownTarget</code> no
          PillsInput e <code>Combobox.EventsTarget</code> no campo.
        </P>
        <Demo id="pills-input/combobox" />
      </Section>

      <Section title="No tema JC">
        <P>Herda o visual dos inputs (borda, foco Horizon, altura mínima de 40px) e das pills da marca.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'PillsInput', type: 'InputBase', description: 'Aceita label, description, error, size, radius, pointer.' },
            { name: 'PillsInput.Field', type: 'input', description: "Campo de texto; type=\"hidden\" quando só deve receber eventos." },
            { name: 'Pill.Group', type: 'div', description: 'Agrupa as pills com espaçamento por tamanho.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>Só monte um campo próprio quando <code>MultiSelect</code> ou <code>TagsInput</code> não atenderem — eles já cuidam de acessibilidade e teclado.</P>
      </Section>
    </DocPage>
  );
}
