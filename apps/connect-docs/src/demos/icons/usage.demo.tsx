import { ActionIcon, Button, Group, Text, Icon } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group>
      {/* Herda a cor do texto (currentColor) */}
      <Text c="var(--ds-primary)" fw={600} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon name="calendar" size={16} />
        Férias: 12 a 21/01
      </Text>
      <Button leftSection={<Icon name="user-plus" size={16} />}>Nova contratação</Button>
      <ActionIcon aria-label="Notificações">
        <Icon name="bell" size={18} />
      </ActionIcon>
      {/* Sem rótulo visível, dê um aria-label ao próprio ícone */}
      <Icon name="shield" size={20} stroke={2} aria-label="Documento verificado" />
    </Group>
  );
}
