import { MantineProvider, mergeThemeOverrides, type MantineProviderProps, type MantineThemeOverride } from '@mantine/core';
import { jcCssVariablesResolver } from '../theme/cssVariablesResolver';
import { jcTheme } from '../theme/theme';

export interface JcProviderProps extends Omit<MantineProviderProps, 'theme'> {
  /** Overrides adicionais, mesclados sobre o tema JC Decor */
  theme?: MantineThemeOverride;
}

/**
 * Provider do Design System JC Decor: MantineProvider + tema + variáveis `--ds-*`.
 *
 * ```tsx
 * import '@mantine/core/styles.css';
 * import '@jcdecor/ui/styles.css';
 * <JcProvider><App /></JcProvider>
 * ```
 */
export function JcProvider({ theme, defaultColorScheme = 'light', cssVariablesResolver, children, ...others }: JcProviderProps) {
  const merged = theme ? mergeThemeOverrides(jcTheme, theme) : jcTheme;
  return (
    <MantineProvider
      theme={merged}
      defaultColorScheme={defaultColorScheme}
      cssVariablesResolver={cssVariablesResolver ?? jcCssVariablesResolver}
      {...others}
    >
      {children}
    </MantineProvider>
  );
}
JcProvider.displayName = '@jcdecor/ui/JcProvider';
