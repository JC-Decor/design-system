import { Anchor, Center, Text } from '@jcdecor/ui';
import { IconArrowLeft } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Anchor href="#" fz="sm">
      <Center inline>
        <IconArrowLeft size={16} />
        <Text component="span" ml={6} fz="sm">
          Voltar para o carrinho
        </Text>
      </Center>
    </Anchor>
  );
}
