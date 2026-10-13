import { AspectRatio, Image } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image src="https://picsum.photos/seed/escritorio/600/400" alt="Capa do comunicado: confraternização de fim de ano" radius="lg" />
    </AspectRatio>
  );
}
