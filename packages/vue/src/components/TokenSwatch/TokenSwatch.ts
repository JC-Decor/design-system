import { defineComponent, h, mergeProps, type ButtonHTMLAttributes, type DefineSetupFnComponent, type HTMLAttributes, type PropType } from 'vue';
import { luminance } from '@mantine-vue/core';
import { Tooltip } from '../../theme/themeDefaults';
import { useClipboard } from '@mantine-vue/hooks';
import classes from './TokenSwatch.module.css';

export interface TokenSwatchProps extends Omit<ButtonHTMLAttributes, 'value' | 'name'> {
  name: string;
  /** Cor (hex) exibida e copiada */
  value: string;
  /** Variável CSS correspondente (ex.: --dc-horizon) */
  cssVar?: string;
  /** O que copiar ao clicar @default 'value' */
  copy?: 'value' | 'cssVar';
}

/** Amostra de cor clicável (copia hex ou var CSS). */
export const TokenSwatch = defineComponent({
  name: 'TokenSwatch',
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    cssVar: { type: String, default: undefined },
    copy: { type: String as PropType<NonNullable<TokenSwatchProps['copy']>>, default: 'value' },
  },
  setup(props, { attrs }) {
    const clipboard = useClipboard({ timeout: 1200 });
    return () => {
      const text = props.copy === 'cssVar' && props.cssVar ? `var(${props.cssVar})` : props.value;
      return h(Tooltip as any, { label: clipboard.copied.value ? 'Copiado!' : `Copiar ${text}`, withArrow: true }, () =>
        h('button', mergeProps({ type: 'button', class: classes.swatch, onClick: () => clipboard.copy(text) }, attrs), [
          h('div', { class: classes.color, style: { background: props.value } }),
          h('div', { class: classes.info }, [
            h('div', { class: classes.name }, props.name),
            h('div', { class: classes.hex }, props.value),
            props.cssVar ? h('div', { class: classes.hex }, props.cssVar) : null,
          ]),
        ]),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<TokenSwatchProps>;

export interface ColorRampProps extends HTMLAttributes {
  steps: { label: string; value: string; derived?: boolean }[];
}

/** Rampa de cor horizontal (base → 50). Clique copia o hex. */
export const ColorRamp = defineComponent({
  name: 'ColorRamp',
  inheritAttrs: false,
  props: {
    steps: { type: Array as PropType<ColorRampProps['steps']>, required: true },
  },
  setup(props, { attrs }) {
    const clipboard = useClipboard({ timeout: 1200 });
    return () =>
      h(
        'div',
        mergeProps({ class: classes.ramp }, attrs),
        props.steps.map((step) =>
          h(Tooltip as any, { key: step.label, label: clipboard.copied.value ? 'Copiado!' : step.value, withArrow: true }, () =>
            h(
              'button',
              {
                type: 'button',
                class: classes.step,
                style: { background: step.value, color: luminance(step.value) > 0.3 ? 'var(--dc-obsidian)' : '#fff' },
                onClick: () => clipboard.copy(step.value),
              },
              `${step.label}${step.derived ? '*' : ''}`,
            ),
          ),
        ),
      );
  },
}) as unknown as DefineSetupFnComponent<ColorRampProps>;
