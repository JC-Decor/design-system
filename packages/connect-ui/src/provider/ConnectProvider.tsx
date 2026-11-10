import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { MantineProvider, mergeThemeOverrides, type MantineProviderProps, type MantineThemeOverride } from '@mantine/core';
import { connectCssVariablesResolver } from '../theme/cssVariablesResolver';
import { connectTheme } from '../theme/theme';
import { getActiveHolidayFlavor, type HolidayFlavor, type ThemeFlavor } from '../theme/holidays';

export type { HolidayFlavor, ThemeFlavor } from '../theme/holidays';

const FESTIVE_STORAGE_KEY = 'cn-theme-flavor';

interface ThemeFlavorContextValue {
  /** Flavor efetivamente aplicado em `data-theme-flavor` (`'default'` fora de temporada ou com o festivo desligado). */
  flavor: ThemeFlavor;
  /** Feriado da janela atual (ver `theme/holidays.ts`), ou `null` fora de temporada — independe de `festiveEnabled`. */
  activeHoliday: HolidayFlavor | null;
  /** Preferência do usuário: mostrar o tema festivo quando há um `activeHoliday`. */
  festiveEnabled: boolean;
  setFestiveEnabled: (enabled: boolean) => void;
}

const ThemeFlavorContext = createContext<ThemeFlavorContextValue>({
  flavor: 'default',
  activeHoliday: null,
  festiveEnabled: true,
  setFestiveEnabled: () => {},
});

/**
 * Tema sazonal ativo: no máximo um feriado "na janela" por vez (`activeHoliday`, ver
 * `theme/holidays.ts`), ligado/desligado pelo usuário via `festiveEnabled`/`<ThemeFlavorToggle />`.
 */
export const useThemeFlavor = () => useContext(ThemeFlavorContext);

function readStoredFestiveEnabled(fallback: boolean): boolean {
  try {
    const stored = window.localStorage.getItem(FESTIVE_STORAGE_KEY);
    if (stored === 'true' || stored === 'false') return stored === 'true';
    // Compatibilidade com o formato anterior ('default' | 'christmas'): qualquer feriado salvo vale "ligado".
    if (stored) return stored !== 'default';
    return fallback;
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
  /**
   * Força um flavor específico, ignorando a data atual e a preferência salva. Útil para
   * pré-visualizar/testar um feriado fora da janela real (ex.: nos docs).
   */
  forceThemeFlavor?: ThemeFlavor;
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
  forceThemeFlavor,
  cssVariablesResolver,
  children,
  ...others
}: ConnectProviderProps) {
  const merged = theme ? mergeThemeOverrides(connectTheme, theme) : connectTheme;
  const [festiveEnabled, setFestiveEnabledState] = useState(() => readStoredFestiveEnabled(true));
  const activeHoliday = useMemo(() => getActiveHolidayFlavor(new Date()), []);
  const setFestiveEnabled = useCallback((next: boolean) => {
    setFestiveEnabledState(next);
    try {
      window.localStorage.setItem(FESTIVE_STORAGE_KEY, String(next));
    } catch {
      // sem localStorage: vale só nesta aba
    }
  }, []);
  const flavor: ThemeFlavor = forceThemeFlavor ?? (festiveEnabled && activeHoliday ? activeHoliday : 'default');

  return (
    <MantineProvider
      theme={merged}
      defaultColorScheme={defaultColorScheme}
      cssVariablesResolver={cssVariablesResolver ?? connectCssVariablesResolver}
      {...others}
    >
      <ThemeFlavorContext.Provider value={{ flavor, activeHoliday, festiveEnabled, setFestiveEnabled }}>
        <ThemeFlavorPersistence flavor={flavor} />
        {children}
      </ThemeFlavorContext.Provider>
    </MantineProvider>
  );
}
ConnectProvider.displayName = '@jcdecor/connect-ui/ConnectProvider';
