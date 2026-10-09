<script setup lang="ts">
import { useAttrs, useSlots } from 'vue';
import { Box, Skeleton, useProps, useStyles } from '@mantine-vue/core';
import { IconArrowDownRight, IconArrowUpRight, IconMinus } from '@tabler/icons-vue';
import { formatNumber, formatPercent } from '../../utils/format';
import { hasContent, resolveContent } from '../../utils/vue';
import type { KpiCardOwnProps, KpiCardSlots } from './KpiCard.types';
import { getDeltaTone, varsResolver } from './KpiCard.vars';
import classes from './KpiCard.module.css';

defineOptions({ name: 'KpiCard', inheritAttrs: false });

// `undefined` explícito: os padrões vêm do useProps, para que theme.components.KpiCard.defaultProps funcione.
const rawProps = withDefaults(defineProps<KpiCardOwnProps>(), {
  label: undefined,
  value: undefined,
  delta: undefined,
  deltaLabel: undefined,
  invertDelta: undefined,
  colorValue: undefined,
  icon: undefined,
  chart: undefined,
  loading: undefined,
  classNames: undefined,
  styles: undefined,
  vars: undefined,
  unstyled: undefined,
});
defineSlots<KpiCardSlots>();

const attrs = useAttrs();
const slots = useSlots();
const props = useProps('KpiCard', {}, rawProps);

const getStyles = useStyles({
  name: 'KpiCard',
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

const label = () => resolveContent(props.label, slots.label);
const value = () => {
  const node = resolveContent(props.value, slots.value);
  return typeof node === 'number' ? formatNumber(node) : node;
};
const deltaLabel = () => resolveContent(props.deltaLabel, slots.deltaLabel);
const icon = () => resolveContent(props.icon, slots.icon);
const chart = () => resolveContent(props.chart, slots.chart);

const tone = () => getDeltaTone(props.delta, props.invertDelta);
const arrowIcon = () =>
  props.delta === undefined || props.delta === 0 ? IconMinus : props.delta > 0 ? IconArrowUpRight : IconArrowDownRight;
</script>

<template>
  <Box v-bind="{ ...attrs, ...getStyles('root') }">
    <div v-bind="getStyles('header')">
      <span v-bind="getStyles('label')"><component :is="label" /></span>
      <span v-if="hasContent(icon())" v-bind="getStyles('icon')"><component :is="icon" /></span>
    </div>
    <Skeleton v-if="props.loading" :height="32" width="60%" :mt="4" />
    <div v-else v-bind="getStyles('value')"><component :is="value" /></div>
    <div v-if="(props.delta !== undefined || hasContent(deltaLabel())) && !props.loading" v-bind="getStyles('footer')">
      <span v-if="props.delta !== undefined" v-bind="getStyles('delta')" :data-tone="tone()">
        <component :is="arrowIcon()" :size="14" stroke="2.5" />
        {{ formatPercent(props.delta, { signed: true }) }}
      </span>
      <span v-if="hasContent(deltaLabel())"><component :is="deltaLabel" /></span>
    </div>
    <div v-if="hasContent(chart())" v-bind="getStyles('chart')"><component :is="chart" /></div>
  </Box>
</template>
