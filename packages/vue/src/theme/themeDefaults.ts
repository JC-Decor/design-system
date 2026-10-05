import { defineComponent, h } from 'vue';
import {
  Card as MCard,
  Cascader as MCascader,
  CheckboxIndicator as MCheckboxIndicator,
  Combobox as MCombobox,
  FileInput as MFileInput,
  FloatingWindow as MFloatingWindow,
  NumberFormatter as MNumberFormatter,
  NumberInput as MNumberInput,
  PillsInput as MPillsInput,
  Table as MTable,
  Tooltip as MTooltip,
  useMantineTheme,
} from '@mantine-vue/core';

/** Estáticos do Mantine que o wrapper precisa manter (`Card.Section`, `Table.Thead`, `extend`, `classes`…). */
const isStatic = (key: string) => /^[A-Z]/.test(key) || ['classes', 'varsResolver', 'extend', 'withProps'].includes(key);

/**
 * No Mantine Vue 3.5 alguns componentes fixam padrões no `withDefaults` (ex.: `size: 'sm'` no NumberInput,
 * `withBorder: false` no Card), e esses valores vencem o `defaultProps` do tema — no React o tema vence.
 * O wrapper aplica `theme.components[name].defaultProps` antes das props do usuário, que continuam com prioridade.
 */
export function withThemeDefaults<C>(component: C, name: string): C {
  const Wrapped = defineComponent({
    name,
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
      const theme = useMantineTheme();
      return () => h(component as any, { ...theme.value.components[name]?.defaultProps, ...attrs }, slots);
    },
  });
  for (const [key, value] of Object.entries(component as object)) if (isStatic(key)) (Wrapped as any)[key] = value;
  return Wrapped as unknown as C;
}

export const Card: typeof MCard = withThemeDefaults(MCard, 'Card');
export const Cascader: typeof MCascader = withThemeDefaults(MCascader, 'Cascader');
export const CheckboxIndicator: typeof MCheckboxIndicator = withThemeDefaults(MCheckboxIndicator, 'CheckboxIndicator');
export const Combobox: typeof MCombobox = withThemeDefaults(MCombobox, 'Combobox');
export const FileInput: typeof MFileInput = withThemeDefaults(MFileInput, 'FileInput');
export const FloatingWindow: typeof MFloatingWindow = withThemeDefaults(MFloatingWindow, 'FloatingWindow');
export const NumberFormatter: typeof MNumberFormatter = withThemeDefaults(MNumberFormatter, 'NumberFormatter');
export const NumberInput: typeof MNumberInput = withThemeDefaults(MNumberInput, 'NumberInput');
export const PillsInput: typeof MPillsInput = withThemeDefaults(MPillsInput, 'PillsInput');
export const Table: typeof MTable = withThemeDefaults(MTable, 'Table');
export const Tooltip: typeof MTooltip = withThemeDefaults(MTooltip, 'Tooltip');
