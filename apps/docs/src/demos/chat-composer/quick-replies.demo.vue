<script setup lang="ts">
import { ref } from 'vue';
import { ActionIcon, Badge, Group, Menu, MenuDropdown, MenuItem, MenuLabel, MenuTarget, Paper, Tooltip } from '@jcdecor/vue';
import { ChatComposer } from '@jcdecor/vue/chat';
import { IconBolt } from '@tabler/icons-vue';

const shortcuts = ['Prazo de entrega', 'Medidas', 'Status do pedido', 'Pix'];
const quickReplies = [
  'Qual o prazo de entrega para o seu CEP?',
  'Pode me enviar as medidas do ambiente?',
  'O pedido #48213 já está em separação.',
  'Pagando no Pix você ganha 5% de desconto.',
];

const value = ref('');
</script>

<template>
  <Paper with-border radius="md" style="overflow: hidden">
    <Group :gap="6" px="sm" pt="sm" bg="var(--ds-surface)">
      <Badge
        v-for="(label, index) in shortcuts"
        :key="label"
        component="button"
        variant="outline"
        color="horizon"
        style="cursor: pointer"
        @click="value = quickReplies[index]"
      >
        {{ label }}
      </Badge>
    </Group>
    <ChatComposer v-model="value">
      <template #leftSection>
        <Menu position="top-start" within-portal>
          <MenuTarget>
            <Tooltip label="Respostas rápidas">
              <ActionIcon size="lg" variant="subtle" aria-label="Respostas rápidas">
                <IconBolt :size="20" />
              </ActionIcon>
            </Tooltip>
          </MenuTarget>
          <MenuDropdown>
            <MenuLabel>Respostas rápidas</MenuLabel>
            <MenuItem v-for="reply in quickReplies" :key="reply" @click="value = reply">
              {{ reply }}
            </MenuItem>
          </MenuDropdown>
        </Menu>
      </template>
    </ChatComposer>
  </Paper>
</template>
