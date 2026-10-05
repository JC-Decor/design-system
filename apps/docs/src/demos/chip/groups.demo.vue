<script setup lang="ts">
import { Chip, ChipGroup, Group, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Stack>
    <div>
      <Text fz="sm" :fw="500" c="var(--ds-text-2)" mb="xs">Ambiente (vários)</Text>
      <ChipGroup multiple :default-value="['sala', 'quarto']">
        <Group gap="xs">
          <Chip value="sala">Sala</Chip>
          <Chip value="quarto">Quarto</Chip>
          <Chip value="cozinha">Cozinha</Chip>
          <Chip value="banheiro">Banheiro</Chip>
          <Chip value="varanda">Varanda</Chip>
        </Group>
      </ChipGroup>
    </div>
    <div>
      <Text fz="sm" :fw="500" c="var(--ds-text-2)" mb="xs">Ordenar por (um)</Text>
      <ChipGroup default-value="relevancia">
        <Group gap="xs">
          <Chip value="relevancia">Relevância</Chip>
          <Chip value="menor">Menor preço</Chip>
          <Chip value="maior">Maior preço</Chip>
          <Chip value="novos">Lançamentos</Chip>
        </Group>
      </ChipGroup>
    </div>
  </Stack>
</template>
