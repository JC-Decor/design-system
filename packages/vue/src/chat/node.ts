import { Comment, Fragment, Text, isVNode, type PropType, type VNodeChild } from 'vue';
import type { MantineNode } from '@mantine-vue/core';

/**
 * Prop que espelha um `React.ReactNode` do @jcdecor/ui: aceita VNode, texto ou função de render.
 * Sem validação de tipo em runtime (VNodeChild inclui string, número, array, objeto, função…).
 */
export const nodeProp = { type: null as unknown as PropType<MantineNode>, default: undefined };

/** `true` se o conteúdo renderiza algo visível (ignora null, false, '', comentários e fragments vazios). */
export function hasContent(node: VNodeChild): boolean {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some((child) => hasContent(child as VNodeChild));
  if (isVNode(node)) {
    if (node.type === Comment) return false;
    if (node.type === Text) return node.children !== '' && node.children != null;
    if (node.type === Fragment) return hasContent(node.children as VNodeChild);
  }
  return true;
}
