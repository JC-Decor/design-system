<script setup lang="ts">
import { Button, Paper, Text } from '@jcdecor/vue';
</script>

<template>
  <Paper with-border p="var(--sp-24)" :maw="380">
    <Text fz="xs" :fw="600" tt="uppercase" c="var(--ds-primary)">Frete grátis</Text>
    <Text :fw="600" fz="lg" mt="var(--sp-4)">Compras acima de R$ 499</Text>
    <Text c="var(--ds-text-2)" fz="sm" mt="var(--sp-12)">
      Válido para pisos vinílicos, papéis de parede e painéis ripados em todo o Sudeste.
    </Text>
    <Button mt="var(--sp-20)" size="sm">Ver produtos</Button>
  </Paper>
</template>
