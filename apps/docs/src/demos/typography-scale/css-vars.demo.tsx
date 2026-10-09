import { Box, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Box>
      <Text fz="var(--type-headline-sm)" fw={600}>
        Painel ripado em MDF
      </Text>
      <Text fz="var(--type-subheadline-regular)" c="var(--ds-text-2)" mt={4}>
        Acabamento amadeirado que aquece qualquer ambiente, com instalação simples.
      </Text>
      <Text fz="var(--type-disclaimer)" fw={500} c="var(--ds-text-3)" mt="sm">
        Preço por m². Consulte disponibilidade na sua região.
      </Text>
    </Box>
  );
}
