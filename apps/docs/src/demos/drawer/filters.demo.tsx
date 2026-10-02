import { Button, Checkbox, Drawer, Group, RangeSlider, Stack, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Filtros" position="right">
        <Stack gap="lg">
          <Checkbox.Group label="Categoria" defaultValue={['papel']}>
            <Stack gap="xs" mt="xs">
              <Checkbox value="papel" label="Papel de parede" />
              <Checkbox value="tecido" label="Tecidos" />
              <Checkbox value="cortina" label="Cortinas" />
            </Stack>
          </Checkbox.Group>
          <div>
            <Text fz="sm" fw={500} c="var(--ds-text-2)" mb="sm">
              Preço (R$)
            </Text>
            <RangeSlider min={0} max={500} defaultValue={[50, 300]} marks={[{ value: 0, label: '0' }, { value: 500, label: '500' }]} />
          </div>
          <Group grow mt="md">
            <Button variant="outline" onClick={close}>
              Limpar
            </Button>
            <Button onClick={close}>Ver 86 produtos</Button>
          </Group>
        </Stack>
      </Drawer>

      <Button variant="outline" leftSection={<IconAdjustmentsHorizontal size={18} />} onClick={open}>
        Filtros
      </Button>
    </>
  );
}
