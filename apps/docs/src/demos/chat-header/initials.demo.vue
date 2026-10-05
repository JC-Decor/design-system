<script setup lang="ts">
import { Button, Group, Paper, Stack, Tag } from '@jcdecor/vue';
import { ChatHeader } from '@jcdecor/vue/chat';
</script>

<template>
  <Stack>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatHeader avatar-name="Carlos Pereira" subtitle="Visto por último hoje às 09:14">
        <template #title>
          <Group :gap="8">
            Carlos Pereira
            <Tag tone="neutral" size="sm">Pedido #48213</Tag>
          </Group>
        </template>
        <template #actions>
          <Button size="xs" variant="light">Encerrar</Button>
        </template>
      </ChatHeader>
    </Paper>
    <Paper with-border radius="md" style="overflow: hidden">
      <ChatHeader title="Grupo · Instalação Marina" subtitle="Marina, Ana, Bruno e Lucas" />
    </Paper>
  </Stack>
</template>
