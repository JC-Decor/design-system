<script setup lang="ts">
import { Display, Kicker, Subheadline, Disclaimer, Button, Group, Stack } from '@jcdecor/vue';
</script>

<template>
  <Stack gap="sm" :maw="640">
    <Kicker>Pisos vinílicos</Kicker>
    <Display size="sm">Piso novo sem quebra-quebra</Display>
    <Subheadline size="lg" c="var(--ds-text-2)">
      Réguas autocolantes que instalam sobre o piso antigo em poucas horas. Resistentes à água e fáceis de limpar.
    </Subheadline>
    <Group mt="sm">
      <Button>Ver pisos</Button>
      <Button variant="outline">Calcular metragem</Button>
    </Group>
    <Disclaimer mt="xs">Frete grátis para compras acima de R$ 299 nas regiões Sul e Sudeste.</Disclaimer>
  </Stack>
</template>
