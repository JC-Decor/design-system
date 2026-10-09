import { Autocomplete, Group, Text, ThemeIcon, type AutocompleteProps } from '@jcdecor/ui';
import { IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const produtos: Record<string, { icon: React.ReactNode; preco: string }> = {
  'Piso vinílico Carvalho': { icon: <IconGrid4x4 size={16} />, preco: 'R$ 89,90/m²' },
  'Papel de parede Folhagens': { icon: <IconWallpaper size={16} />, preco: 'R$ 149,90/rolo' },
  'Painel ripado Freijó': { icon: <IconLayoutBoardSplit size={16} />, preco: 'R$ 219,00/un' },
  'Grama sintética Soft 25mm': { icon: <IconPlant2 size={16} />, preco: 'R$ 59,90/m²' },
};

const renderOption: AutocompleteProps['renderOption'] = ({ option }) => (
  <Group gap="sm" wrap="nowrap" w="100%">
    <ThemeIcon variant="light" radius="sm">
      {produtos[option.value].icon}
    </ThemeIcon>
    <Text fz="sm" style={{ flex: 1 }}>
      {option.value}
    </Text>
    <Text fz="xs" fw={600} c="var(--ds-primary)">
      {produtos[option.value].preco}
    </Text>
  </Group>
);

export default function Demo() {
  return <Autocomplete label="Produto" placeholder="Comece a digitar" data={Object.keys(produtos)} renderOption={renderOption} />;
}
