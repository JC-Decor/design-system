import { useState } from 'react';
import { Box, Button, Image, Overlay, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 320, centered: true };

export default function Demo() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      pos="relative"
      h={240}
      style={{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image src="https://picsum.photos/seed/cimento/600/480" h="100%" alt="Revestimento Cimento Queimado" />
      <Overlay gradient="linear-gradient(180deg, transparent 30%, color-mix(in srgb, var(--dc-obsidian), transparent 15%) 100%)" zIndex={1}>
        <Stack justify="flex-end" h="100%" p="md" gap={4}>
          <Text c="var(--dc-white)" fw={600}>
            Revestimento Cimento Queimado
          </Text>
          <Text c="var(--dc-white)" fz="sm" opacity={0.85}>
            A partir de R$ 89,90/m²
          </Text>
        </Stack>
      </Overlay>
      {hovered && (
        <Overlay backgroundOpacity={0.35} blur={2} center zIndex={2}>
          <Button variant="accent">Ver no ambiente</Button>
        </Overlay>
      )}
    </Box>
  );
}
