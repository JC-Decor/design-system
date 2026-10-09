import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ColorSwatchPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="ColorSwatch"
      source="mantine"
      mantineName="color-swatch"
      description="Amostra de cor circular — para escolher a cor do tecido, do acabamento ou do papel de parede na página de produto."
      importCode={`import { ColorSwatch } from '@jcdecor/ui';`}
    >
      <Section title="Cores de tecido">
        <P>
          Com <code>component="button"</code> a amostra vira um seletor. Mostre o nome da cor selecionada em texto e use{' '}
          <code>aria-label</code> + <code>aria-pressed</code> em cada amostra — a cor sozinha não é acessível.
        </P>
        <Demo id="color-swatch/fabrics" />
      </Section>

      <Section title="Cores da marca">
        <P>
          Para documentar a interface, passe variáveis CSS do tema (<code>var(--mantine-color-horizon-filled)</code>) em vez de hex — assim a
          amostra acompanha o tema escuro.
        </P>
        <Demo id="color-swatch/brand" />
      </Section>

      <Section title="No tema JC">
        <P>
          Sem overrides: a sombra interna padrão (<code>withShadow</code>) já separa cores claras, como linho e areia, do fundo branco. Os hex
          de produto (tecidos, acabamentos) vêm do catálogo e não são tokens de interface.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'color', type: 'string', required: true, description: 'Qualquer cor CSS válida.' },
            { name: 'size', type: 'React.CSSProperties["width"]', default: '28', description: 'Largura e altura.' },
            { name: 'radius', type: 'MantineRadius | number', default: "'xl'", description: 'Raio da borda.' },
            { name: 'withShadow', type: 'boolean', default: 'true', description: 'Sombra interna para cores claras.' },
            { name: 'component', type: 'React.ElementType', default: "'div'", description: 'Use button para amostras selecionáveis.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Use amostras de 32–40px em mobile (área de toque). Indique a seleção com ícone (<code>CheckIcon</code>) além da borda e mostre o nome da
          cor. Para mais de 8 opções, prefira um <code>Select</code> com miniaturas.
        </P>
      </Section>
    </DocPage>
  );
}
