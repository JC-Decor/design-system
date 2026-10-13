import { Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      {(['xl', 'lg', 'md', 'sm', 'xs'] as const).map((size) => (
        <Text key={size} size={size}>
          {size} · Solicitação de férias enviada para aprovação do gestor.
        </Text>
      ))}
    </Stack>
  );
}
