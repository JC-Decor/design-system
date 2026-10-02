import { Select, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Stack>
      <Select
        label="Ordenar por"
        data={['Mais vendidos', 'Menor preço', 'Maior preço', 'Lançamentos']}
        defaultValue="Mais vendidos"
        allowDeselect={false}
      />
      <Select
        label="Cor"
        placeholder="Todas as cores"
        data={['Carvalho natural', 'Nogueira', 'Cinza concreto', 'Branco polar']}
        defaultValue="Nogueira"
        clearable
      />
    </Stack>
  );
}
