import { useState } from 'react';
import { Box, Button, Icon, Overlay, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 320, centered: true };

export default function Demo() {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      pos="relative"
      h={240}
      style={{ borderRadius: 'var(--ds-radius-lg)', overflow: 'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Capa do comunicado (no app, a imagem enviada pelo RH). */}
      <Box h="100%" bg="linear-gradient(140deg, var(--cn-lavender-500), var(--cn-blue-500))" style={{ display: 'grid', placeItems: 'center' }}>
        <Icon name="megaphone" size={64} c="rgba(255,255,255,.55)" />
      </Box>
      <Overlay gradient="linear-gradient(180deg, transparent 30%, rgba(7, 1, 107, .88) 100%)" zIndex={1}>
        <Stack justify="flex-end" h="100%" p="md" gap={4}>
          <Text c="#fff" fw={600}>
            Campanha de vacinação 2026
          </Text>
          <Text c="#fff" fz="sm" opacity={0.85}>
            Comunicado · RH · 12/10
          </Text>
        </Stack>
      </Overlay>
      {hovered && (
        <Overlay backgroundOpacity={0.36} blur={2} center zIndex={2}>
          <Button variant="ghost">Ler comunicado</Button>
        </Overlay>
      )}
    </Box>
  );
}
