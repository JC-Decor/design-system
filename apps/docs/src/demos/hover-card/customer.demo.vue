<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Anchor, Avatar, Badge, Group, HoverCard, HoverCardDropdown, HoverCardTarget, Stack, Text } from '@jcdecor/vue';
</script>

<template>
  <Text fz="sm">
    Pedido feito por
    <HoverCard :width="280" position="bottom" :open-delay="150">
      <HoverCardTarget>
        <Anchor component="button" fz="sm">Ana Ribeiro</Anchor>
      </HoverCardTarget>
      <HoverCardDropdown>
        <Group wrap="nowrap" align="flex-start">
          <Avatar name="Ana Ribeiro" />
          <Stack :gap="2">
            <Text :fw="600" fz="sm">Ana Ribeiro</Text>
            <Text fz="xs" c="var(--ds-text-3)">Cliente desde mar/2023 · São Paulo, SP</Text>
            <Group :gap="6" :mt="6">
              <Badge size="sm" color="evergreen">12 pedidos</Badge>
              <Badge size="sm">VIP</Badge>
            </Group>
          </Stack>
        </Group>
      </HoverCardDropdown>
    </HoverCard>
    em 02/10/2026.
  </Text>
</template>
