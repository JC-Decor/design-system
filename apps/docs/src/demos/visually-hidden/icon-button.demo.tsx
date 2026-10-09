import { ActionIcon, Group, VisuallyHidden } from '@jcdecor/ui';
import { IconHeart, IconShare, IconShoppingCart } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <ActionIcon variant="light" size="lg">
        <IconHeart size={18} />
        <VisuallyHidden>Adicionar aos favoritos</VisuallyHidden>
      </ActionIcon>
      <ActionIcon variant="light" size="lg">
        <IconShare size={18} />
        <VisuallyHidden>Compartilhar produto</VisuallyHidden>
      </ActionIcon>
      <ActionIcon size="lg">
        <IconShoppingCart size={18} />
        <VisuallyHidden>Adicionar ao carrinho</VisuallyHidden>
      </ActionIcon>
    </Group>
  );
}
