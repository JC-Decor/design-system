import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function MotionWrapperPage() {
  return (
    <DocPage
      kicker="Componentes Connect · Exibição"
      title="MotionWrapper & AnimatedSection"
      source="connect"
      sourcePath="packages/connect-ui/src/components/MotionWrapper"
      description="Animações de entrada do Connect com keyframes CSS — sem biblioteca de animação — respeitando prefers-reduced-motion."
      importCode={`import { MotionWrapper, AnimatedSection } from '@jcdecor/connect-ui';`}
    >
      <Section title="Variantes">
        <P><code>fade</code> (180ms), <code>slideUp</code>, <code>scale</code> e <code>expand</code> (320ms) com as curvas do motion.css. Use <code>delay</code> para escalonar listas. Com movimento reduzido o conteúdo aparece direto.</P>
        <Demo id="cn-motion-wrapper/variants" />
      </Section>
      <Section title="AnimatedSection">
        <P>Seção que entra com <code>slideUp</code> e monta um SectionHeader (compacto quando não há descrição).</P>
        <Demo id="cn-motion-wrapper/section" />
      </Section>
      <Section title="Props">
        <P>MotionWrapper:</P>
        <PropsTable
          rows={[
            { name: 'variant', type: "'fade' | 'slideUp' | 'scale' | 'expand' | 'none'", default: "'fade'", description: 'Animação.' },
            { name: 'delay', type: 'number', default: '0', description: 'Atraso em ms.' },
            { name: 'duration', type: 'number', default: '180 / 320', description: 'Duração em ms.' },
          ]}
        />
        <P>AnimatedSection:</P>
        <PropsTable
          rows={[
            { name: 'title / description / actions', type: 'ReactNode', description: 'Cabeçalho.' },
            { name: 'illustration', type: 'string', description: 'URL da arte.' },
            { name: 'delay', type: 'number', description: 'Atraso da entrada.' },
          ]}
        />
      </Section>
      <Section title="Migrando do connect-jc">
        <ul>
          <li>Mesmas props; não depende mais do pacote <code>motion</code> nem do hook <code>useReducedMotion</code> do app (usa o do <code>@mantine/hooks</code>).</li>
          <li><code>illustration</code> do AnimatedSection agora é URL.</li>
        </ul>
      </Section>
    </DocPage>
  );
}
