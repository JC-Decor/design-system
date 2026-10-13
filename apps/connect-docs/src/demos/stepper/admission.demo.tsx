import { useState } from 'react';
import { Button, Group, Icon, Stepper, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [active, setActive] = useState(1);
  const next = () => setActive((current) => Math.min(current + 1, 4));
  const prev = () => setActive((current) => Math.max(current - 1, 0));

  return (
    <div>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Dados pessoais" description="Nome, CPF e contato" icon={<Icon name="user" size={18} />}>
          <Text fz="sm" c="var(--ds-text-2)">Preencha os dados pessoais do novo colaborador.</Text>
        </Stepper.Step>
        <Stepper.Step label="Cargo" description="Departamento e gestor" icon={<Icon name="briefcase" size={18} />}>
          <Text fz="sm" c="var(--ds-text-2)">Defina cargo, departamento, gestor direto e data de início.</Text>
        </Stepper.Step>
        <Stepper.Step label="Documentos" description="RG, CPF e ASO" icon={<Icon name="folder" size={18} />}>
          <Text fz="sm" c="var(--ds-text-2)">Anexe os documentos obrigatórios e o exame admissional.</Text>
        </Stepper.Step>
        <Stepper.Step label="Revisão" description="Conferir e enviar" icon={<Icon name="check" size={18} />}>
          <Text fz="sm" c="var(--ds-text-2)">Confira as informações antes de concluir a admissão.</Text>
        </Stepper.Step>
        <Stepper.Completed>
          <Text fz="sm" c="var(--ds-text-2)">Admissão concluída! O acesso ao Connect foi enviado para o e-mail do colaborador.</Text>
        </Stepper.Completed>
      </Stepper>

      <Group justify="flex-end" mt="lg">
        <Button variant="ghost" onClick={prev} disabled={active === 0}>
          Voltar
        </Button>
        <Button onClick={next} disabled={active === 4}>
          {active === 3 ? 'Concluir admissão' : 'Próxima etapa'}
        </Button>
      </Group>
    </div>
  );
}
