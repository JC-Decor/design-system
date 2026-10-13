import { useState } from 'react';
import { Combobox, Group, Icon, Input, InputBase, Text, ThemeIcon, useCombobox } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 380 };

interface TipoSolicitacao {
  value: string;
  label: string;
  descricao: string;
  icon: string;
  color: string;
}

const tipos: TipoSolicitacao[] = [
  { value: 'ferias', label: 'Férias', descricao: 'Aprovação do gestor e do RH', icon: 'palm', color: 'green' },
  { value: 'folga', label: 'Folga do banco de horas', descricao: 'Aprovação do gestor', icon: 'clock', color: 'blue' },
  { value: 'atestado', label: 'Atestado médico', descricao: 'Validação do DP', icon: 'doc-clock', color: 'coral' },
  { value: 'uniforme', label: 'Uniforme', descricao: 'Entrega em até 10 dias', icon: 'shirt', color: 'yellow' },
  { value: 'documento', label: 'Declaração', descricao: 'Emitida em até 2 dias úteis', icon: 'doc', color: 'lavender' },
];

function TipoItem({ label, descricao, icon, color }: TipoSolicitacao) {
  return (
    <Group gap="sm" wrap="nowrap">
      <ThemeIcon variant="light" color={color} radius="sm">
        <Icon name={icon} size={15} />
      </ThemeIcon>
      <div>
        <Text fz="sm" fw={500}>
          {label}
        </Text>
        <Text fz="xs" c="var(--ds-text-3)">
          {descricao}
        </Text>
      </div>
    </Group>
  );
}

export default function Demo() {
  const combobox = useCombobox({ onDropdownClose: () => combobox.resetSelectedOption() });
  const [value, setValue] = useState<string | null>('ferias');
  const selected = tipos.find((item) => item.value === value);

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
          label="Tipo de solicitação"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
          multiline
        >
          {selected ? <TipoItem {...selected} /> : <Input.Placeholder>Escolha o tipo</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {tipos.map((item) => (
            <Combobox.Option value={item.value} key={item.value} active={item.value === value}>
              <TipoItem {...item} />
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
