import { Anchor, Center, Icon, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Anchor href="#" fz="sm">
      <Center inline>
        <Icon name="chev-l" size={16} />
        <Text component="span" ml={6} fz="sm">
          Voltar para colaboradores
        </Text>
      </Center>
    </Anchor>
  );
}
