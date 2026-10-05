<script setup lang="ts">
import { ref } from 'vue';
import { SimpleGrid, Text, ThemeIcon, UnstyledButton } from '@jcdecor/vue';
import { IconBuildingStore, IconTruck } from '@tabler/icons-vue';
import classes from './option-cards.module.css';

const opcoes = [
  { value: 'entrega', titulo: 'Receber em casa', descricao: 'Em até 5 dias úteis · R$ 29,90', icon: IconTruck },
  { value: 'retirada', titulo: 'Retirar na loja', descricao: 'Pronto em 2 horas · Grátis', icon: IconBuildingStore },
];

const value = ref('entrega');
</script>

<template>
  <SimpleGrid type="container" :cols="{ base: 1, '560px': 2 }" role="radiogroup" aria-label="Forma de entrega">
    <UnstyledButton
      v-for="opcao in opcoes"
      :key="opcao.value"
      :class="classes.card"
      role="radio"
      :aria-checked="value === opcao.value"
      :data-checked="value === opcao.value || undefined"
      @click="value = opcao.value"
    >
      <ThemeIcon variant="light" size="lg" radius="sm">
        <component :is="opcao.icon" :size="20" />
      </ThemeIcon>
      <div>
        <Text :fw="600">{{ opcao.titulo }}</Text>
        <Text fz="sm" c="var(--ds-text-2)">{{ opcao.descricao }}</Text>
      </div>
    </UnstyledButton>
  </SimpleGrid>
</template>
