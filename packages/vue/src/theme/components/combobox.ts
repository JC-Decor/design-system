import { themed, type ThemeComponents } from './types';
import { Cascader, Pill } from '@mantine-vue/core';
import classes from './combobox.module.css';

/** Campos baseados em Combobox: tamanho md por padrão (o Mantine 9 usa sm). */
const COMBOBOX_INPUTS = ['Select', 'MultiSelect', 'Autocomplete', 'TagsInput', 'PillsInput', 'Cascader', 'TreeSelect', 'Combobox'];

/** Partes do dropdown comuns a todos os componentes "combobox-like". */
const dropdownClassNames = {
  dropdown: classes.dropdown,
  option: classes.option,
  groupLabel: classes.groupLabel,
  empty: classes.empty,
};

/**
 * Cada componente resolve o tema pelo próprio nome (`__staticSelector`), por isso as classes
 * são repetidas em Select, MultiSelect, … em vez de só em Combobox.
 */
const classNamesByComponent: Record<string, Record<string, string>> = {
  Combobox: { ...dropdownClassNames, search: classes.search, header: classes.header, footer: classes.footer },
  ComboboxPopover: { ...dropdownClassNames, search: classes.search },
  Select: dropdownClassNames,
  Autocomplete: dropdownClassNames,
  MultiSelect: { ...dropdownClassNames, pill: classes.pill },
  TagsInput: { ...dropdownClassNames, pill: classes.pill },
  TreeSelect: { ...dropdownClassNames, pill: classes.pill },
};

export const comboboxComponents: ThemeComponents = {
  ...Object.fromEntries(COMBOBOX_INPUTS.map((name) => [name, { defaultProps: { size: 'md' } }])),
  ...Object.fromEntries(
    Object.entries(classNamesByComponent).map(([name, classNames]) => [
      name,
      { defaultProps: COMBOBOX_INPUTS.includes(name) ? { size: 'md' } : {}, classNames },
    ]),
  ),
  Cascader: themed(Cascader, {
    defaultProps: { size: 'md' },
    classNames: {
      ...dropdownClassNames,
      column: classes.cascaderColumn,
      columnOption: classes.cascaderOption,
      flatOption: classes.option,
      columnsOverflow: classes.cascaderOverflow,
    },
  }),
  Pill: themed(Pill, { classNames: { root: classes.pill, remove: classes.pillRemove } }),
};
