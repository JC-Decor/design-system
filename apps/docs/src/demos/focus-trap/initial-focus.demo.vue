<script lang="ts">
export const meta = { maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, FocusTrap, FocusTrapInitialFocus, Paper, Stack, Text, TextInput } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [active, { toggle }] = useDisclosure(false);
</script>

<template>
  <Stack gap="md" w="100%">
    <Button :style="{ alignSelf: 'flex-start' }" @click="toggle">
      {{ active ? 'Fechar' : 'Editar endereço' }}
    </Button>
    <FocusTrap v-if="active" active>
      <Paper with-border p="md">
        <Text fz="sm" c="var(--ds-text-2)" mb="sm">O foco inicial vai para o campo Complemento.</Text>
        <Stack gap="sm">
          <TextInput label="Rua" default-value="Rua das Palmeiras" />
          <FocusTrapInitialFocus />
          <TextInput label="Complemento" placeholder="Apto, bloco…" />
        </Stack>
      </Paper>
    </FocusTrap>
  </Stack>
</template>
