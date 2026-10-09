import { MaskInput } from '@jcdecor/ui';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <MaskInput
      label="Celular / WhatsApp"
      description="Fixo com 8 dígitos ou celular com 9"
      mask="(99) 9999-99999"
      modify={(value) => (value.replace(/\D/g, '').length > 10 ? { mask: '(99) 99999-9999' } : undefined)}
      leftSection={<IconBrandWhatsapp size={16} />}
      placeholder="(11) 91234-5678"
      inputMode="tel"
    />
  );
}
