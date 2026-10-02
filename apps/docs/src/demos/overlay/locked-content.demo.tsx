import { Box, Button, Overlay, Stack, Text, Title } from '@jcdecor/ui';
import { IconLock } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480, centered: true };

export default function Demo() {
  return (
    <Box pos="relative" p="lg" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius)' }}>
      <Title order={3} fz="var(--type-headline-sm)">
        Tabela de preços para lojistas
      </Title>
      <Text c="var(--ds-text-2)" mt="xs">
        Piso vinílico Carvalho — R$ 168,00/cx · Papel de parede Linho — R$ 112,00/rolo · Cortina blackout — R$ 214,00/un.
      </Text>

      <Overlay color="var(--ds-surface)" backgroundOpacity={0.6} blur={6} center radius="md">
        <Stack align="center" gap="xs">
          <IconLock size={28} color="var(--ds-primary)" />
          <Text fw={600}>Exclusivo para parceiros JC</Text>
          <Button size="sm">Entrar como lojista</Button>
        </Stack>
      </Overlay>
    </Box>
  );
}
