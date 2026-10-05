import { isValidElement, useMemo, useState } from 'react';
import type { Component as VueComponent } from 'vue';
import * as vueCore from '@jcdecor/vue';
import * as vueBrand from '@jcdecor/vue/brand';
import { Box, Group, NumberInput, Paper, SegmentedControl, Select, Stack, Switch, Text, TextInput, ColorSwatch, Tooltip, UnstyledButton, CheckIcon } from '@mantine/core';
import { CodeBlock } from './CodeBlock';
import { toVueImport, useFramework } from './framework';
import { VueMount } from './VueMount';
import classes from './kit.module.css';

export type ConfiguratorControl =
  | { prop: string; type: 'select'; data: string[]; initialValue: string; label?: string }
  | { prop: string; type: 'segmented'; data: string[]; initialValue: string; label?: string }
  | { prop: string; type: 'size'; initialValue: string; label?: string }
  | { prop: string; type: 'boolean'; initialValue: boolean; label?: string }
  | { prop: string; type: 'string'; initialValue: string; label?: string }
  | { prop: string; type: 'number'; initialValue: number; label?: string; min?: number; max?: number; step?: number }
  | { prop: string; type: 'color'; initialValue: string; label?: string; data?: string[] };

export interface ConfiguratorProps {
  /** Componente renderizado na prévia */
  component: React.ElementType;
  /** Nome exibido no código gerado (ex.: "Button") */
  name: string;
  /** Linha de import exibida no topo do código */
  importFrom?: string;
  controls: ConfiguratorControl[];
  /** Props fixas (aparecem no código se `showInCode`) */
  baseProps?: Record<string, unknown>;
  /** Props fixas exibidas no código como texto JSX (ex.: { leftSection: '<IconHeart />' }) */
  codeProps?: Record<string, string>;
  /** Wrapper da prévia (ex.: largura) */
  previewWidth?: number;
  centered?: boolean;
  /**
   * Versão Vue da prévia. Por padrão usa o componente de mesmo `name` do pacote Vue equivalente a `importFrom`
   * (`@jcdecor/ui` → `@jcdecor/vue`), com as mesmas props. Passe quando a prévia React é um wrapper próprio
   * ou quando `baseProps` tem elementos React: `component` recebe o estado dos controles como props.
   */
  vue?: {
    component?: VueComponent;
    baseProps?: Record<string, unknown>;
    /** Slots fixos exibidos no código Vue (ex.: { leftSection: '<IconHeart :size="18" />' }) */
    codeSlots?: Record<string, string>;
    /** Props fixas exibidas no código Vue, já em sintaxe de template (ex.: { ':data': "['A', 'B']" }) */
    codeProps?: Record<string, string>;
  };
}

// chat/charts ficam de fora de propósito: importá-los aqui puxaria o ECharts para o bundle principal do docs.
// Playgrounds desses módulos passam `vue.component`.
const vueModules: Record<string, Record<string, unknown>> = {
  '@jcdecor/ui': vueCore,
  '@jcdecor/ui/brand': vueBrand,
};

const kebab = (prop: string) => (prop.startsWith('aria-') || prop.startsWith('data-') ? prop : prop.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`));

function serializeVue(prop: string, value: unknown) {
  const name = kebab(prop);
  if (value === true) return name;
  if (typeof value === 'string') return `${name}="${value}"`;
  return `:${name}="${JSON.stringify(value).replace(/"/g, "'")}"`;
}

/**
 * Converte os `codeProps` JSX do React para template Vue: elementos viram slots, strings literais
 * viram atributos e expressões viram bindings (`:prop`).
 */
function codePropsToVue(codeProps: Record<string, string>) {
  const attrs: string[] = [];
  const slots: Record<string, string> = {};
  for (const [prop, jsx] of Object.entries(codeProps)) {
    if (jsx.trim().startsWith('<')) slots[prop] = jsx.replace(/size=\{(\d+)\}/g, ':size="$1"');
    else if (/^"[^"]*"$/.test(jsx)) attrs.push(`${kebab(prop)}=${jsx}`);
    else attrs.push(`:${kebab(prop)}="${jsx.replace(/"/g, "'")}"`);
  }
  return { attrs, slots };
}

