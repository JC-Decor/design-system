// Permite importar componentes Vue (src/vue-demos/**) nas páginas React; o vue-tsc checa os .vue de verdade.
declare module '*.vue' {
  import type { Component } from 'vue';
  const component: Component;
  export default component;
}
