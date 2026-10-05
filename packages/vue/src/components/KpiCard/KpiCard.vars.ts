import { createVarsResolver } from '@mantine-vue/core';
import type { KpiCardProps } from './KpiCard.types';

export function getDeltaTone(delta: number | undefined, invert = false): 'up' | 'down' | 'flat' {
  if (delta === undefined || delta === 0 || Number.isNaN(delta)) return 'flat';
  const positive = delta > 0;
  return positive !== invert ? 'up' : 'down';
}

const toneColor = { up: 'var(--ds-success)', down: 'var(--ds-error)', flat: 'var(--ds-text-3)' };

export const varsResolver = createVarsResolver<KpiCardProps>((_theme, { delta, invertDelta, colorValue }) => {
  const tone = getDeltaTone(delta, invertDelta);
  return {
    root: {
      '--kpi-delta-color': toneColor[tone],
      '--kpi-value-color': colorValue && tone !== 'flat' ? toneColor[tone] : undefined,
    },
  };
});
