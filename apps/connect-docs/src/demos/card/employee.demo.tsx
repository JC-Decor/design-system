import { Avatar, Badge, Button, Card, Group, Icon, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 340 };

export default function Demo() {
  return (
    <Card>
      <Group wrap="nowrap" align="flex-start">
        <Avatar name="Marina Costa" size="lg" color="lavender" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <Group justify="space-between" wrap="nowrap" gap="xs">
            <Text fw={700} fz="lg" truncate>
              Marina Costa
            </Text>
            <Badge color="green">Ativo</Badge>
          </Group>
          <Text fz="sm" c="var(--ds-text-3)">
            Analista de RH Pleno · Gente & Gestão
          </Text>
        </div>
      </Group>
      <Stack gap={6} mt="md">
        <Group gap="xs" c="var(--ds-text-2)" fz="sm">
          <Icon name="building" size={16} /> Sede · São Paulo
        </Group>
        <Group gap="xs" c="var(--ds-text-2)" fz="sm">
          <Icon name="calendar" size={16} /> Na empresa desde mar/2022
        </Group>
        <Group gap="xs" c="var(--ds-text-2)" fz="sm">
          <Icon name="user" size={16} /> Gestora: Paula Andrade
        </Group>
      </Stack>
      <Group grow mt="lg" gap="xs">
        <Button variant="ghost">Mensagem</Button>
        <Button>Ver perfil</Button>
      </Group>
    </Card>
  );
}
