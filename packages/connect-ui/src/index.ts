import './styles/global.css';

// Tudo do Mantine core, para importar de um só lugar: `import { Button, StatusBadge } from '@jcdecor/connect-ui'`
export * from '@mantine/core';

export { connectTheme } from './theme/theme';
export { connectCssVariablesResolver } from './theme/cssVariablesResolver';
export { connectVariantColorResolver } from './theme/variantColorResolver';
export { connectColors } from './theme/colors';
export type { ConnectColor } from './theme/colors';
export { tokens, tones, priorities, statuses } from './theme/tokens';
export type { ToneName, PrioName, StatusName } from './theme/tokens';
export { ConnectProvider } from './provider/ConnectProvider';
export type { ConnectProviderProps } from './provider/ConnectProvider';
export * from './components';
export * from './utils/format';
