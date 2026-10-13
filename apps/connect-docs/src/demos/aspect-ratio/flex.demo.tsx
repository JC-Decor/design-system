import { AspectRatio, Box, Flex, Icon, Text } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Flex gap="md" align="center" w="100%">
      {/* Dentro de flex, defina a largura do AspectRatio (flex/ w) */}
      <AspectRatio ratio={4 / 3} flex="0 0 120px">
        <Box
          bg="var(--cn-tone-lavender-bg)"
          c="var(--cn-tone-lavender-fg)"
          style={{ borderRadius: 'var(--ds-radius)', display: 'grid', placeItems: 'center' }}
        >
          <Icon name="book" size={28} />
        </Box>
      </AspectRatio>
      <div>
        <Text fw={700}>Treinamento: Comunicação não violenta</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          A miniatura mantém 4:3 mesmo com o texto ao lado crescendo.
        </Text>
      </div>
    </Flex>
  );
}
