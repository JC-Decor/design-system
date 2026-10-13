import { QuickActions } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 360, centered: true, background: 'page' };

export default function Demo() {
  return (
    <QuickActions
      layout="grid"
      aria-label="Atalhos do gestor"
      items={[
        { icon: 'user-plus', title: 'Abrir vaga', desc: 'Inicie uma contratação', onClick: () => {} },
        { icon: 'chat', title: 'Registrar feedback 1:1', desc: 'Conversa com o time', onClick: () => {} },
        { icon: 'target', title: 'Definir metas', desc: 'Ciclo do 4º trimestre', onClick: () => {} },
      ]}
    />
  );
}
