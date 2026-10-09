import { ActionIcon, Button, useComputedColorScheme, useMantineColorScheme, type ActionIconProps } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export interface ThemeToggleProps extends Omit<ActionIconProps, 'children'> {
  /** `icon` = ActionIcon · `button` = botão "Alternar tema" (como no DS) @default 'icon' */
  as?: 'icon' | 'button';
  label?: string;
}

/** Alterna entre tema claro e escuro (persistido pelo colorSchemeManager do Mantine). */
export function ThemeToggle({ as = 'icon', label = 'Alternar tema', variant, color, size, ...others }: ThemeToggleProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
  const toggle = () => setColorScheme(computed === 'dark' ? 'light' : 'dark');
  const Icon = computed === 'dark' ? IconSun : IconMoon;

  if (as === 'button') {
    return (
      <Button
        variant={variant ?? 'outline'}
        color={color}
        size={(size as string) ?? 'sm'}
        leftSection={<Icon size={16} />}
        onClick={toggle}
        {...(others as Record<string, unknown>)}
      >
        {label}
      </Button>
    );
  }

  return (
    <ActionIcon variant={variant ?? 'subtle'} color={color} size={size ?? 'lg'} onClick={toggle} aria-label={label} title={label} {...others}>
      <Icon size={18} />
    </ActionIcon>
  );
}
ThemeToggle.displayName = '@jcdecor/ui/ThemeToggle';
