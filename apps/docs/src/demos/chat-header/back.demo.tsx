import { useState } from 'react';
import { Paper, Text } from '@jcdecor/ui';
import { ChatHeader } from '@jcdecor/ui/chat';

export default function Demo() {
  const [clicks, setClicks] = useState(0);
  return (
    <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
      <ChatHeader
        title="Juliana Lima"
        subtitle="Cortinas sob medida"
        avatar="https://i.pravatar.cc/80?img=45"
        onBack={() => setClicks((c) => c + 1)}
        actions={
          <Text fz="xs" c="var(--ds-text-3)">
            voltar: {clicks}
          </Text>
        }
      />
    </Paper>
  );
}
