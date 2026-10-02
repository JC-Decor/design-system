import { ActionIcon, Group, Tooltip } from '@jcdecor/ui';
import { IconAlignCenter, IconAlignLeft, IconAlignRight, IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tools = [
  { label: 'Negrito (⌘B)', icon: IconBold },
  { label: 'Itálico (⌘I)', icon: IconItalic },
  { label: 'Sublinhado (⌘U)', icon: IconUnderline },
  { label: 'Alinhar à esquerda', icon: IconAlignLeft },
  { label: 'Centralizar', icon: IconAlignCenter },
  { label: 'Alinhar à direita', icon: IconAlignRight },
];

export default function Demo() {
  return (
    // Depois do primeiro tooltip, os vizinhos abrem sem atraso.
    <Tooltip.Group openDelay={400} closeDelay={100}>
      <Group gap={4}>
        {tools.map(({ label, icon: Icon }) => (
          <Tooltip key={label} label={label}>
            <ActionIcon variant="subtle" color="gray" size="lg" aria-label={label}>
              <Icon size={18} />
            </ActionIcon>
          </Tooltip>
        ))}
      </Group>
    </Tooltip.Group>
  );
}
