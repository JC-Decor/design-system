import { FileInput } from '@jcdecor/ui';
import { IconPhoto } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <FileInput
      label="Foto do ambiente"
      description="JPG ou PNG, até 10 MB"
      placeholder="Escolher imagem"
      accept="image/png,image/jpeg"
      leftSection={<IconPhoto size={16} />}
      clearable
    />
  );
}
