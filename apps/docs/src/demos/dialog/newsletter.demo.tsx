import { Button, Dialog, Group, Text, TextInput } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconMail } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="outline" leftSection={<IconMail size={18} />} onClick={toggle}>
        {opened ? 'Fechar convite' : 'Mostrar convite da newsletter'}
      </Button>

      <Dialog opened={opened} onClose={close} withCloseButton size="lg">
        <Text fz="sm" fw={600} mb={4}>
          Ganhe 10% na primeira compra
        </Text>
        <Text fz="xs" c="var(--ds-text-2)" mb="sm">
          Receba lançamentos e ideias de decoração toda semana.
        </Text>
        <Group gap="xs" wrap="nowrap" align="flex-end">
          <TextInput size="sm" placeholder="seu@email.com" aria-label="E-mail" style={{ flex: 1 }} />
          <Button size="sm" onClick={close}>
            Assinar
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
