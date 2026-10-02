import { CouponCode } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

export default function Demo() {
  return <CouponCode code="JCMAIO" description="5% OFF na 1ª compra" />;
}
