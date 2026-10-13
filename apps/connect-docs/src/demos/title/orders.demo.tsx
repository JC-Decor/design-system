import { Stack, Title } from '@jcdecor/connect-ui';

const niveis = [
  { order: 1, token: 'page-title · 26px' },
  { order: 2, token: 'section-title · 22px' },
  { order: 3, token: 'dialog-title · 18px' },
  { order: 4, token: 'card-title · 16px' },
  { order: 5, token: '15px' },
  { order: 6, token: '13,5px' },
] as const;

export default function Demo() {
  return (
    <Stack gap="sm">
      {niveis.map(({ order, token }) => (
        <Title key={order} order={order}>
          h{order} · {token}
        </Title>
      ))}
    </Stack>
  );
}
