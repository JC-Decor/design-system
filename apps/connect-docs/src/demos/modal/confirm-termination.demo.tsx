import { Button, Group, Icon, Modal, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Confirmar desligamento?" size="sm">
        <Text fz="sm" c="var(--ds-text-2)">
          <b>Rafael Moreira</b> perde o acesso ao Painel em 30/10. Férias e banco de horas pendentes entram no cálculo da rescisão e o gestor
          será notificado. Esta ação não pode ser desfeita.
        </Text>
        <Group justify="flex-end" mt="xl">
          <Button variant="ghost" onClick={close} data-autofocus>
            Cancelar
          </Button>
          <Button variant="danger" leftSection={<Icon name="trash" size={16} />} onClick={close}>
            Confirmar desligamento
          </Button>
        </Group>
      </Modal>

      <Button variant="outline" color="coral" leftSection={<Icon name="trash" size={16} />} onClick={open}>
        Desligar colaborador
      </Button>
    </>
  );
}
