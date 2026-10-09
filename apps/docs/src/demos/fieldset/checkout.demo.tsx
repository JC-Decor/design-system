import { Button, Fieldset, Grid, Group, MaskInput, Radio, Stack, TextInput } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack w="100%">
      <Fieldset legend="Entrega">
        <Grid type="container" breakpoints={{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }}>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <MaskInput label="CEP" mask="99999-999" placeholder="00000-000" inputMode="numeric" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <TextInput label="Rua" placeholder="Av. Paulista" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <TextInput label="Número" placeholder="1000" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 8 }}>
            <TextInput label="Complemento" placeholder="Apto 42" />
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Fieldset legend="Pagamento">
        <Radio.Group defaultValue="pix" aria-label="Forma de pagamento">
          <Group>
            <Radio value="pix" label="Pix (5% off)" />
            <Radio value="cartao" label="Cartão de crédito" />
          </Group>
        </Radio.Group>
      </Fieldset>
      <Group justify="flex-end">
        <Button variant="outline">Voltar</Button>
        <Button>Finalizar pedido</Button>
      </Group>
    </Stack>
  );
}
