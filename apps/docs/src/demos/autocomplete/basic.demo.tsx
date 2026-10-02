import { Autocomplete } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const sugestoes = ['Piso vinílico autocolante', 'Piso vinílico em régua', 'Papel de parede 3D', 'Papel de parede infantil', 'Painel ripado', 'Grama sintética 20mm', 'Cortina blackout', 'Tatame EVA', 'Carpete em placas'];

export default function Demo() {
  return (
    <Autocomplete
      label="Buscar na loja"
      placeholder="O que você procura?"
      leftSection={<IconSearch size={18} />}
      data={sugestoes}
      limit={5}
      clearable
    />
  );
}
