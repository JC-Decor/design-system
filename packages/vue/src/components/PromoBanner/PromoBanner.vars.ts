import { createVarsResolver, getRadius } from '@mantine-vue/core';
import type { PromoBannerProps } from './PromoBanner.types';

const palette = {
  horizon: { bg: 'var(--dc-horizon-700)', color: '#fff', highlight: 'var(--dc-electric)' },
  electric: { bg: 'var(--dc-electric)', color: 'var(--dc-obsidian)', highlight: 'var(--dc-horizon-700)' },
  obsidian: { bg: 'var(--dc-obsidian)', color: '#fff', highlight: 'var(--dc-electric)' },
};

export const varsResolver = createVarsResolver<PromoBannerProps>((_theme, { variant = 'horizon', radius }) => ({
  root: {
    '--banner-bg': palette[variant].bg,
    '--banner-color': palette[variant].color,
    '--banner-highlight': palette[variant].highlight,
    '--banner-radius': radius === undefined ? undefined : getRadius(radius),
  },
}));
