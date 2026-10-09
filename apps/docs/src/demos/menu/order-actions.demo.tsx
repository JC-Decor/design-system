import { Button, Group, Kbd, Menu } from '@jcdecor/ui';
import {
  IconChevronDown,
  IconCopy,
  IconEye,
  IconFileExport,
  IconPrinter,
  IconReceipt,
  IconTrash,
  IconTruck,
  IconX,
} from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

function Shortcut({ keys }: { keys: string[] }) {
  return (
    <Group gap={2} wrap="nowrap">
      {keys.map((key) => (
        <Kbd key={key} size="xs">
          {key}
        </Kbd>
      ))}
    </Group>
  );
}

export default function Demo() {
  return (
    <Menu width={260} position="bottom-start">
      <Menu.Target>
        <Button variant="outline" rightSection={<IconChevronDown size={16} />}>
          Ações do pedido
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Pedido #10479</Menu.Label>
        <Menu.Item leftSection={<IconEye size={16} />} rightSection={<Shortcut keys={['⌘', 'O']} />}>
          Ver detalhes
        </Menu.Item>
        <Menu.Item leftSection={<IconTruck size={16} />}>Atualizar rastreio</Menu.Item>
        <Menu.Item leftSection={<IconCopy size={16} />} rightSection={<Shortcut keys={['⌘', 'D']} />}>
          Duplicar pedido
        </Menu.Item>

        <Menu.Divider />
        <Menu.Label>Documentos</Menu.Label>
        <Menu.Item leftSection={<IconReceipt size={16} />}>Emitir nota fiscal</Menu.Item>
        <Menu.Item leftSection={<IconPrinter size={16} />} rightSection={<Shortcut keys={['⌘', 'P']} />}>
          Imprimir etiqueta
        </Menu.Item>
        <Menu.Item leftSection={<IconFileExport size={16} />} disabled>
          Exportar XML
        </Menu.Item>

        <Menu.Divider />
        <Menu.Item leftSection={<IconX size={16} />}>Cancelar pedido</Menu.Item>
        <Menu.Item color="danger" leftSection={<IconTrash size={16} />} rightSection={<Shortcut keys={['⌘', '⌫']} />}>
          Excluir pedido
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
