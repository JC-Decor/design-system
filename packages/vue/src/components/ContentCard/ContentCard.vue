<script setup lang="ts">
import { useAttrs, useSlots } from 'vue';
import { useProps, useStyles } from '@mantine-vue/core';
import { Card } from '../../theme/themeDefaults';
import { Kicker } from '../Typography';
import { hasContent, resolveContent } from '../../utils/vue';
import type { ContentCardOwnProps, ContentCardSlots } from './ContentCard.types';
import classes from './ContentCard.module.css';

defineOptions({ name: 'ContentCard', inheritAttrs: false });

// `undefined` explícito: os padrões vêm do useProps, para que theme.components.ContentCard.defaultProps funcione.
const rawProps = withDefaults(defineProps<ContentCardOwnProps>(), {
  kicker: undefined,
  title: undefined,
  image: undefined,
  imageAlt: undefined,
  imageHeight: undefined,
  actions: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<ContentCardSlots>();

const attrs = useAttrs();
const slots = useSlots();
const props = useProps('ContentCard', { imageHeight: 180 }, rawProps);

// Getters: o useStyles lê o input a cada chamada, então class/style/classNames continuam reativos.
const getStyles = useStyles({
  name: 'ContentCard',
  classes,
  props,
  get className() { return attrs.class; },
  get style() { return attrs.style as any; },
  get classNames() { return props.classNames as any; },
  get styles() { return props.styles as any; },
  get vars() { return props.vars as any; },
  get unstyled() { return props.unstyled; },
});

const kicker = () => resolveContent(props.kicker, slots.kicker);
const title = () => resolveContent(props.title, slots.title);
const actions = () => resolveContent(props.actions, slots.actions);
const body = () => resolveContent(undefined, slots.default);
/** URL (string) vira <img>; slot ou nó customizado é renderizado como está. */
const imageUrl = () => (!slots.image && typeof props.image === 'string' && props.image ? props.image : undefined);
const imageNode = () => resolveContent(props.image, slots.image);
</script>

<template>
  <Card v-bind="{ ...attrs, ...getStyles('root') }">
    <div v-if="imageUrl() || hasContent(imageNode())" v-bind="getStyles('image')">
      <img
        v-if="imageUrl()"
        :src="imageUrl()"
        :alt="props.imageAlt ?? ''"
        :style="{ height: `${props.imageHeight}px` }"
      />
      <component :is="imageNode" v-else />
    </div>
    <Kicker v-if="hasContent(kicker())" v-bind="getStyles('kicker')"><component :is="kicker" /></Kicker>
    <div v-if="hasContent(title())" v-bind="getStyles('title')"><component :is="title" /></div>
    <div v-if="hasContent(body())" v-bind="getStyles('body')"><component :is="body" /></div>
    <div v-if="hasContent(actions())" v-bind="getStyles('actions')"><component :is="actions" /></div>
  </Card>
</template>
