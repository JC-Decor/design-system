import { Button, Dialog, Group, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconCookie } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="outline" leftSection={<IconCookie size={18} />} onClick={toggle}>
        {opened ? 'Fechar aviso' : 'Mostrar aviso de cookies'}
      </Button>

      <Dialog opened={opened} onClose={close} withCloseButton size="lg" position={{ bottom: 24, left: 24 }}>
        <Group wrap="nowrap" align="flex-start" gap="sm" pr="lg">
          <IconCookie size={24} color="var(--ds-primary)" style={{ flexShrink: 0 }} />
          <div>
            <Text fz="sm" fw={600}>
              Usamos cookies
            </Text>
            <Text fz="xs" c="var(--ds-text-2)" mt={4}>
              Para lembrar seu carrinho e recomendar produtos. Você pode alterar suas preferências quando quiser.
            </Text>
          </div>
        </Group>
        <Group justify="flex-end" gap="xs" mt="md">
          <Button size="sm" variant="subtle" onClick={close}>
            Preferências
          </Button>
          <Button size="sm" onClick={close}>
            Aceitar todos
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
