import type { MantineColorsTuple } from '@mantine/core';
import { darkNeutrals, ramps, type RampStep } from './tokens';

/**
 * Tuplas de 10 tons do Mantine geradas das rampas OKLCH em tokens.ts.
 * Índice → tom: 0=50 · 1=100 · … · 6=600 · … · 9=900.
 * `primaryShade` é 6 no claro e 3 no escuro (#A5B4FC, a primária do `.dark` do Connect).
 */
const STEPS: RampStep[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const tuple = (ramp: Record<RampStep, string>) => STEPS.map((s) => ramp[s]) as unknown as MantineColorsTuple;

export const navy = tuple(ramps.navy);
export const lavender = tuple(ramps.lavender);
export const blue = tuple(ramps.blue);
export const green = tuple(ramps.green);
export const yellow = tuple(ramps.yellow);
export const coral = tuple(ramps.coral);
/** Substitui o `gray` do Mantine: neutro "ink" do Connect. */
export const gray = tuple(ramps.gray);
/** Substitui o `dark` do Mantine com o slate do tema escuro (0 = texto · 7 = fundo). */
export const dark = [...darkNeutrals] as unknown as MantineColorsTuple;

export const connectColors = {
  navy,
  lavender,
  blue,
  green,
  yellow,
  coral,
  gray,
  dark,
  /** `color="ink"` = neutro (mesmo nome do tom no Connect) */
  ink: gray,
  // Aliases: nomes do Mantine continuam na paleta do Connect.
  indigo: navy,
  violet: lavender,
  grape: lavender,
  cyan: blue,
  teal: green,
  lime: green,
  orange: yellow,
  red: coral,
  pink: coral,
} satisfies Record<string, MantineColorsTuple>;

export type ConnectColor = 'navy' | 'lavender' | 'blue' | 'green' | 'yellow' | 'coral' | 'ink' | 'gray';
