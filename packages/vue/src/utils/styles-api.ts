import type { StylesApiProps } from '@mantine-vue/core';

/**
 * Mesmo contrato do `StylesApiProps` do Mantine Vue, redeclarado localmente: o compilador de SFC
 * (`defineProps<T>()`) não consegue resolver um `extends` de interface genérica vinda de outro pacote.
 */
export interface JcStylesApiProps<Payload> {
  /** Classes por seletor do Styles API (objeto ou função `(theme, props) => objeto`) */
  classNames?: StylesApiProps<Payload>['classNames'];
  /** Estilos inline por seletor do Styles API (objeto ou função `(theme, props) => objeto`) */
  styles?: StylesApiProps<Payload>['styles'];
  /** Resolver de variáveis CSS (`(theme, props) => ({ root: { '--x': … } })`) */
  vars?: StylesApiProps<Payload>['vars'];
  /** Remove as classes do componente (classNames, styles e variáveis continuam) @default false */
  unstyled?: boolean;
}
