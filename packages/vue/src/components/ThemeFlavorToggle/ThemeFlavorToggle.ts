import { computed, defineComponent, h, type DefineSetupFnComponent, type PropType } from 'vue';
import { ActionIcon, Button, type ActionIconProps } from '@mantine-vue/core';
import { IconGift, IconSnowflake } from '@tabler/icons-vue';
import { useThemeFlavor } from '../../provider/JcProvider';

export interface ThemeFlavorToggleProps extends ActionIconProps {
  /** `icon` = ActionIcon · `button` = botão (com rótulo) @default 'icon' */
  as?: 'icon' | 'button';
  /** @default 'Tema de Natal' */
  label?: string;
}

/** Alterna o tema sazonal "Natal" (persistido pelo JcProvider no localStorage). */
export const ThemeFlavorToggle = defineComponent({
  name: 'ThemeFlavorToggle',
  inheritAttrs: false,
  props: {
    as: { type: String as PropType<NonNullable<ThemeFlavorToggleProps['as']>>, default: 'icon' },
    label: { type: String, default: 'Tema de Natal' },
    variant: { type: String as PropType<ActionIconProps['variant']>, default: undefined },
    color: { type: String as PropType<ActionIconProps['color']>, default: undefined },
    size: { type: [String, Number] as PropType<ActionIconProps['size']>, default: undefined },
  },
  setup(props, { attrs }) {
    const { flavor, setFlavor } = useThemeFlavor();
    const isChristmas = computed(() => flavor.value === 'christmas');
    const toggle = () => setFlavor(isChristmas.value ? 'default' : 'christmas');

    return () => {
      const Icon = isChristmas.value ? IconSnowflake : IconGift;

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
          () => props.label,
        );
      }

      return h(
        ActionIcon as any,
        {
          variant: props.variant ?? 'subtle',
          color: props.color,
          size: props.size ?? 'lg',
          onClick: toggle,
          'aria-label': props.label,
          title: props.label,
          'aria-pressed': isChristmas.value,
          ...attrs,
        },
        () => h(Icon, { size: 18 }),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<ThemeFlavorToggleProps>;
