import { FileInput, Icon } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <FileInput
      label="Atestado médico"
      description="PDF, JPG ou PNG, até 10 MB"
      placeholder="Escolher arquivo"
      accept="application/pdf,image/png,image/jpeg"
      leftSection={<Icon name="doc" size={16} />}
      clearable
    />
  );
}
