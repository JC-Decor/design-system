import { Button, Checkbox, Drawer, Group, Icon, MultiSelect, SegmentedControl, Stack, Text } from '@jcdecor/connect-ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Filtrar colaboradores" position="right">
        <Stack gap="lg">
          <Checkbox.Group label="Status" defaultValue={['ativo']}>
            <Stack gap="xs" mt="xs">
              <Checkbox value="ativo" label="Ativo" />
              <Checkbox value="ferias" label="Em férias" />
              <Checkbox value="afastado" label="Afastado" />
            </Stack>
          </Checkbox.Group>
          <MultiSelect
            label="Equipe"
            placeholder="Todas as equipes"
            data={['Comercial', 'Financeiro', 'Logística', 'Marketing', 'Pessoas & Cultura']}
            defaultValue={['Comercial']}
          />
          <div>
            <Text fz="sm" fw={500} c="var(--ds-text-2)" mb="xs">
              Regime
            </Text>
            <SegmentedControl fullWidth data={['Todos', 'CLT', 'PJ', 'Estágio']} />
          </div>
          <Group grow mt="md">
            <Button variant="ghost" onClick={close}>
              Limpar
            </Button>
            <Button onClick={close}>Ver 42 colaboradores</Button>
          </Group>
        </Stack>
      </Drawer>

      <Button variant="outline" leftSection={<Icon name="filter" size={16} />} onClick={open}>
        Filtros
      </Button>
    </>
  );
}
