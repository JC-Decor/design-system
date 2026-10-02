import { ColorInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return <ColorInput label="Cor do tecido" description="Digite o HEX ou escolha na paleta" placeholder="#000000" defaultValue="#C9A27E" />;
}
