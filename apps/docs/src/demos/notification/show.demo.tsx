import { Button, Group } from '@jcdecor/ui';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Adicionado ao carrinho',
            message: 'Cortina Linho Cru 2,80m × 2',
            color: 'evergreen',
            icon: <IconCheck size={18} />,
          })
        }
      >
        Sucesso
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Cupom inválido',
            message: 'O cupom JCMAIO expirou em 31/05.',
            color: 'danger',
            icon: <IconX size={18} />,
          })
        }
      >
        Erro
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Nova mensagem',
            message: 'Carla Mendes enviou uma pergunta sobre o painel ripado.',
          })
        }
      >
        Padrão
      </Button>
    </Group>
  );
}
