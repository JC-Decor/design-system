import { Box, type BoxProps } from '@mantine/core';
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

/** Indicador animado de "digitando…". */
export function TypingIndicator({ names = [], ...others }: TypingIndicatorProps) {
  const label = typingLabel(names);
  return (
    <Box className={classes.typing} role="status" aria-live="polite" aria-label={label || 'Digitando'} {...others}>
      <span className={classes.dots} aria-hidden>
        <span className={classes.dot} />
        <span className={classes.dot} />
        <span className={classes.dot} />
      </span>
      {label && <span>{label}</span>}
    </Box>
  );
}
TypingIndicator.displayName = '@jcdecor/ui/TypingIndicator';
