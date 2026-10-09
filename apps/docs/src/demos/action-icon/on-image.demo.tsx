import { useState } from 'react';
import { ActionIcon, Box, Card, Text, ThemeIcon } from '@jcdecor/ui';
import { IconHeart, IconHeartFilled, IconWallpaper } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 280 };

export default function Demo() {
  const [favorito, setFavorito] = useState(false);

  return (
    <Card withBorder padding="md">
      <Card.Section pos="relative">
        <Box h={160} bg="var(--ds-surface-2)" style={{ display: 'grid', placeItems: 'center' }}>
          <ThemeIcon variant="light" size={56} radius="md">
            <IconWallpaper size={32} />
          </ThemeIcon>
        </Box>
        <ActionIcon
          pos="absolute"
          top={12}
          right={12}
          variant="default"
          radius="xl"
          aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          aria-pressed={favorito}
          onClick={() => setFavorito((f) => !f)}
        >
          {favorito ? <IconHeartFilled size={18} color="var(--ds-error)" /> : <IconHeart size={18} />}
        </ActionIcon>
      </Card.Section>
      <Text fw={600} mt="md">
        Papel de parede Folhagens
      </Text>
      <Text fz="sm" c="var(--ds-primary)" fw={600}>
        R$ 149,90/rolo
      </Text>
    </Card>
  );
}
