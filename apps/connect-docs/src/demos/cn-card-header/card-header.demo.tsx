import { ActionIcon, Card, CardHeader, Icon, PrioBadge, Text } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 520, centered: true };

export default function Demo() {
  return (
    <Card>
      <CardHeader
        eyebrow="Ponto · outubro"
        title="Banco de horas da equipe"
        sub="Saldo consolidado até ontem"
        actions={
          <>
            <PrioBadge tone="med" dot>3 negativos</PrioBadge>
            <ActionIcon aria-label="Mais opções">
              <Icon name="dots" size={16} />
            </ActionIcon>
          </>
        }
      />
      <Text fz="sm" c="dimmed" mt="md">
        +42h acumuladas · 3 colaboradores com saldo negativo.
      </Text>
    </Card>
  );
}
