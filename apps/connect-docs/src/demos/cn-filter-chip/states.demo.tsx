import { FilterChip, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group justify="center">
      <FilterChip>Todos</FilterChip>
      <FilterChip active>Ativo (ink)</FilterChip>
      <FilterChip icon="calendar" count={8}>Férias</FilterChip>
      <FilterChip icon="calendar" count={8} active tone="lavender">Férias</FilterChip>
      <FilterChip disabled>Desabilitado</FilterChip>
    </Group>
  );
}
