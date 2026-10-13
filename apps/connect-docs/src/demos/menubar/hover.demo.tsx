import { Menu, Menubar } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const sections = {
  Pessoas: ['Colaboradores', 'Equipes', 'Organograma', 'Aniversariantes'],
  Jornada: ['Ponto', 'Banco de horas', 'Férias', 'Escalas'],
  Desenvolvimento: ['Metas', 'Feedbacks 1:1', 'Treinamentos'],
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
