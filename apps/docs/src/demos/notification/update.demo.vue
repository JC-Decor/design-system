<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { h } from 'vue';
import { Button } from '@jcdecor/vue';
import { notifications } from '@mantine-vue/notifications';
import { IconCheck } from '@tabler/icons-vue';

function exportar() {
  const id = notifications.show({
    loading: true,
    title: 'Exportando relatório',
    message: 'Gerando planilha de vendas de setembro…',
    autoClose: false,
    withCloseButton: false,
  });

  setTimeout(() => {
    notifications.update({
      id,
      color: 'evergreen',
      title: 'Relatório pronto',
      message: 'vendas-setembro-2026.xlsx foi baixado.',
      icon: h(IconCheck, { size: 18 }),
      loading: false,
      autoClose: 3000,
    });
  }, 2000);
}
</script>

<template>
  <Button @click="exportar">Exportar relatório</Button>
</template>
