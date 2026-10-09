import { useEffect, useRef } from 'react';
import { useComputedColorScheme } from '@mantine/core';
import { createApp, h, shallowRef, type Component } from 'vue';
import { JcProvider } from '@jcdecor/vue';

export interface VueMountProps {
  /** Componente Vue (ex.: o default de um `*.demo.vue`, ou `Tag` do @jcdecor/vue) */
  component: Component;
  props?: Record<string, unknown>;
  /** Slots simples: nome → texto */
  slots?: Record<string, string>;
}

/**
 * Monta um app Vue isolado (com o JcProvider do @jcdecor/vue) dentro da página React.
 * O esquema de cores segue o do docs; como o Mantine Vue só lê `forceColorScheme` na montagem,
 * trocar o tema remonta o exemplo.
 */
/** Cada exemplo é um app Vue separado: sem prefixo próprio, `useId()` repetiria ids entre exemplos da mesma página
 * (classes responsivas do SimpleGrid colidem, `for`/`id` de labels também). */
let mountCount = 0;

export function VueMount({ component, props, slots }: VueMountProps) {
  const el = useRef<HTMLDivElement>(null);
  const scheme = useComputedColorScheme('light');
  const state = useRef({ props: shallowRef(props ?? {}), slots: shallowRef(slots ?? {}) });

  useEffect(() => {
    state.current.props.value = props ?? {};
    state.current.slots.value = slots ?? {};
  }, [props, slots]);

  useEffect(() => {
    const target = el.current;
    if (!target) return;
    const { props: p, slots: s } = state.current;
    const app = createApp({
      setup: () => () =>
        h(
          JcProvider,
          // O provider React já injeta as mesmas variáveis no :root e cuida do atributo de tema do <html>
          { forceColorScheme: scheme, colorSchemeStorageKey: false, withCssVariables: false, getRootElement: () => target },
          () =>
            h(
              component,
              p.value,
              Object.fromEntries(Object.entries(s.value).map(([name, text]) => [name, () => text])),
            ),
        ),
    });
    app.config.idPrefix = `jcv${++mountCount}`;
    app.mount(target);
    return () => app.unmount();
  }, [component, scheme]);

  return <div ref={el} data-vue-demo="" />;
}
