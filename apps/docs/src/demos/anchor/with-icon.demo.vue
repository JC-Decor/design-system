<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Anchor, Group, Stack } from '@jcdecor/vue';
import { IconArrowRight, IconBrandWhatsapp, IconExternalLink } from '@tabler/icons-vue';
</script>

<template>
  <Stack gap="sm" align="flex-start">
    <Anchor href="#colecao" fz="sm">
      <Group :gap="4" component="span">
        Ver toda a coleção <IconArrowRight :size="16" />
      </Group>
    </Anchor>
    <Anchor href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" fz="sm">
      <Group :gap="4" component="span">
        <IconBrandWhatsapp :size="16" /> Falar com um consultor
      </Group>
    </Anchor>
    <Anchor href="https://www.jcdecor.com.br" target="_blank" rel="noopener noreferrer" fz="sm" c="var(--ds-text-2)">
      <Group :gap="4" component="span">
        jcdecor.com.br <IconExternalLink :size="14" />
      </Group>
    </Anchor>
  </Stack>
</template>
