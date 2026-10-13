import { Icon, Input } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  return (
    <Input.Wrapper label="Início das férias">
      <Input component="button" type="button" pointer leftSection={<Icon name="calendar" size={16} />}>
        <Input.Placeholder>Escolha uma data</Input.Placeholder>
      </Input>
    </Input.Wrapper>
  );
}
