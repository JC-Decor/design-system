import { Blockquote, Stack } from '@jcdecor/ui';
import { IconAlertTriangle, IconInfoCircle, IconLeaf } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Stack gap="xl" w="100%" pt="sm">
      <Blockquote icon={<IconInfoCircle size={20} />} iconSize={36}>
        Dica: compre 10% a mais de material para recortes e encaixe de estampa.
      </Blockquote>
      <Blockquote color="evergreen" icon={<IconLeaf size={20} />} iconSize={36}>
        Este produto usa madeira de reflorestamento certificada FSC.
      </Blockquote>
      <Blockquote color="danger" icon={<IconAlertTriangle size={20} />} iconSize={36}>
        Não recomendado para áreas externas ou molhadas.
      </Blockquote>
    </Stack>
  );
}
