import { NativeSelect } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <NativeSelect
      label="Cargo"
      defaultValue="analista-rh"
      data={[
        { group: 'Recursos Humanos', items: [{ label: 'Analista de RH', value: 'analista-rh' }, { label: 'Coordenador de RH', value: 'coord-rh' }] },
        { group: 'Comercial', items: [{ label: 'Consultor de vendas', value: 'consultor' }, { label: 'Gerente comercial', value: 'gerente-com' }] },
        { group: 'Logística', items: [{ label: 'Auxiliar de expedição', value: 'aux-exp' }, { label: 'Supervisor de estoque', value: 'sup-est', disabled: true }] },
      ]}
    />
  );
}
