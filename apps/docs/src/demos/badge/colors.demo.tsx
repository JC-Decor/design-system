import { Badge, Group, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const colors = [
  { color: 'horizon', label: 'Novidade' },
  { color: 'evergreen', label: 'Em estoque' },
  { color: 'electric', label: 'Últimas unidades' },
  { color: 'danger', label: 'Esgotado' },
  { color: 'obsidian', label: 'Rascunho' },
];

export default function Demo() {
  return (
    <Stack align="center">
      {(['light', 'filled'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {colors.map(({ color, label }) => (
            <Badge key={color} color={color} variant={variant}>
              {label}
            </Badge>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
