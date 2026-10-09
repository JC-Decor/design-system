import { Button, Group, Modal, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Excluir produto?" size="sm">
        <Text fz="sm" c="var(--ds-text-2)">
          O produto <b>Papel de parede Linho Areia</b> será removido da loja e de 3 coleções. Pedidos já feitos não são afetados. Esta ação não pode
          ser desfeita.
        </Text>
        <Group justify="flex-end" mt="lg">
          <Button variant="outline" onClick={close} data-autofocus>
            Cancelar
          </Button>
          <Button color="danger" leftSection={<IconTrash size={16} />} onClick={close}>
            Excluir produto
          </Button>
        </Group>
      </Modal>

      <Button variant="outline" color="danger" leftSection={<IconTrash size={18} />} onClick={open}>
        Excluir produto
      </Button>
    </>
  );
}
