import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { MantineProvider, mergeThemeOverrides, type MantineProviderProps, type MantineThemeOverride } from '@mantine/core';
import { connectCssVariablesResolver } from '../theme/cssVariablesResolver';
import { connectTheme } from '../theme/theme';

export type ThemeFlavor = 'default' | 'christmas';

const FLAVOR_STORAGE_KEY = 'cn-theme-flavor';

interface ThemeFlavorContextValue {
  flavor: ThemeFlavor;
  setFlavor: (flavor: ThemeFlavor) => void;
}

const ThemeFlavorContext = createContext<ThemeFlavorContextValue>({ flavor: 'default', setFlavor: () => {} });

/** Lê/alterna o tema sazonal ativo (hoje: `'default' | 'christmas'`). Ver `<ThemeFlavorToggle />`. */
export const useThemeFlavor = () => useContext(ThemeFlavorContext);

function readStoredFlavor(fallback: ThemeFlavor): ThemeFlavor {
  try {
    const stored = window.localStorage.getItem(FLAVOR_STORAGE_KEY);
    return stored === 'christmas' || stored === 'default' ? stored : fallback;
  } catch {
    return fallback;
  }
}

function ThemeFlavorPersistence({ flavor }: { flavor: ThemeFlavor }) {
  useEffect(() => {
    document.documentElement.dataset.themeFlavor = flavor;
  }, [flavor]);
  return null;
}

export interface ConnectProviderProps extends Omit<MantineProviderProps, 'theme'> {
  /** Overrides adicionais, mesclados sobre o tema Connect */
  theme?: MantineThemeOverride;
  /** Tema sazonal inicial (persistido em localStorage a partir da primeira troca) @default 'default' */
  defaultThemeFlavor?: ThemeFlavor;
  children?: ReactNode;
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
export function ConnectProvider({
  theme,
  defaultColorScheme = 'light',
  defaultThemeFlavor = 'default',
  cssVariablesResolver,
  children,
  ...others
}: ConnectProviderProps) {
  const merged = theme ? mergeThemeOverrides(connectTheme, theme) : connectTheme;
  const [flavor, setFlavorState] = useState<ThemeFlavor>(() => readStoredFlavor(defaultThemeFlavor));
  const setFlavor = useCallback((next: ThemeFlavor) => {
    setFlavorState(next);
    try {
      window.localStorage.setItem(FLAVOR_STORAGE_KEY, next);
    } catch {
      // sem localStorage: vale só nesta aba
    }
  }, []);

  return (
    <MantineProvider
      theme={merged}
      defaultColorScheme={defaultColorScheme}
      cssVariablesResolver={cssVariablesResolver ?? connectCssVariablesResolver}
      {...others}
    >
      <ThemeFlavorContext.Provider value={{ flavor, setFlavor }}>
        <ThemeFlavorPersistence flavor={flavor} />
        {children}
      </ThemeFlavorContext.Provider>
    </MantineProvider>
  );
}
ConnectProvider.displayName = '@jcdecor/connect-ui/ConnectProvider';
