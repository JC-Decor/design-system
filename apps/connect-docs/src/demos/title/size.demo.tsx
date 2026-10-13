import { Stack, Text, Title } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="lg">
      <div>
        {/* Semântica h2, visual de h4: mantém a hierarquia do documento */}
        <Title order={2} size="h4">
          Aniversariantes do mês
        </Title>
        <Text fz="sm" c="dimmed">
          order=2 · size="h4"
        </Text>
      </div>
      <div>
        <Title order={3} lineClamp={1} maw={360}>
          Política de home office e jornada híbrida para todas as unidades
        </Title>
        <Text fz="sm" c="dimmed">
          lineClamp=1
        </Text>
      </div>
      <div>
        <Title order={2} textWrap="balance" maw={420}>
          Bem-vinda ao time, Marina! Seu primeiro dia começa às 9h
        </Title>
        <Text fz="sm" c="dimmed">
          textWrap="balance" (padrão do tema)
        </Text>
      </div>
    </Stack>
  );
}
