import { ActionIcon, CopyButton, Group, Text, Tooltip } from '@jcdecor/ui';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const rastreio = 'BR123456789JC';

  return (
    <Group gap="xs">
      <Text fz="sm" c="var(--ds-text-2)">
        Código de rastreio:
      </Text>
      <Text fz="sm" fw={600} ff="monospace">
        {rastreio}
      </Text>
      <CopyButton value={rastreio} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copiado' : 'Copiar código'} withArrow position="right">
            <ActionIcon color={copied ? 'evergreen' : undefined} variant="subtle" onClick={copy} aria-label="Copiar código de rastreio">
              {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
}
