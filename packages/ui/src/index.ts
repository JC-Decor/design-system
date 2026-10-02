import './styles/global.css';

// Tudo do Mantine core, para importar de um só lugar: `import { Button, Tag } from '@jcdecor/ui'`
export * from '@mantine/core';

export { jcTheme } from './theme/theme';
export { jcCssVariablesResolver } from './theme/cssVariablesResolver';
export { jcVariantColorResolver } from './theme/variantColorResolver';
export { jcColors } from './theme/colors';
export type { JcColor } from './theme/colors';
export { tokens } from './theme/tokens';
export { JcProvider } from './provider/JcProvider';
export type { JcProviderProps } from './provider/JcProvider';
export * from './components';
export * from './brand';
export * from './utils/format';
