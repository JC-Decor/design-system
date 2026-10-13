import { useState } from 'react';
import { Alert, Button, Group, Icon, Text } from '@jcdecor/connect-ui';

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
      color="yellow"
      title="3 aprovações pendentes"
      icon={<Icon name="doc-clock" />}
      withCloseButton
      closeButtonLabel="Dispensar alerta"
      onClose={() => setVisible(false)}
    >
      <Text fz="sm">Duas solicitações de férias e um ajuste de ponto da sua equipe aguardam a sua decisão.</Text>
      <Group gap="xs" mt="sm">
        <Button size="xs">Revisar agora</Button>
        <Button size="xs" variant="subtle" onClick={() => setVisible(false)}>
          Lembrar depois
        </Button>
      </Group>
    </Alert>
  );
}
