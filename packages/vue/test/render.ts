import { defineComponent, h, type VNodeChild } from 'vue';
import { render as tlRender } from '@testing-library/vue';
import { JcProvider } from '../src';

/** Renderiza dentro do JcProvider: `render(() => h(Tag, { tone: 'success' }, () => 'Ok'))`. */
export function render(ui: () => VNodeChild) {
  return tlRender(
    defineComponent({
      setup: () => () => h(JcProvider, { env: 'test', colorSchemeStorageKey: false }, () => ui()),
    }),
  );
}

export * from '@testing-library/vue';
