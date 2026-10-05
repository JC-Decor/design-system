import { defineComponent, h, type DefineSetupFnComponent, type SlotsType, type VNodeChild } from 'vue';
import { Box, Button, Group, Text, type BoxProps, type MantineNode } from '@mantine-vue/core';
import { useClipboard } from '@mantine-vue/hooks';
import { IconCheck, IconCopy, IconTicket } from '@tabler/icons-vue';
import { nodeProp, resolveContent } from '../../utils/vue';

export interface CouponCodeProps extends BoxProps {
  code: string;
  /** Texto do benefício (ex.: "5% OFF na 1ª compra"). Também aceita o slot `description` (o slot tem prioridade). */
  description?: MantineNode;
  /** @default 'Copiar' */
  copyLabel?: string;
  /** @default 'Copiado!' */
  copiedLabel?: string;
}

export interface CouponCodeSlots {
  description?: () => VNodeChild;
}

export type CouponCodeEmits = {
  /** Emitido ao clicar em copiar, com o código copiado */
  copy: (code: string) => void;
};

/** Cupom com borda tracejada e botão de copiar. Emite `copy` com o código. */
export const CouponCode = defineComponent({
  name: 'CouponCode',
  inheritAttrs: false,
  props: {
    code: { type: String, required: true },
    description: nodeProp,
    copyLabel: { type: String, default: 'Copiar' },
    copiedLabel: { type: String, default: 'Copiado!' },
  },
  emits: { copy: (_code: string) => true },
  setup(props, { attrs, slots, emit }) {
    const clipboard = useClipboard({ timeout: 1600 });
    return () => {
      const copied = clipboard.copied.value;
      const description = resolveContent(props.description, slots.description);
      return h(
        Box as any,
        {
          p: 'sm',
          style: {
            border: '2px dashed var(--ds-primary)',
            borderRadius: 'var(--ds-radius)',
            background: 'var(--ds-primary-soft)',
          },
          ...attrs,
        },
        () =>
          h(Group as any, { justify: 'space-between', gap: 'sm', wrap: 'nowrap' }, () => [
            h(Group as any, { gap: 'sm', wrap: 'nowrap', style: { minWidth: 0 } }, () => [
              h(IconTicket, { size: 22, color: 'var(--ds-primary)', style: { flexShrink: 0 } }),
              h('div', { style: { minWidth: 0 } }, [
                description !== undefined ? h(Text as any, { fz: 'xs', c: 'var(--ds-text-2)', fw: 500 }, () => description) : null,
                h(Text as any, { fw: 700, fz: 'lg', lts: '0.08em', c: 'var(--ds-primary)', ff: 'monospace' }, () => props.code),
              ]),
            ]),
            h(
              Button as any,
              {
                size: 'sm',
                variant: copied ? 'filled' : 'outline',
                color: copied ? 'evergreen' : undefined,
                leftSection: () => h(copied ? IconCheck : IconCopy, { size: 16 }),
                onClick: () => {
                  clipboard.copy(props.code);
                  emit('copy', props.code);
                },
              },
              () => (copied ? props.copiedLabel : props.copyLabel),
            ),
          ]),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<CouponCodeProps, CouponCodeEmits, SlotsType<CouponCodeSlots>>;
