import { useEffect, useState } from 'react';
import { Group, Paper, RollingNumber, SimpleGrid, Text } from '@jcdecor/ui';
import { IconTrendingUp } from '@tabler/icons-react';

export default function Demo() {
  const [vendas, setVendas] = useState(184320.5);
  const [pedidos, setPedidos] = useState(1287);

  useEffect(() => {
    const id = setInterval(() => {
      setVendas((v) => v + Math.round(Math.random() * 90000) / 100);
      setPedidos((p) => p + Math.ceil(Math.random() * 4));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <Paper withBorder p="lg">
        <Text fz="sm" c="var(--ds-text-3)">
          Vendas hoje
        </Text>
        <RollingNumber
          value={vendas}
          prefix="R$ "
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          fixedDecimalScale
          fz="var(--type-headline-md)"
          fw={700}
          mt={4}
        />
        <Group gap={4} mt="xs" c="var(--ds-success)" fz="sm" fw={600}>
          <IconTrendingUp size={16} /> 12,4% vs. ontem
        </Group>
      </Paper>
      <Paper withBorder p="lg">
        <Text fz="sm" c="var(--ds-text-3)">
          Pedidos
        </Text>
        <RollingNumber value={pedidos} thousandSeparator="." fz="var(--type-headline-md)" fw={700} mt={4} />
        <Text fz="sm" c="var(--ds-text-3)" mt="xs">
          Atualiza a cada 2 segundos
        </Text>
      </Paper>
    </SimpleGrid>
  );
}
