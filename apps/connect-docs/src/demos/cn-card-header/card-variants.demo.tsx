import { Card, CardHeader, SimpleGrid, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { background: 'page' };

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 3 }}>
      <Card>
        <CardHeader title="Padrão" sub="padding 22 · raio 20" />
      </Card>
      <Card mod="hover" component="a" href="#equipe" style={{ textDecoration: 'none' }}>
        <CardHeader title="Interativo" sub='mod="hover" — passe o mouse' />
      </Card>
      <Card padding={0}>
        <Text p="md" fz="sm">padding={'{0}'} (antigo pad=false) para tabelas e listas sangrando até a borda.</Text>
      </Card>
    </SimpleGrid>
  );
}
