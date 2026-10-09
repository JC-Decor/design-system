import { useState } from 'react';
import { Button, Group, Stepper, Text } from '@jcdecor/ui';
import { IconCircleCheck, IconCreditCard, IconShoppingCart, IconTruckDelivery } from '@tabler/icons-react';

export default function Demo() {
  const [active, setActive] = useState(1);
  const next = () => setActive((current) => Math.min(current + 1, 4));
  const prev = () => setActive((current) => Math.max(current - 1, 0));

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Carrinho" description="3 itens" icon={<IconShoppingCart size={20} />}>
          <Text fz="sm" c="var(--ds-text-2)">Revise os produtos e as quantidades.</Text>
        </Stepper.Step>
        <Stepper.Step label="Entrega" description="Endereço e frete" icon={<IconTruckDelivery size={20} />}>
          <Text fz="sm" c="var(--ds-text-2)">Informe o CEP e escolha a forma de entrega.</Text>
        </Stepper.Step>
        <Stepper.Step label="Pagamento" description="Pix, cartão ou boleto" icon={<IconCreditCard size={20} />}>
          <Text fz="sm" c="var(--ds-text-2)">Pague com Pix e ganhe 5% de desconto.</Text>
        </Stepper.Step>
        <Stepper.Step label="Confirmação" description="Resumo do pedido" icon={<IconCircleCheck size={20} />}>
          <Text fz="sm" c="var(--ds-text-2)">Confira os dados e finalize a compra.</Text>
        </Stepper.Step>
        <Stepper.Completed>
          <Text fz="sm" c="var(--ds-text-2)">Pedido #10483 confirmado! Você receberá o código de rastreio por e-mail.</Text>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="lg">
        <Button variant="subtle" onClick={prev} disabled={active === 0}>
          Voltar
        </Button>
        <Button onClick={next} disabled={active === 4}>
          {active === 3 ? 'Finalizar compra' : 'Continuar'}
        </Button>
      </Group>
    </div>
  );
}
