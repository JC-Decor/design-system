import { Stepper } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Stepper active={3} orientation="vertical" size="sm">
      <Stepper.Step label="Pedido recebido" description="02/10 às 09:14" />
      <Stepper.Step label="Pagamento aprovado" description="Pix · 02/10 às 09:15" />
      <Stepper.Step label="Em separação" description="Centro de distribuição — Campinas/SP" />
      <Stepper.Step label="Em transporte" description="Previsão de entrega: 07/10" loading />
      <Stepper.Step label="Entregue" />
    </Stepper>
  );
}
