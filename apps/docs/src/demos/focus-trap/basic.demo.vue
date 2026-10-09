<script lang="ts">
export const meta = { maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, FocusTrap, Paper, Stack, TextInput } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';

const [active, { toggle }] = useDisclosure(false);
</script>

<template>
  <Stack gap="md" w="100%">
    <Button :variant="active ? 'outline' : 'filled'" :style="{ alignSelf: 'flex-start' }" @click="toggle">
      {{ active ? 'Desativar' : 'Ativar' }} focus trap
    </Button>
    <FocusTrap :active="active">
      <Paper with-border p="md">
        <Stack gap="sm">
          <TextInput label="CEP" placeholder="00000-000" />
          <TextInput label="Número" placeholder="120" />
          <Button variant="outline">Calcular frete</Button>
        </Stack>
      </Paper>
    </FocusTrap>
  </Stack>
</template>
