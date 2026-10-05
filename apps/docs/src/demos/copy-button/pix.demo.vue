<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, CopyButton, Stack, Text, Textarea } from '@jcdecor/vue';
import { IconCheck, IconCopy } from '@tabler/icons-vue';

const pix = '00020126580014BR.GOV.BCB.PIX0136jcdecor-pagamentos@exemplo.com5204000053039865406459.905802BR5913JC DECOR LTDA6009SAO PAULO62070503***6304ABCD';
</script>

<template>
  <Stack gap="sm">
    <Text fz="sm" c="var(--ds-text-2)">Pague R$ 459,90 com Pix copia e cola:</Text>
    <Textarea :model-value="pix" read-only autosize :min-rows="2" :styles="{ input: { fontFamily: 'monospace' } }" />
    <CopyButton :value="pix" v-slot="{ copied, copy }">
      <Button full-width color="evergreen" @click="copy">
        <template #leftSection>
          <IconCheck v-if="copied" :size="18" />
          <IconCopy v-else :size="18" />
        </template>
        {{ copied ? 'Código Pix copiado' : 'Copiar código Pix' }}
      </Button>
    </CopyButton>
  </Stack>
</template>
