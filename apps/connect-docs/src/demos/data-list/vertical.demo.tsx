import { DataList, SimpleGrid } from '@jcdecor/connect-ui';

const solicitacao = [
  { label: 'Protocolo', value: 'FER-2026-0318' },
  { label: 'Enviada em', value: '02/10/2026' },
  { label: 'Período', value: '03/11 a 22/11' },
  { label: 'Situação', value: 'Aprovada pelo gestor' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 2, '560px': 4 }} w="100%">
      {solicitacao.map((item) => (
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
