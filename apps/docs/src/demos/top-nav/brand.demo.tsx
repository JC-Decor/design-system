import { TopNav, Tag, Button } from '@jcdecor/ui';
import { IconLayoutDashboard } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true };

export default function Demo() {
  return (
    <TopNav
      brand={
        <>
          <IconLayoutDashboard size={22} />
          JC Decor
          <Tag tone="warn" variant="filled" size="xs">
            Admin
          </Tag>
        </>
      }
      links={[
        { label: 'Vendas', active: true, onClick: () => {} },
        { label: 'Estoque', onClick: () => {} },
        { label: 'Campanhas', onClick: () => {} },
      ]}
      rightSection={
        <Button size="xs" variant="accent">
          Nova campanha
        </Button>
      }
    />
  );
}
