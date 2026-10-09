import { Anchor, Avatar, Badge, Group, HoverCard, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Text fz="sm">
      Pedido feito por{' '}
      <HoverCard width={280} position="bottom" openDelay={150}>
        <HoverCard.Target>
          <Anchor component="button" fz="sm">
            Ana Ribeiro
          </Anchor>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group wrap="nowrap" align="flex-start">
            <Avatar name="Ana Ribeiro" />
            <Stack gap={2}>
              <Text fw={600} fz="sm">
                Ana Ribeiro
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                Cliente desde mar/2023 · São Paulo, SP
              </Text>
              <Group gap={6} mt={6}>
                <Badge size="sm" color="evergreen">12 pedidos</Badge>
                <Badge size="sm">VIP</Badge>
              </Group>
            </Stack>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>{' '}
      em 02/10/2026.
    </Text>
  );
}
