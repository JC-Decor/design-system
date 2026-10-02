import { Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      {(['xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
        <Text key={size} size={size}>
          {size} · Papel de parede vinílico lavável, ideal para salas e quartos.
        </Text>
      ))}
    </Stack>
  );
}
