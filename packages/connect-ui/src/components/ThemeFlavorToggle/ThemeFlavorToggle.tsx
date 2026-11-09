import { ActionIcon, Button, type ActionIconProps } from '@mantine/core';
import { IconGift, IconSnowflake } from '@tabler/icons-react';
import clsx from 'clsx';
import { useThemeFlavor } from '../../provider/ConnectProvider';
import classes from '../ThemeToggle/ThemeToggle.module.css';

export interface ThemeFlavorToggleProps extends Omit<ActionIconProps, 'children'> {
  /** `icon` = ActionIcon · `button` = botão (com rótulo) @default 'icon' */
  as?: 'icon' | 'button';
  label?: string;
}

/** Alterna o tema sazonal "Natal" (persistido pelo `ConnectProvider` em localStorage). */
export function ThemeFlavorToggle({ as = 'icon', label, variant, color, size, className, ...others }: ThemeFlavorToggleProps) {
  const { flavor, setFlavor } = useThemeFlavor();
  const isChristmas = flavor === 'christmas';
  const toggle = () => setFlavor(isChristmas ? 'default' : 'christmas');
  const Icon = isChristmas ? IconSnowflake : IconGift;

  if (as === 'button') {
    return (
      <Button
        variant={variant ?? 'outline'}
        color={color}
        size={(size as string) ?? 'sm'}
        leftSection={<Icon size={16} />}
        onClick={toggle}
        className={className}
        {...(others as Record<string, unknown>)}
      >
        {label ?? 'Tema de Natal'}
      </Button>
    );
  }

  const actionLabel = label ?? (isChristmas ? 'Desativar tema de Natal' : 'Ativar tema de Natal');
  return (
    <ActionIcon
      variant={variant ?? 'subtle'}
      color={color}
      size={size ?? 40}
      onClick={toggle}
      aria-label={actionLabel}
      title={actionLabel}
      aria-pressed={isChristmas}
      className={clsx(!variant && classes.toggle, className)}
      {...others}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
ThemeFlavorToggle.displayName = '@jcdecor/connect-ui/ThemeFlavorToggle';
