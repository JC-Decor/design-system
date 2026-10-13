import { Pill, PillsInput } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <PillsInput label="Idiomas" description="Pills e campo de texto no mesmo controle">
      <Pill.Group>
        <Pill>Português</Pill>
        <Pill>Inglês</Pill>
        <PillsInput.Field placeholder="Adicionar idioma" />
      </Pill.Group>
    </PillsInput>
  );
}
