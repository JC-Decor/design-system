import { Burger } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return <Burger opened={opened} onClick={toggle} aria-label={opened ? 'Fechar menu' : 'Abrir menu'} />;
}
