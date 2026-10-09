import { AspectRatio, Image } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 480 };

export default function Demo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image src="https://picsum.photos/seed/sala/600/400" alt="Sala com piso vinílico amadeirado" radius="md" />
    </AspectRatio>
  );
}
