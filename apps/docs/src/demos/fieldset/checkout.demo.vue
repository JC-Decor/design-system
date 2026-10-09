<script setup lang="ts">
import { Button, Fieldset, Grid, GridCol, Group, MaskInput, Radio, RadioGroup, Stack, TextInput } from '@jcdecor/vue';
</script>

<template>
  <Stack w="100%">
    <Fieldset legend="Entrega">
      <Grid type="container" :breakpoints="{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }">
        <GridCol :span="{ base: 12, sm: 4 }">
          <MaskInput label="CEP" mask="99999-999" placeholder="00000-000" input-mode="numeric" with-asterisk />
        </GridCol>
        <GridCol :span="{ base: 12, sm: 8 }">
          <TextInput label="Rua" placeholder="Av. Paulista" with-asterisk />
        </GridCol>
        <GridCol :span="{ base: 12, sm: 4 }">
          <TextInput label="Número" placeholder="1000" with-asterisk />
        </GridCol>
        <GridCol :span="{ base: 12, sm: 8 }">
          <TextInput label="Complemento" placeholder="Apto 42" />
        </GridCol>
      </Grid>
    </Fieldset>
    <Fieldset legend="Pagamento">
      <RadioGroup default-value="pix" aria-label="Forma de pagamento">
        <Group>
          <Radio value="pix" label="Pix (5% off)" />
          <Radio value="cartao" label="Cartão de crédito" />
        </Group>
      </RadioGroup>
    </Fieldset>
    <Group justify="flex-end">
      <Button variant="outline">Voltar</Button>
      <Button>Finalizar pedido</Button>
    </Group>
  </Stack>
</template>
