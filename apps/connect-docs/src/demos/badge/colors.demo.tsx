import { Badge, Group, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const cores = [
  { color: 'navy', label: 'Novo' },
  { color: 'lavender', label: 'Pausado' },
  { color: 'blue', label: 'Concluído' },
  { color: 'green', label: 'Ativo' },
  { color: 'yellow', label: 'Pendente' },
  { color: 'coral', label: 'Atrasado' },
  { color: 'ink', label: 'Rascunho' },
];

export default function Demo() {
  return (
    <Stack align="center">
      {(['light', 'filled'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {cores.map(({ color, label }) => (
            <Badge key={color} color={color} variant={variant}>
              {label}
            </Badge>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
