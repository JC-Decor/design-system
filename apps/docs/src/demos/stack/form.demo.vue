<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, Checkbox, Stack, Textarea, TextInput, Title } from '@jcdecor/vue';
</script>

<template>
  <Stack gap="md" w="100%">
    <Title :order="4">Solicitar orçamento</Title>
    <TextInput label="Nome" placeholder="Seu nome completo" />
    <TextInput label="Metragem" placeholder="Ex.: 32 m²" />
    <Textarea label="Ambiente" placeholder="Conte sobre o espaço que deseja renovar" />
    <Checkbox label="Quero receber visita técnica" />
    <Button mt="xs">Enviar pedido</Button>
  </Stack>
</template>
