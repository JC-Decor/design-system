import { Rating, Stack } from '@jcdecor/connect-ui';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack align="center">
      <Rating defaultValue={2.5} fractions={2} aria-label="Nota da entrevista com meia estrela" />
      <Rating defaultValue={3} highlightSelectedOnly aria-label="Nível de energia da equipe" />
      <Rating
        defaultValue={4}
        color="coral"
        emptySymbol={<IconHeart size={22} color="var(--ds-text-3)" />}
        fullSymbol={<IconHeartFilled size={22} color="var(--mantine-color-coral-filled)" />}
        aria-label="Reconhecimento ao colega"
      />
      <Rating defaultValue={8} count={10} size="sm" aria-label="De 0 a 10, quanto você recomendaria trabalhar aqui?" />
    </Stack>
  );
}
