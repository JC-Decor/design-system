import { Card, Group, Icon, Progress, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const concluidas = 7;
const total = 10;

export default function Demo() {
  const value = (concluidas / total) * 100;

  return (
    <Card>
      <Group gap="xs" mb="sm" wrap="nowrap">
        <Icon name="target" size={18} c="var(--ds-primary)" />
        <Text fz="sm" fw={600}>
          Metas do 2º semestre
        </Text>
        <Text fz="sm" c="var(--ds-text-3)" ml="auto">
          {concluidas} de {total}
        </Text>
      </Group>
      <Progress value={value} color="green" aria-label={`Metas concluídas: ${concluidas} de ${total}`} />
      <Text fz="xs" c="var(--ds-text-3)" mt={6}>
        Faltam 3 metas para o ciclo de avaliação de 15/12.
      </Text>
    </Card>
  );
}
