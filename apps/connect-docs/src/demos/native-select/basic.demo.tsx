import { NativeSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <NativeSelect
      label="Departamento"
      description="Define quem recebe os comunicados da área"
      data={['Comercial', 'Financeiro', 'Logística', 'Marketing', 'Recursos Humanos', 'Tecnologia']}
    />
  );
}
