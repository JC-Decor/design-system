<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, CopyButton, Group, Paper, Text } from '@jcdecor/vue';
import { IconCheck, IconTicket } from '@tabler/icons-vue';
</script>

<template>
  <Paper with-border p="md" radius="md">
    <Group justify="space-between" wrap="nowrap">
      <div>
        <Text fz="xs" c="var(--ds-text-3)" tt="uppercase" :fw="600">Cupom de primeira compra</Text>
        <Text :fw="700" ff="monospace" fz="lg">JCDECOR10</Text>
      </div>
      <CopyButton value="JCDECOR10" v-slot="{ copied, copy }">
        <Button :variant="copied ? 'light' : 'accent'" :color="copied ? 'evergreen' : undefined" @click="copy">
          <template #leftSection>
            <IconCheck v-if="copied" :size="16" />
            <IconTicket v-else :size="16" />
          </template>
          {{ copied ? 'Copiado!' : 'Copiar cupom' }}
        </Button>
      </CopyButton>
    </Group>
  </Paper>
</template>
