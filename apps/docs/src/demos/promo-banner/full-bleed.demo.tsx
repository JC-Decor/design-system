import { PromoBanner } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return <PromoBanner highlight="cupom: JCMAIO">5% OFF na 1ª compra</PromoBanner>;
}
