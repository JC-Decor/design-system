import {
  ColorSwatch,
  Group,
  Stack,
  Text,
  formatCurrency,
  formatPercent,
  getThemeColor,
  useMantineTheme,
} from '@jcdecor/ui';
import { DonutChart, paletteColor } from '@jcdecor/ui/charts';

const data = [
  { name: 'Pisos', value: 67800 },
  { name: 'Papel de parede', value: 39400 },
  { name: 'Cortinas', value: 31900 },
  { name: 'Grama sintética', value: 26300 },
  { name: 'Painéis', value: 18830 },
];

const total = data.reduce((sum, item) => sum + item.value, 0);

export default function Demo() {
  const theme = useMantineTheme();
  return (
    <Group justify="center" gap={48} wrap="wrap">
      <DonutChart
        data={data}
        size={180}
        valueFormatter={(value) => formatCurrency(value, { maximumFractionDigits: 0 })}
        tooltipDataSource="segment"
      />
      <Stack gap="xs" miw={260}>
        {data.map((item, index) => (
          <Group key={item.name} justify="space-between" gap="xl">
            <Group gap="xs">
              <ColorSwatch
                color={getThemeColor(paletteColor(index), theme)}
                size={12}
                withShadow={false}
              />
              <Text fz="sm">{item.name}</Text>
            </Group>
            <Text fz="sm" fw={600} style={{ fontVariantNumeric: 'tabular-nums' }}>
              {formatPercent((item.value / total) * 100)}
            </Text>
          </Group>
        ))}
      </Stack>
    </Group>
  );
}
