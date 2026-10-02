import { Code } from '@jcdecor/ui';

const exemplo = `import { MantineProvider } from '@mantine/core';
import { jcTheme } from '@jcdecor/ui';

export function App() {
  return <MantineProvider theme={jcTheme}>{/* … */}</MantineProvider>;
}`;

export default function Demo() {
  return (
    <Code block w="100%">
      {exemplo}
    </Code>
  );
}
