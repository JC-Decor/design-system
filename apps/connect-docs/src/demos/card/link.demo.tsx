import { Card, Group, Icon, Image, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Card component="a" href="#comunicado" style={{ textDecoration: 'none' }}>
      <Card.Section>
        <Image src="https://picsum.photos/seed/confraternizacao/600/400" h={180} radius={0} alt="Equipe reunida na confraternização" />
      </Card.Section>
      <Text fw={700} mt="md">
        Confraternização de fim de ano
      </Text>
      <Text fz="sm" c="var(--ds-text-2)" mt={4}>
        Confirme sua presença até 28/11. Haverá transporte saindo de todas as unidades.
      </Text>
      <Group gap={4} mt="sm" c="var(--ds-link)" fz="sm" fw={600}>
        Ler comunicado <Icon name="arrow-r" size={16} />
      </Group>
    </Card>
  );
}
