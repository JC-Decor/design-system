<script setup lang="ts">
import { useAttrs, useSlots } from 'vue';
import { ActionIcon, Button, Group, Rating, Text, resolveNode, useProps, useStyles } from '@mantine-vue/core';
import { Card } from '../../theme/themeDefaults';
import { IconHeart, IconHeartFilled, IconShoppingCart } from '@tabler/icons-vue';
import { PriceTag } from '../PriceTag';
import { Tag } from '../Tag';
import { useListenerCheck } from '../../utils/vue';
import type { ProductCardEmits, ProductCardOwnProps, ProductCardSlots } from './ProductCard.types';
import classes from './ProductCard.module.css';

defineOptions({ name: 'ProductCard', inheritAttrs: false });

// `undefined` explícito: os padrões vêm do useProps, e `favorite` ausente (≠ false) esconde o coração.
const rawProps = withDefaults(defineProps<ProductCardOwnProps>(), {
  href: undefined,
  category: undefined,
  oldPrice: undefined,
  installments: undefined,
  pixDiscount: undefined,
  unit: undefined,
  badges: undefined,
  showDiscount: undefined,
  rating: undefined,
  reviews: undefined,
  favorite: undefined,
  actionLabel: undefined,
  imageRatio: undefined,
  linkComponent: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<ProductCardSlots>();
const emit = defineEmits<ProductCardEmits>();

const attrs = useAttrs();
const slots = useSlots();
const hasListener = useListenerCheck();
const props = useProps(
  'ProductCard',
  { showDiscount: true, actionLabel: 'Comprar', imageRatio: 1, linkComponent: 'a' },
  rawProps,
);

const getStyles = useStyles({
  name: 'ProductCard',
  classes,
  props,
  get className() { return attrs.class; },
  get style() { return attrs.style as any; },
  get classNames() { return props.classNames as any; },
  get styles() { return props.styles as any; },
  get vars() { return props.vars as any; },
  get unstyled() { return props.unstyled; },
});

const discount = () =>
  props.oldPrice && props.oldPrice > props.price ? Math.round((1 - props.price / props.oldPrice) * 100) : 0;
/** Equivalente a `onFavoriteChange` passado no React: `v-model:favorite`, `:favorite` ou `@update:favorite`. */
const showFavorite = () => props.favorite !== undefined || hasListener('update:favorite');
/** Equivalente a `onAction` passado no React. */
const showAction = () => hasListener('action');
const linkProps = () => {
  const link = props.linkComponent ?? 'a';
  return props.href ? (link === 'a' ? { href: props.href } : { to: props.href, href: props.href }) : {};
};
const nameComponent = () => (props.href ? (props.linkComponent ?? 'a') : 'div');
const renderBadges = () => [...(props.badges ?? []).map((badge) => resolveNode(badge)), slots.badges?.()];
</script>

<template>
  <Card v-bind="{ ...attrs, ...getStyles('root') }" :mod="[{ interactive: Boolean(props.href || showAction()) }, (attrs as any).mod]">
    <div v-bind="getStyles('media', { style: { '--product-ratio': String(props.imageRatio) } })">
      <img :src="props.image" :alt="props.name" loading="lazy" />
      <div v-bind="getStyles('badges')">
        <Tag v-if="props.showDiscount && discount() > 0" tone="error" variant="filled">-{{ discount() }}%</Tag>
        <component :is="renderBadges" />
      </div>
      <ActionIcon
        v-if="showFavorite()"
        v-bind="getStyles('favorite')"
        variant="subtle"
        :color="props.favorite ? 'danger' : 'obsidian'"
        radius="xl"
        :aria-label="props.favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'"
        :aria-pressed="Boolean(props.favorite)"
        @click="emit('update:favorite', !props.favorite)"
      >
        <IconHeartFilled v-if="props.favorite" :size="18" />
        <IconHeart v-else :size="18" />
      </ActionIcon>
    </div>
    <div v-if="props.category" v-bind="getStyles('category')">{{ props.category }}</div>
    <component :is="nameComponent()" v-bind="{ ...linkProps(), ...getStyles('name') }">{{ props.name }}</component>
    <Group v-if="props.rating !== undefined" :gap="6" mb="xs">
      <Rating :model-value="props.rating" :fractions="2" read-only size="xs" color="electric.4" />
      <Text v-if="props.reviews !== undefined" fz="xs" c="var(--ds-text-3)">({{ props.reviews }})</Text>
    </Group>
    <PriceTag
      v-bind="getStyles('price')"
      :value="props.price"
      :old-value="props.oldPrice"
      :installments="props.installments"
      :pix-discount="props.pixDiscount"
      :unit="props.unit"
    />
    <Button v-if="showAction()" v-bind="getStyles('action')" full-width @click="emit('action', $event)">
      <template #leftSection><IconShoppingCart :size="18" /></template>
      {{ props.actionLabel }}
    </Button>
  </Card>
</template>
