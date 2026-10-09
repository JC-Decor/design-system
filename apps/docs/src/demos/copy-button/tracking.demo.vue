<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { ActionIcon, CopyButton, Group, Text, Tooltip } from '@jcdecor/vue';
import { IconCheck, IconCopy } from '@tabler/icons-vue';

const rastreio = 'BR123456789JC';
</script>

<template>
  <Group gap="xs">
    <Text fz="sm" c="var(--ds-text-2)">Código de rastreio:</Text>
    <Text fz="sm" :fw="600" ff="monospace">{{ rastreio }}</Text>
    <CopyButton :value="rastreio" :timeout="2000" v-slot="{ copied, copy }">
      <Tooltip :label="copied ? 'Copiado' : 'Copiar código'" with-arrow position="right">
        <ActionIcon :color="copied ? 'evergreen' : undefined" variant="subtle" aria-label="Copiar código de rastreio" @click="copy">
          <IconCheck v-if="copied" :size="16" />
          <IconCopy v-else :size="16" />
        </ActionIcon>
      </Tooltip>
    </CopyButton>
  </Group>
</template>
