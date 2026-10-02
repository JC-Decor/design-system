import { DataList, SimpleGrid } from '@jcdecor/ui';

const pedido = [
  { label: 'Pedido', value: '#10482' },
  { label: 'Data da compra', value: '02/10/2026' },
  { label: 'Pagamento', value: 'Pix · aprovado' },
  { label: 'Entrega', value: 'Até 08/10/2026' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} w="100%">
      {pedido.map((item) => (
        <DataList key={item.label} orientation="vertical">
          <DataList.Item>
            <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
            <DataList.ItemValue>{item.value}</DataList.ItemValue>
          </DataList.Item>
        </DataList>
      ))}
    </SimpleGrid>
  );
}
