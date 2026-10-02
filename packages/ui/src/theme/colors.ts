import type { MantineColorsTuple } from '@mantine/core';
import { darkNeutrals, ramps, type RampStep } from './tokens';

/**
 * Tuplas de 10 tons do Mantine geradas das rampas OKLCH em tokens.ts.
 * Índice → tom: 0=50 · 1=100 · … · 6=600 · … · 9=900.
 * `primaryShade` é 6 no claro e 4 no escuro, então `color="evergreen"` etc.
 * preenche com o tom 600 (claro) / 400 (escuro) de qualquer cor.
 */
const STEPS: RampStep[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const tuple = (ramp: Record<RampStep, string>) => STEPS.map((s) => ramp[s]) as unknown as MantineColorsTuple;

export const horizon = tuple(ramps.horizon);
export const obsidian = tuple(ramps.obsidian);
export const electric = tuple(ramps.electric);
export const evergreen = tuple(ramps.evergreen);
export const danger = tuple(ramps.danger);
/** Substitui o `gray` do Mantine: neutro frio da marca. */
export const gray = tuple(ramps.gray);
/** Substitui o `dark` do Mantine com os neutros do tema escuro (0 = texto · 7 = fundo). */
export const dark = [...darkNeutrals] as unknown as MantineColorsTuple;

export const jcColors = {
  horizon,
  obsidian,
  electric,
  evergreen,
  danger,
  gray,
  dark,
  // Aliases: `color="blue"` etc. continuam na paleta da marca.
  blue: horizon,
  indigo: obsidian,
  green: evergreen,
  teal: evergreen,
  yellow: electric,
  red: danger,
} satisfies Record<string, MantineColorsTuple>;

export type JcColor = 'horizon' | 'obsidian' | 'electric' | 'evergreen' | 'danger' | 'gray';
