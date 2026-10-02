import { Group, Image, Menu, Paper, Stack, Text } from '@jcdecor/ui';
import { IconCopy, IconExternalLink, IconHeart, IconShare } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 280 };

export default function Demo() {
  return (
    <Menu width={220}>
      <Menu.ContextMenu>
        <Paper withBorder radius="md" p="sm">
          <Stack gap="xs">
            <Image src="https://picsum.photos/seed/folhagem/600/400" h={140} radius="sm" alt="Papel de parede Folhagem" />
            <Group justify="space-between">
              <Text fz="sm" fw={600}>
                Papel de parede Folhagem
              </Text>
              <Text fz="sm" fw={700} c="var(--ds-primary)">
                R$ 159,90
              </Text>
            </Group>
            <Text fz="xs" c="var(--ds-text-3)">
              Clique com o botão direito (ou toque e segure)
            </Text>
          </Stack>
        </Paper>
      </Menu.ContextMenu>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconExternalLink size={16} />}>Abrir em nova aba</Menu.Item>
        <Menu.Item leftSection={<IconHeart size={16} />}>Favoritar</Menu.Item>
        <Menu.Item leftSection={<IconShare size={16} />}>Compartilhar</Menu.Item>
        <Menu.Item leftSection={<IconCopy size={16} />}>Copiar código do produto</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
