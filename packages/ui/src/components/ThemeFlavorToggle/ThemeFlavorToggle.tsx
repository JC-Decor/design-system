import { ActionIcon, Button, type ActionIconProps } from '@mantine/core';
import {
  IconCampfireFilled,
  IconConfettiFilled,
  IconEgg,
  IconEggFilled,
  IconFlag2,
  IconFlag2Filled,
  IconFlame,
  IconGift,
  IconMask,
  IconSnowflake,
} from '@tabler/icons-react';
import { useThemeFlavor } from '../../provider/JcProvider';
import { HOLIDAY_LABELS, type HolidayFlavor } from '../../theme/holidays';

const HOLIDAY_ICONS: Record<HolidayFlavor, { off: typeof IconGift; on: typeof IconGift }> = {
  christmas: { off: IconGift, on: IconSnowflake },
  carnaval: { off: IconMask, on: IconConfettiFilled },
  pascoa: { off: IconEgg, on: IconEggFilled },
  festaJunina: { off: IconFlame, on: IconCampfireFilled },
  independencia: { off: IconFlag2, on: IconFlag2Filled },
};

export interface ThemeFlavorToggleProps extends Omit<ActionIconProps, 'children'> {
  /** `icon` = ActionIcon · `button` = botão (como no DS) @default 'icon' */
  as?: 'icon' | 'button';
  label?: string;
}

/**
 * Liga/desliga o tema festivo do feriado atual (ver `theme/holidays.ts`), persistido pelo
 * `JcProvider` em localStorage. Só renderiza algo enquanto houver um feriado "na janela"
 * (`activeHoliday`) — fora de temporada não há o que ligar/desligar.
 */
export function ThemeFlavorToggle({ as = 'icon', label, variant, color, size, ...others }: ThemeFlavorToggleProps) {
  const { activeHoliday, festiveEnabled, setFestiveEnabled } = useThemeFlavor();
  if (!activeHoliday) return null;

  const toggle = () => setFestiveEnabled(!festiveEnabled);
  const Icon = festiveEnabled ? HOLIDAY_ICONS[activeHoliday].on : HOLIDAY_ICONS[activeHoliday].off;
  const resolvedLabel = label ?? `Tema de ${HOLIDAY_LABELS[activeHoliday]}`;

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
        {resolvedLabel}
      </Button>
    );
  }

  return (
    <ActionIcon
      variant={variant ?? 'subtle'}
      color={color}
      size={size ?? 'lg'}
      onClick={toggle}
      aria-label={resolvedLabel}
      title={resolvedLabel}
      aria-pressed={festiveEnabled}
      {...others}
    >
      <Icon size={18} />
    </ActionIcon>
  );
}
ThemeFlavorToggle.displayName = '@jcdecor/ui/ThemeFlavorToggle';
