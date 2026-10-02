import { List, ThemeIcon } from '@jcdecor/ui';
import { IconCheck, IconX } from '@tabler/icons-react';

export default function Demo() {
  return (
    <List
      spacing="sm"
      center
      icon={
        <ThemeIcon color="evergreen" variant="light" size={24} radius="xl">
          <IconCheck size={14} />
        </ThemeIcon>
      }
    >
      <List.Item>Resistente à água e a riscos</List.Item>
      <List.Item>Instalação sem cola, sobre o piso existente</List.Item>
      <List.Item>Manta acústica inclusa</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="danger" variant="light" size={24} radius="xl">
            <IconX size={14} />
          </ThemeIcon>
        }
      >
        Não indicado para áreas externas
      </List.Item>
    </List>
  );
}
