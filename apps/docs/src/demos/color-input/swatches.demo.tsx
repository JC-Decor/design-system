import { ColorInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

// Cores do catálogo de tecidos (dados de produto, não tokens do DS)
const tecidos = ['#F4EFE6', '#E5D3B3', '#C9A27E', '#8B6F4E', '#5B6B5A', '#2F3E46', '#7A8FA6', '#B5838D', '#6D597A', '#1F2228'];

export default function Demo() {
  return (
    <ColorInput
      label="Cor da cortina"
      description="Somente cores disponíveis no catálogo"
      placeholder="Escolha uma cor"
      withPicker={false}
      disallowInput
      swatches={tecidos}
      swatchesPerRow={5}
      closeOnColorSwatchClick
      defaultValue="#5B6B5A"
    />
  );
}
