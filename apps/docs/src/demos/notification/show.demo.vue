<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { h } from 'vue';
import { Button, Group } from '@jcdecor/vue';
import { notifications } from '@mantine-vue/notifications';
import { IconCheck, IconX } from '@tabler/icons-vue';

function showSuccess() {
  notifications.show({
    title: 'Adicionado ao carrinho',
    message: 'Cortina Linho Cru 2,80m × 2',
    color: 'evergreen',
    icon: h(IconCheck, { size: 18 }),
  });
}

function showError() {
  notifications.show({
    title: 'Cupom inválido',
    message: 'O cupom JCMAIO expirou em 31/05.',
    color: 'danger',
    icon: h(IconX, { size: 18 }),
  });
}

function showDefault() {
  notifications.show({
    title: 'Nova mensagem',
    message: 'Carla Mendes enviou uma pergunta sobre o painel ripado.',
  });
}
</script>

<template>
  <Group>
    <Button variant="outline" @click="showSuccess">Sucesso</Button>
    <Button variant="outline" @click="showError">Erro</Button>
    <Button variant="outline" @click="showDefault">Padrão</Button>
  </Group>
</template>
