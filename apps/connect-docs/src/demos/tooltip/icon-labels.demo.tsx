import { ActionIcon, Badge, Group, Icon, Tooltip } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tooltip label="Notificações">
        <ActionIcon aria-label="Notificações" size="lg">
          <Icon name="bell" size={18} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Exportar planilha">
        <ActionIcon aria-label="Exportar planilha" size="lg">
          <Icon name="download" size={18} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Central de ajuda" position="bottom">
        <ActionIcon aria-label="Central de ajuda" size="lg">
          <Icon name="help" size={18} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Saldo positivo: horas extras aprovadas até 30/09, a compensar em até 6 meses" multiline w={220}>
        <Badge color="green" variant="light" leftSection={<Icon name="clock" size={12} />}>
          +12h 30min
        </Badge>
      </Tooltip>
    </Group>
  );
}
