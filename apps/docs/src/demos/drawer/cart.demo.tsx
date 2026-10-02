import { useState } from 'react';
import { ActionIcon, Button, Divider, Drawer, Group, Image, Indicator, NumberInput, Stack, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconShoppingCart, IconTrash } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  seed: string;
}

const initialItems: CartItem[] = [
  { id: '1', name: 'Papel de parede Linho Areia', variant: 'Rolo 10 m', price: 189.9, quantity: 4, seed: 'linho' },
  { id: '2', name: 'Piso vinílico Carvalho Natural', variant: 'Caixa 2,6 m²', price: 249.9, quantity: 6, seed: 'carvalho' },
  { id: '3', name: 'Cortina blackout Grafite', variant: '2,80 × 2,30 m', price: 329, quantity: 1, seed: 'cortina' },
];

const brl = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const [items, setItems] = useState(initialItems);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const update = (id: string, quantity: number) => setItems((current) => current.map((item) => (item.id === id ? { ...item, quantity } : item)));
  const remove = (id: string) => setItems((current) => current.filter((item) => item.id !== id));

  return (
    <>
      <Drawer opened={opened} onClose={close} title={`Seu carrinho (${count})`} position="right" size="md">
        <Stack gap="md">
          {items.map((item) => (
            <Group key={item.id} wrap="nowrap" align="flex-start">
              <Image src={`https://picsum.photos/seed/${item.seed}/160/160`} w={64} h={64} radius="sm" alt="" />
              <Stack gap={4} style={{ flex: 1 }}>
                <Text fz="sm" fw={600} lh={1.3}>
                  {item.name}
                </Text>
                <Text fz="xs" c="var(--ds-text-3)">
                  {item.variant}
                </Text>
                <Group gap="xs" mt={4}>
                  <NumberInput
                    size="xs"
                    w={72}
                    min={1}
                    max={99}
                    value={item.quantity}
                    onChange={(value) => update(item.id, Number(value) || 1)}
                    aria-label={`Quantidade de ${item.name}`}
                  />
                  <ActionIcon variant="subtle" color="gray" aria-label={`Remover ${item.name}`} onClick={() => remove(item.id)}>
                    <IconTrash size={16} />
                  </ActionIcon>
                </Group>
              </Stack>
              <Text fz="sm" fw={600}>
                {brl(item.price * item.quantity)}
              </Text>
            </Group>
          ))}
          {items.length === 0 && (
            <Text fz="sm" c="var(--ds-text-3)" ta="center" py="xl">
              Seu carrinho está vazio.
            </Text>
          )}

          <Divider />
          <Group justify="space-between">
            <Text fz="sm" c="var(--ds-text-2)">
              Frete
            </Text>
            <Text fz="sm" fw={600} c="var(--ds-success)">
              Grátis
            </Text>
          </Group>
          <Group justify="space-between">
            <Text fw={600}>Total</Text>
            <Text fw={700} fz="var(--type-headline-sm)" c="var(--ds-primary)">
              {brl(total)}
            </Text>
          </Group>
          <Text fz="xs" c="var(--ds-text-3)" mt={-12} ta="right">
            ou 10× de {brl(total / 10)} sem juros
          </Text>
          <Button size="lg" fullWidth disabled={items.length === 0} onClick={close}>
            Finalizar compra
          </Button>
          <Button variant="subtle" fullWidth onClick={close}>
            Continuar comprando
          </Button>
        </Stack>
      </Drawer>

      <Indicator label={count} size={18} disabled={count === 0}>
        <Button variant="outline" leftSection={<IconShoppingCart size={18} />} onClick={open}>
          Carrinho
        </Button>
      </Indicator>
    </>
  );
}
