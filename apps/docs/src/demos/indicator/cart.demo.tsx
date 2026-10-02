import { ActionIcon, Group, Indicator } from '@jcdecor/ui';
import { IconBell, IconHeart, IconShoppingCart } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl">
      <Indicator label="3" size={18} withBorder>
        <ActionIcon variant="default" size="lg" aria-label="Carrinho, 3 itens">
          <IconShoppingCart size={20} />
        </ActionIcon>
      </Indicator>
      <Indicator label="12" size={18} color="horizon" withBorder>
        <ActionIcon variant="default" size="lg" aria-label="Favoritos, 12 itens">
          <IconHeart size={20} />
        </ActionIcon>
      </Indicator>
      <Indicator processing size={10} withBorder>
        <ActionIcon variant="default" size="lg" aria-label="Notificações não lidas">
          <IconBell size={20} />
        </ActionIcon>
      </Indicator>
      <Indicator label="99+" size={18} withBorder>
        <ActionIcon variant="default" size="lg" aria-label="Carrinho, mais de 99 itens">
          <IconShoppingCart size={20} />
        </ActionIcon>
      </Indicator>
    </Group>
  );
}
