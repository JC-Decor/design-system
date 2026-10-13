import { Code, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Text c="var(--ds-text-2)">
      Informe sua matrícula <Code>004182</Code> e o protocolo <Code>FER-2026-0318</Code> ao abrir um chamado no RH. Para aplicar o tema,
      passe <Code>connectTheme</Code> de <Code>@jcdecor/connect-ui</Code> ao provider.
    </Text>
  );
}
