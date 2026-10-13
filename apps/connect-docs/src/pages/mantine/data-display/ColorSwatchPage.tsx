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
      description="Amostra de cor circular — para escolher a cor de uma equipe, de uma etiqueta ou de um tipo de evento no calendário."
      importCode={`import { ColorSwatch } from '@jcdecor/connect-ui';`}
    >
      <Section title="Cor da equipe">
        <P>
          Com <code>component="button"</code> a amostra vira um seletor. Mostre o nome da cor selecionada em texto e use{' '}
          <code>aria-label</code> + <code>aria-pressed</code> em cada amostra — a cor sozinha não é acessível.
        </P>
        <Demo id="color-swatch/team-color" />
      </Section>

      <Section title="Cores do Connect">
        <P>
          Passe variáveis CSS do tema (<code>var(--mantine-color-navy-filled)</code>) em vez de hex — assim a amostra acompanha o tema
          escuro.
        </P>
        <Demo id="color-swatch/brand" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Sem overrides: a sombra interna padrão (<code>withShadow</code>) já separa cores claras, como os tons <code>soft</code>, do fundo
          branco. Prefira as sete cores do tema (navy, lavender, blue, green, yellow, coral, ink) para que a cor escolhida combine com
          badges, avatares e gráficos.
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
          cor. Para mais de 8 opções, prefira um <code>Select</code> ou o <code>ColorInput</code>.
        </P>
      </Section>
    </DocPage>
  );
}
