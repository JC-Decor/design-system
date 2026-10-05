import { defineComponent, h, type DefineSetupFnComponent, type PropType } from 'vue';
import { Box, type BoxProps } from '@mantine-vue/core';
import classes from './Chat.module.css';

export interface TypingIndicatorProps extends BoxProps {
  /** Nomes de quem está digitando. Vazio = só os pontinhos. */
  names?: string[];
}

function typingLabel(names: string[]) {
  if (names.length === 0) return '';
  if (names.length === 1) return `${names[0]} está digitando…`;
  if (names.length === 2) return `${names[0]} e ${names[1]} estão digitando…`;
  return `${names[0]} e mais ${names.length - 1} estão digitando…`;
}

/** Indicador animado de "digitando…". Atributos e style props (`mt`, `ml`…) vão para o Box raiz. */
export const TypingIndicator = defineComponent({
  name: 'TypingIndicator',
  props: {
    names: { type: Array as PropType<string[]>, default: () => [] },
  },
  setup(props) {
    return () => {
      const label = typingLabel(props.names);
      return h(
        Box as any,
        { class: classes.typing, role: 'status', 'aria-live': 'polite', 'aria-label': label || 'Digitando' },
        () => [
          h('span', { class: classes.dots, 'aria-hidden': 'true' }, [
            h('span', { class: classes.dot }),
            h('span', { class: classes.dot }),
            h('span', { class: classes.dot }),
          ]),
          label ? h('span', label) : null,
        ],
      );
    };
  },
}) as unknown as DefineSetupFnComponent<TypingIndicatorProps>;
