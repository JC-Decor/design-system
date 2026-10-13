import { Group, Icon, Select, Text, ThemeIcon, type SelectProps } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const departamentos: Record<string, { icon: string; color: string; pessoas: number }> = {
  pessoas: { icon: 'users', color: 'lavender', pessoas: 12 },
  tecnologia: { icon: 'cmd', color: 'blue', pessoas: 34 },
  financeiro: { icon: 'chart', color: 'green', pessoas: 9 },
  comercial: { icon: 'target', color: 'yellow', pessoas: 27 },
  juridico: { icon: 'scale', color: 'coral', pessoas: 4 },
};

const renderOption: SelectProps['renderOption'] = ({ option }) => {
  const { icon, color, pessoas } = departamentos[option.value];
  return (
    <Group gap="sm" wrap="nowrap">
      <ThemeIcon variant="light" color={color} size="md" radius="sm">
        <Icon name={icon} size={15} />
      </ThemeIcon>
      <div>
        <Text fz="sm" fw={500}>
          {option.label}
        </Text>
        <Text fz="xs" c="var(--ds-text-3)">
          {pessoas} colaboradores
        </Text>
      </div>
    </Group>
  );
};

export default function Demo() {
  return (
    <Select
      label="Departamento"
      placeholder="Escolha um departamento"
      data={[
        { value: 'pessoas', label: 'Pessoas & Cultura' },
        { value: 'tecnologia', label: 'Tecnologia' },
        { value: 'financeiro', label: 'Financeiro' },
        { value: 'comercial', label: 'Comercial' },
        { value: 'juridico', label: 'Jurídico' },
      ]}
      renderOption={renderOption}
      maxDropdownHeight={300}
    />
  );
}
