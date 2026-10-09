import { Comment, Fragment, Text, camelize, getCurrentInstance, isVNode, toHandlerKey, type PropType, type VNodeChild } from 'vue';
import { resolveNode, type MantineNode } from '@mantine-vue/core';

/**
 * Indica se há conteúdo renderizável. Diferente do `hasNode` do Mantine Vue, trata como vazio
 * um slot que só devolveu comentários (`v-if` falso), texto em branco ou arrays/fragments vazios.
 */
export function hasContent(node: VNodeChild): boolean {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some((child) => hasContent(child as VNodeChild));
  if (isVNode(node)) {
    if (node.type === Comment) return false;
    if (node.type === Text) return typeof node.children === 'string' && node.children.trim() !== '';
    if (node.type === Fragment) return hasContent(node.children as VNodeChild);
  }
  return true;
}

/** `resolveNode` do Mantine Vue (slot > prop) já normalizado para `undefined` quando vazio. */
export function resolveContent(prop: MantineNode | undefined, slot?: () => VNodeChild): VNodeChild {
  const node = resolveNode(prop, slot);
  return hasContent(node) ? node : undefined;
}

/**
 * Equivalente ao `if (onAction)` do React: devolve uma função que diz se o pai registrou um listener
 * para o evento (`@action`, `v-model:favorite` → `onUpdate:favorite`…). Chame no setup e use a
 * função durante o render.
 *
 * Os listeners de eventos declarados em `emits` não chegam em `attrs`, então a checagem é feita nas
 * props do VNode do componente. Limitação do Vue: adicionar/remover só um listener (sem mudar
 * nenhuma prop) não re-renderiza o filho.
 */
export function useListenerCheck() {
  const instance = getCurrentInstance();
  return (event: string): boolean => {
    const props = instance?.vnode.props;
    if (!props) return false;
    return Boolean(props[toHandlerKey(event)] || props[toHandlerKey(camelize(event))]);
  };
}

/**
 * Declaração runtime de uma prop `MantineNode` (texto, número, VNode ou função) para `defineComponent`.
 * `type: null` aceita qualquer valor e evita o cast booleano do Vue.
 */
export const nodeProp = { type: null as unknown as PropType<MantineNode>, default: undefined };
