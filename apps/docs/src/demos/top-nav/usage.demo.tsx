import { useState } from 'react';
import { TopNav, ThemeToggle, Avatar } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

const pages = ['Painéis', 'Pedidos', 'Design System'];

export default function Demo() {
  const [active, setActive] = useState('Design System');

  return (
    <TopNav
      brand="JC Decor"
      links={pages.map((label) => ({
        label,
        active: label === active,
        onClick: () => setActive(label),
      }))}
      rightSection={
        <>
          <ThemeToggle color="gray.0" />
          <Avatar size="sm" color="electric" variant="filled">
            AP
          </Avatar>
        </>
      }
    />
  );
}
