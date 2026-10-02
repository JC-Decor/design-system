import { Button, Group, Stack, TextInput } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack w="100%">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Group key={size} gap="sm" wrap="nowrap" align="flex-end">
          <TextInput size={size} placeholder={`Campo ${size}`} aria-label={`Campo ${size}`} style={{ flex: 1 }} />
          <Button size={size}>Buscar</Button>
        </Group>
      ))}
    </Stack>
  );
}
