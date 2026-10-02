import { useMemo, useState } from 'react';
import { Box, Group, NumberInput, Paper, SegmentedControl, Select, Stack, Switch, Text, TextInput, ColorSwatch, Tooltip, UnstyledButton, CheckIcon } from '@mantine/core';
import { CodeBlock } from './CodeBlock';
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
}

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
export function Configurator({ component: Component, name, importFrom = '@jcdecor/ui', controls, baseProps = {}, codeProps = {}, previewWidth, centered = true }: ConfiguratorProps) {
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
  const code = `import { ${name} } from '${importFrom}';\n\nfunction Demo() {\n  return ${jsx.includes('\n') ? '(\n    ' + jsx.split('\n').join('\n    ') + '\n  )' : jsx};\n}`;

  return (
    <Paper withBorder radius="md" className={classes.demo} my="lg">
      <div className={classes.configurator}>
        <Box className={classes.preview} data-centered={centered || undefined} p="xl">
          <Box w={previewWidth ?? undefined} maw="100%">
            <Component {...baseProps} {...state} />
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
        <CodeBlock code={code} />
      </Box>
    </Paper>
  );
}
