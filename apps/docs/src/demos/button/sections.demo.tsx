import { Button, Group } from '@jcdecor/ui';
import { IconArrowRight, IconDownload, IconShoppingCart } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Button leftSection={<IconShoppingCart size={18} />}>Adicionar ao carrinho</Button>
      <Button variant="outline" rightSection={<IconArrowRight size={18} />}>
        Ver coleção
      </Button>
      <Button variant="accent" leftSection={<IconDownload size={18} />}>
        Baixar catálogo
      </Button>
      <Button loading>Salvando</Button>
    </Group>
  );
}
