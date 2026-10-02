import { Tooltip, luminance } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import classes from './TokenSwatch.module.css';

export interface TokenSwatchProps extends Omit<React.ComponentProps<'button'>, 'value' | 'name'> {
  name: string;
  /** Cor (hex) exibida e copiada */
  value: string;
  /** Variável CSS correspondente (ex.: --dc-horizon) */
  cssVar?: string;
  /** O que copiar ao clicar @default 'value' */
  copy?: 'value' | 'cssVar';
}

/** Amostra de cor clicável (copia hex ou var CSS). */
export function TokenSwatch({ name, value, cssVar, copy = 'value', className, ...others }: TokenSwatchProps) {
  const clipboard = useClipboard({ timeout: 1200 });
  const text = copy === 'cssVar' && cssVar ? `var(${cssVar})` : value;
  return (
    <Tooltip label={clipboard.copied ? 'Copiado!' : `Copiar ${text}`} withArrow>
      <button type="button" className={className ? `${classes.swatch} ${className}` : classes.swatch} onClick={() => clipboard.copy(text)} {...others}>
        <div className={classes.color} style={{ background: value }} />
        <div className={classes.info}>
          <div className={classes.name}>{name}</div>
          <div className={classes.hex}>{value}</div>
          {cssVar && <div className={classes.hex}>{cssVar}</div>}
        </div>
      </button>
    </Tooltip>
  );
}
TokenSwatch.displayName = '@jcdecor/ui/TokenSwatch';

export interface ColorRampProps extends React.ComponentProps<'div'> {
  steps: { label: string; value: string; derived?: boolean }[];
}

/** Rampa de cor horizontal (base → 50). Clique copia o hex. */
export function ColorRamp({ steps, className, ...others }: ColorRampProps) {
  const clipboard = useClipboard({ timeout: 1200 });
  return (
    <div className={className ? `${classes.ramp} ${className}` : classes.ramp} {...others}>
      {steps.map((step) => (
        <Tooltip key={step.label} label={clipboard.copied ? 'Copiado!' : step.value} withArrow>
          <button
            type="button"
            className={classes.step}
            style={{ background: step.value, color: luminance(step.value) > 0.3 ? 'var(--dc-obsidian)' : '#fff' }}
            onClick={() => clipboard.copy(step.value)}
          >
            {step.label}
            {step.derived ? '*' : ''}
          </button>
        </Tooltip>
      ))}
    </div>
  );
}
ColorRamp.displayName = '@jcdecor/ui/ColorRamp';
