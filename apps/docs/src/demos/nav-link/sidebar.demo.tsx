import { useState, type ReactNode } from 'react';
import { Badge, NavLink, Paper } from '@jcdecor/ui';
import { IconBox, IconChartBar, IconHome, IconMessageCircle, IconShoppingBag, IconUsers } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 280 };

export default function Demo() {
  const [active, setActive] = useState('pedidos');

  const item = (value: string, label: string, icon: ReactNode, extra?: ReactNode) => (
    <NavLink
      key={value}
      href={`#${value}`}
      label={label}
      leftSection={icon}
      rightSection={extra}
      active={active === value}
      onClick={(event) => {
        event.preventDefault();
        setActive(value);
      }}
    />
  );

  return (
    <Paper withBorder p="xs">
      {item('inicio', 'Início', <IconHome size={18} />)}
      {item('pedidos', 'Pedidos', <IconShoppingBag size={18} />, <Badge size="sm" circle>8</Badge>)}
      <NavLink label="Catálogo" leftSection={<IconBox size={18} />} childrenOffset={28} defaultOpened>
        {item('pisos', 'Pisos vinílicos', null)}
        {item('papel', 'Papel de parede', null)}
        {item('paineis', 'Painéis ripados', null)}
      </NavLink>
      {item('clientes', 'Clientes', <IconUsers size={18} />)}
      {item('atendimento', 'Atendimento', <IconMessageCircle size={18} />)}
      {item('relatorios', 'Relatórios', <IconChartBar size={18} />)}
    </Paper>
  );
}
