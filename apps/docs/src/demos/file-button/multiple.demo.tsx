import { useRef, useState } from 'react';
import { Button, FileButton, Group, List, Stack, Text } from '@jcdecor/ui';
import { IconTrash, IconUpload } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [fotos, setFotos] = useState<File[]>([]);
  const resetRef = useRef<() => void>(null);

  const limpar = () => {
    setFotos([]);
    resetRef.current?.();
  };

  return (
    <Stack>
      <Group>
        <FileButton resetRef={resetRef} onChange={setFotos} accept="image/*" multiple>
          {(props) => (
            <Button variant="outline" leftSection={<IconUpload size={18} />} {...props}>
              Escolher fotos
            </Button>
          )}
        </FileButton>
        <Button variant="subtle" color="danger" leftSection={<IconTrash size={18} />} disabled={fotos.length === 0} onClick={limpar}>
          Limpar
        </Button>
      </Group>
      {fotos.length > 0 ? (
        <List size="sm">
          {fotos.map((file) => (
            <List.Item key={file.name}>{file.name}</List.Item>
          ))}
        </List>
      ) : (
        <Text fz="sm" c="var(--ds-text-3)">
          Envie até 5 fotos do cômodo para receber uma sugestão de produto.
        </Text>
      )}
    </Stack>
  );
}
