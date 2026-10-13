import { Radio, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Radio.Group label="Modelo de trabalho" description="Combinado com o gestor e registrado no contrato" defaultValue="hibrido" withAsterisk>
      <Stack mt="xs" gap="sm">
        <Radio value="presencial" label="Presencial" description="5 dias no escritório" />
        <Radio value="hibrido" label="Híbrido" description="3 dias no escritório, 2 remotos" />
        <Radio value="remoto" label="Remoto" description="Indisponível para a equipe de expedição" disabled />
      </Stack>
    </Radio.Group>
  );
}
