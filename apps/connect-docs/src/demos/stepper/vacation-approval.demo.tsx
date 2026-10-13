import { Stepper } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stepper active={2} orientation="vertical" size="sm">
      <Stepper.Step label="Solicitação enviada" description="Marina Souza · 02/10 às 09:14" />
      <Stepper.Step label="Aprovada pelo gestor" description="Carlos Menezes · 03/10 às 11:02" />
      <Stepper.Step label="Validação do RH" description="Conferindo saldo e período aquisitivo" loading />
      <Stepper.Step label="Aviso de férias assinado" />
      <Stepper.Step label="Férias de 18/11 a 02/12" />
    </Stepper>
  );
}
