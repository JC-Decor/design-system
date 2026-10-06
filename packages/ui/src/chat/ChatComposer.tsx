import { useState } from 'react';
import { ActionIcon, Box, FileButton, Pill, Textarea, Tooltip, type BoxProps } from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { IconPaperclip, IconPlayerStopFilled, IconSend2 } from '@tabler/icons-react';
import classes from './Chat.module.css';

export interface ChatComposerSendPayload {
  text: string;
  files: File[];
}

export interface ChatComposerProps extends Omit<BoxProps, 'onSubmit'> {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Chamado ao enviar (Enter ou botão). O campo é limpo em seguida. */
  onSend: (payload: ChatComposerSendPayload) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Habilita anexos; `accept` segue o atributo HTML (ex.: "image/*,.pdf") */
  allowAttachments?: boolean;
  accept?: string;
  /** Máximo de linhas antes de rolar @default 5 */
  maxRows?: number;
  /** Elementos extras à esquerda (ex.: emoji picker, respostas rápidas) */
  leftSection?: React.ReactNode;
  /** Elementos extras à direita do campo, antes do botão de enviar (ex.: biblioteca de prompts) */
  rightSection?: React.ReactNode;
  sendLabel?: string;
  /**
   * Uma resposta está em andamento: o envio fica bloqueado (o texto digitado é mantido e o campo
   * continua editável). Com `onStop`, o botão de enviar vira o botão de interromper.
   */
  loading?: boolean;
  /** Chamado pelo botão de interromper (visível enquanto `loading`) */
  onStop?: () => void;
  stopLabel?: string;
  /** Bloqueia o envio sem desabilitar o campo (ex.: integração ainda não conectada) */
  sendDisabled?: boolean;
}

/** Campo de mensagem: Enter envia, Shift+Enter quebra linha, anexos opcionais. */
export function ChatComposer({
  value,
  defaultValue,
  onChange,
  onSend,
  placeholder = 'Digite uma mensagem…',
  disabled,
  allowAttachments,
  accept,
  maxRows = 5,
  leftSection,
  rightSection,
  sendLabel = 'Enviar',
  loading,
  onStop,
  stopLabel = 'Interromper',
  sendDisabled,
  ...others
}: ChatComposerProps) {
  const [text, setText] = useUncontrolled({ value, defaultValue, finalValue: '', onChange });
  const [files, setFiles] = useState<File[]>([]);
  const canSend = !disabled && !sendDisabled && !loading && (text.trim().length > 0 || files.length > 0);

  const send = () => {
    if (!canSend) return;
    onSend({ text: text.trim(), files });
    setText('');
    setFiles([]);
  };

  return (
    <Box {...others}>
      {files.length > 0 && (
        <div className={classes.composerFiles}>
          {files.map((file, index) => (
            <Pill key={`${file.name}-${index}`} withRemoveButton onRemove={() => setFiles((f) => f.filter((_, i) => i !== index))}>
              {file.name}
            </Pill>
          ))}
        </div>
      )}
      <div className={classes.composer}>
        {leftSection && <div className={classes.composerSection}>{leftSection}</div>}
        {allowAttachments && (
          <FileButton multiple accept={accept} onChange={(selected) => setFiles((f) => [...f, ...(selected ?? [])])} disabled={disabled}>
            {(props) => (
              <Tooltip label="Anexar arquivo">
                <ActionIcon {...props} size="lg" variant="subtle" aria-label="Anexar arquivo">
                  <IconPaperclip size={20} />
                </ActionIcon>
              </Tooltip>
            )}
          </FileButton>
        )}
        <Textarea
          className={classes.composerInput}
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault();
              send();
            }
          }}
          placeholder={placeholder}
          disabled={disabled}
          autosize
          minRows={1}
          maxRows={maxRows}
          radius="lg"
          aria-label={placeholder}
        />
        {rightSection && <div className={classes.composerSection}>{rightSection}</div>}
        {loading && onStop ? (
          <Tooltip label={stopLabel}>
            <ActionIcon size={44} radius="xl" variant="light" color="danger" onClick={onStop} aria-label={stopLabel}>
              <IconPlayerStopFilled size={18} />
            </ActionIcon>
          </Tooltip>
        ) : (
          <ActionIcon size={44} radius="xl" variant="filled" onClick={send} disabled={!canSend} aria-label={sendLabel}>
            <IconSend2 size={20} />
          </ActionIcon>
        )}
      </div>
    </Box>
  );
}
ChatComposer.displayName = '@jcdecor/ui/ChatComposer';
