import './styles/global.css';
import './styles/vue-fixes.css';

// Tudo do Mantine Vue core, para importar de um só lugar: `import { Button, Tag } from '@jcdecor/vue'`
export * from '@mantine-vue/core';
// Em templates Vue, `<Transition>` é sempre o built-in do Vue (o compilador ignora o import).
// Use `<MantineTransition>` para o componente do Mantine (mounted, transition, duration…).
export { Transition as MantineTransition } from '@mantine-vue/core';
// Versões que respeitam o defaultProps do tema (contornam padrões fixos do Mantine Vue 3.5; ver themeDefaults.ts)
export {
  Autocomplete,
  Card,
  Cascader,
  CheckboxIndicator,
  Combobox,
  Drawer,
  FileInput,
  FloatingWindow,
  Modal,
  MultiSelect,
  NativeSelect,
  NumberFormatter,
  NumberInput,
  PillsInput,
  RollingNumber,
  Select,
  Table,
  TagsInput,
  Timeline,
  Tooltip,
  TreeSelect,
  withThemeDefaults,
} from './theme/themeDefaults';

export { jcTheme } from './theme/theme';
export { jcCssVariablesResolver } from './theme/cssVariablesResolver';
export { jcVariantColorResolver } from './theme/variantColorResolver';
export { jcColors } from './theme/colors';
export type { JcColor } from './theme/colors';
export { tokens } from './theme/tokens';
export { JcProvider, COLOR_SCHEME_STORAGE_KEY } from './provider/JcProvider';
export type { JcProviderProps } from './provider/JcProvider';
export * from './components';
export * from './brand';
export * from './utils/format';
// O Mantine Vue também exporta um `formatNumber` (genérico); o do DS (pt-BR) tem prioridade, como no @jcdecor/ui.
export { formatNumber } from './utils/format';
