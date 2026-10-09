import { Stack, Title } from '@jcdecor/ui';

const niveis = [
  { order: 1, token: 'display-small · 40/32px · 700' },
  { order: 2, token: 'headline-large · 32/26px' },
  { order: 3, token: 'headline-medium · 24px' },
  { order: 4, token: 'headline-small · 20px' },
  { order: 5, token: '18px' },
  { order: 6, token: '16px' },
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
