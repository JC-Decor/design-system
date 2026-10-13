import { useRef, useState } from 'react';
import { Button, FileButton, Group, Icon, List, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [documentos, setDocumentos] = useState<File[]>([]);
  const resetRef = useRef<() => void>(null);

  const limpar = () => {
    setDocumentos([]);
    resetRef.current?.();
  };

  return (
    <Stack>
      <Group>
        <FileButton resetRef={resetRef} onChange={setDocumentos} accept="application/pdf,image/*" multiple>
          {(props) => (
            <Button variant="ghost" leftSection={<Icon name="folder" size={15} />} {...props}>
              Escolher documentos
            </Button>
          )}
        </FileButton>
        <Button variant="subtle" color="coral" leftSection={<Icon name="trash" size={15} />} disabled={documentos.length === 0} onClick={limpar}>
          Limpar
        </Button>
      </Group>
      {documentos.length > 0 ? (
        <List size="sm">
          {documentos.map((file) => (
            <List.Item key={file.name}>{file.name}</List.Item>
          ))}
        </List>
      ) : (
        <Text fz="sm" c="var(--ds-text-3)">
          Anexe RG, CPF e comprovante de residência para concluir a admissão.
        </Text>
      )}
    </Stack>
  );
}
