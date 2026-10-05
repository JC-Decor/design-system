<script setup lang="ts">
import { Group, Radio, RadioGroup } from '@jcdecor/vue';
</script>

<template>
  <RadioGroup name="acabamento" label="Acabamento" description="Escolha o acabamento do painel ripado" default-value="freijo">
    <Group mt="xs">
      <Radio value="freijo" label="Freijó" />
      <Radio value="carvalho" label="Carvalho" />
      <Radio value="nogueira" label="Nogueira" />
      <Radio value="preto" label="Preto fosco" disabled />
    </Group>
  </RadioGroup>
</template>
