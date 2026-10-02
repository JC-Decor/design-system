import { Button, Center, Stack, Text, ThemeIcon } from '@jcdecor/ui';
import { IconShoppingCart } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Center mih={240} w="100%">
      <Stack align="center" gap="xs" maw={320} ta="center">
        <ThemeIcon size={48} radius="xl" variant="light">
          <IconShoppingCart size={24} />
        </ThemeIcon>
        <Text fw={600}>Seu carrinho está vazio</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          Explore pisos, papéis de parede e cortinas para transformar seus ambientes.
        </Text>
        <Button mt="sm">Ver produtos</Button>
      </Stack>
    </Center>
  );
}
