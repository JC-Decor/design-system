import { ActionIcon, Button, type ActionIconProps } from '@mantine/core';
import { IconGift, IconSnowflake } from '@tabler/icons-react';
import { useThemeFlavor } from '../../provider/JcProvider';

export interface ThemeFlavorToggleProps extends Omit<ActionIconProps, 'children'> {
  /** `icon` = ActionIcon · `button` = botão (como no DS) @default 'icon' */
  as?: 'icon' | 'button';
  label?: string;
}

/** Alterna o tema sazonal "Natal" (persistido pelo `JcProvider` em localStorage). */
export function ThemeFlavorToggle({ as = 'icon', label = 'Tema de Natal', variant, color, size, ...others }: ThemeFlavorToggleProps) {
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
        {...(others as Record<string, unknown>)}
      >
        {label}
      </Button>
    );
  }

  return (
    <ActionIcon
      variant={variant ?? 'subtle'}
      color={color}
      size={size ?? 'lg'}
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={isChristmas}
      {...others}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
ThemeFlavorToggle.displayName = '@jcdecor/ui/ThemeFlavorToggle';
