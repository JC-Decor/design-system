import { ColorSwatch, Group, Stack, Text, getThemeColor, useMantineTheme } from '@jcdecor/ui';
import { chartPalette } from '@jcdecor/ui/charts';

export default function Demo() {
  const theme = useMantineTheme();
  return (
    <Group gap="lg">
      {chartPalette.map((color, index) => (
        <Stack key={color} gap={6} align="center">
          <ColorSwatch color={getThemeColor(color, theme)} size={44} radius="md" />
          <Text fz="xs" fw={600}>
            {index + 1}ª série
          </Text>
          <Text fz={11} c="var(--ds-text-3)" ff="monospace">
            {color}
          </Text>
        </Stack>
      ))}
    </Group>
  );
}
