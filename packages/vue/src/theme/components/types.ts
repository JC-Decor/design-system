import type { MantineThemeComponent } from '@mantine-vue/core';

/** `theme.components` do Mantine Vue (o pacote não exporta um tipo nomeado como o `MantineThemeComponents` do React). */
export type ThemeComponents = Record<string, MantineThemeComponent>;

/**
 * Equivalente tipado de `Component.extend(input)`. No Mantine Vue 3.5 vários componentes
 * (Accordion, Cascader, SegmentedControl…) não têm `extend` em runtime;
 * como `extend` é só identidade, usamos o tipo dele quando existe e devolvemos o próprio input.
 */
export function themed<C>(
  _component: C,
  input: C extends { extend: (input: infer Input) => unknown } ? Input : MantineThemeComponent,
): MantineThemeComponent {
  return input as MantineThemeComponent;
}
