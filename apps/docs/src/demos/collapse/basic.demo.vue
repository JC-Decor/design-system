<script lang="ts">
export const meta = { maxWidth: 480 };
</script>

<script setup lang="ts">
import { Button, Collapse, Stack, Text } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconChevronDown } from '@tabler/icons-vue';

const [opened, { toggle }] = useDisclosure(false);
</script>

<template>
  <Stack gap="sm" w="100%">
    <Button variant="subtle" :aria-expanded="opened" :style="{ alignSelf: 'flex-start' }" @click="toggle">
      <template #rightSection>
        <IconChevronDown :size="16" :style="{ transform: opened ? 'rotate(180deg)' : undefined, transition: 'transform 200ms' }" />
      </template>
      {{ opened ? 'Ocultar' : 'Ver' }} especificações técnicas
    </Button>
    <Collapse :expanded="opened">
      <Text fz="sm" c="var(--ds-text-2)">
        Piso vinílico em réguas de 18,4 × 122 cm, espessura de 4 mm, capa de uso de 0,3 mm e sistema de encaixe click. Indicado para
        áreas residenciais e comerciais de tráfego moderado. Garantia de 15 anos.
      </Text>
    </Collapse>
  </Stack>
</template>
