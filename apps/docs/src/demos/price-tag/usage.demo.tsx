import { PriceTag } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return <PriceTag value={89.9} oldValue={119.9} unit="/m²" pixDiscount={5} installments={{ count: 6 }} />;
}
