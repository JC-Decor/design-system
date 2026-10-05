<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Paper, Stack, Switch, Text } from '@jcdecor/vue';

const ativo = ref(true);
</script>

<template>
  <Paper with-border p="md" radius="md" w="100%">
    <Stack gap="xs">
      <Switch v-model="ativo" label="Produto visível na vitrine" description="Alterações são salvas automaticamente" />
      <Text fz="sm" :c="ativo ? 'var(--ds-success)' : 'var(--ds-text-3)'">
        {{ ativo ? 'Publicado · Piso vinílico Carvalho Natural' : 'Oculto da loja' }}
      </Text>
    </Stack>
  </Paper>
</template>
