import { AngleSlider, Group } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const marks = [{ value: 0 }, { value: 45 }, { value: 90 }, { value: 135 }, { value: 180 }, { value: 225 }, { value: 270 }, { value: 315 }];
const retos = [{ value: 0 }, { value: 90 }, { value: 180 }, { value: 270 }];

export default function Demo() {
  return (
    <Group gap="xl" justify="center">
      <AngleSlider aria-label="Ângulo livre" defaultValue={90} marks={marks} size={100} formatLabel={(v) => `${v}°`} />
      <AngleSlider
        aria-label="Rotação do documento digitalizado"
        defaultValue={90}
        marks={retos}
        restrictToMarks
        size={100}
        formatLabel={(v) => `${v}°`}
      />
      <AngleSlider aria-label="Desabilitado" defaultValue={180} size={100} disabled />
    </Group>
  );
}
