<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Button, Popover, PopoverDropdown, PopoverTarget, SimpleGrid, Text } from '@jcdecor/vue';

const positions = ['top-start', 'top', 'top-end', 'left', 'bottom', 'right'] as const;
</script>

<template>
  <SimpleGrid :cols="3" spacing="xs">
    <Popover v-for="position in positions" :key="position" :position="position" with-arrow>
      <PopoverTarget>
        <Button variant="default" size="sm" full-width>{{ position }}</Button>
      </PopoverTarget>
      <PopoverDropdown>
        <Text fz="sm">
          Popover em <b>{{ position }}</b>
        </Text>
      </PopoverDropdown>
    </Popover>
  </SimpleGrid>
</template>
