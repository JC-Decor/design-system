import { useEffect, useState } from 'react';
import { Card, Group, Icon, RollingNumber, SimpleGrid, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  const [presentes, setPresentes] = useState(1043);
  const [horas, setHoras] = useState(312.5);

  // Simula batidas de ponto chegando durante a manhã
  useEffect(() => {
    const id = setInterval(() => {
      setPresentes((p) => Math.min(1284, p + Math.ceil(Math.random() * 6)));
      setHoras((h) => h + Math.round(Math.random() * 40) / 10);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 2 }} w="100%">
      <Card>
        <Text fz="sm" c="var(--ds-text-3)">
          Ponto registrado hoje
        </Text>
        <RollingNumber value={presentes} suffix=" pessoas" fz="var(--type-headline-lg)" fw={700} mt={4} />
        <Group gap={4} mt="xs" c="var(--ds-success)" fz="sm" fw={600}>
          <Icon name="arrow-up" size={16} /> 81% do quadro
        </Group>
      </Card>
      <Card>
        <Text fz="sm" c="var(--ds-text-3)">
          Horas extras no mês
        </Text>
        <RollingNumber value={horas} suffix=" h" decimalScale={1} fixedDecimalScale fz="var(--type-headline-lg)" fw={700} mt={4} />
        <Text fz="sm" c="var(--ds-text-3)" mt="xs">
          Atualiza a cada 2 segundos
        </Text>
      </Card>
    </SimpleGrid>
  );
}
