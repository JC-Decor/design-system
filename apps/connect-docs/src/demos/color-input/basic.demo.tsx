import { ColorInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <ColorInput
      label="Cor do evento no calendário"
      description="Digite o HEX ou escolha no seletor"
      placeholder="#000000"
      defaultValue="#315DBC"
    />
  );
}
