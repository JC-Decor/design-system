import { useState } from 'react';
import { Paper, Stack, Text } from '@jcdecor/ui';
import { ChatComposer, formatBytes, type ChatComposerSendPayload } from '@jcdecor/ui/chat';

export default function Demo() {
  const [last, setLast] = useState<ChatComposerSendPayload | null>(null);
  return (
    <Stack>
      <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
        <ChatComposer
          allowAttachments
          accept="image/*,.pdf"
          placeholder="Envie a foto ou a planta do ambiente…"
          onSend={setLast}
        />
      </Paper>
      {last && (
        <Text fz="sm" c="var(--ds-text-2)">
          Enviado: “{last.text || 'sem texto'}”
          {last.files.length > 0 &&
            ` + ${last.files.map((f) => `${f.name} (${formatBytes(f.size)})`).join(', ')}`}
        </Text>
      )}
    </Stack>
  );
}
