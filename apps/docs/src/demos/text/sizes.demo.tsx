import { Stack, Text } from '@jcdecor/ui';

const tamanhos = [
  { size: 'xl', token: '20px · headline-small' },
  { size: 'lg', token: '18px · body-large' },
  { size: 'md', token: '16px · body (padrão)' },
  { size: 'sm', token: '14px · body-small' },
  { size: 'xs', token: '12px · caption' },
] as const;

export default function Demo() {
  return (
    <Stack gap="sm">
      {tamanhos.map(({ size, token }) => (
        <Text key={size} size={size}>
          Piso vinílico Carvalho Natural{' '}
          <Text span size="xs" c="dimmed">
            {size} · {token}
          </Text>
        </Text>
      ))}
    </Stack>
  );
}
