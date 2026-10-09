import { useState } from 'react';
import { ActionIcon, Button, Group, NumberInput, Popover, Select, Stack, Text } from '@jcdecor/ui';
import { IconPencil } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const brl = (value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function Demo() {
  const [opened, setOpened] = useState(false);
  const [price, setPrice] = useState(249.9);
  const [draft, setDraft] = useState<number | string>(price);

  return (
    <Group gap="xs">
      <Text fw={700} fz="var(--type-headline-sm)" c="var(--ds-primary)">
        {brl(price)}
      </Text>
      <Popover opened={opened} onChange={setOpened} width={280} position="bottom-start" withArrow trapFocus returnFocus>
        <Popover.Target>
          <ActionIcon variant="subtle" aria-label="Editar preço" onClick={() => setOpened((value) => !value)}>
            <IconPencil size={18} />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setPrice(Number(draft) || price);
              setOpened(false);
            }}
          >
            <Stack gap="sm">
              <Text fz="sm" fw={600}>
                Editar preço
              </Text>
              <NumberInput
                size="sm"
                label="Preço por caixa"
                value={draft}
                onChange={setDraft}
                prefix="R$ "
                decimalSeparator=","
                thousandSeparator="."
                decimalScale={2}
                fixedDecimalScale
                min={0}
                data-autofocus
              />
              <Select size="sm" label="Vale para" data={['Todas as lojas', 'Somente e-commerce', 'Somente lojas físicas']} defaultValue="Todas as lojas" comboboxProps={{ withinPortal: false }} />
              <Group justify="flex-end" gap="xs">
                <Button size="sm" variant="subtle" onClick={() => setOpened(false)}>
                  Cancelar
                </Button>
                <Button size="sm" type="submit">
                  Salvar
                </Button>
              </Group>
            </Stack>
          </form>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
