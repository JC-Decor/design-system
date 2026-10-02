import { Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text fw={600}>Peso 600 · rótulos e nomes de produto</Text>
      <Text fs="italic">Itálico · citações curtas</Text>
      <Text td="line-through" c="dimmed">
        De R$ 1.599,90
      </Text>
      <Text tt="uppercase" fz="xs" fw={600} lts="0.08em" c="var(--ds-primary)">
        Kicker em caixa-alta
      </Text>
      <Text truncate="end">
        Papel de parede vinílico lavável com estampa botânica em tons de verde-oliva e areia, rolo de 10 m × 0,53 m
      </Text>
      <Text lineClamp={2} fz="sm" c="var(--ds-text-2)">
        O painel ripado Freijó traz o calor da madeira natural para salas, quartos e home offices. Produzido em MDF de alta densidade com
        revestimento melamínico, é resistente a riscos e fácil de limpar.
      </Text>
    </Stack>
  );
}
