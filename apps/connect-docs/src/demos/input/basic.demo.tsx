import { Icon, Input } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Input.Wrapper label="Buscar colaborador" description="Pesquise por nome, matrícula ou cargo">
      <Input placeholder="Ex.: Mariana Costa" leftSection={<Icon name="search" size={16} />} />
    </Input.Wrapper>
  );
}
