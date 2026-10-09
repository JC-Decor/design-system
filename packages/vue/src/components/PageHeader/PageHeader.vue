<script setup lang="ts">
import { computed, h, useAttrs, useSlots, type Component, type VNodeChild } from 'vue';
import { Anchor, Box, Breadcrumbs, resolveNode, useProps, useStyles } from '@mantine-vue/core';
import { Headline, Kicker, Subheadline } from '../Typography';
import { resolveContent } from '../../utils/vue';
import type { PageHeaderBreadcrumb, PageHeaderFactory, PageHeaderOwnProps, PageHeaderSlots } from './PageHeader.types';
import { varsResolver } from './PageHeader.vars';
import classes from './PageHeader.module.css';

defineOptions({ name: 'PageHeader', inheritAttrs: false });

// Tudo `undefined` aqui para que os defaults de `theme.components.PageHeader` funcionem via useProps
const rawProps = withDefaults(defineProps<PageHeaderOwnProps>(), {
  kicker: undefined,
  title: undefined,
  description: undefined,
  icon: undefined,
  iconSize: undefined,
  actions: undefined,
  breadcrumbs: undefined,
  linkComponent: undefined,
  size: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<PageHeaderSlots>();

const slots = useSlots();
const attrs = useAttrs();

const props = useProps('PageHeader', { linkComponent: 'a', size: 'headline' }, rawProps);

// Getters: classNames/styles/class/style continuam reativos depois do setup
const getStyles = useStyles<PageHeaderFactory>({
  name: 'PageHeader',
  classes,
  props,
  get className() {
    return attrs.class;
  },
  get style() {
    return attrs.style as any;
  },
  get classNames() {
    return props.classNames as any;
  },
  get styles() {
    return props.styles as any;
  },
  get vars() {
    return props.vars as any;
  },
  get unstyled() {
    return props.unstyled;
  },
  varsResolver,
});

/** Renderiza um `MantineNode` (VNode, texto ou função) como componente estável. */
const RenderNode = (p: { node: VNodeChild }) => p.node;
RenderNode.props = ['node'];

const linkComponent = computed<string | Component>(() => props.linkComponent ?? 'a');
const kicker = computed(() => resolveContent(props.kicker, slots.kicker));
const title = computed(() => resolveNode(props.title, slots.title));
const description = computed(() => resolveContent(props.description, slots.description));
const icon = computed(() => resolveContent(props.icon, slots.icon));
const actions = computed(() => resolveContent(props.actions, slots.actions));
const rootAttrs = computed(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

const crumbNode = (crumb: PageHeaderBreadcrumb, index: number) =>
  crumb.href
    ? h(
        Anchor as any,
        {
          key: index,
          component: linkComponent.value,
          href: crumb.href,
          ...(linkComponent.value !== 'a' && { to: crumb.href }),
          fz: 'sm',
        },
        () => resolveNode(crumb.label),
      )
    : h(Box as any, { key: index, component: 'span', c: 'var(--ds-text-3)', fz: 'sm' }, () => resolveNode(crumb.label));
</script>

<template>
  <Box v-bind="{ ...rootAttrs, ...getStyles('root') }">
    <Breadcrumbs
      v-if="props.breadcrumbs && props.breadcrumbs.length > 0"
      v-bind="getStyles('breadcrumbs')"
      fz="sm"
      :separator-margin="6"
    >
      <RenderNode :node="props.breadcrumbs.map(crumbNode)" />
    </Breadcrumbs>
    <div v-bind="getStyles('header')">
      <div v-bind="getStyles('main')">
        <div v-if="icon !== undefined" v-bind="getStyles('icon')" aria-hidden="true">
          <RenderNode :node="icon" />
        </div>
        <div v-bind="getStyles('body')">
          <Kicker v-if="kicker !== undefined" v-bind="getStyles('kicker')">
            <RenderNode :node="kicker" />
          </Kicker>
          <Headline
            v-if="props.size === 'display'"
            component="h1"
            size="lg"
            fz="var(--type-display-sm)"
            :lh="1.15"
            :mt="8"
            v-bind="getStyles('title')"
          >
            <RenderNode :node="title" />
          </Headline>
          <Headline v-else component="h1" size="lg" :mt="kicker !== undefined ? 8 : 0" v-bind="getStyles('title')">
            <RenderNode :node="title" />
          </Headline>
          <Subheadline
            v-if="description !== undefined"
            component="div"
            size="lg"
            c="var(--ds-text-2)"
            :maw="640"
            :mt="8"
            v-bind="getStyles('description')"
          >
            <RenderNode :node="description" />
          </Subheadline>
        </div>
      </div>
      <div v-if="actions !== undefined" v-bind="getStyles('actions')">
        <RenderNode :node="actions" />
      </div>
    </div>
  </Box>
</template>
