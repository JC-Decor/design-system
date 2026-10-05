import { defineComponent, h, type Component, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Badge, type BadgeProps } from '@mantine-vue/core';
import { IconAlertTriangle, IconCheck, IconInfoCircle, IconX } from '@tabler/icons-vue';

export type TagTone = 'primary' | 'success' | 'warn' | 'error' | 'neutral';

const toneColor: Record<TagTone, string> = {
  primary: 'horizon',
  success: 'evergreen',
  warn: 'electric',
  error: 'danger',
  neutral: 'obsidian',
};

const toneIcon: Record<TagTone, Component | null> = {
  primary: IconInfoCircle,
  success: IconCheck,
  warn: IconAlertTriangle,
  error: IconX,
  neutral: null,
};

export interface TagProps extends Omit<BadgeProps, 'color' | 'variant'> {
  /** Tom semântico (ds-tag-*) @default 'primary' */
  tone?: TagTone;
  /** Mostra o ícone padrão do tom (✓ ⚠ ✕ ⓘ). Use o slot/prop `leftSection` para outro ícone. */
  withIcon?: boolean;
  /** `light` = selo suave (padrão) · `filled` = cor sólida · `outline` · `dot` */
  variant?: 'light' | 'filled' | 'outline' | 'dot';
}

export interface TagSlots {
  default?: () => VNodeChild;
  leftSection?: () => VNodeChild;
  rightSection?: () => VNodeChild;
}

/** Selo / tag de status — preset de Badge com os tons do ds.css. */
export const Tag = defineComponent({
  name: 'Tag',
  inheritAttrs: false,
  props: {
    tone: { type: String as PropType<TagTone>, default: 'primary' },
    withIcon: { type: Boolean, default: false },
    variant: { type: String as PropType<TagProps['variant']>, default: 'light' },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const Icon = toneIcon[props.tone];
      // Slot ou prop `leftSection` (camelCase ou kebab-case no template) do usuário têm prioridade
      const hasCustom = slots.leftSection || attrs.leftSection !== undefined || attrs['left-section'] !== undefined;
      const leftSection = slots.leftSection ?? (!hasCustom && props.withIcon && Icon ? () => h(Icon, { size: 12, stroke: 2.5 }) : undefined);
      return h(
        Badge as any,
        { color: toneColor[props.tone], variant: props.variant, 'data-tone': props.tone, ...attrs },
        { ...slots, ...(leftSection && { leftSection }) },
      );
    };
  },
}) as unknown as DefineSetupFnComponent<TagProps, {}, SlotsType<TagSlots>>;
