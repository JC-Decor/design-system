import { useState, type ReactNode } from 'react';
import { Badge, Icon, NavLink, Paper } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 280 };

export default function Demo() {
  const [active, setActive] = useState('solicitacoes');

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
      {item('inicio', 'Início', <Icon name="home" size={18} />)}
      {item('solicitacoes', 'Solicitações', <Icon name="doc-clock" size={18} />, <Badge size="sm" circle>5</Badge>)}
      <NavLink label="Pessoas" leftSection={<Icon name="users" size={18} />} childrenOffset={28} defaultOpened>
        {item('colaboradores', 'Colaboradores', null)}
        {item('organograma', 'Organograma', null)}
        {item('aniversariantes', 'Aniversariantes', null)}
      </NavLink>
      {item('ponto', 'Ponto e banco de horas', <Icon name="clock" size={18} />)}
      {item('metas', 'Metas', <Icon name="target" size={18} />)}
      {item('relatorios', 'Relatórios', <Icon name="chart" size={18} />)}
    </Paper>
  );
}
