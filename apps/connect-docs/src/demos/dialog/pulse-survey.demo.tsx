import { useState } from 'react';
import { Button, Dialog, Group, Icon, Rating, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <Button variant="outline" leftSection={<Icon name="chat" size={16} />} onClick={toggle}>
        {opened ? 'Fechar pesquisa' : 'Mostrar pesquisa de clima'}
      </Button>

      <Dialog opened={opened} onClose={close} withCloseButton size="lg">
        <Text fz="sm" fw={600} mb={4}>
          Como foi sua semana?
        </Text>
        <Text fz="xs" c="var(--ds-text-2)" mb="sm">
          Pesquisa de clima anônima — leva 10 segundos e ajuda o RH a acompanhar a equipe.
        </Text>
        <Group justify="space-between" wrap="nowrap">
          <Rating value={score} onChange={setScore} size="lg" aria-label="Nota da semana" />
          <Button size="sm" disabled={score === 0} onClick={close}>
            Enviar
          </Button>
        </Group>
      </Dialog>
    </>
  );
}
