import { Group, SimpleGrid, Text, ThemeIcon } from '@jcdecor/ui';
import { IconCreditCard, IconRefresh, IconTruckDelivery } from '@tabler/icons-react';

const beneficios = [
  { icon: IconTruckDelivery, titulo: 'Frete grátis', texto: 'Acima de R$ 499 no Sul e Sudeste' },
  { icon: IconRefresh, titulo: 'Devolução fácil', texto: 'Até 30 dias, com coleta grátis' },
  { icon: IconCreditCard, titulo: '10x sem juros', texto: 'Ou 5% de desconto no Pix' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      {beneficios.map(({ icon: Icon, titulo, texto }) => (
        <Group key={titulo} wrap="nowrap" gap="sm">
          <ThemeIcon variant="light" size="xl">
            <Icon size={22} />
          </ThemeIcon>
          <div>
            <Text fw={600} fz="sm">
              {titulo}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              {texto}
            </Text>
          </div>
        </Group>
      ))}
    </SimpleGrid>
  );
}
