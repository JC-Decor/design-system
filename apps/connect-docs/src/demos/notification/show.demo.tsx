import { Button, Group, Icon } from '@jcdecor/connect-ui';
import { notifications } from '@mantine/notifications';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Solicitação enviada',
            message: 'Suas férias de 03/11 a 22/11 foram enviadas para aprovação.',
            color: 'green',
            icon: <Icon name="check" size={18} />,
          })
        }
      >
        Sucesso
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Não foi possível registrar o ponto',
            message: 'Você está fora da área permitida. Ative a localização e tente de novo.',
            color: 'coral',
            icon: <Icon name="x" size={18} />,
          })
        }
      >
        Erro
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notifications.show({
            title: 'Novo comunicado',
            message: 'Paula Andrade publicou “Semana da Saúde 2026”.',
          })
        }
      >
        Padrão
      </Button>
    </Group>
  );
}
