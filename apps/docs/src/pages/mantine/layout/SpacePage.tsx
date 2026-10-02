import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function SpacePage() {
  return (
    <DocPage
      kicker="Mantine · Layout"
      title="Space"
      source="mantine"
      mantineName="space"
      description="Adiciona um espaço vertical ou horizontal entre elementos usando a escala de espaçamento. Use quando não há um container (Stack/Group) para controlar o gap."
      importCode={`import { Space } from '@jcdecor/ui';`}
    >
      <Section title="Espaço vertical">
        <P>
          <code>h</code> cria um espaço vertical com valores da escala (xs 4 · sm 8 · md 16 · lg 24 · xl 32px) ou qualquer valor CSS.
        </P>
        <Demo id="space/vertical" />
      </Section>

      <Section title="Espaço horizontal">
        <P>
          Em containers flex, use <code>w</code>.
        </P>
        <Demo id="space/horizontal" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações; os valores seguem a escala de espaçamento da marca.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'h', type: 'MantineSpacing | number | string', description: 'Altura do espaço (vertical).' },
            { name: 'w', type: 'MantineSpacing | number | string', description: 'Largura do espaço (horizontal).' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Prefira <code>gap</code> em <code>Stack</code>/<code>Group</code> ou as props <code>mt</code>/<code>mb</code>. Use o Space como exceção,
          por exemplo para separar blocos de texto corrido.
        </P>
      </Section>
    </DocPage>
  );
}
