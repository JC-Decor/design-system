<script lang="ts">
export const meta = { centered: true, maxWidth: 420 };
</script>

<script setup lang="ts">
import { Cascader, Stack, type CascaderOption } from '@jcdecor/vue';

const regioes: CascaderOption[] = [
  {
    value: 'sp',
    label: 'São Paulo',
    children: [
      { value: 'sao-paulo', label: 'São Paulo', children: [{ value: 'moema', label: 'Moema' }, { value: 'pinheiros', label: 'Pinheiros' }] },
      { value: 'campinas', label: 'Campinas', children: [{ value: 'cambui', label: 'Cambuí' }] },
    ],
  },
  {
    value: 'mg',
    label: 'Minas Gerais',
    children: [{ value: 'bh', label: 'Belo Horizonte', children: [{ value: 'savassi', label: 'Savassi' }, { value: 'lourdes', label: 'Lourdes' }] }],
  },
];
</script>

<template>
  <Stack>
    <Cascader
      label="Busca por caminho"
      placeholder="Digite um bairro ou cidade"
      :data="regioes"
      searchable
      separator=" › "
      nothing-found-message="Não entregamos nesta região"
    />
    <Cascader
      label="Abrir colunas no hover"
      placeholder="Passe o mouse nas opções"
      :data="regioes"
      expand-trigger="hover"
      separator=" › "
    />
  </Stack>
</template>
