<script setup lang="ts">
import { FileInput, SimpleGrid } from '@jcdecor/vue';
import { IconFileInvoice } from '@tabler/icons-vue';
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 3 }" w="100%">
    <FileInput label="Nota fiscal" placeholder="Anexar XML" accept=".xml" with-asterisk>
      <template #leftSection><IconFileInvoice :size="16" /></template>
    </FileInput>
    <FileInput label="Comprovante" placeholder="Anexar arquivo" error="Envie o comprovante de pagamento" />
    <FileInput label="Contrato" placeholder="Bloqueado após assinatura" disabled />
  </SimpleGrid>
</template>
