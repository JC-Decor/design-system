import { Button, Icon } from '@jcdecor/connect-ui';
import { notifications } from '@mantine/notifications';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const exportar = () => {
    const id = notifications.show({
      loading: true,
      title: 'Exportando relatório',
      message: 'Gerando a planilha de headcount de setembro…',
      autoClose: false,
      withCloseButton: false,
    });

    setTimeout(() => {
      notifications.update({
        id,
        color: 'green',
        title: 'Relatório pronto',
        message: 'headcount-setembro-2026.xlsx foi baixado.',
        icon: <Icon name="check" size={18} />,
        loading: false,
        autoClose: 3000,
      });
    }, 2000);
  };

  return <Button onClick={exportar}>Exportar relatório</Button>;
}
