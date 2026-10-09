import { Button } from '@jcdecor/ui';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const exportar = () => {
    const id = notifications.show({
      loading: true,
      title: 'Exportando relatório',
      message: 'Gerando planilha de vendas de setembro…',
      autoClose: false,
      withCloseButton: false,
    });

    setTimeout(() => {
      notifications.update({
        id,
        color: 'evergreen',
        title: 'Relatório pronto',
        message: 'vendas-setembro-2026.xlsx foi baixado.',
        icon: <IconCheck size={18} />,
        loading: false,
        autoClose: 3000,
      });
    }, 2000);
  };

  return <Button onClick={exportar}>Exportar relatório</Button>;
}
