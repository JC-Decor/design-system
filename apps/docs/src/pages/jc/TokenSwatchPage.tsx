import { DocPage, Section, P } from '../../kit/DocPage';
import { Demo } from '../../kit/Demo';
import { PropsTable } from '../../kit/PropsTable';

export default function TokenSwatchPage() {
  return (
    <DocPage
      kicker="Componentes JC"
      title="TokenSwatch & ColorRamp"
      source="jc"
      sourcePath="packages/ui/src/components/TokenSwatch"
      description="Amostras de cor clicáveis para documentação e style guides: clique para copiar o hex ou a variável CSS."
      importCode={`import { TokenSwatch, ColorRamp } from '@jcdecor/ui';`}
    >
      <Section title="TokenSwatch">
        <P>
          Mostra nome, hex e (opcional) a variável CSS. Por padrão copia o hex; com <code>copy="cssVar"</code> copia{' '}
          <code>var(--dc-obsidian)</code>.
        </P>
        <Demo id="token-swatch/swatch" />
      </Section>

      <Section title="ColorRamp">
        <P>
          Rampa horizontal do tom mais escuro ao mais claro. A cor do rótulo se ajusta à luminância do fundo; <code>derived</code> marca
          tons derivados com <code>*</code>. Clique em um degrau para copiar o hex.
        </P>
        <Demo id="token-swatch/ramp" />
      </Section>

      <Section title="A partir dos tokens">
        <P>Monte as amostras direto de <code>@jcdecor/ui/tokens</code> para que a documentação nunca fique desatualizada.</P>
        <Demo id="token-swatch/from-tokens" />
      </Section>

      <Section title="Props">
        <P>TokenSwatch:</P>
        <PropsTable
          rows={[
            { name: 'name', type: 'string', required: true, description: 'Nome do token.' },
            { name: 'value', type: 'string', required: true, description: 'Cor (hex) exibida e copiada.' },
            { name: 'cssVar', type: 'string', description: 'Variável CSS correspondente (ex.: --dc-horizon).' },
            { name: 'copy', type: "'value' | 'cssVar'", default: "'value'", description: 'O que copiar ao clicar.' },
          ]}
        />
        <P>ColorRamp:</P>
        <PropsTable
          rows={[
            { name: 'steps', type: '{ label: string; value: string; derived?: boolean }[]', required: true, description: 'Degraus da rampa, na ordem de exibição.' },
          ]}
        />
      </Section>
    </DocPage>
  );
}
