import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function CollapsePage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Collapse"
      source="mantine"
      mantineName="collapse"
      description="Mostra e oculta conteúdo com animação de altura (ou largura). Use para detalhes opcionais, como especificações técnicas e cálculo de frete."
      importCode={`import { Collapse } from '@jcdecor/ui';`}
    >
      <Section title="Uso básico">
        <P>
          No Mantine 9 o estado é a prop <code>expanded</code> (antes <code>in</code>). Combine com <code>useDisclosure</code> de{' '}
          <code>@mantine/hooks</code> e informe <code>aria-expanded</code> no gatilho.
        </P>
        <Demo id="collapse/basic" />
      </Section>

      <Section title="Duração e easing">
        <Demo id="collapse/transition" />
      </Section>

      <Section title="Horizontal">
        <P>
          <code>orientation="horizontal"</code> anima a largura — útil para painéis laterais de filtros.
        </P>
        <Demo id="collapse/horizontal" />
      </Section>

      <Section title="No tema JC">
        <P>Sem customizações: o Collapse não tem aparência própria e usa a duração padrão de 200ms.</P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'expanded', type: 'boolean', description: 'Estado aberto/fechado.', required: true },
            { name: 'orientation', type: "'vertical' | 'horizontal'", default: "'vertical'", description: 'Anima altura ou largura.' },
            { name: 'transitionDuration', type: 'number', default: '200', description: 'Duração em ms.' },
            { name: 'transitionTimingFunction', type: 'string', default: "'ease'", description: 'Easing CSS.' },
            { name: 'animateOpacity', type: 'boolean', default: 'true', description: 'Anima também a opacidade.' },
            { name: 'keepMounted', type: 'boolean', default: 'true', description: 'Mantém o conteúdo no DOM quando fechado.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Para várias seções expansíveis com títulos, use <code>Accordion</code>. O Collapse é para um único bloco controlado por um botão.
        </P>
      </Section>
    </DocPage>
  );
}
