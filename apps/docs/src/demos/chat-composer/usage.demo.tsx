import { useState } from 'react';
import { Paper, Stack, Text } from '@jcdecor/ui';
import { ChatComposer } from '@jcdecor/ui/chat';

export default function Demo() {
  const [sent, setSent] = useState<string[]>([]);
  return (
    <Stack>
      <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
        <ChatComposer onSend={({ text }) => setSent((s) => [text, ...s].slice(0, 3))} />
      </Paper>
      <Text fz="sm" c="var(--ds-text-3)">
        {sent.length
          ? `Últimas enviadas: ${sent.join(' · ')}`
          : 'Enter envia, Shift+Enter quebra a linha.'}
      </Text>
    </Stack>
  );
}
