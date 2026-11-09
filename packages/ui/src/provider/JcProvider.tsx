import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { MantineProvider, mergeThemeOverrides, type MantineProviderProps, type MantineThemeOverride } from '@mantine/core';
import { jcCssVariablesResolver } from '../theme/cssVariablesResolver';
import { jcTheme } from '../theme/theme';

export type ThemeFlavor = 'default' | 'christmas';

const FLAVOR_STORAGE_KEY = 'jc-theme-flavor';

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

export interface JcProviderProps extends Omit<MantineProviderProps, 'theme'> {
  /** Overrides adicionais, mesclados sobre o tema JC Decor */
  theme?: MantineThemeOverride;
  /** Tema sazonal inicial (persistido em localStorage a partir da primeira troca) @default 'default' */
  defaultThemeFlavor?: ThemeFlavor;
  children?: ReactNode;
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
export function JcProvider({
  theme,
  defaultColorScheme = 'light',
  defaultThemeFlavor = 'default',
  cssVariablesResolver,
  children,
  ...others
}: JcProviderProps) {
  const merged = theme ? mergeThemeOverrides(jcTheme, theme) : jcTheme;
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
      cssVariablesResolver={cssVariablesResolver ?? jcCssVariablesResolver}
      {...others}
    >
      <ThemeFlavorContext.Provider value={{ flavor, setFlavor }}>
        <ThemeFlavorPersistence flavor={flavor} />
        {children}
      </ThemeFlavorContext.Provider>
    </MantineProvider>
  );
}
JcProvider.displayName = '@jcdecor/ui/JcProvider';
