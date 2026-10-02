import { Input } from '@jcdecor/ui';
import { IconSearch } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Input.Wrapper label="Buscar produtos" description="Pesquise por nome, código ou coleção">
      <Input placeholder="Ex.: Carvalho natural" leftSection={<IconSearch size={16} />} />
    </Input.Wrapper>
  );
}
