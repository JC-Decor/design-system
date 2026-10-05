<script lang="ts">
export const meta = { centered: true };
</script>

<script setup lang="ts">
import { Button, Checkbox, Grid, GridCol, Group, Modal, Select, TextInput } from '@jcdecor/vue';
import { useDisclosure } from '@mantine-vue/hooks';
import { IconMapPin } from '@tabler/icons-vue';

const states = ['BA', 'MG', 'PR', 'RJ', 'RS', 'SC', 'SP'];

const [opened, { open, close }] = useDisclosure(false);
</script>

<template>
  <Modal :opened="opened" title="Novo endereço de entrega" size="lg" @close="close">
    <form @submit.prevent="close">
      <Grid type="container" :breakpoints="{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }">
        <GridCol :span="{ base: 12, sm: 4 }">
          <TextInput label="CEP" placeholder="00000-000" required data-autofocus />
        </GridCol>
        <GridCol :span="{ base: 12, sm: 8 }">
          <TextInput label="Rua" placeholder="Av. Paulista" required />
        </GridCol>
        <GridCol :span="{ base: 6, sm: 4 }">
          <TextInput label="Número" placeholder="1000" required />
        </GridCol>
        <GridCol :span="{ base: 6, sm: 8 }">
          <TextInput label="Complemento" placeholder="Apto 42, bloco B" />
        </GridCol>
        <GridCol :span="{ base: 8, sm: 8 }">
          <TextInput label="Cidade" placeholder="São Paulo" required />
        </GridCol>
        <GridCol :span="{ base: 4, sm: 4 }">
          <Select label="UF" :data="states" default-value="SP" :allow-deselect="false" />
        </GridCol>
      </Grid>
      <Checkbox mt="md" label="Usar como endereço principal" default-checked />
      <Group justify="flex-end" mt="xl">
        <Button variant="subtle" @click="close">Cancelar</Button>
        <Button type="submit">Salvar endereço</Button>
      </Group>
    </form>
  </Modal>

  <Button @click="open">
    <template #leftSection><IconMapPin :size="18" /></template>
    Adicionar endereço
  </Button>
</template>
