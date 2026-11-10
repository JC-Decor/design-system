import { computed, defineComponent, h, inject, provide, ref, watch, type InjectionKey, type PropType, type Ref } from 'vue';
import {
  MantineProvider,
  useMantineColorScheme,
  type CSSVariablesResolver,
  type MantineColorScheme,
  type MantineThemeOverride,
} from '@mantine-vue/core';
import { deepMerge } from '@mantine-vue/utils';
import { jcCssVariablesResolver } from '../theme/cssVariablesResolver';
import { jcTheme } from '../theme/theme';
import { getActiveHolidayFlavor, type HolidayFlavor, type ThemeFlavor } from '../theme/holidays';

export type { HolidayFlavor, ThemeFlavor } from '../theme/holidays';

/** Mesma chave do `localStorageColorSchemeManager` do Mantine React: o tema escolhido vale nas duas libs. */
export const COLOR_SCHEME_STORAGE_KEY = 'mantine-color-scheme-value';

/** Mesma chave usada pelo `JcProvider` do React (`@jcdecor/ui`). */
export const THEME_FLAVOR_STORAGE_KEY = 'jc-theme-flavor';

const isScheme = (value: unknown): value is MantineColorScheme => value === 'light' || value === 'dark' || value === 'auto';

function readStoredScheme(key: string): MantineColorScheme | undefined {
  try {
    const value = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    return isScheme(value) ? value : undefined;
  } catch {
    return undefined;
  }
}

function readStoredFestiveEnabled(fallback: boolean): boolean {
  try {
    const value = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_FLAVOR_STORAGE_KEY) : null;
    if (value === 'true' || value === 'false') return value === 'true';
    // Compatibilidade com o formato anterior ('default' | 'christmas'): qualquer feriado salvo vale "ligado".
    if (value) return value !== 'default';
    return fallback;
  } catch {
    return fallback;
  }
}

/** Grava o esquema de cores atual (precisa estar dentro do MantineProvider para ler o contexto). */
const ColorSchemePersistence = defineComponent({
  name: 'JcColorSchemePersistence',
  props: { storageKey: { type: String, required: true } },
  setup(props) {
    const { colorScheme } = useMantineColorScheme();
    watch(colorScheme, (value) => {
      try {
        window.localStorage.setItem(props.storageKey, value);
      } catch {
        // localStorage indisponível (modo privado, SSR): o tema só não é lembrado
      }
    });
    return () => null;
  },
});

/** Reflete o tema sazonal atual em `document.documentElement.dataset.themeFlavor` (ver `christmas.css`). */
const ThemeFlavorPersistence = defineComponent({
  name: 'JcThemeFlavorPersistence',
  props: { flavor: { type: String as PropType<ThemeFlavor>, required: true } },
  setup(props) {
    watch(
      () => props.flavor,
      (value) => {
        document.documentElement.dataset.themeFlavor = value;
      },
      { immediate: true },
    );
    return () => null;
  },
});

export interface JcProviderProps {
  /** Overrides adicionais, mesclados sobre o tema JC Decor */
  theme?: MantineThemeOverride;
  /** @default 'light' */
  defaultColorScheme?: MantineColorScheme;
  forceColorScheme?: 'light' | 'dark';
  cssVariablesResolver?: CSSVariablesResolver;
  /** Chave do localStorage onde o tema claro/escuro é lembrado; `false` desliga @default 'mantine-color-scheme-value' */
  colorSchemeStorageKey?: string | false;
  /**
   * Força um flavor específico, ignorando a data atual e a preferência salva. Útil para
   * pré-visualizar/testar um feriado fora da janela real (ex.: nos docs).
   */
  forceThemeFlavor?: ThemeFlavor;
}

/**
 * Provider do Design System JC Decor: MantineProvider + tema + variáveis `--ds-*`
 * + tema claro/escuro lembrado no localStorage. Demais props vão para o `MantineProvider`.
 *
 * ```vue
 * <script setup>
 * import '@mantine-vue/core/styles.css';
 * import '@jcdecor/vue/styles.css';
 * import { JcProvider } from '@jcdecor/vue';
 * </script>
 * <template><JcProvider><App /></JcProvider></template>
 * ```
 */
export const JcProvider = defineComponent({
  name: 'JcProvider',
  inheritAttrs: false,
  props: {
    theme: { type: Object as PropType<MantineThemeOverride>, default: undefined },
    defaultColorScheme: { type: String as PropType<MantineColorScheme>, default: 'light' },
    forceColorScheme: { type: String as PropType<'light' | 'dark'>, default: undefined },
    cssVariablesResolver: { type: Function as PropType<CSSVariablesResolver>, default: undefined },
    colorSchemeStorageKey: { type: [String, Boolean] as PropType<string | false>, default: COLOR_SCHEME_STORAGE_KEY },
    forceThemeFlavor: { type: String as PropType<ThemeFlavor>, default: undefined },
  },
  setup(props, { attrs, slots }) {
    const theme = computed(() => (props.theme ? deepMerge(jcTheme, props.theme) : jcTheme));
    // Lido uma vez: o MantineProvider só usa o esquema inicial na montagem.
    const stored = props.colorSchemeStorageKey ? readStoredScheme(props.colorSchemeStorageKey) : undefined;
    const activeHoliday = getActiveHolidayFlavor(new Date());
    const festiveEnabled = ref<boolean>(readStoredFestiveEnabled(true));
    const flavor = computed<ThemeFlavor>(() => props.forceThemeFlavor ?? (festiveEnabled.value && activeHoliday ? activeHoliday : 'default'));
    provideThemeFlavor(flavor, activeHoliday, festiveEnabled);

    return () =>
      h(
        MantineProvider,
        {
          ...attrs,
          theme: theme.value,
          defaultColorScheme: stored ?? props.defaultColorScheme,
          forceColorScheme: props.forceColorScheme,
          cssVariablesResolver: props.cssVariablesResolver ?? jcCssVariablesResolver,
        },
        () => [
          props.colorSchemeStorageKey ? h(ColorSchemePersistence, { storageKey: props.colorSchemeStorageKey }) : null,
          h(ThemeFlavorPersistence, { flavor: flavor.value }),
          slots.default?.(),
        ],
      );
  },
});

interface ThemeFlavorApi {
  flavor: Ref<ThemeFlavor>;
  activeHoliday: HolidayFlavor | null;
  festiveEnabled: Ref<boolean>;
  setFestiveEnabled: (enabled: boolean) => void;
}

const ThemeFlavorKey: InjectionKey<ThemeFlavorApi> = Symbol('jc-theme-flavor');

function provideThemeFlavor(flavor: Ref<ThemeFlavor>, activeHoliday: HolidayFlavor | null, festiveEnabled: Ref<boolean>) {
  const setFestiveEnabled = (next: boolean) => {
    festiveEnabled.value = next;
    try {
      window.localStorage.setItem(THEME_FLAVOR_STORAGE_KEY, String(next));
    } catch {
      // sem localStorage: vale só nesta aba
    }
  };
  provide(ThemeFlavorKey, { flavor, activeHoliday, festiveEnabled, setFestiveEnabled });
}

/**
 * Tema sazonal ativo: no máximo um feriado "na janela" por vez (`activeHoliday`, ver
 * `theme/holidays.ts`), ligado/desligado pelo usuário via `festiveEnabled`/`<ThemeFlavorToggle />`.
 */
export function useThemeFlavor(): ThemeFlavorApi {
  const api = inject(ThemeFlavorKey);
  if (!api) throw new Error('useThemeFlavor() precisa ser usado dentro de <JcProvider>');
  return api;
}
