import { computed, defineComponent, h, watch, type PropType } from 'vue';
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

/** Mesma chave do `localStorageColorSchemeManager` do Mantine React: o tema escolhido vale nas duas libs. */
export const COLOR_SCHEME_STORAGE_KEY = 'mantine-color-scheme-value';

const isScheme = (value: unknown): value is MantineColorScheme => value === 'light' || value === 'dark' || value === 'auto';

function readStoredScheme(key: string): MantineColorScheme | undefined {
  try {
    const value = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
    return isScheme(value) ? value : undefined;
  } catch {
    return undefined;
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

export interface JcProviderProps {
  /** Overrides adicionais, mesclados sobre o tema JC Decor */
  theme?: MantineThemeOverride;
  /** @default 'light' */
  defaultColorScheme?: MantineColorScheme;
  forceColorScheme?: 'light' | 'dark';
  cssVariablesResolver?: CSSVariablesResolver;
  /** Chave do localStorage onde o tema claro/escuro é lembrado; `false` desliga @default 'mantine-color-scheme-value' */
  colorSchemeStorageKey?: string | false;
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
  },
  setup(props, { attrs, slots }) {
    const theme = computed(() => (props.theme ? deepMerge(jcTheme, props.theme) : jcTheme));
    // Lido uma vez: o MantineProvider só usa o esquema inicial na montagem.
    const stored = props.colorSchemeStorageKey ? readStoredScheme(props.colorSchemeStorageKey) : undefined;

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
          slots.default?.(),
        ],
      );
  },
});
