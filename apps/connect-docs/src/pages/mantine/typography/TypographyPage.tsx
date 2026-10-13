import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';

export default function TypographyPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Typography"
      source="mantine"
      mantineName="typography"
      description="Aplica os estilos do Connect a HTML puro — para comunicados, políticas internas e conteúdo vindo de CMS ou Markdown. Novo no Mantine 9."
      importCode={`import { Typography } from '@jcdecor/connect-ui';`}
    >
      <Section title="Política de férias">
        <P>
          Envolva o HTML em <code>Typography</code>: títulos, links, listas, tabelas, citações, <code>code</code>, <code>kbd</code> e{' '}
          <code>mark</code> recebem os tokens do Connect sem nenhuma classe extra.
        </P>
        <Demo id="rich-text/policy" />
      </Section>

      <Section title="Comunicado">
        <P>
          Imagens ficam limitadas à largura do conteúdo. Para HTML de um CMS, use{' '}
          <code>{'<Typography dangerouslySetInnerHTML={{ __html: html }} />'}</code> — sempre com conteúdo sanitizado.
        </P>
        <Demo id="rich-text/announcement" />
      </Section>

      <Section title="No tema Connect">
        <PropsTable
          rows={[
            { name: 'h1–h6', type: 'classNames', description: 'Cor --ds-text, peso 600, tamanhos da escala headings do tema.' },
            { name: 'p, li', type: 'classNames', description: 'Texto --ds-text-2 com entrelinha 1,6; strong em --ds-text.' },
            { name: 'a', type: 'classNames', description: '--ds-link, peso 500, sublinhado suave que se intensifica no hover.' },
            { name: 'ul / ol', type: 'classNames', description: 'Marcadores em --ds-primary, 6px entre itens.' },
            { name: 'code / pre / kbd', type: 'classNames', description: 'Fundo --ds-surface-2 e borda --ds-border-soft, como Code e Kbd.' },
            { name: 'blockquote', type: 'classNames', description: 'Borda --ds-primary e fundo --ds-primary-soft, como Blockquote.' },
            { name: 'table', type: 'classNames', description: 'Cabeçalho em caixa-alta 11,5px --ds-text-3, divisores --ds-border-soft, como Table.' },
            { name: 'mark / hr', type: 'classNames', description: 'mark em yellow 100 com --ds-text (translúcido no escuro); hr em --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <P>
          <code>Typography</code> não tem props próprias além das de <code>Box</code> (style props, <code>className</code>,{' '}
          <code>component</code>) e da Styles API (seletor <code>root</code>).
        </P>
      </Section>

      <Section title="Boas práticas">
        <P>
          Use Typography só para conteúdo editorial; em interfaces, prefira os componentes (<code>Title</code>, <code>Text</code>,{' '}
          <code>List</code>). Limite a largura do texto (cerca de 680px) e nunca injete HTML sem sanitizar.
        </P>
      </Section>
    </DocPage>
  );
}
