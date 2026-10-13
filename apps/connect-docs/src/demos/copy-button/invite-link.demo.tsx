import { Button, CopyButton, Group, Icon, Paper, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const link = 'https://connect.jcdecor.com.br/convite/8F2K-Q7';

  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between" wrap="nowrap">
        <div style={{ minWidth: 0 }}>
          <Text fz="xs" c="var(--ds-text-3)" tt="uppercase" fw={600}>
            Link de pré-admissão
          </Text>
          <Text fw={600} ff="monospace" fz="sm" truncate>
            {link}
          </Text>
        </div>
        <CopyButton value={link}>
          {({ copied, copy }) => (
            <Button
              variant={copied ? 'light' : 'filled'}
              color={copied ? 'green' : undefined}
              leftSection={<Icon name={copied ? 'check' : 'link'} size={15} />}
              onClick={copy}
            >
              {copied ? 'Copiado!' : 'Copiar link'}
            </Button>
          )}
        </CopyButton>
      </Group>
    </Paper>
  );
}
