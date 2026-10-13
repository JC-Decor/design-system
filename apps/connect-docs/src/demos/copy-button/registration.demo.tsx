import { ActionIcon, CopyButton, Group, Icon, Text, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const matricula = 'JC-004821';

  return (
    <Group gap="xs">
      <Text fz="sm" c="var(--ds-text-2)">
        Matrícula:
      </Text>
      <Text fz="sm" fw={600} ff="monospace">
        {matricula}
      </Text>
      <CopyButton value={matricula} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label={copied ? 'Copiada' : 'Copiar matrícula'} withArrow position="right">
            <ActionIcon color={copied ? 'green' : undefined} variant="subtle" size="sm" onClick={copy} aria-label="Copiar matrícula">
              <Icon name={copied ? 'check' : 'doc'} size={14} />
            </ActionIcon>
          </Tooltip>
        )}
      </CopyButton>
    </Group>
  );
}
