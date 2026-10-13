import { Avatar, Badge, Group, Stack, ThemeIcon, Icon } from '@jcdecor/connect-ui';

// color="<tom>" + variante light (padrão do Badge) = fundo e texto do tom
const tons = ['blue', 'lavender', 'green', 'yellow', 'coral', 'ink'] as const;

export default function Demo() {
  return (
    <Stack>
      <Group gap="xs">
        {tons.map((tom) => (
          <Badge key={tom} color={tom}>{tom}</Badge>
        ))}
      </Group>
      <Group gap="xs">
        {tons.map((tom) => (
          <Avatar key={tom} name={`Colaborador ${tom}`} color={tom} />
        ))}
      </Group>
      <Group gap="xs">
        {tons.map((tom) => (
          <ThemeIcon key={tom} variant="light" color={tom} size={36} radius="md">
            <Icon name="users" size={18} />
          </ThemeIcon>
        ))}
      </Group>
    </Stack>
  );
}
