<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { ref } from 'vue';
import { Loader, Paper, ScrollArea, Text } from '@jcdecor/vue';

const items = ref(10);
const loading = ref(false);

function loadMore() {
  if (loading.value || items.value >= 40) return;
  loading.value = true;
  setTimeout(() => {
    items.value += 10;
    loading.value = false;
  }, 600);
}
</script>

<template>
  <Paper with-border w="100%">
    <ScrollArea :h="240" px="md" @bottom-reached="loadMore">
      <Text v-for="i in items" :key="i" fz="sm" py="xs" :style="{ borderBottom: '1px solid var(--ds-border-soft)' }">
        Avaliação #{{ i }} — produto chegou bem embalado
      </Text>
      <Loader v-if="loading" size="sm" my="sm" mx="auto" display="block" />
    </ScrollArea>
  </Paper>
</template>
