import { ActionIcon, Group, Icon, Indicator } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl">
      <Indicator label="3" size={18} withBorder>
        <ActionIcon size="lg" aria-label="Aprovações pendentes, 3">
          <Icon name="check" size={18} />
        </ActionIcon>
      </Indicator>
      <Indicator label="12" size={18} color="navy" withBorder>
        <ActionIcon size="lg" aria-label="Mensagens, 12 não lidas">
          <Icon name="chat" size={18} />
        </ActionIcon>
      </Indicator>
      <Indicator processing size={10} withBorder>
        <ActionIcon size="lg" aria-label="Notificações não lidas">
          <Icon name="bell" size={18} />
        </ActionIcon>
      </Indicator>
      <Indicator label="99+" size={18} withBorder>
        <ActionIcon size="lg" aria-label="Documentos pendentes, mais de 99">
          <Icon name="doc" size={18} />
        </ActionIcon>
      </Indicator>
    </Group>
  );
}
