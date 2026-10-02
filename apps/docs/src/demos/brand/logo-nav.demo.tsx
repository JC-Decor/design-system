import { Avatar, Group, TopNav, ThemeToggle } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

// O TopNav já usa <JcLogo variant="dark" /> como marca padrão.
export default function Demo() {
  return (
    <TopNav
      links={[
        { label: 'Painéis', href: '#', active: true },
        { label: 'Pedidos', href: '#' },
        { label: 'Catálogo', href: '#' },
      ]}
      rightSection={
        <Group gap="xs">
          <ThemeToggle color="gray" />
          <Avatar name="Ana Souza" color="initials" size={32} />
        </Group>
      }
    />
  );
}
