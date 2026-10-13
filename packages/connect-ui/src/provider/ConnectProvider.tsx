import { MantineProvider, mergeThemeOverrides, type MantineProviderProps, type MantineThemeOverride } from '@mantine/core';
import { connectCssVariablesResolver } from '../theme/cssVariablesResolver';
import { connectTheme } from '../theme/theme';

export interface ConnectProviderProps extends Omit<MantineProviderProps, 'theme'> {
  /** Overrides adicionais, mesclados sobre o tema Connect */
  theme?: MantineThemeOverride;
}

/**
 * Provider do Design System Connect JC: MantineProvider + tema + variáveis `--ds-*` / `--cn-*`.
 *
 * ```tsx
 * import '@mantine/core/styles.css';
 * import '@jcdecor/connect-ui/styles.css';
 * <ConnectProvider><App /></ConnectProvider>
 * ```
 */
export function ConnectProvider({ theme, defaultColorScheme = 'light', cssVariablesResolver, children, ...others }: ConnectProviderProps) {
  const merged = theme ? mergeThemeOverrides(connectTheme, theme) : connectTheme;
  return (
    <MantineProvider
      theme={merged}
      defaultColorScheme={defaultColorScheme}
      cssVariablesResolver={cssVariablesResolver ?? connectCssVariablesResolver}
      {...others}
    >
      {children}
    </MantineProvider>
  );
}
ConnectProvider.displayName = '@jcdecor/connect-ui/ConnectProvider';
