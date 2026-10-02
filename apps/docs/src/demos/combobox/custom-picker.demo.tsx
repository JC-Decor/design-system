import { useState } from 'react';
import { Combobox, Group, Input, InputBase, Text, ThemeIcon, useCombobox } from '@jcdecor/ui';
import { IconGrid4x4, IconLayoutBoardSplit, IconPlant2, IconWallpaper, IconWindow } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

interface Categoria {
  value: string;
  label: string;
  produtos: number;
  icon: React.ReactNode;
}

const categorias: Categoria[] = [
  { value: 'pisos', label: 'Pisos vinílicos', produtos: 128, icon: <IconGrid4x4 size={16} /> },
  { value: 'papel', label: 'Papel de parede', produtos: 342, icon: <IconWallpaper size={16} /> },
  { value: 'paineis', label: 'Painéis ripados', produtos: 56, icon: <IconLayoutBoardSplit size={16} /> },
  { value: 'grama', label: 'Grama sintética', produtos: 18, icon: <IconPlant2 size={16} /> },
  { value: 'cortinas', label: 'Cortinas', produtos: 74, icon: <IconWindow size={16} /> },
];

function CategoriaItem({ label, produtos, icon }: Categoria) {
  return (
    <Group gap="sm" wrap="nowrap">
      <ThemeIcon variant="light" radius="sm">
        {icon}
      </ThemeIcon>
      <div>
        <Text fz="sm" fw={500}>
          {label}
        </Text>
        <Text fz="xs" c="dimmed">
          {produtos} produtos
        </Text>
      </div>
    </Group>
  );
}

export default function Demo() {
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() });
  const [value, setValue] = useState<string | null>('papel');
  const selected = categorias.find((item) => item.value === value);

  return (
    <Combobox
      store={combobox}
      withinPortal={false}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          label="Categoria do anúncio"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          multiline
        >
          {selected ? <CategoriaItem {...selected} /> : <Input.Placeholder>Escolha uma categoria</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {categorias.map((item) => (
            <Combobox.Option value={item.value} key={item.value} active={item.value === value}>
              <CategoriaItem {...item} />
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
