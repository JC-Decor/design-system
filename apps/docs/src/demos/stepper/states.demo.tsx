import { Stack, Stepper } from '@jcdecor/ui';
import { IconAlertTriangle } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Stack gap="xl">
      <Stepper active={1} size="sm" labelPosition="bottom">
        <Stepper.Step label="Dados" />
        <Stepper.Step label="Endereço" />
        <Stepper.Step label="Revisão" />
      </Stepper>
      <Stepper active={2} size="sm" color="evergreen" labelPosition="bottom">
        <Stepper.Step label="Foto do produto" />
        <Stepper.Step label="Preço e estoque" />
        <Stepper.Step label="Publicação" />
      </Stepper>
      <Stepper active={1} size="sm" labelPosition="bottom">
        <Stepper.Step label="Pedido" />
        <Stepper.Step
          label="Pagamento"
          description="Cartão recusado"
          color="danger"
          icon={<IconAlertTriangle size={18} />}
        />
        <Stepper.Step label="Envio" />
      </Stepper>
    </Stack>
  );
}
