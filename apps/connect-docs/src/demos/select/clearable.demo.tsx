import { Select, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Stack>
      <Select
        label="Ordenar por"
        data={['Nome (A–Z)', 'Data de admissão', 'Departamento', 'Saldo de férias']}
        defaultValue="Nome (A–Z)"
        allowDeselect={false}
      />
      <Select
        label="Status"
        placeholder="Todos os status"
        data={['Ativo', 'Em férias', 'Afastado', 'Em experiência']}
        defaultValue="Em férias"
        clearable
      />
    </Stack>
  );
}
