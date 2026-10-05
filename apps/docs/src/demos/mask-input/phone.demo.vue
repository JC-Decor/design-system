<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { MaskInput } from '@jcdecor/vue';
import { IconBrandWhatsapp } from '@tabler/icons-vue';

const modify = (value: string) => (value.replace(/\D/g, '').length > 10 ? { mask: '(99) 99999-9999' } : undefined);
</script>

<template>
  <MaskInput
    label="Celular / WhatsApp"
    description="Fixo com 8 dígitos ou celular com 9"
    mask="(99) 9999-99999"
    :modify="modify"
    placeholder="(11) 91234-5678"
    input-mode="tel"
  >
    <template #leftSection><IconBrandWhatsapp :size="16" /></template>
  </MaskInput>
</template>
