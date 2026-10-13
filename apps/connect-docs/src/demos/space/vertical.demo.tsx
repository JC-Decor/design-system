import { Space, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <div>
      <Text fw={700}>Período de férias</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        04/11 a 23/11 — 20 dias corridos
      </Text>
      <Space h="lg" />
      <Text fw={700}>Aprovação</Text>
      <Text fz="sm" c="var(--ds-text-2)">
        Aguardando o gestor Carlos Lima
      </Text>
    </div>
  );
}
