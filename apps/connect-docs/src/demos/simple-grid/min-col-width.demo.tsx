import { Box, SimpleGrid } from '@jcdecor/connect-ui';

const beneficios = ['Vale-refeição', 'Plano de saúde', 'Plano odontológico', 'Gympass', 'Seguro de vida', 'Auxílio creche', 'Day off'];

export default function Demo() {
  return (
    <SimpleGrid minColWidth={140} autoFlow="auto-fill" spacing="sm" w="100%">
      {beneficios.map((beneficio) => (
        <Box
          key={beneficio}
          p="md"
          bg="var(--ds-primary-soft)"
          c="var(--ds-primary)"
          fw={600}
          fz="sm"
          ta="center"
          style={{ borderRadius: 'var(--ds-radius-sm)' }}
        >
          {beneficio}
        </Box>
      ))}
    </SimpleGrid>
  );
}
