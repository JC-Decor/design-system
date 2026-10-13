import { CodeHighlight, CodeHighlightTabs, InlineCodeHighlight } from '@mantine/code-highlight';

export function CodeBlock({ code, language = 'tsx', fileName }: { code: string; language?: string; fileName?: string }) {
  if (fileName) {
    return <CodeHighlightTabs code={[{ fileName, code, language }]} copyLabel="Copiar" copiedLabel="Copiado!" radius="md" withBorder />;
  }
  return <CodeHighlight code={code.trim()} language={language} copyLabel="Copiar" copiedLabel="Copiado!" radius="md" withBorder />;
}

export function InlineCode({ children }: { children: string }) {
  return <InlineCodeHighlight code={children} language="tsx" />;
}
