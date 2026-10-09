import { Radio, Stack } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Radio.Group label="Forma de pagamento" description="Pix tem 5% de desconto" defaultValue="pix" withAsterisk>
      <Stack mt="xs" gap="sm">
        <Radio value="pix" label="Pix" description="Aprovação imediata" />
        <Radio value="cartao" label="Cartão de crédito" description="Em até 10x sem juros" />
        <Radio value="boleto" label="Boleto bancário" description="Indisponível para pedidos sob medida" disabled />
      </Stack>
    </Radio.Group>
  );
}
