import { Box, Group, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Group>
      {/* As variáveis --cn-tone-* trocam sozinhas no tema escuro */}
      <Box px="md" py="sm" style={{ background: 'var(--cn-tone-lavender-soft)', borderRadius: 'var(--ds-radius)' }}>
        <Text fz="sm" fw={600} c="var(--cn-tone-lavender-fg)">
          3 feedbacks aguardando resposta
        </Text>
      </Box>
      <Box px="md" py="sm" style={{ background: 'var(--cn-tone-green-bg)', borderRadius: 'var(--ds-radius)' }}>
        <Text fz="sm" fw={600} c="var(--cn-tone-green-fg)">
          Ponto do mês fechado
        </Text>
      </Box>
    </Group>
  );
}
