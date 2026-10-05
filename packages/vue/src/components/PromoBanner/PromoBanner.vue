<script setup lang="ts">
import { useAttrs, useSlots } from 'vue';
import { Box, CloseButton, useProps, useStyles } from '@mantine-vue/core';
import { useUncontrolled } from '@mantine-vue/hooks';
import { hasContent, resolveContent } from '../../utils/vue';
import type { PromoBannerEmits, PromoBannerOwnProps, PromoBannerSlots } from './PromoBanner.types';
import { varsResolver } from './PromoBanner.vars';
import classes from './PromoBanner.module.css';

defineOptions({ name: 'PromoBanner', inheritAttrs: false });

// `undefined` explícito: os padrões vêm do useProps, e `opened` ausente (≠ false) deixa o banner não controlado.
const rawProps = withDefaults(defineProps<PromoBannerOwnProps>(), {
  variant: undefined,
  highlight: undefined,
  icon: undefined,
  withCloseButton: undefined,
  opened: undefined,
  radius: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<PromoBannerSlots>();
const emit = defineEmits<PromoBannerEmits>();

const attrs = useAttrs();
const slots = useSlots();
const props = useProps('PromoBanner', { variant: 'horizon' }, rawProps);

const [open, setOpen] = useUncontrolled({
  value: () => props.opened,
  defaultValue: true,
  onChange: (value) => emit('update:opened', value),
});

const getStyles = useStyles({
  name: 'PromoBanner',
  classes,
  props,
  get className() { return attrs.class; },
  get style() { return attrs.style as any; },
  get classNames() { return props.classNames as any; },
  get styles() { return props.styles as any; },
  get vars() { return props.vars as any; },
  get unstyled() { return props.unstyled; },
  varsResolver,
});

const icon = () => resolveContent(props.icon, slots.icon);
const highlight = () => resolveContent(props.highlight, slots.highlight);

function close() {
  setOpen(false);
  emit('close');
}
</script>

<template>
  <Box
    v-if="open"
    role="note"
    v-bind="{ ...attrs, ...getStyles('root') }"
    :variant="props.variant"
    :mod="[{ radius: props.radius !== undefined, closable: props.withCloseButton }, (attrs as any).mod]"
  >
    <span v-bind="getStyles('content')">
      <component :is="icon" />
      <span><slot /></span>
      <strong v-if="hasContent(highlight())" v-bind="getStyles('highlight')"><component :is="highlight" /></strong>
    </span>
    <CloseButton
      v-if="props.withCloseButton"
      aria-label="Fechar"
      size="sm"
      variant="transparent"
      v-bind="getStyles('close')"
      @click="close"
    />
  </Box>
</template>
