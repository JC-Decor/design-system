import { useState } from 'react';
import { ActionIcon, Avatar, Badge, Button, ContextualDrawer, Group, Icon, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [open, setOpen] = useState(false);

  return (
    <Group justify="center">
      <Button variant="ghost" onClick={() => setOpen(true)}>
        Ver colaborador
      </Button>
      <ContextualDrawer
        open={open}
        onOpenChange={setOpen}
        title="Bruno Lima"
        header={
          <Group justify="space-between" align="center" px={22} py={18} style={{ borderBottom: '1px solid var(--ds-border-soft)' }}>
            <Group gap="sm">
              <Avatar size={44} radius="xl" color="blue" variant="light">
                BL
              </Avatar>
              <div>
                <Text fw={700} fz="lg">
                  Bruno Lima
                </Text>
                <Text fz="sm" c="var(--ds-text-3)">
                  Analista de Logística · Equipe Expedição
                </Text>
              </div>
              <Badge color="yellow">Em experiência</Badge>
            </Group>
            <ActionIcon aria-label="Fechar painel" onClick={() => setOpen(false)}>
              <Icon name="x" size={16} />
            </ActionIcon>
          </Group>
        }
        footer={<Button onClick={() => setOpen(false)}>Registrar avaliação de 45 dias</Button>}
      >
        <Stack gap={6}>
          <Text fz="sm" c="var(--ds-text-2)">Admissão: 02/09 · Gestor: Rafael Torres</Text>
          <Text fz="sm" c="var(--ds-text-2)">Período de experiência termina em 31/10.</Text>
        </Stack>
      </ContextualDrawer>
    </Group>
  );
}
