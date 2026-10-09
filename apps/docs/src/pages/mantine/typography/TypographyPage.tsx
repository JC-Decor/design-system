import { DocPage, Section, P } from '../../../kit/DocPage';
import { Demo } from '../../../kit/Demo';
import { PropsTable } from '../../../kit/PropsTable';
import { OnlyFor } from '../../../kit/framework';

export default function TypographyPage() {
  return (
    <DocPage
      kicker="Mantine · Tipografia"
      title="Typography"
      source="mantine"
      mantineName="typography"
      description="Aplica os estilos da marca a HTML puro — para posts do blog, políticas e conteúdo vindo de CMS ou Markdown. Novo no Mantine 9."
      importCode={`import { Typography } from '@jcdecor/ui';`}
    >
      <Section title="Política de troca">
        <P>
          Envolva o HTML em <code>Typography</code>: títulos, links, listas, tabelas, citações, <code>code</code>, <code>kbd</code> e{' '}
          <code>mark</code> recebem os tokens da marca sem nenhuma classe extra.
        </P>
        <Demo id="rich-text/policy" />
      </Section>

      <Section title="Post do blog">
        <P>
          Imagens ficam limitadas à largura do conteúdo. Para HTML de um CMS, use{' '}
          <OnlyFor framework="react"><code>{'<Typography dangerouslySetInnerHTML={{ __html: html }} />'}</code></OnlyFor>
          <OnlyFor framework="vue"><code>{'<Typography><div v-html="html" /></Typography>'}</code></OnlyFor> — sempre com conteúdo sanitizado.
        </P>
        <Demo id="rich-text/blog" />
      </Section>

      <Section title="No tema JC">
        <PropsTable
          rows={[
            { name: 'h1–h6', type: 'classNames', description: 'Cor --ds-text, peso 600, tamanhos da escala headings do tema.' },
            { name: 'p, li', type: 'classNames', description: 'Texto --ds-text-2 com entrelinha 1,6; strong em --ds-text.' },
            { name: 'a', type: 'classNames', description: '--ds-link, peso 500, sublinhado suave que se intensifica no hover.' },
            { name: 'ul / ol', type: 'classNames', description: 'Marcadores em --ds-primary, 4px entre itens.' },
            { name: 'code / pre / kbd', type: 'classNames', description: 'Fundo --ds-surface-2 e borda --ds-border-soft, como Code e Kbd.' },
            { name: 'blockquote', type: 'classNames', description: 'Borda --ds-primary e fundo --ds-primary-soft, como Blockquote.' },
            { name: 'table', type: 'classNames', description: 'Cabeçalho em caixa-alta 12px --ds-text-3, divisores --ds-border-soft, como Table.' },
            { name: 'mark / hr', type: 'classNames', description: 'Electric 200 com --ds-text; hr em --ds-border-soft.' },
          ]}
        />
      </Section>

      <Section title="Props principais">
        <P>
          <code>Typography</code> não tem props próprias além das de <code>Box</code> (style props, <OnlyFor framework="react"><code>className</code></OnlyFor><OnlyFor framework="vue"><code>class</code></OnlyFor>,{' '}
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
