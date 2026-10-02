import { useState } from 'react';
import { Alert, Button, Group, Text } from '@jcdecor/ui';
import { IconAlertTriangle } from '@tabler/icons-react';

export default function Demo() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <Button variant="outline" size="sm" onClick={() => setVisible(true)}>
        Mostrar alerta novamente
      </Button>
    );
  }

  return (
    <Alert
      color="electric"
      title="Estoque baixo"
      icon={<IconAlertTriangle />}
      withCloseButton
      closeButtonLabel="Dispensar alerta"
      onClose={() => setVisible(false)}
    >
      <Text fz="sm">Restam apenas 4 caixas do piso vinílico Carvalho Natural (8,8 m²).</Text>
      <Group gap="xs" mt="sm">
        <Button size="xs">Repor estoque</Button>
        <Button size="xs" variant="subtle" onClick={() => setVisible(false)}>
          Lembrar depois
        </Button>
      </Group>
    </Alert>
  );
}
