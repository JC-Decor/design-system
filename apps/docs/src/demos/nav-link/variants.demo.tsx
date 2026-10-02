import { NavLink, SimpleGrid, Stack, Text } from '@jcdecor/ui';
import { IconShoppingBag } from '@tabler/icons-react';

const variants = ['light', 'filled', 'subtle'] as const;

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      {variants.map((variant) => (
        <Stack key={variant} gap={4}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)">
            variant="{variant}"
          </Text>
          <NavLink href="#" label="Pedidos" leftSection={<IconShoppingBag size={18} />} variant={variant} active />
          <NavLink href="#" label="Clientes" variant={variant} />
        </Stack>
      ))}
    </SimpleGrid>
  );
}
