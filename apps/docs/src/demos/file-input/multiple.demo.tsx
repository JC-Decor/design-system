import { useState } from 'react';
import { FileInput, Pill, Stack, Text } from '@jcdecor/ui';
import { IconPaperclip } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

function ValueComponent({ value }: { value: File | File[] | null }) {
  if (!value) return null;
  const files = Array.isArray(value) ? value : [value];
  return (
    <Pill.Group>
      {files.map((file) => (
        <Pill key={file.name}>{file.name}</Pill>
      ))}
    </Pill.Group>
  );
}

export default function Demo() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <Stack w="100%" gap="xs">
      <FileInput
        label="Projeto e medidas"
        placeholder="Anexar PDFs ou imagens"
        multiple
        accept="application/pdf,image/*"
        value={files}
        onChange={setFiles}
        valueComponent={ValueComponent}
        leftSection={<IconPaperclip size={16} />}
        clearable
      />
      <Text fz="sm" c="var(--ds-text-3)">
        {files.length ? `${files.length} arquivo(s) selecionado(s)` : 'Nenhum arquivo anexado'}
      </Text>
    </Stack>
  );
}
