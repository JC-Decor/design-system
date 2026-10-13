import { Box, Button, Icon, Overlay, Stack, Text, Title } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480, centered: true };

export default function Demo() {
  return (
    <Box pos="relative" p="lg" style={{ border: '1px solid var(--ds-border-soft)', borderRadius: 'var(--ds-radius-lg)' }}>
      <Title order={3} fz={16} fw={700}>
        Remuneração da equipe
      </Title>
      <Text fz="sm" c="var(--ds-text-2)" mt="xs">
        Ana Ribeiro — R$ 6.200,00 · Bruno Carvalho — R$ 4.850,00 · Diego Martins — R$ 5.300,00 · média da equipe R$ 5.450,00.
      </Text>

      <Overlay color="var(--ds-surface)" backgroundOpacity={0.6} blur={6} center radius="lg">
        <Stack align="center" gap="xs">
          <Icon name="lock" size={26} c="var(--ds-primary)" />
          <Text fz="sm" fw={600}>
            Visível só para gestores e RH
          </Text>
          <Button size="sm">Solicitar acesso</Button>
        </Stack>
      </Overlay>
    </Box>
  );
}
