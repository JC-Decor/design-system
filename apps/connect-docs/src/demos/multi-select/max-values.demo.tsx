import { MultiSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <MultiSelect
      label="Avaliadores do 360°"
      description="Escolha até 3 pares; os escolhidos saem da lista"
      placeholder="Escolha os avaliadores"
      data={['Ana Ribeiro', 'Bruno Alves', 'Carla Nogueira', 'Diego Martins', 'Elisa Prado']}
      maxValues={3}
      hidePickedOptions
    />
  );
}
