import { Button, DropdownMenu, Group, Icon, type DropdownMenuEntry } from '@jcdecor/connect-ui';

const items: DropdownMenuEntry[] = [
  { key: 'pdf', label: 'Exportar PDF', icon: 'download', onSelect: () => {} },
  { key: 'csv', label: 'Exportar planilha', icon: 'doc', onSelect: () => {} },
  { key: 'link', label: 'Copiar link', icon: 'link', onSelect: () => {} },
];

export default function Demo() {
  return (
    <Group justify="center" gap="md">
      {(['start', 'center', 'end'] as const).map((align) => (
        <DropdownMenu
          key={align}
          align={align}
          items={items}
          trigger={
            <Button variant="ghost" rightSection={<Icon name="chev" size={15} />}>
              align="{align}"
            </Button>
          }
        />
      ))}
      <DropdownMenu
        side="top"
        items={items}
        trigger={
          <Button variant="outline" rightSection={<Icon name="chev-up" size={15} />}>
            side="top"
          </Button>
        }
      />
    </Group>
  );
}
