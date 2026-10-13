import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ThemeIconPage() {
  return (
    <DocPage
      kicker="Mantine · Exibição de dados"
      title="ThemeIcon"
      source="mantine"
      mantineName="theme-icon"
      description="Ícone dentro de uma caixa com a cor do tema — para benefícios, atalhos do painel e ícones de KPI."
      importCode={`import { ThemeIcon } from '@jcdecor/connect-ui';`}
    >
      <Section title="Benefícios">
        <P>
          A variante <code>light</code> usa os tons do Connect (<code>--cn-tone-*-bg</code> + <code>-fg</code>), que trocam no tema escuro e
          mantêm o contraste. É o estilo dos ícones de KPI e da lista de benefícios: saúde, educação, day off.
        </P>
        <Demo id="theme-icon/benefits" />
      </Section>

      <Section title="Variantes e cores">
        <P>
          Em <code>filled</code>, o amarelo usa o tom 400 com ícone âmbar escuro (yellow 900) — nunca branco sobre amarelo. No tema escuro as
          cores cheias passam para o tom 3 e o ícone fica escuro (<code>--cn-on-filled</code>).
        </P>
        <Demo id="theme-icon/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>Ajuste o tamanho do ícone ao da caixa: cerca de 60% da altura.</P>
        <Demo id="theme-icon/sizes" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: "'md'", description: '14px, o raio dos ícones de KPI do Connect.' },
            { name: 'variant="light"', type: 'variantColorResolver', description: 'Tons do Connect (bg/fg) para blue, lavender, green, yellow, coral e ink; navy usa --ds-primary-soft + --ds-primary.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'filled' | 'light' | 'outline' | 'default' | 'transparent' | 'white' | 'gradient'", default: "'filled'", description: 'Estilo da caixa.' },
            { name: 'color', type: 'MantineColor', default: "'navy'", description: 'Cor da caixa.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Largura e altura (md = 28px, xl = 44px).' },
            { name: 'radius', type: 'MantineRadius | number', default: "'md'", description: 'Raio da borda.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          ThemeIcon é decorativo — não é clicável (para ações use <code>ActionIcon</code>). Sempre acompanhe de um título em texto e mantenha a
          mesma variante em uma mesma lista — a cor pode variar por categoria, como nos cards de KPI.
        </P>
      </Section>
    </DocPage>
  );
}
