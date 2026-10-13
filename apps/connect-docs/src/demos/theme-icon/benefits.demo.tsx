import { Group, Icon, SimpleGrid, Text, ThemeIcon } from '@jcdecor/connect-ui';

const beneficios = [
  { icon: 'heart', color: 'coral', titulo: 'Plano de saúde', texto: 'Titular e dependentes, sem coparticipação' },
  { icon: 'book', color: 'lavender', titulo: 'Auxílio educação', texto: 'Até 50% de graduação e idiomas' },
  { icon: 'palm', color: 'green', titulo: 'Day off', texto: 'Folga no dia do seu aniversário' },
];

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }} w="100%">
      {beneficios.map(({ icon, color, titulo, texto }) => (
        <Group key={titulo} wrap="nowrap" gap="sm">
          <ThemeIcon variant="light" color={color} size="xl">
            <Icon name={icon} size={22} />
          </ThemeIcon>
          <div>
            <Text fw={600} fz="sm">
              {titulo}
            </Text>
            <Text fz="xs" c="var(--ds-text-3)">
              {texto}
            </Text>
          </div>
        </Group>
      ))}
    </SimpleGrid>
  );
}
