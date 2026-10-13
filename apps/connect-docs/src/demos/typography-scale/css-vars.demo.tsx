import { Box, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Box>
      <Text fz="var(--type-headline-sm)" fw={700}>
        Treinamento de integração
      </Text>
      <Text fz="var(--type-subheadline-rg)" c="var(--ds-text-2)" mt={4}>
        Módulo obrigatório para novos colaboradores, com 4 aulas curtas sobre benefícios, ponto e cultura.
      </Text>
      <Text fz="var(--type-disclaimer)" fw={500} c="var(--ds-text-3)" mt="sm">
        Prazo: 15 dias após a admissão.
      </Text>
    </Box>
  );
}
