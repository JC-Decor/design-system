import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function ScrollerPage() {
  return (
    <DocPage
      kicker="Mantine · Diversos"
      title="Scroller"
      source="mantine"
      mantineName="scroller"
      description="Faixa horizontal rolável com botões de navegação nas bordas e arraste com o mouse. Use em chips de filtro por equipe e faixas de cards, como aniversariantes do mês."
      importCode={`import { Scroller } from '@jcdecor/connect-ui';`}
    >
      <Section title="Filtro por equipe">
        <P>
          Os controles aparecem só quando há conteúdo escondido naquele lado. O gradiente usa a cor do fundo da página; sobre uma superfície,
          passe <code>edgeGradientColor="var(--ds-surface)"</code>.
        </P>
        <Demo id="scroller/categories" />
      </Section>

      <Section title="Aniversariantes do mês">
        <P>
          <code>scrollAmount</code> define quantos pixels cada clique rola e <code>controlSize</code> a largura da área do controle.
        </P>
        <Demo id="scroller/cards" />
      </Section>

      <Section title="No tema Connect">
        <P>
          Sem customizações. As setas usam <code>--mantine-color-dimmed</code> (<code>--ds-text-3</code>) e passam para <code>--ds-text</code> no
          hover; o gradiente usa <code>--mantine-color-body</code>, que no tema Connect é <code>--ds-bg</code>.
        </P>
      </Section>

      <Section title="Props principais">
        <PropsTable
          rows={[
            { name: 'scrollAmount', type: 'number', default: '200', description: 'Pixels rolados por clique.' },
            { name: 'controlSize', type: 'string | number', default: '60', description: 'Tamanho da área dos controles.' },
            { name: 'edgeGradientColor', type: 'string', default: 'body', description: 'Cor do gradiente sob os controles.' },
            { name: 'draggable', type: 'boolean', default: 'true', description: 'Permite rolar arrastando com o mouse.' },
            { name: 'showStartControl / showEndControl', type: 'boolean', default: 'false', description: 'Mantém os controles sempre visíveis.' },
            { name: 'startControlIcon / endControlIcon', type: 'ReactNode', description: 'Ícones customizados.' },
          ]}
        />
      </Section>

      <Section title="Boas práticas">
        <P>
          Comece a lista pelo item mais relevante e deixe parte do próximo item visível, indicando que há mais conteúdo.
        </P>
      </Section>
    </DocPage>
  );
}
