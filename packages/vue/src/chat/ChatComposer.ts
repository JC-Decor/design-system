import { computed, defineComponent, h, ref, type DefineSetupFnComponent, type SlotsType, type VNodeChild } from 'vue';
import { ActionIcon, Box, FileButton, Pill, Textarea, resolveNode, type BoxProps, type MantineNode } from '@mantine-vue/core';
import { Tooltip } from '../theme/themeDefaults';
import { useUncontrolled } from '@mantine-vue/hooks';
import { IconPaperclip, IconSend2 } from '@tabler/icons-vue';
import { nodeProp } from './node';
import classes from './Chat.module.css';

export interface ChatComposerSendPayload {
  text: string;
  files: File[];
}

export interface ChatComposerProps extends BoxProps {
  /** Texto controlado (`v-model`). Sem `v-model`, o campo é não controlado. */
  modelValue?: string;
  /** Texto inicial no modo não controlado */
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  /** Habilita anexos; `accept` segue o atributo HTML (ex.: "image/*,.pdf") */
  allowAttachments?: boolean;
  accept?: string;
  /** Máximo de linhas antes de rolar @default 5 */
  maxRows?: number;
  /** Elementos extras à esquerda (ex.: emoji picker, respostas rápidas). O slot `#leftSection` tem prioridade. */
  leftSection?: MantineNode;
  sendLabel?: string;
}

export type ChatComposerEmits = {
  /** Ao enviar (Enter ou botão). O campo é limpo em seguida. */
  send: (payload: ChatComposerSendPayload) => void;
  /** `v-model` do texto */
  'update:modelValue': (value: string) => void;
}

export interface ChatComposerSlots {
  /** Elementos extras à esquerda (ex.: emoji picker, respostas rápidas) */
  leftSection?: () => VNodeChild;
}

/** Campo de mensagem: Enter envia, Shift+Enter quebra linha, anexos opcionais. */
export const ChatComposer = defineComponent({
  name: 'ChatComposer',
  props: {
    modelValue: { type: String, default: undefined },
    defaultValue: { type: String, default: undefined },
    placeholder: { type: String, default: 'Digite uma mensagem…' },
    disabled: { type: Boolean, default: false },
    allowAttachments: { type: Boolean, default: false },
    accept: { type: String, default: undefined },
    maxRows: { type: Number, default: 5 },
    leftSection: nodeProp,
    sendLabel: { type: String, default: 'Enviar' },
  },
  emits: {
    send: (_payload: ChatComposerSendPayload) => true,
    'update:modelValue': (_value: string) => true,
  },
  setup(props, { emit, slots }) {
    const [text, setText] = useUncontrolled<string>({
      value: () => props.modelValue,
      defaultValue: props.defaultValue,
      finalValue: '',
      onChange: (value) => emit('update:modelValue', value),
    });
    const files = ref<File[]>([]);
    const canSend = computed(() => !props.disabled && (text.value.trim().length > 0 || files.value.length > 0));

    const send = () => {
      if (!canSend.value) return;
      emit('send', { text: text.value.trim(), files: files.value });
      setText('');
      files.value = [];
    };

    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
        event.preventDefault();
        send();
      }
    };

    const removeFile = (index: number) => {
      files.value = files.value.filter((_, i) => i !== index);
    };

    const addFiles = (selected: File | File[] | null) => {
      files.value = [...files.value, ...(Array.isArray(selected) ? selected : selected ? [selected] : [])];
    };

    return () =>
      h(Box as any, null, () => [
        files.value.length > 0
          ? h(
              'div',
              { class: classes.composerFiles },
              files.value.map((file, index) =>
                h(
                  Pill as any,
                  { key: `${file.name}-${index}`, withRemoveButton: true, onRemove: () => removeFile(index) },
                  () => file.name,
                ),
              ),
            )
          : null,
        h('div', { class: classes.composer }, [
          resolveNode(props.leftSection, slots.leftSection),
          props.allowAttachments
            ? h(
                FileButton as any,
                { multiple: true, accept: props.accept, disabled: props.disabled, onChange: addFiles },
                {
                  default: (triggerProps: Record<string, unknown>) =>
                    h(Tooltip as any, { label: 'Anexar arquivo' }, () =>
                      h(
                        ActionIcon as any,
                        { ...triggerProps, size: 'lg', variant: 'subtle', 'aria-label': 'Anexar arquivo' },
                        () => h(IconPaperclip, { size: 20 }),
                      ),
                    ),
                },
              )
            : null,
          h(Textarea as any, {
            class: classes.composerInput,
            modelValue: text.value,
            'onUpdate:modelValue': (value: string) => setText(value),
            onKeydown,
            placeholder: props.placeholder,
            disabled: props.disabled,
            autosize: true,
            minRows: 1,
            maxRows: props.maxRows,
            radius: 'lg',
            'aria-label': props.placeholder,
          }),
          h(
            ActionIcon as any,
            { size: 44, radius: 'xl', variant: 'filled', onClick: send, disabled: !canSend.value, 'aria-label': props.sendLabel },
            () => h(IconSend2, { size: 20 }),
          ),
        ]),
      ]);
  },
}) as unknown as DefineSetupFnComponent<ChatComposerProps, ChatComposerEmits, SlotsType<ChatComposerSlots>>;
