import { Icon, Stack, Stepper } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xl">
      <Stepper active={1} size="sm" labelPosition="bottom">
        <Stepper.Step label="Autoavaliação" />
        <Stepper.Step label="Avaliação do gestor" />
        <Stepper.Step label="Feedback 1:1" />
      </Stepper>
      <Stepper active={2} size="sm" color="green" labelPosition="bottom">
        <Stepper.Step label="Boas-vindas" />
        <Stepper.Step label="Treinamentos" />
        <Stepper.Step label="Primeira meta" />
      </Stepper>
      <Stepper active={1} size="sm" labelPosition="bottom">
        <Stepper.Step label="Solicitação" />
        <Stepper.Step label="Documentos" description="Atestado ilegível" color="coral" icon={<Icon name="x" size={16} />} />
        <Stepper.Step label="Aprovação" />
      </Stepper>
    </Stack>
  );
}
