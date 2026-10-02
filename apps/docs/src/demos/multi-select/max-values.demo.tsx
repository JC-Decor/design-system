import { MultiSelect } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <MultiSelect
      label="Compare até 3 pisos"
      description="As opções escolhidas saem da lista"
      placeholder="Escolha os modelos"
      data={['Vinílico Carvalho Natural', 'Vinílico Nogueira', 'Vinílico Cinza Concreto', 'Laminado Freijó', 'Laminado Branco Polar']}
      maxValues={3}
      hidePickedOptions
    />
  );
}
