import { Button, Fieldset, Grid, Group, MaskInput, Radio, Stack, Textarea } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack w="100%">
      <Fieldset legend="Período">
        <Grid type="container" breakpoints={{ xs: '420px', sm: '560px', md: '720px', lg: '900px', xl: '1100px' }}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <MaskInput label="Início" mask="99/99/9999" placeholder="dd/mm/aaaa" inputMode="numeric" withAsterisk />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <MaskInput label="Retorno" mask="99/99/9999" placeholder="dd/mm/aaaa" inputMode="numeric" withAsterisk />
          </Grid.Col>
          <Grid.Col span={12}>
            <Textarea label="Observação para o gestor" placeholder="Ex.: cobertura combinada com a Júlia" autosize minRows={2} />
          </Grid.Col>
        </Grid>
      </Fieldset>
      <Fieldset legend="Abono pecuniário">
        <Radio.Group defaultValue="nao" aria-label="Abono pecuniário">
          <Group>
            <Radio value="nao" label="Não vender dias" />
            <Radio value="sim" label="Vender 10 dias" />
          </Group>
        </Radio.Group>
      </Fieldset>
      <Group justify="flex-end">
        <Button variant="ghost">Cancelar</Button>
        <Button>Enviar para aprovação</Button>
      </Group>
    </Stack>
  );
}
