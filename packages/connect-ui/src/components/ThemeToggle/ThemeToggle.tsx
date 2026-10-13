import { ActionIcon, Button, useComputedColorScheme, useMantineColorScheme, type ActionIconProps } from '@mantine/core';
import clsx from 'clsx';
import { Icon } from '../Icon';
import classes from './ThemeToggle.module.css';

export interface ThemeToggleProps extends Omit<ActionIconProps, 'children'> {
  /** `icon` = ActionIcon · `button` = botão "Alternar tema" (com rótulo) @default 'icon' */
  as?: 'icon' | 'button';
  /** Rótulo do botão. No ícone, o aria-label padrão descreve a ação ("Ativar tema escuro"/"Ativar tema claro"). */
  label?: string;
}

/**
 * Alterna entre tema claro e escuro (`.theme-toggle` do Connect: lua no claro, sol âmbar no escuro).
 * A escolha é persistida pelo colorSchemeManager do Mantine. Passe `variant` para usar o visual de um ActionIcon comum.
 */
export function ThemeToggle({ as = 'icon', label, variant, color, size, className, ...others }: ThemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const isDark = computed === 'dark';
  const toggle = () => setColorScheme(isDark ? 'light' : 'dark');
  const iconName = isDark ? 'sun' : 'moon';

  if (as === 'button') {
    return (
      <Button
        variant={variant ?? 'outline'}
        color={color}
        size={(size as string) ?? 'sm'}
        leftSection={<Icon name={iconName} size={16} />}
        onClick={toggle}
        className={className}
        {...(others as Record<string, unknown>)}
      >
        {label ?? 'Alternar tema'}
      </Button>
    );
  }

  const actionLabel = label ?? (isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  return (
    <ActionIcon
      variant={variant ?? 'subtle'}
      color={color}
      size={size ?? 40}
      onClick={toggle}
      aria-label={actionLabel}
      title={isDark ? 'Tema claro' : 'Tema escuro'}
      className={clsx(!variant && classes.toggle, className)}
      {...others}
    >
      <Icon name={iconName} size={18} />
    </ActionIcon>
  );
}
ThemeToggle.displayName = '@jcdecor/connect-ui/ThemeToggle';
