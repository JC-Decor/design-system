import { useState } from 'react';
import { Button, Icon, Menu } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [columns, setColumns] = useState(['equipe', 'cargo', 'status']);
  const [density, setDensity] = useState('confortavel');

  return (
    <Menu width={240} position="bottom-start">
      <Menu.Target>
        <Button variant="outline" leftSection={<Icon name="sliders" size={16} />}>
          Exibição da tabela
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Colunas visíveis</Menu.Label>
        <Menu.CheckboxGroup value={columns} onChange={setColumns}>
          <Menu.CheckboxItem value="equipe">Equipe</Menu.CheckboxItem>
          <Menu.CheckboxItem value="cargo">Cargo</Menu.CheckboxItem>
          <Menu.CheckboxItem value="admissao">Admissão</Menu.CheckboxItem>
          <Menu.CheckboxItem value="status">Status</Menu.CheckboxItem>
        </Menu.CheckboxGroup>

        <Menu.Divider />
        <Menu.Label>Densidade</Menu.Label>
        <Menu.RadioGroup value={density} onChange={setDensity}>
          <Menu.RadioItem value="compacta">Compacta</Menu.RadioItem>
          <Menu.RadioItem value="confortavel">Confortável</Menu.RadioItem>
        </Menu.RadioGroup>
      </Menu.Dropdown>
    </Menu>
  );
}
