import { ColorInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

// Paleta do Connect: navy, lavender, blue, green, yellow, coral, ink
const paleta = ['#07016B', '#6254C9', '#315DBC', '#26864C', '#D49C0B', '#C03B2A', '#5E6276'];

export default function Demo() {
  return (
    <ColorInput
      label="Cor da etiqueta · Comercial"
      description="Somente cores da paleta do Painel"
      placeholder="Escolha uma cor"
      withPicker={false}
      disallowInput
      swatches={paleta}
      swatchesPerRow={7}
      closeOnColorSwatchClick
      defaultValue="#315DBC"
    />
  );
}
