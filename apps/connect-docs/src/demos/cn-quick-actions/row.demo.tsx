import { QuickActions } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <QuickActions
      items={[
        { icon: 'palm', title: 'Solicitar férias', desc: 'Programe seu descanso', onClick: () => {} },
        { icon: 'clock', title: 'Ajustar ponto', desc: 'Corrija marcações do mês', onClick: () => {} },
        { icon: 'doc', title: 'Meus documentos', desc: 'Holerites e informes', onClick: () => {} },
        { icon: 'shirt', title: 'Pedir uniforme', desc: 'Indisponível no momento', disabled: true },
      ]}
    />
  );
}
