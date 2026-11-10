import { computed, defineComponent, h, type DefineSetupFnComponent, type PropType } from 'vue';
import { ActionIcon, Button, type ActionIconProps } from '@mantine-vue/core';
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
} from '@tabler/icons-vue';
import { useThemeFlavor } from '../../provider/JcProvider';
import { HOLIDAY_LABELS, type HolidayFlavor } from '../../theme/holidays';

const HOLIDAY_ICONS: Record<HolidayFlavor, { off: typeof IconGift; on: typeof IconGift }> = {
  christmas: { off: IconGift, on: IconSnowflake },
  carnaval: { off: IconMask, on: IconConfettiFilled },
  pascoa: { off: IconEgg, on: IconEggFilled },
  festaJunina: { off: IconFlame, on: IconCampfireFilled },
  independencia: { off: IconFlag2, on: IconFlag2Filled },
};

export interface ThemeFlavorToggleProps extends ActionIconProps {
  /** `icon` = ActionIcon · `button` = botão (com rótulo) @default 'icon' */
  as?: 'icon' | 'button';
  /** Rótulo do botão/ActionIcon; por padrão "Tema de <feriado ativo>" */
  label?: string;
}

/**
 * Liga/desliga o tema festivo do feriado atual (ver `theme/holidays.ts`), persistido pelo
 * `JcProvider` no localStorage. Só renderiza algo enquanto houver um feriado "na janela"
 * (`activeHoliday`) — fora de temporada não há o que ligar/desligar.
 */
export const ThemeFlavorToggle = defineComponent({
  name: 'ThemeFlavorToggle',
  inheritAttrs: false,
  props: {
    as: { type: String as PropType<NonNullable<ThemeFlavorToggleProps['as']>>, default: 'icon' },
    label: { type: String, default: undefined },
    variant: { type: String as PropType<ActionIconProps['variant']>, default: undefined },
    color: { type: String as PropType<ActionIconProps['color']>, default: undefined },
    size: { type: [String, Number] as PropType<ActionIconProps['size']>, default: undefined },
  },
  setup(props, { attrs }) {
    const { activeHoliday, festiveEnabled, setFestiveEnabled } = useThemeFlavor();
    const toggle = () => setFestiveEnabled(!festiveEnabled.value);
    const resolvedLabel = computed(() => props.label ?? (activeHoliday ? `Tema de ${HOLIDAY_LABELS[activeHoliday]}` : ''));

    return () => {
      if (!activeHoliday) return null;
      const Icon = festiveEnabled.value ? HOLIDAY_ICONS[activeHoliday].on : HOLIDAY_ICONS[activeHoliday].off;

      if (props.as === 'button') {
        return h(
          Button as any,
          {
            variant: props.variant ?? 'outline',
            color: props.color,
            size: props.size ?? 'sm',
            leftSection: () => h(Icon, { size: 16 }),
            onClick: toggle,
            ...attrs,
          },
          () => resolvedLabel.value,
        );
      }

      return h(
        ActionIcon as any,
        {
          variant: props.variant ?? 'subtle',
          color: props.color,
          size: props.size ?? 'lg',
          onClick: toggle,
          'aria-label': resolvedLabel.value,
          title: resolvedLabel.value,
          'aria-pressed': festiveEnabled.value,
          ...attrs,
        },
        () => h(Icon, { size: 18 }),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<ThemeFlavorToggleProps>;
