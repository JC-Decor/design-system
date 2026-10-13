import { Button, Dialog, Group, Icon, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Button variant="outline" leftSection={<Icon name="clock" size={16} />} onClick={toggle}>
        {opened ? 'Fechar aviso' : 'Mostrar aviso de sessão'}
      </Button>

      <Dialog opened={opened} onClose={close} withCloseButton size="lg" position={{ bottom: 24, left: 24 }}>
        <Group wrap="nowrap" align="flex-start" gap="sm" pr="lg">
          <Icon name="lock" size={22} c="var(--ds-primary)" style={{ flexShrink: 0 }} />
          <div>
            <Text fz="sm" fw={600}>
              Sua sessão expira em 5 minutos
            </Text>
            <Text fz="xs" c="var(--ds-text-2)" mt={4}>
              Por segurança, o Painel encerra sessões inativas. Rascunhos de comunicados e solicitações são salvos automaticamente.
            </Text>
          </div>
        </Group>
        <Group justify="flex-end" gap="xs" mt="md">
          <Button size="sm" variant="subtle" onClick={close}>
            Sair agora
          </Button>
          <Button size="sm" onClick={close}>
            Continuar conectado
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
