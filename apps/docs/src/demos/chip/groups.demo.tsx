import { Chip, Group, Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack>
      <div>
        <Text fz="sm" fw={500} c="var(--ds-text-2)" mb="xs">
          Ambiente (vários)
        </Text>
        <Chip.Group multiple defaultValue={['sala', 'quarto']}>
          <Group gap="xs">
            <Chip value="sala">Sala</Chip>
            <Chip value="quarto">Quarto</Chip>
            <Chip value="cozinha">Cozinha</Chip>
            <Chip value="banheiro">Banheiro</Chip>
            <Chip value="varanda">Varanda</Chip>
          </Group>
        </Chip.Group>
      </div>
      <div>
        <Text fz="sm" fw={500} c="var(--ds-text-2)" mb="xs">
          Ordenar por (um)
        </Text>
        <Chip.Group defaultValue="relevancia">
          <Group gap="xs">
            <Chip value="relevancia">Relevância</Chip>
            <Chip value="menor">Menor preço</Chip>
            <Chip value="maior">Maior preço</Chip>
            <Chip value="novos">Lançamentos</Chip>
          </Group>
        </Chip.Group>
      </div>
    </Stack>
  );
}
