import { Stack, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="xs">
      <Text c="var(--ds-text)">--ds-text · nomes, títulos e conteúdo principal</Text>
      <Text c="var(--ds-text-2)">--ds-text-2 · descrições e parágrafos de apoio</Text>
      <Text c="dimmed">dimmed (= --ds-text-3) · cargo, datas e legendas</Text>
      <Text c="var(--ds-primary)" fw={600}>
        --ds-primary · links e destaques de ação
      </Text>
      <Text c="var(--ds-success)" fw={600}>
        --ds-success · solicitação aprovada, meta batida
      </Text>
      <Text c="var(--ds-error)" fw={600}>
        --ds-error · ponto ausente, prazo vencido
      </Text>
    </Stack>
  );
}
