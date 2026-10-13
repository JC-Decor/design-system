import { useId, type CSSProperties } from 'react';
import { Combobox, useCombobox, type ComboboxProps } from '@mantine/core';
import clsx from 'clsx';
import type { ToneName } from '../../theme/tokens';
import { Icon } from '../Icon';
import classes from './AppSelect.module.css';

export type SelectTone = ToneName | 'default';

export interface SelectOption {
  value: string;
  label: string;
  /** Nome de ícone do Connect exibido antes do rótulo */
  icon?: string;
  /** Tom da opção: colore ícone/texto e, quando selecionada, o gatilho */
  tone?: SelectTone;
  disabled?: boolean;
}

export interface AppSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  label?: string;
  /** @default 'Selecione...' */
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  /** Mensagem de erro (substitui o helperText) */
  error?: string;
  helperText?: string;
  /** Troca a seta por um spinner e bloqueia a abertura */
  loading?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
  /** Renderiza a lista em Portal. Use `false` dentro de Popover/Menu. @default true */
  withinPortal?: boolean;
  /** Props repassadas ao Combobox do Mantine */
  comboboxProps?: Omit<ComboboxProps, 'store' | 'onOptionSubmit' | 'children'>;
}

const toneVars = (tone?: SelectTone): CSSProperties | undefined =>
  tone && tone !== 'default'
    ? ({ '--sel-tone-bg': `var(--cn-tone-${tone}-bg)`, '--sel-tone-fg': `var(--cn-tone-${tone}-fg)` } as CSSProperties)
    : undefined;

/**
 * Select customizado do Connect (`.sel-*`) sobre o `Combobox` do Mantine: gatilho em botão que perde os
 * cantos de baixo ao abrir, opções com ícone/tom e check, spinner de carregamento, ajuda/erro e marca de obrigatório.
 * Teclado: ↑/↓ navegam, Home/End vão às pontas, Enter/Espaço escolhem, Esc fecha.
 */
export function AppSelect({
  value,
  onChange,
  options,
  label,
  placeholder = 'Selecione...',
  required,
  disabled,
  error,
  helperText,
  loading,
  id: idProp,
  className,
  style,
  'aria-label': ariaLabel,
  withinPortal = true,
  comboboxProps,
}: AppSelectProps) {
  const uid = useId();
  const id = idProp ?? uid;
  const combobox = useCombobox({
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });
  const selected = options.find((o) => o.value === value);
  const blocked = disabled || loading;
  const feedbackId = error || helperText ? `${id}-feedback` : undefined;

  const jump = (edge: 'first' | 'last') => {
    const enabled = options.map((o, i) => (o.disabled ? -1 : i)).filter((i) => i >= 0);
    const index = edge === 'first' ? enabled[0] : enabled[enabled.length - 1];
    if (index !== undefined) combobox.selectOption(index);
  };

  return (
    <div className={clsx(classes.wrap, className)} style={style}>
      {label && (
        <label className={classes.label} htmlFor={id}>
          {label}
          {required && (
            <span className={classes.req} aria-hidden="true">
              {' '}*
            </span>
          )}
        </label>
      )}

      <Combobox
        store={combobox}
        withinPortal={withinPortal}
        offset={0}
        width="target"
        position="bottom"
        middlewares={{ flip: false, shift: false }}
        transitionProps={{ duration: 0 }}
        onOptionSubmit={(val) => {
          onChange(val);
          combobox.closeDropdown();
        }}
        classNames={{ dropdown: classes.menu, option: classes.option }}
        {...comboboxProps}
      >
        <Combobox.Target targetType="button">
          <button
            id={id}
            type="button"
            className={classes.trigger}
            data-open={combobox.dropdownOpened || undefined}
            data-error={error ? true : undefined}
            data-tone={selected?.tone && selected.tone !== 'default' ? true : undefined}
            style={toneVars(selected?.tone)}
            disabled={disabled}
            aria-disabled={loading || undefined}
            aria-required={required}
            aria-invalid={!!error}
            aria-label={ariaLabel}
            aria-describedby={feedbackId}
            aria-busy={loading || undefined}
            onClick={() => !blocked && combobox.toggleDropdown()}
            onKeyDown={(event) => {
              if (blocked) {
                if (event.key !== 'Tab') event.preventDefault();
                return;
              }
              if (combobox.dropdownOpened && (event.key === 'Home' || event.key === 'End')) {
                event.preventDefault();
                jump(event.key === 'Home' ? 'first' : 'last');
              }
              if (event.key === 'Tab') combobox.closeDropdown();
            }}
          >
            <span className={classes.value}>
              {selected ? (
                <>
                  {selected.icon && (
                    <span className={classes.icon} aria-hidden="true">
                      <Icon name={selected.icon} size={15} />
                    </span>
                  )}
                  {selected.label}
                </>
              ) : (
                <span className={classes.placeholder}>{placeholder}</span>
              )}
            </span>
            <span className={classes.chevron} data-open={combobox.dropdownOpened || undefined} aria-hidden="true">
              {loading ? <span className={classes.spinner} /> : <Icon name="chev" size={16} />}
            </span>
          </button>
        </Combobox.Target>

        <Combobox.Dropdown hidden={blocked}>
          <Combobox.Options aria-label={ariaLabel ?? label ?? placeholder}>
            {options.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <Combobox.Option
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  active={isSelected}
                  aria-selected={isSelected}
                  data-tone={opt.tone && opt.tone !== 'default' ? true : undefined}
                  style={toneVars(opt.tone)}
                >
                  {opt.icon && (
                    <span className={classes.icon} aria-hidden="true">
                      <Icon name={opt.icon} size={15} />
                    </span>
                  )}
                  <span className={classes.optionLabel}>{opt.label}</span>
                  {isSelected && (
                    <span className={classes.check} aria-hidden="true">
                      <Icon name="check" size={13} />
                    </span>
                  )}
                </Combobox.Option>
              );
            })}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>

      {error ? (
        <p id={feedbackId} className={classes.error} role="alert">
          {error}
        </p>
      ) : (
        helperText && (
          <p id={feedbackId} className={classes.helper}>
            {helperText}
          </p>
        )
      )}
    </div>
  );
}
AppSelect.displayName = '@jcdecor/connect-ui/AppSelect';
