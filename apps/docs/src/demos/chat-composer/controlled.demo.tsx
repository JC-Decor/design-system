import { useState } from 'react';
import { Button, Group, Paper, Stack, Text } from '@jcdecor/ui';
import { ChatComposer } from '@jcdecor/ui/chat';

const LIMIT = 280;

export default function Demo() {
  const [value, setValue] = useState('Olá! Gostaria de saber as medidas de cortina disponíveis.');
  return (
    <Stack>
      <Paper withBorder radius="md" style={{ overflow: 'hidden' }}>
        <ChatComposer
          value={value}
          onChange={(v) => setValue(v.slice(0, LIMIT))}
          onSend={() => {}}
        />
      </Paper>
      <Group justify="space-between">
        <Text fz="sm" c={value.length >= LIMIT ? 'var(--ds-error)' : 'var(--ds-text-3)'}>
          {value.length}/{LIMIT} caracteres
        </Text>
        <Button size="xs" variant="subtle" onClick={() => setValue('')}>
          Limpar
        </Button>
      </Group>
    </Stack>
  );
}
