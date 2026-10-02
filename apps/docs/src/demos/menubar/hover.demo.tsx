import { Menu, Menubar } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sections = {
  Pedidos: ['Todos os pedidos', 'Aguardando pagamento', 'Em separação', 'Devoluções'],
  Produtos: ['Catálogo', 'Coleções', 'Estoque', 'Avaliações'],
  Clientes: ['Lista de clientes', 'Segmentos', 'Cupons'],
};

export default function Demo() {
  return (
    <Menubar trigger="hover" aria-label="Navegação do painel">
      {Object.entries(sections).map(([label, items]) => (
        <Menubar.Menu key={label} width={200}>
          <Menubar.Target>{label}</Menubar.Target>
          <Menubar.Dropdown>
            {items.map((item) => (
              <Menu.Item key={item}>{item}</Menu.Item>
            ))}
          </Menubar.Dropdown>
        </Menubar.Menu>
      ))}
    </Menubar>
  );
}