/** Remove valores que só existem no React (elementos JSX, handlers de evento React). */
const vueSafeProps = (props: Record<string, unknown>) =>
  Object.fromEntries(Object.entries(props).filter(([key, value]) => !isValidElement(value) && !(key.startsWith('on') && typeof value === 'function')));

const SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
const BRAND_COLORS = ['horizon', 'evergreen', 'electric', 'obsidian', 'danger', 'gray'];
const swatch: Record<string, string> = {
  horizon: '#2663EB', evergreen: '#1E8540', electric: '#F7D759', obsidian: '#08154B', danger: '#D92D20', gray: '#6E7279',
};

function serialize(prop: string, value: unknown) {
  if (value === true) return prop;
  if (typeof value === 'string') return `${prop}="${value}"`;
  return `${prop}={${JSON.stringify(value)}}`;
}

/** Playground no estilo do site do Mantine: controles → prévia + código gerado. */
export function Configurator({ component: Component, name, importFrom = '@jcdecor/ui', controls, baseProps = {}, codeProps = {}, previewWidth, centered = true, vue }: ConfiguratorProps) {
  const { framework } = useFramework();
  const initial = useMemo(() => Object.fromEntries(controls.map((c) => [c.prop, c.initialValue])), [controls]);
  const [state, setState] = useState<Record<string, any>>(initial);
  const set = (prop: string, value: unknown) => setState((s) => ({ ...s, [prop]: value }));

  const { children, ...rest } = state;
  // Props de conteúdo (string/number) sempre aparecem; as demais só quando diferem do padrão.
  const alwaysShown = (prop: string) => ['string', 'number'].includes(controls.find((c) => c.prop === prop)?.type ?? '');
  const changed = Object.entries(rest).filter(([prop, value]) => value !== initial[prop] || alwaysShown(prop));
  const attrs = [
    ...Object.entries(codeProps).map(([prop, jsx]) => `${prop}={${jsx}}`),
    ...changed.filter(([, v]) => v !== false && v !== '').map(([p, v]) => serialize(p, v)),
  ];
  const childrenText = typeof children === 'string' ? children : undefined;
  const open = attrs.length > 2 ? `<${name}\n  ${attrs.join('\n  ')}\n` : `<${name}${attrs.length ? ' ' + attrs.join(' ') : ''}`;
  const jsx = childrenText !== undefined ? `${open}>${childrenText}</${name}>` : `${open}${attrs.length > 2 ? '' : ' '}/>`;
  const reactCode = `import { ${name} } from '${importFrom}';\n\nfunction Demo() {\n  return ${jsx.includes('\n') ? '(\n    ' + jsx.split('\n').join('\n    ') + '\n  )' : jsx};\n}`;

  // ── Vue ──
  const VueComponent = (vue?.component ?? vueModules[importFrom]?.[name]) as VueComponent | undefined;
  const useVue = framework === 'vue' && !!VueComponent;
  const vueProps = useMemo(
    () => ({ ...vueSafeProps(vue?.baseProps ?? baseProps), ...(vue?.component ? state : rest) }),
    [vue, baseProps, state, rest],
  );
  const converted = codePropsToVue(codeProps);
  const vueAttrs = [
    ...(vue?.codeProps ? Object.entries(vue.codeProps).map(([p, v]) => `${p}=${v.startsWith('"') ? v : `"${v}"`}`) : converted.attrs),
    ...changed.filter(([, v]) => v !== false && v !== '').map(([p, v]) => serializeVue(p, v)),
  ];
  const vueSlots = Object.entries(vue?.codeSlots ?? converted.slots).map(([slot, content]) => `<template #${slot}>${content}</template>`);
  const inner = [...vueSlots, ...(childrenText !== undefined ? [childrenText] : [])];
  const vueOpen = vueAttrs.length > 2 ? `<${name}\n    ${vueAttrs.join('\n    ')}\n  ` : `<${name}${vueAttrs.length ? ' ' + vueAttrs.join(' ') : ''}`;
  const vueTag = inner.length
    ? `${vueOpen}>${inner.length > 1 || vueSlots.length ? '\n    ' + inner.join('\n    ') + '\n  ' : inner[0]}</${name}>`
    : `${vueOpen}${vueAttrs.length > 2 ? '' : ' '}/>`;
  const vueCode = `<script setup lang="ts">\nimport { ${name} } from '${toVueImport(importFrom)}';\n</script>\n\n<template>\n  ${vueTag}\n</template>`;
  const code = useVue ? vueCode : reactCode;

  return (
    <Paper withBorder radius="md" className={classes.demo} my="lg">
      <div className={classes.configurator}>
        <Box className={classes.preview} data-centered={centered || undefined} p="xl">
          <Box w={previewWidth ?? undefined} maw="100%">
            {useVue ? (
              <VueMount component={VueComponent!} props={vueProps} slots={childrenText !== undefined && !vue?.component ? { default: childrenText } : undefined} />
            ) : (
              <Component {...baseProps} {...state} />
            )}
          </Box>
        </Box>
        <Stack className={classes.controls} gap="sm" p="md">
          {controls.map((control) => {
            const label = control.label ?? control.prop;
            switch (control.type) {
              case 'boolean':
                return <Switch key={control.prop} label={label} checked={!!state[control.prop]} onChange={(e) => set(control.prop, e.currentTarget.checked)} size="sm" />;
              case 'string':
                return <TextInput key={control.prop} size="xs" label={label} value={state[control.prop]} onChange={(e) => set(control.prop, e.currentTarget.value)} />;
              case 'number':
                return (
                  <NumberInput
                    key={control.prop}
                    size="xs"
                    label={label}
                    value={state[control.prop]}
                    min={control.min}
                    max={control.max}
                    step={control.step ?? 0.1}
                    decimalSeparator=","
                    onChange={(v) => set(control.prop, typeof v === 'number' ? v : Number(String(v).replace(',', '.')) || 0)}
                  />
                );
              case 'select':
                return <Select key={control.prop} size="xs" label={label} data={control.data} value={state[control.prop]} onChange={(v) => v && set(control.prop, v)} allowDeselect={false} comboboxProps={{ withinPortal: true }} />;
              case 'segmented':
              case 'size':
                return (
                  <div key={control.prop}>
                    <Text fz={12} fw={500} c="var(--ds-text-2)" mb={4}>{label}</Text>
                    <SegmentedControl fullWidth size="xs" data={control.type === 'size' ? SIZES : control.data} value={state[control.prop]} onChange={(v) => set(control.prop, v)} />
                  </div>
                );
              case 'color':
                return (
                  <div key={control.prop}>
                    <Text fz={12} fw={500} c="var(--ds-text-2)" mb={4}>{label}</Text>
                    <Group gap={6}>
                      {(control.data ?? BRAND_COLORS).map((color) => (
                        <Tooltip key={color} label={color}>
                          <UnstyledButton onClick={() => set(control.prop, color)} aria-label={color}>
                            <ColorSwatch color={swatch[color] ?? color} size={24}>
                              {state[control.prop] === color && <CheckIcon size={10} color={color === 'electric' ? '#050D3A' : '#fff'} />}
                            </ColorSwatch>
                          </UnstyledButton>
                        </Tooltip>
                      ))}
                    </Group>
                  </div>
                );
            }
          })}
        </Stack>
      </div>
      <Box className={classes.code}>
        <CodeBlock code={code} language={useVue ? 'vue' : 'tsx'} />
      </Box>
    </Paper>
  );
}
