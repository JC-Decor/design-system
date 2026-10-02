import { useState } from 'react';
import { Button, FileButton, Group, Text } from '@jcdecor/ui';
import { IconPhoto } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [foto, setFoto] = useState<File | null>(null);

  return (
    <Group justify="center" gap="md">
      <FileButton onChange={setFoto} accept="image/png,image/jpeg,image/webp">
        {(props) => (
          <Button {...props} leftSection={<IconPhoto size={18} />}>
            Enviar foto do ambiente
          </Button>
        )}
      </FileButton>
      <Text fz="sm" c="var(--ds-text-2)">
        {foto ? `Selecionado: ${foto.name}` : 'Nenhuma foto selecionada'}
      </Text>
    </Group>
  );
}
