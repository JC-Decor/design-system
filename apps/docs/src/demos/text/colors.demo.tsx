import { Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      <Text c="var(--ds-text)">--ds-text · títulos, preços e conteúdo principal</Text>
      <Text c="var(--ds-text-2)">--ds-text-2 · descrições e parágrafos de apoio</Text>
      <Text c="dimmed">dimmed (= --ds-text-3) · metadados, datas e legendas</Text>
      <Text c="var(--ds-primary)" fw={600}>
        --ds-primary · links e destaques de ação
      </Text>
      <Text c="var(--ds-success)" fw={600}>
        --ds-success · frete grátis, pagamento aprovado
      </Text>
      <Text c="var(--ds-error)" fw={600}>
        --ds-error · esgotado, erro de pagamento
      </Text>
    </Stack>
  );
}
