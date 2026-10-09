import { defineComponent, h, type DefineSetupFnComponent, type PropType } from 'vue';
import {
  ActionIcon,
  Button,
  useComputedColorScheme,
  useMantineColorScheme,
  type ActionIconProps,
} from '@mantine-vue/core';
import { IconMoon, IconSun } from '@tabler/icons-vue';

export interface ThemeToggleProps extends ActionIconProps {
  /** `icon` = ActionIcon · `button` = botão "Alternar tema" (como no DS) @default 'icon' */
  as?: 'icon' | 'button';
  /** @default 'Alternar tema' */
  label?: string;
}

/** Alterna entre tema claro e escuro (persistido pelo JcProvider no localStorage). */
export const ThemeToggle = defineComponent({
  name: 'ThemeToggle',
  inheritAttrs: false,
  props: {
    as: { type: String as PropType<NonNullable<ThemeToggleProps['as']>>, default: 'icon' },
    label: { type: String, default: 'Alternar tema' },
    variant: { type: String as PropType<ActionIconProps['variant']>, default: undefined },
    color: { type: String as PropType<ActionIconProps['color']>, default: undefined },
    size: { type: [String, Number] as PropType<ActionIconProps['size']>, default: undefined },
  },
  setup(props, { attrs }) {
    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const toggle = () => setColorScheme(computed.value === 'dark' ? 'light' : 'dark');

    return () => {
      const Icon = computed.value === 'dark' ? IconSun : IconMoon;

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
          ...attrs,
        },
        () => h(Icon, { size: 18 }),
      );
    };
  },
}) as unknown as DefineSetupFnComponent<ThemeToggleProps>;
