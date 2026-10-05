<script setup lang="ts">
import { Stack, Tabs, TabsList, TabsTab, Text } from '@jcdecor/vue';

const variants = ['default', 'outline', 'pills'] as const;
</script>

<template>
  <Stack gap="xl">
    <div v-for="variant in variants" :key="variant">
      <Text fz="xs" :fw="600" c="var(--ds-text-3)" mb="xs">variant="{{ variant }}"</Text>
      <Tabs :variant="variant" default-value="pisos">
        <TabsList>
          <TabsTab value="pisos">Pisos</TabsTab>
          <TabsTab value="papel">Papel de parede</TabsTab>
          <TabsTab value="cortinas">Cortinas</TabsTab>
          <TabsTab value="paineis" disabled>Painéis (em breve)</TabsTab>
        </TabsList>
      </Tabs>
    </div>
  </Stack>
</template>
