import { Tabs, Text } from '@jcdecor/ui';
import { IconInfoCircle, IconRuler, IconStar, IconTruckDelivery } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Tabs defaultValue="descricao" w="100%">
      <Tabs.List>
        <Tabs.Tab value="descricao" leftSection={<IconInfoCircle size={16} />}>
          Descrição
        </Tabs.Tab>
        <Tabs.Tab value="medidas" leftSection={<IconRuler size={16} />}>
          Medidas
        </Tabs.Tab>
        <Tabs.Tab value="entrega" leftSection={<IconTruckDelivery size={16} />}>
          Entrega
        </Tabs.Tab>
        <Tabs.Tab value="avaliacoes" leftSection={<IconStar size={16} />}>
          Avaliações (48)
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="descricao" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Piso vinílico em réguas com encaixe click, resistente à água e com manta acústica integrada.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="medidas" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Régua de 1220 × 180 mm, espessura de 5 mm. Caixa com 10 réguas (2,2 m²).
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="entrega" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Frete grátis para o Sudeste em compras acima de R$ 499.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="avaliacoes" pt="md">
        <Text fz="sm" c="var(--ds-text-2)">
          Nota média 4,8 de 5.
        </Text>
      </Tabs.Panel>
    </Tabs>
  );
}
