import { Group, Progress, Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack>
      <div>
        <Group justify="space-between" mb={6}>
          <Text fz="sm" fw={500}>
            Treinamentos obrigatórios da equipe
          </Text>
          <Text fz="sm" c="var(--ds-text-3)">
            46 de 62 concluídos
          </Text>
        </Group>
        <Progress value={74.2} size="lg" aria-label="Treinamentos concluídos" />
      </div>
      <div>
        <Text fz="sm" fw={500} mb={6}>
          Importando folha de pagamento (540 de 1.200 colaboradores)…
        </Text>
        <Progress value={45} striped animated aria-label="Importação da folha" />
      </div>
      <Stack gap="xs">
        <Text fz="sm" fw={500}>
          Tamanhos
        </Text>
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Progress key={size} value={60} size={size} aria-label={`Tamanho ${size}`} />
        ))}
      </Stack>
    </Stack>
  );
}
