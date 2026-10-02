import { Stack, Text, Title } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="lg">
      <div>
        {/* Semântica h2, visual de h4: mantém a hierarquia do documento */}
        <Title order={2} size="h4">
          Avaliações dos clientes
        </Title>
        <Text fz="sm" c="dimmed">
          order=2 · size="h4"
        </Text>
      </div>
      <div>
        <Title order={3} lineClamp={1} maw={360}>
          Piso vinílico Carvalho Natural com manta acústica integrada
        </Title>
        <Text fz="sm" c="dimmed">
          lineClamp=1
        </Text>
      </div>
      <div>
        <Title order={2} textWrap="balance" maw={420}>
          Transforme a sua casa com revestimentos que duram anos
        </Title>
        <Text fz="sm" c="dimmed">
          textWrap="balance" (padrão do tema)
        </Text>
      </div>
    </Stack>
  );
}
