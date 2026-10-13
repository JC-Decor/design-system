import { Group, Icon, Marquee, Paper, Text } from '@jcdecor/connect-ui';

const beneficios = [
  { icon: 'heart', nome: 'Plano de saúde' },
  { icon: 'shield', nome: 'Seguro de vida' },
  { icon: 'book', nome: 'Auxílio educação' },
  { icon: 'zap', nome: 'Gympass' },
  { icon: 'ticket', nome: 'Vale-refeição' },
  { icon: 'palm', nome: 'Day off no aniversário' },
  { icon: 'users', nome: 'Auxílio creche' },
];

export default function Demo() {
  return (
    <Marquee gap="md" duration={40000} fadeEdgeColor="var(--ds-surface)" w="100%">
      {beneficios.map((b) => (
        <Paper key={b.nome} withBorder px="lg" py="sm">
          <Group gap={8} wrap="nowrap" c="var(--ds-text-2)">
            <Icon name={b.icon} size={16} />
            <Text fz="sm" fw={600} style={{ whiteSpace: 'nowrap' }}>
              {b.nome}
            </Text>
          </Group>
        </Paper>
      ))}
    </Marquee>
  );
}
