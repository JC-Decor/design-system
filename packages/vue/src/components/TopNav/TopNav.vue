<script setup lang="ts">
import { computed, h, useAttrs, useSlots, type Component, type VNodeChild } from 'vue';
import { Box, Burger, Collapse, resolveNode, useProps, useStyles, type MantineNode } from '@mantine-vue/core';
import { useDisclosure } from '@mantine-vue/hooks';
import { JcLogo } from '../../brand/Brand';
import type { TopNavFactory, TopNavLink, TopNavOwnProps, TopNavSlots } from './TopNav.types';
import classes from './TopNav.module.css';

defineOptions({ name: 'TopNav', inheritAttrs: false });

// Tudo `undefined` aqui para que os defaults de `theme.components.TopNav` funcionem via useProps
const rawProps = withDefaults(defineProps<TopNavOwnProps>(), {
  brand: undefined,
  brandHref: undefined,
  links: undefined,
  linkComponent: undefined,
  rightSection: undefined,
  collapseOnMobile: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<TopNavSlots>();

const slots = useSlots();
const attrs = useAttrs();

const props = useProps(
  'TopNav',
  {
    brand: () => h(JcLogo, { variant: 'dark', size: 28 }),
    brandHref: '/',
    links: [],
    linkComponent: 'a',
    collapseOnMobile: true,
  },
  rawProps,
);

const [opened, { toggle, close }] = useDisclosure(false);

// Getters: classNames/styles/class/style continuam reativos depois do setup
const getStyles = useStyles<TopNavFactory>({
  name: 'TopNav',
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
});

/** Renderiza um `MantineNode` (VNode, texto ou função) como componente estável. */
const RenderNode = (p: { node: VNodeChild }) => p.node;
RenderNode.props = ['node'];

const linkComponent = computed<string | Component>(() => props.linkComponent ?? 'a');
const hrefProps = (href: string) => (linkComponent.value === 'a' ? { href } : { to: href, href });

const withChildren = (component: string | Component, children: VNodeChild) =>
  typeof component === 'string' ? children : { default: () => children };

const renderLinks = (onNavigate?: () => void) =>
  (props.links ?? []).map((link: TopNavLink, index: number) => {
    const isButton = !link.href;
    const component = isButton ? 'button' : linkComponent.value;
    const linkProps = isButton ? { type: 'button' } : hrefProps(link.href!);
    return h(
      component as any,
      {
        key: index,
        ...linkProps,
        ...getStyles('link'),
        'data-active': link.active || undefined,
        'aria-current': link.active ? 'page' : undefined,
        onClick: (event: MouseEvent) => {
          link.onClick?.(event);
          onNavigate?.();
        },
      },
      withChildren(component, resolveNode(link.label as MantineNode)) as any,
    );
  });

const brandNode = computed(() => resolveNode(props.brand, slots.brand));
const rightNode = computed(() => resolveNode(props.rightSection, slots.rightSection));
const brandComponent = computed(() => (props.brandHref === null ? 'span' : linkComponent.value));
const brandProps = computed(() => (props.brandHref === null ? {} : hrefProps(props.brandHref ?? '/')));
const withBurger = computed(() => !!props.collapseOnMobile && (props.links ?? []).length > 0);
const rootMod = computed(() => [{ collapse: props.collapseOnMobile }, (attrs as any).mod]);
</script>

<template>
  <header>
    <Box v-bind="{ ...attrs, ...getStyles('root') }" :mod="rootMod">
      <component :is="brandComponent" v-bind="{ ...brandProps, ...getStyles('brand') }">
        <RenderNode :node="brandNode" />
      </component>
      <nav v-bind="getStyles('links')" aria-label="Principal">
        <RenderNode :node="renderLinks()" />
      </nav>
      <div v-bind="getStyles('right')">
        <RenderNode :node="rightNode" />
        <Burger
          v-if="withBurger"
          :opened="opened"
          size="sm"
          aria-label="Abrir menu"
          v-bind="getStyles('burger')"
          @click="toggle"
        />
      </div>
    </Box>
    <Collapse v-if="withBurger" :expanded="opened">
      <nav v-bind="getStyles('mobileLinks')" aria-label="Principal (mobile)">
        <RenderNode :node="renderLinks(close)" />
      </nav>
    </Collapse>
  </header>
</template>
