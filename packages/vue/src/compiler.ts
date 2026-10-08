import * as core from '@mantine-vue/core';

/**
 * Transform do compilador de templates Vue (roda no build do app, não no navegador).
 *
 * No React, `rem('64')` do Mantine vira `4rem`. No Mantine Vue 3.5 um número em texto passa direto:
 * `<Avatar size="64">` grava `--avatar-size: 64` e `<Group gap="4">` grava `gap: 4`, CSS inválido que o
 * navegador ignora (avatar do tamanho do card, espaçamento zerado). Este transform troca o atributo
 * estático por um bind numérico (`size="64"` → `:size="64"`), que o Mantine Vue converte como o React.
 *
 * Uso (vite.config):
 *   import { mantineNumericProps } from '@jcdecor/vue/compiler'
 *   vue({ template: { compilerOptions: { nodeTransforms: [mantineNumericProps] } } })
 */

/** Tipos das style props do Mantine que passam por `rem()` (`lh`, `opacity`, `flex`… ficam como estão). */
const SIZED_STYLE_PROP_TYPES = new Set(['spacing', 'size', 'fontSize', 'radius']);

/** Props de componente que o Mantine Vue passa por `rem()`/`getSize()`. Nunca `value`, `label`, `cols`… */
const SIZED_COMPONENT_PROPS = [
  'size',
  'radius',
  'gap',
  'rowGap',
  'columnGap',
  'spacing',
  'verticalSpacing',
  'horizontalSpacing',
  'bulletSize',
  'lineWidth',
  'thickness',
  'iconSize',
  'offset',
  'width',
  'height',
];

const styleProps = Object.entries((core as any).STYLE_PROPS_DATA as Record<string, { type: string }>)
  .filter(([, data]) => SIZED_STYLE_PROP_TYPES.has(data.type))
  .map(([name]) => name);

export const NUMERIC_PROPS: ReadonlySet<string> = new Set([...styleProps, ...SIZED_COMPONENT_PROPS]);

/** Componentes do Mantine Vue (o que o `@jcdecor/vue` reexporta). Componentes do app e do Vuetify ficam de fora. */
export const MANTINE_COMPONENTS: ReadonlySet<string> = new Set(
  Object.entries(core)
    .filter(([name, value]) => /^[A-Z]/.test(name) && value && typeof value === 'object' && ('setup' in value || 'render' in value))
    .map(([name]) => name),
);

const NUMBER = /^-?\d+(\.\d+)?$/;
const camelize = (s: string) => s.replace(/-(\w)/g, (_, c: string) => c.toUpperCase());
const pascalize = (s: string) => {
  const c = camelize(s);
  return c[0].toUpperCase() + c.slice(1);
};

// Valores estáveis do @vue/compiler-core (NodeTypes, ElementTypes, ConstantTypes); evitam depender do pacote.
const ELEMENT = 1;
const COMPONENT = 1;
const ATTRIBUTE = 6;
const DIRECTIVE = 7;
const SIMPLE_EXPRESSION = 4;
const CAN_STRINGIFY = 3;

interface Loc {
  start: unknown;
  end: unknown;
  source: string;
}
interface TemplateNode {
  type: number;
  tagType?: number;
  tag?: string;
  props?: any[];
}

/** `NodeTransform` do `@vue/compiler-core`. */
export function mantineNumericProps(node: TemplateNode): void {
  if (node.type !== ELEMENT || node.tagType !== COMPONENT || !node.tag || !node.props) return;
  if (!MANTINE_COMPONENTS.has(pascalize(node.tag))) return;

  node.props = node.props.map((prop) => {
    if (prop.type !== ATTRIBUTE || !prop.value || !NUMBER.test(prop.value.content)) return prop;
    const name = camelize(prop.name);
    if (!NUMERIC_PROPS.has(name)) return prop;
    const loc: Loc = prop.loc;
    const expression = (content: string, isStatic: boolean) => ({
      type: SIMPLE_EXPRESSION,
      content,
      isStatic,
      constType: CAN_STRINGIFY,
      loc,
    });
    return {
      type: DIRECTIVE,
      name: 'bind',
      rawName: `:${prop.name}`,
      arg: expression(name, true),
      exp: expression(String(Number(prop.value.content)), false),
      modifiers: [],
      loc,
    };
  });
}
