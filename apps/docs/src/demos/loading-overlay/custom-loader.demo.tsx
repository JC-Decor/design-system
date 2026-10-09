import { Box, Image, LoadingOverlay, Stack, Switch, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 320, centered: true };

export default function Demo() {
  const [visible, { toggle }] = useDisclosure(true);

  return (
    <Stack>
      <Box pos="relative" style={{ borderRadius: 'var(--ds-radius)', overflow: 'hidden' }}>
        <LoadingOverlay
          visible={visible}
          loaderProps={{
            children: (
              <Stack align="center" gap={6}>
                <Text fz="sm" fw={600} c="var(--ds-text)">
                  Gerando prévia 3D…
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  Isso leva alguns segundos
                </Text>
              </Stack>
            ),
          }}
        />
        <Image src="https://picsum.photos/seed/janela/600/400" h={200} alt="Ambiente com cortina" />
      </Box>
      <Switch checked={visible} onChange={toggle} label="Carregando" />
    </Stack>
  );
}
