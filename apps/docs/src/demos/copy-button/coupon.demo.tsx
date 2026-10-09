import { Button, CopyButton, Group, Paper, Text } from '@jcdecor/ui';
import { IconCheck, IconTicket } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between" wrap="nowrap">
        <div>
          <Text fz="xs" c="var(--ds-text-3)" tt="uppercase" fw={600}>
            Cupom de primeira compra
          </Text>
          <Text fw={700} ff="monospace" fz="lg">
            JCDECOR10
          </Text>
        </div>
        <CopyButton value="JCDECOR10">
          {({ copied, copy }) => (
            <Button
              variant={copied ? 'light' : 'accent'}
              color={copied ? 'evergreen' : undefined}
              leftSection={copied ? <IconCheck size={16} /> : <IconTicket size={16} />}
              onClick={copy}
            >
              {copied ? 'Copiado!' : 'Copiar cupom'}
            </Button>
          )}
        </CopyButton>
      </Group>
    </Paper>
  );
}
