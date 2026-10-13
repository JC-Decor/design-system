import { Icon, NavLink, Paper } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Paper withBorder p="xs">
      <NavLink
        href="#"
        label="Dados pessoais"
        description="Endereço, contatos e dependentes"
        leftSection={<Icon name="user" size={18} />}
        rightSection={<Icon name="chev-r" size={14} />}
      />
      <NavLink
        href="#"
        label="Benefícios"
        description="Plano de saúde e vale-refeição"
        leftSection={<Icon name="shield" size={18} />}
        rightSection={<Icon name="chev-r" size={14} />}
      />
      <NavLink
        href="#"
        label="Avaliação de desempenho"
        description="Indisponível — o ciclo abre em novembro"
        leftSection={<Icon name="target" size={18} />}
        disabled
      />
    </Paper>
  );
}
