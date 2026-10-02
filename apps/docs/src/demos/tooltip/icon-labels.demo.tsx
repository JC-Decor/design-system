import { ActionIcon, Button, Group, Tooltip } from '@jcdecor/ui';
import { IconHeart, IconShare, IconZoomIn } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group>
      <Tooltip label="Favoritar">
        <ActionIcon aria-label="Favoritar" size="lg">
          <IconHeart size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Compartilhar">
        <ActionIcon aria-label="Compartilhar" size="lg">
          <IconShare size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Ampliar imagem" position="bottom">
        <ActionIcon aria-label="Ampliar imagem" size="lg">
          <IconZoomIn size={20} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Parcele em até 10x sem juros" multiline w={200}>
        <Button variant="subtle">Formas de pagamento</Button>
      </Tooltip>
    </Group>
  );
}
