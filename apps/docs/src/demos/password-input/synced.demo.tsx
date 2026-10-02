import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

export default function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <Stack w="100%">
      <PasswordInput label="Nova senha" placeholder="Nova senha" visible={visible} onVisibilityChange={toggle} />
      <PasswordInput label="Confirme a senha" placeholder="Repita a senha" visible={visible} onVisibilityChange={toggle} />
    </Stack>
  );
}
