import { Card, Group, SegmentedControl, Text, type CardProps } from '@mantine/core';
import { Kicker } from '../components/Typography';

export interface ChartCardProps extends Omit<CardProps, 'title'> {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Valor em destaque ao lado do título (ex.: total do período) */
  value?: React.ReactNode;
  /** Opções de período (ex.: ['7d', '30d', '90d']) */
  periods?: string[];
  period?: string;
  onPeriodChange?: (period: string) => void;
  /** Ações extras no cabeçalho */
  actions?: React.ReactNode;
  children: React.ReactNode;
}

/** Card de gráfico: título, valor em destaque, seletor de período e o gráfico. */
export function ChartCard({
  kicker,
  title,
  description,
  value,
  periods,
  period,
  onPeriodChange,
  actions,
  children,
  ...others
}: ChartCardProps) {
  return (
    <Card {...others}>
      <Group justify="space-between" align="flex-start" mb="lg" gap="sm">
        <div style={{ flex: '1 1 220px', minWidth: 0 }}>
          {kicker && <Kicker mb={4}>{kicker}</Kicker>}
          <Text fw={600} fz="var(--type-subheadline-lg)" lh={1.3}>
            {title}
          </Text>
          {description && (
            <Text fz="xs" c="var(--ds-text-3)" mt={2}>
              {description}
            </Text>
          )}
          {value !== undefined && value !== null && (
            <Text fw={700} fz="var(--type-headline-md)" mt={4} style={{ fontVariantNumeric: 'tabular-nums' }}>
              {value}
            </Text>
          )}
        </div>
        <Group gap="xs">
          {periods && periods.length > 0 && (
            <SegmentedControl size="xs" data={periods} value={period} onChange={onPeriodChange} />
          )}
          {actions}
        </Group>
      </Group>
      {children}
    </Card>
  );
}
ChartCard.displayName = '@jcdecor/ui/ChartCard';
