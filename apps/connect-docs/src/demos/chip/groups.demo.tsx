import { Chip, Group, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack>
      <div>
        <Text fz="sm" fw={600} c="var(--ds-text-2)" mb="xs">
          Departamento (vários)
        </Text>
        <Chip.Group multiple defaultValue={['comercial', 'rh']}>
          <Group gap="xs">
            <Chip value="comercial">Comercial</Chip>
            <Chip value="rh">RH</Chip>
            <Chip value="logistica">Logística</Chip>
            <Chip value="financeiro">Financeiro</Chip>
            <Chip value="ti">Tecnologia</Chip>
          </Group>
        </Chip.Group>
      </div>
      <div>
        <Text fz="sm" fw={600} c="var(--ds-text-2)" mb="xs">
          Período (um)
        </Text>
        <Chip.Group defaultValue="mes">
          <Group gap="xs">
            <Chip value="semana">Esta semana</Chip>
            <Chip value="mes">Este mês</Chip>
            <Chip value="trimestre">Trimestre</Chip>
            <Chip value="ano">Ano</Chip>
          </Group>
        </Chip.Group>
      </div>
    </Stack>
  );
}
