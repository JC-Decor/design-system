import { Card, Group, SimpleGrid, Text, ThemeIcon, Icon } from '@jcdecor/connect-ui';

const indicadores = [
  { titulo: 'Colaboradores ativos', valor: '248', icone: 'users', cor: 'blue' },
  { titulo: 'Férias este mês', valor: '17', icone: 'palm', cor: 'green' },
  { titulo: 'Vagas abertas', valor: '6', icone: 'briefcase', cor: 'lavender' },
  { titulo: 'Pendências de ponto', valor: '9', icone: 'clock', cor: 'yellow' },
];

export default function Demo() {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg" w="100%">
      {indicadores.map((item) => (
        <Card key={item.titulo} padding="md">
          <Group gap="sm" wrap="nowrap">
            <ThemeIcon variant="light" color={item.cor} size={36} radius="md">
              <Icon name={item.icone} size={18} />
            </ThemeIcon>
            <div>
              <Text fz="xs" c="var(--ds-text-3)">{item.titulo}</Text>
              <Text fw={700} fz="lg" style={{ fontVariantNumeric: 'tabular-nums' }}>{item.valor}</Text>
            </div>
          </Group>
        </Card>
      ))}
    </SimpleGrid>
  );
}
