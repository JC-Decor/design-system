import { Button, Checkbox, Group, Icon, Popover, Select, Stack, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Popover width={280} position="bottom-start" trapFocus>
      <Popover.Target>
        <Button variant="ghost" leftSection={<Icon name="filter" size={16} />}>
          Filtros
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="sm">
          <Text fz="sm" fw={600}>
            Filtrar solicitações
          </Text>
          <Select
            size="sm"
            label="Período"
            data={['Últimos 7 dias', 'Este mês', 'Este trimestre']}
            defaultValue="Este mês"
            allowDeselect={false}
            comboboxProps={{ withinPortal: false }}
          />
          <Checkbox.Group label="Tipo" defaultValue={['ferias', 'ajuste']}>
            <Stack gap={6} mt={6}>
              <Checkbox size="xs" value="ferias" label="Férias" />
              <Checkbox size="xs" value="ajuste" label="Ajuste de ponto" />
              <Checkbox size="xs" value="atestado" label="Atestado" />
            </Stack>
          </Checkbox.Group>
          <Group justify="flex-end" gap="xs">
            <Button size="sm" variant="subtle">
              Limpar
            </Button>
            <Button size="sm">Aplicar</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
