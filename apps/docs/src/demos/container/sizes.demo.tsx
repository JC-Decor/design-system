import { Container, Stack } from '@jcdecor/ui';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export default function Demo() {
  return (
    <Stack gap="xs" w="100%">
      {sizes.map((size) => (
        <Container
          key={size}
          size={size}
          w="100%"
          py="xs"
          bg="var(--ds-primary-soft)"
          c="var(--ds-primary)"
          fz="sm"
          fw={600}
          ta="center"
          style={{ borderRadius: 'var(--ds-radius-sm)' }}
        >
          size="{size}"
        </Container>
      ))}
    </Stack>
  );
}
