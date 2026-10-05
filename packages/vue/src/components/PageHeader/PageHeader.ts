import { defineComponent, h, type Component, type DefineSetupFnComponent, type PropType, type SlotsType, type VNodeChild } from 'vue';
import { Anchor, Box, Breadcrumbs, Group, resolveNode, type BoxProps, type MantineNode } from '@mantine-vue/core';
import { Headline, Kicker, Subheadline } from '../Typography';
import { nodeProp, resolveContent } from '../../utils/vue';

export interface PageHeaderBreadcrumb {
  label: MantineNode;
  href?: string;
}

export interface PageHeaderProps extends Omit<BoxProps, 'title'> {
  /** Também aceita o slot `kicker` (o slot tem prioridade). */
  kicker?: MantineNode;
  /** Também aceita o slot `title` (o slot tem prioridade). */
  title?: MantineNode;
  /** Também aceita o slot `description` (o slot tem prioridade). */
  description?: MantineNode;
  /** Botões à direita do título. Também aceita o slot `actions` (o slot tem prioridade). */
  actions?: MantineNode;
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Componente dos links do breadcrumb (ex.: `RouterLink` do vue-router) @default 'a' */
  linkComponent?: string | Component;
  /** `display` usa display-small (página principal); `headline` usa headline-large @default 'headline' */
  size?: 'display' | 'headline';
}

export interface PageHeaderSlots {
  kicker?: () => VNodeChild;
  title?: () => VNodeChild;
  description?: () => VNodeChild;
  actions?: () => VNodeChild;
}

/** Cabeçalho de página: breadcrumbs, kicker, título, descrição e ações. */
export const PageHeader = defineComponent({
  name: 'PageHeader',
  inheritAttrs: false,
  props: {
    kicker: nodeProp,
    title: nodeProp,
    description: nodeProp,
    actions: nodeProp,
    breadcrumbs: { type: Array as PropType<PageHeaderBreadcrumb[]>, default: undefined },
    linkComponent: { type: [String, Object, Function] as PropType<string | Component>, default: 'a' },
    size: { type: String as PropType<NonNullable<PageHeaderProps['size']>>, default: 'headline' },
  },
  setup(props, { attrs, slots }) {
    return () => {
      const kicker = resolveContent(props.kicker, slots.kicker);
      const title = resolveNode(props.title, slots.title);
      const description = resolveContent(props.description, slots.description);
      const actions = resolveContent(props.actions, slots.actions);
      const { breadcrumbs, linkComponent } = props;

      return h(Box as any, { mb: 'xl', ...attrs }, () => [
        breadcrumbs && breadcrumbs.length > 0
          ? h(Breadcrumbs as any, { mb: 'sm', fz: 'sm', separatorMargin: 6 }, () =>
              breadcrumbs.map((crumb, index) =>
                crumb.href
                  ? h(
                      Anchor as any,
                      {
                        key: index,
                        component: linkComponent,
                        href: crumb.href,
                        ...(linkComponent !== 'a' && { to: crumb.href }),
                        fz: 'sm',
                      },
                      () => resolveNode(crumb.label),
                    )
                  : h(Box as any, { key: index, component: 'span', c: 'var(--ds-text-3)', fz: 'sm' }, () => resolveNode(crumb.label)),
              ),
            )
          : null,
        h(Group as any, { justify: 'space-between', align: 'flex-end', gap: 'md', wrap: 'wrap' }, () => [
          h('div', { style: { flex: '1 1 320px', minWidth: 0 } }, [
            kicker !== undefined ? h(Kicker, null, () => kicker) : null,
            props.size === 'display'
              ? h(Headline as any, { component: 'h1', size: 'lg', fz: 'var(--type-display-sm)', lh: 1.15, mt: 8 }, () => title)
              : h(Headline as any, { component: 'h1', size: 'lg', mt: kicker !== undefined ? 8 : 0 }, () => title),
            description !== undefined
              ? h(Subheadline as any, { component: 'div', size: 'lg', c: 'var(--ds-text-2)', maw: 640, mt: 8 }, () => description)
              : null,
          ]),
          actions !== undefined ? h(Group as any, { gap: 'sm' }, () => actions) : null,
        ]),
      ]);
    };
  },
}) as unknown as DefineSetupFnComponent<PageHeaderProps, {}, SlotsType<PageHeaderSlots>>;
