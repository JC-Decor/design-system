import { ActionIcon, Affix, Box, Group, Icon, Skeleton, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    // Prévia do Painel no mobile: `withinPortal={false}` + `position: absolute` prende o Affix nesta moldura.
    <Box pos="relative" h={320} bg="var(--ds-bg)" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius)', overflow: 'hidden' }}>
      <Stack p="md" gap="sm">
        <Text fz="sm" fw={600}>
          Meu ponto
        </Text>
        {[0, 1, 2, 3].map((row) => (
          <Group key={row} gap="sm" wrap="nowrap">
            <Skeleton h={32} w={32} radius="sm" animate={false} />
            <Stack gap={6} style={{ flex: 1 }}>
              <Skeleton h={10} w="70%" animate={false} />
              <Skeleton h={10} w="40%" animate={false} />
            </Stack>
          </Group>
        ))}
      </Stack>

      <Affix withinPortal={false} position={{ bottom: 16, right: 16 }} style={{ position: 'absolute' }}>
        <ActionIcon size={52} radius="xl" variant="filled" aria-label="Registrar ponto" style={{ boxShadow: 'var(--ds-shadow-lg)' }}>
          <Icon name="clock" size={24} />
        </ActionIcon>
      </Affix>
    </Box>
  );
}
