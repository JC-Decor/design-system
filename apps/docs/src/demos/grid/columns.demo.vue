<script setup lang="ts">
import { Grid, GridCol, Paper, Text } from '@jcdecor/vue';
</script>

<template>
  <Grid gap="lg" w="100%">
    <GridCol :span="{ base: 12, md: 8 }">
      <Paper with-border p="lg" h="100%">
        <Text :fw="600">Conteúdo principal</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          <span v-pre>span={{ base: 12, md: 8 }}</span> — detalhes do pedido, itens e endereço de entrega.
        </Text>
      </Paper>
    </GridCol>
    <GridCol :span="{ base: 12, md: 4 }">
      <Paper with-border p="lg" h="100%" bg="var(--ds-surface-2)">
        <Text :fw="600">Resumo</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          <span v-pre>span={{ base: 12, md: 4 }}</span> — subtotal, frete e cupom.
        </Text>
      </Paper>
    </GridCol>
    <GridCol v-for="n in 3" :key="n" :span="{ base: 12, sm: 4 }">
      <Paper with-border p="md">
        <Text fz="sm" c="var(--ds-text-2)"><span v-pre>span={{ base: 12, sm: 4 }}</span></Text>
      </Paper>
    </GridCol>
  </Grid>
</template>
