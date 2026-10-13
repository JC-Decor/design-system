import { useState } from 'react';
import { Button, FileButton, Group, Icon, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [atestado, setAtestado] = useState<File | null>(null);

  return (
    <Group justify="center" gap="md">
      <FileButton onChange={setAtestado} accept="application/pdf,image/png,image/jpeg">
        {(props) => (
          <Button {...props} leftSection={<Icon name="upload" size={15} />}>
            Enviar atestado
          </Button>
        )}
      </FileButton>
      <Text fz="sm" c="var(--ds-text-2)">
        {atestado ? `Selecionado: ${atestado.name}` : 'Nenhum arquivo selecionado'}
      </Text>
    </Group>
  );
}
