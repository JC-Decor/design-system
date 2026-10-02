import { ActionIcon, Affix, Box, Skeleton, Stack, Text } from '@jcdecor/ui';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    // Prévia de uma página mobile: `withinPortal={false}` + `position: absolute` prende o Affix nesta moldura.
    <Box pos="relative" h={320} bg="var(--ds-bg)" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius)', overflow: 'hidden' }}>
      <Stack p="md" gap="sm">
        <Text fz="sm" fw={600}>
          Piso vinílico Carvalho Natural
        </Text>
        <Skeleton h={140} radius="md" animate={false} />
        <Skeleton h={12} w="80%" animate={false} />
        <Skeleton h={12} w="60%" animate={false} />
      </Stack>

      <Affix withinPortal={false} position={{ bottom: 16, right: 16 }} style={{ position: 'absolute' }}>
        <ActionIcon
          size={56}
          radius="xl"
          variant="filled"
          color="evergreen"
          aria-label="Falar com um consultor pelo WhatsApp"
          component="a"
          href="https://wa.me/5511999999999"
          target="_blank"
          style={{ boxShadow: 'var(--ds-shadow-lg)' }}
        >
          <IconBrandWhatsapp size={28} />
        </ActionIcon>
      </Affix>
    </Box>
  );
}
