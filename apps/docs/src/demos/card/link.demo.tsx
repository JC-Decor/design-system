import { Card, Group, Image, Text } from '@jcdecor/ui';
import { IconArrowRight } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 360 };

export default function Demo() {
  return (
    <Card component="a" href="#inspiracao" shadow="sm" style={{ textDecoration: 'none' }}>
      <Card.Section>
        <Image src="https://picsum.photos/seed/sala/600/400" h={180} radius={0} alt="Sala com painel ripado" />
      </Card.Section>
      <Text fw={600} mt="md">
        5 ideias de painel ripado para a sala
      </Text>
      <Text fz="sm" c="var(--ds-text-2)" mt={4}>
        Composições com LED, nichos e cores amadeiradas para valorizar a parede da TV.
      </Text>
      <Group gap={4} mt="sm" c="var(--ds-link)" fz="sm" fw={600}>
        Ler artigo <IconArrowRight size={16} />
      </Group>
    </Card>
  );
}
