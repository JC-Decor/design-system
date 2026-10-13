import { Anchor, Avatar, Badge, Group, HoverCard, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Text fz="sm">
      Solicitação aprovada por{' '}
      <HoverCard width={280} position="bottom" openDelay={150}>
        <HoverCard.Target>
          <Anchor component="button" fz="sm">
            Camila Duarte
          </Anchor>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Group wrap="nowrap" align="flex-start">
            <Avatar radius="xl" bg="var(--cn-tone-blue-bg)" c="var(--cn-tone-blue-fg)">
              CD
            </Avatar>
            <Stack gap={2}>
              <Text fw={600} fz="sm">
                Camila Duarte
              </Text>
              <Text fz="xs" c="var(--ds-text-3)">
                Gerente Comercial · na empresa desde mar/2019
              </Text>
              <Group gap={6} mt={6}>
                <Badge color="blue" variant="light">
                  8 liderados
                </Badge>
                <Badge color="green" variant="light">
                  Ativa
                </Badge>
              </Group>
            </Stack>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>{' '}
      em 02/10/2026.
    </Text>
  );
}
