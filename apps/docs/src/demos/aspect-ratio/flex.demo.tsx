import { AspectRatio, Box, Flex, Text } from '@jcdecor/ui';
import { IconPhoto } from '@tabler/icons-react';

export default function Demo() {
  return (
    <Flex gap="md" align="center" w="100%">
      {/* Dentro de flex, defina a largura do AspectRatio (flex/ w) */}
      <AspectRatio ratio={4 / 3} flex="0 0 120px">
        <Box
          bg="var(--ds-primary-soft)"
          c="var(--ds-primary)"
          style={{ borderRadius: 'var(--ds-radius-sm)', display: 'grid', placeItems: 'center' }}
        >
          <IconPhoto size={28} />
        </Box>
      </AspectRatio>
      <div>
        <Text fw={600}>Grama sintética Premium 32 mm</Text>
        <Text fz="sm" c="var(--ds-text-2)">
          A miniatura mantém 4:3 mesmo com o texto ao lado crescendo.
        </Text>
      </div>
    </Flex>
  );
}
