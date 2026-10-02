import { Rating, Stack } from '@jcdecor/ui';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      <Rating defaultValue={2.5} fractions={2} aria-label="Meia estrela" />
      <Rating defaultValue={3} highlightSelectedOnly aria-label="Somente selecionada" />
      <Rating
        defaultValue={4}
        color="danger"
        emptySymbol={<IconHeart size={22} color="var(--ds-text-3)" />}
        fullSymbol={<IconHeartFilled size={22} color="var(--mantine-color-danger-filled)" />}
        aria-label="Favoritos"
      />
      <Rating defaultValue={3} count={10} size="sm" aria-label="Nota de 0 a 10" />
    </Stack>
  );
}
