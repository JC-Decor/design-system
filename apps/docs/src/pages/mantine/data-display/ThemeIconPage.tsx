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
      description="Ícone dentro de uma caixa com a cor do tema — para benefícios, destaques de produto e listas de vantagens."
      importCode={`import { ThemeIcon } from '@jcdecor/ui';`}
    >
      <Section title="Benefícios">
        <P>
          A variante <code>light</code> usa as cores das tags da marca (fundo 50 + ícone 700), que mantêm contraste nos dois temas. É o estilo
          recomendado para faixas de benefícios: frete, devolução e parcelamento.
        </P>
        <Demo id="theme-icon/benefits" />
      </Section>

      <Section title="Variantes e cores">
        <P>
          Em <code>filled</code>, <code>electric</code> usa o tom 600 (âmbar). Para o amarelo da marca, passe <code>color="electric.3"</code>: o{' '}
          <code>autoContrast</code> do tema troca o ícone para navy — o amarelo nunca é usado como cor do ícone.
        </P>
        <Demo id="theme-icon/variants" />
      </Section>

      <Section title="Tamanhos">
        <P>Ajuste o tamanho do ícone ao da caixa: cerca de 60% da altura.</P>
        <Demo id="theme-icon/sizes" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'radius', type: 'defaultProps', default: "'md'", description: '12px, alinhado a cards e botões grandes.' },
            { name: 'variant="light"', type: 'variantColorResolver', description: 'Cores --ds-tag-* (primary, success, warn, error, neutral) com ajuste para o tema escuro.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'variant', type: "'filled' | 'light' | 'outline' | 'default' | 'transparent' | 'white' | 'gradient'", default: "'filled'", description: 'Estilo da caixa.' },
            { name: 'color', type: 'MantineColor', default: "'horizon'", description: 'Cor da caixa.' },
            { name: 'size', type: 'MantineSize | number', default: "'md'", description: 'Largura e altura (md = 28px, xl = 44px).' },
            { name: 'radius', type: 'MantineRadius | number', default: "'md'", description: 'Raio da borda.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          ThemeIcon é decorativo — não é clicável (para ações use <code>ActionIcon</code>). Sempre acompanhe de um título em texto e mantenha a
          mesma variante e cor em uma mesma faixa de benefícios.
        </P>
      </Section>
    </DocPage>
  );
}
