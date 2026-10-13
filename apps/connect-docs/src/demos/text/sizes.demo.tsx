import { Stack, Text } from '@jcdecor/connect-ui';

const tamanhos = [
  { size: 'xl', token: '16px · card-title' },
  { size: 'lg', token: '15px · body-large' },
  { size: 'md', token: '13,5px · body (padrão)' },
  { size: 'sm', token: '12,5px · body-small' },
  { size: 'xs', token: '11,5px · caption' },
] as const;

export default function Demo() {
  return (
    <Stack gap="sm">
      {tamanhos.map(({ size, token }) => (
        <Text key={size} size={size}>
          Solicitação de férias aprovada{' '}
          <Text span size="xs" c="dimmed">
            {size} · {token}
          </Text>
        </Text>
      ))}
    </Stack>
  );
}
