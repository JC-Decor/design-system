import { Input } from '@jcdecor/ui';
import { IconCalendar } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Input.Wrapper label="Data da instalação">
      <Input component="button" type="button" pointer leftSection={<IconCalendar size={16} />}>
        <Input.Placeholder>Escolha uma data</Input.Placeholder>
      </Input>
    </Input.Wrapper>
  );
}
