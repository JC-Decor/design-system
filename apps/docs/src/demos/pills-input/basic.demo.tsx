import { Pill, PillsInput } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <PillsInput label="Cores do ambiente" description="Pills e campo de texto no mesmo controle">
      <Pill.Group>
        <Pill>Off-white</Pill>
        <Pill>Verde sálvia</Pill>
        <PillsInput.Field placeholder="Adicionar cor" />
      </Pill.Group>
    </PillsInput>
  );
}
