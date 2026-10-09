import { Comment, Fragment, defineComponent, h, type Slots, type VNode } from 'vue';
import {
  Autocomplete as MAutocomplete,
  Card as MCard,
  Cascader as MCascader,
  CheckboxIndicator as MCheckboxIndicator,
  Combobox as MCombobox,
  Drawer as MDrawer,
  FileInput as MFileInput,
  FloatingWindow as MFloatingWindow,
  Modal as MModal,
  MultiSelect as MMultiSelect,
  NumberFormatter as MNumberFormatter,
  NativeSelect as MNativeSelect,
  NumberInput as MNumberInput,
  PillsInput as MPillsInput,
  RollingNumber as MRollingNumber,
  TagsInput as MTagsInput,
  Timeline as MTimeline,
  Select as MSelect,
  Table as MTable,
  Tooltip as MTooltip,
  TreeSelect as MTreeSelect,
  getRadius,
  useMantineTheme,
} from '@mantine-vue/core';

/** Estáticos do Mantine que o wrapper precisa manter (`Card.Section`, `Table.Thead`, `extend`, `classes`…). */
const isStatic = (key: string) => /^[A-Z]/.test(key) || ['classes', 'varsResolver', 'extend', 'withProps'].includes(key);

/**
 * No Mantine Vue 3.5 alguns componentes fixam padrões no `withDefaults` (ex.: `size: 'sm'` no NumberInput,
 * `withBorder: false` no Card), e esses valores vencem o `defaultProps` do tema — no React o tema vence.
 * O wrapper aplica `theme.components[name].defaultProps` antes das props do usuário, que continuam com prioridade.
 */
export function withThemeDefaults<C>(
  component: C,
  name: string,
  fix?: (props: Record<string, any>) => Record<string, any>,
  fixSlots?: (slots: Slots) => Slots,
): C {
  const Wrapped = defineComponent({
    name,
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
      const theme = useMantineTheme();
      return () => {
        const props = { ...theme.value.components[name]?.defaultProps, ...attrs };
        return h(component as any, fix ? { ...props, ...fix(props) } : props, fixSlots ? fixSlots(slots) : slots);
      };
    },
  });
  for (const [key, value] of Object.entries(component as object)) if (isStatic(key)) (Wrapped as any)[key] = value;
  return Wrapped as unknown as C;
}

/**
 * Comboboxes que leem `attrs.size ?? 'sm'` (e não o tema): sem `size` explícito o campo ou o
 * dropdown fica em sm, enquanto o tema pede md.
 */
export const Autocomplete: typeof MAutocomplete = withThemeDefaults(MAutocomplete, 'Autocomplete');
export const Card: typeof MCard = withThemeDefaults(MCard, 'Card');
export const Cascader: typeof MCascader = withThemeDefaults(MCascader, 'Cascader');
export const CheckboxIndicator: typeof MCheckboxIndicator = withThemeDefaults(MCheckboxIndicator, 'CheckboxIndicator');
export const Combobox: typeof MCombobox = withThemeDefaults(MCombobox, 'Combobox');
export const FileInput: typeof MFileInput = withThemeDefaults(MFileInput, 'FileInput');
/**
 * O Mantine Vue grava o `radius` do Modal/Drawer com `rem()`, então um nome do tema ('md') vira `--modal-radius: md`
 * (CSS inválido: cantos retos). O React usa `getRadius`. Traduzimos nomes para `var(--mantine-radius-*)`.
 */
const radiusVar = (radius: unknown) =>
  typeof radius === 'string' && /^(xs|sm|md|lg|xl)$/.test(radius) ? { radius: getRadius(radius) } : {};

/**
 * Modal e Drawer: o Mantine Vue 3.5 fixa `zIndex` (200) no `withDefaults`, então `theme.components.Modal/Drawer
 * .defaultProps.zIndex` não chegava ao conteúdo nem ao fundo escurecido. Popover, Menu, Combobox e Tooltip já respeitam.
 */
