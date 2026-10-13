import { Icon, NavLink, SimpleGrid, Stack, Text } from '@jcdecor/connect-ui';

const variants = ['light', 'filled', 'subtle'] as const;

export default function Demo() {
  return (
    <SimpleGrid type="container" cols={{ base: 1, '560px': 3 }}>
      {variants.map((variant) => (
        <Stack key={variant} gap={4}>
          <Text fz="xs" fw={600} c="var(--ds-text-3)">
            variant="{variant}"
          </Text>
          <NavLink href="#" label="Minha equipe" leftSection={<Icon name="users" size={18} />} variant={variant} active />
          <NavLink href="#" label="Documentos" leftSection={<Icon name="doc" size={18} />} variant={variant} />
        </Stack>
      ))}
    </SimpleGrid>
  );
}
