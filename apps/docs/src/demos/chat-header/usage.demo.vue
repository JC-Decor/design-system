<script setup lang="ts">
import { ActionIcon, Group, Paper, Tooltip } from '@jcdecor/vue';
import { ChatHeader } from '@jcdecor/vue/chat';
import { IconDotsVertical, IconPhone } from '@tabler/icons-vue';
</script>

<template>
  <Paper with-border radius="md" style="overflow: hidden">
    <ChatHeader
      title="Ana · Atendimento JC Decor"
      subtitle="Online agora · responde em ~2 min"
      avatar="https://i.pravatar.cc/80?img=47"
      online
    >
      <template #actions>
        <Group :gap="4">
          <Tooltip label="Ligar">
            <ActionIcon variant="subtle" size="lg" aria-label="Ligar">
              <IconPhone :size="20" />
            </ActionIcon>
          </Tooltip>
          <ActionIcon variant="subtle" size="lg" aria-label="Mais opções">
            <IconDotsVertical :size="20" />
          </ActionIcon>
        </Group>
      </template>
    </ChatHeader>
  </Paper>
</template>
