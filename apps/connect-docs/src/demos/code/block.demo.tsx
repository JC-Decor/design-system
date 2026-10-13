import { Code } from '@jcdecor/connect-ui';

const exemplo = `import { ConnectProvider } from '@jcdecor/connect-ui';
import '@jcdecor/connect-ui/styles.css';

export function App() {
  return <ConnectProvider>{/* … */}</ConnectProvider>;
}`;

export default function Demo() {
  return (
    <Code block w="100%">
      {exemplo}
    </Code>
  );
}
