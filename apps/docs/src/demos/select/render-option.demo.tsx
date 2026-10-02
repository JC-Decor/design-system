import { Group, Select, Text, ThemeIcon, type SelectProps } from '@jcdecor/ui';
import { IconWindow, IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

const icons: Record<string, React.ReactNode> = {
  pisos: <IconGrid4x4 size={16} />,
  papel: <IconWallpaper size={16} />,
  paineis: <IconLayoutBoardSplit size={16} />,
  grama: <IconPlant2 size={16} />,
  cortinas: <IconWindow size={16} />,
};

const descricoes: Record<string, string> = {
  pisos: '128 produtos',
  papel: '342 produtos',
  paineis: '56 produtos',
  grama: '18 produtos',
  cortinas: '74 produtos',
};

const renderOption: SelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm" wrap="nowrap">
    <ThemeIcon variant="light" size="md" radius="sm">
      {icons[option.value]}
    </ThemeIcon>
    <div>
      <Text fz="sm" fw={500}>
        {option.label}
      </Text>
      <Text fz="xs" c="dimmed">
        {descricoes[option.value]}
      </Text>
    </div>
  </Group>
);

export default function Demo() {
  return (
    <Select
      label="Departamento"
      placeholder="Escolha um departamento"
      data={[
        { value: 'pisos', label: 'Pisos vinílicos' },
        { value: 'papel', label: 'Papel de parede' },
        { value: 'paineis', label: 'Painéis ripados' },
        { value: 'grama', label: 'Grama sintética' },
        { value: 'cortinas', label: 'Cortinas' },
      ]}
      renderOption={renderOption}
      maxDropdownHeight={300}
    />
  );
}