export const Modal: typeof MModal = withThemeDefaults(MModal, 'Modal', (props) => radiusVar(props.radius));
export const Drawer: typeof MDrawer = withThemeDefaults(MDrawer, 'Drawer', (props) => radiusVar(props.radius));
export const FloatingWindow: typeof MFloatingWindow = withThemeDefaults(MFloatingWindow, 'FloatingWindow');
export const MultiSelect: typeof MMultiSelect = withThemeDefaults(MMultiSelect, 'MultiSelect');
export const NumberFormatter: typeof MNumberFormatter = withThemeDefaults(MNumberFormatter, 'NumberFormatter', (props) => {
  const scale = props.decimalScale ?? props['decimal-scale'];
  return scale === undefined ? {} : { value: roundTo(props.value, scale) };
});
export const NumberInput: typeof MNumberInput = withThemeDefaults(MNumberInput, 'NumberInput');
export const PillsInput: typeof MPillsInput = withThemeDefaults(MPillsInput, 'PillsInput');
export const Table: typeof MTable = withThemeDefaults(MTable, 'Table');
export const Tooltip: typeof MTooltip = withThemeDefaults(MTooltip, 'Tooltip');

/** Atalho booleano de template (`<Select searchable />`) chega como `''`. */
const isOn = (value: unknown) => value === true || value === '';
const has = (props: Record<string, any>, name: string, kebab: string) => props[name] !== undefined || props[kebab] !== undefined;

/**
 * Select não pesquisável: o Mantine Vue 3.5 grava `read-only="true"` (atributo inválido) no input, então dá para
 * digitar nele. Aplicamos o `readonly` nativo, como no React.
 */
export const Select: typeof MSelect = withThemeDefaults(MSelect, 'Select', (props) =>
  isOn(props.searchable) ? {} : { readonly: true },
);
export const TagsInput: typeof MTagsInput = withThemeDefaults(MTagsInput, 'TagsInput');
export const TreeSelect: typeof MTreeSelect = withThemeDefaults(MTreeSelect, 'TreeSelect');

type NativeOption = string | { value: string; disabled?: boolean } | { group: string; items: NativeOption[] };
const firstValue = (data: NativeOption[] = []): string | undefined => {
  for (const item of data) {
    if (typeof item === 'string') return item;
    if ('group' in item) {
      const nested = firstValue(item.items);
      if (nested !== undefined) return nested;
    } else if (!item.disabled) return item.value;
  }
  return undefined;
};

/**
 * NativeSelect não controlado e sem `defaultValue`: o Mantine Vue 3.5 liga `value=undefined` no `<select>` e ele
 * aparece vazio (selectedIndex -1). Começa na primeira opção, como o navegador/React.
 */
export const NativeSelect: typeof MNativeSelect = withThemeDefaults(MNativeSelect, 'NativeSelect', (props) =>
  has(props, 'modelValue', 'model-value') || has(props, 'value', 'value') || has(props, 'defaultValue', 'default-value')
    ? {}
    : { defaultValue: firstValue(props.data) },
);

/**
 * RollingNumber: `thousandSeparator` é `string | boolean` e o Vue converte o ausente em `false`, que vence o
 * separador pt-BR do tema. Repassar o padrão do tema explicitamente (o wrapper já faz) resolve.
 */
export const RollingNumber: typeof MRollingNumber = withThemeDefaults(MRollingNumber, 'RollingNumber');

/**
 * NumberFormatter com `decimalScale`: o Mantine Vue 3.5 corta as casas (-3,45 → "-3,4") em vez de arredondar
 * como o React ("-3,5"). Arredondamos o valor antes.
 */
const roundTo = (value: unknown, scale: unknown) => {
  const digits = Number(scale);
  const n = typeof value === 'string' && value.trim() !== '' ? Number(value) : value;
  if (typeof n !== 'number' || !Number.isFinite(n) || !Number.isInteger(digits) || digits < 0) return value;
  return Number(n.toFixed(digits));
};

/** Timeline: o Mantine Vue não achata Fragments, então itens de `v-for` contam como um só e `active` não funciona. */
const flatten = (nodes: VNode[]): VNode[] =>
  nodes.flatMap((node) =>
    node.type === Fragment && Array.isArray(node.children) ? flatten(node.children as VNode[]) : node.type === Comment ? [] : [node],
  );

export const Timeline: typeof MTimeline = withThemeDefaults(MTimeline, 'Timeline', undefined, (slots) => ({
  ...slots,
  default: (...args: unknown[]) => flatten((slots.default?.(...(args as [])) ?? []) as VNode[]),
}));
