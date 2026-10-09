import { themed, type ThemeComponents } from './types';
import {
  Accordion,
  Avatar,
  BackgroundImage,
  Badge,
  Card,
  DataList,
  Image,
  Indicator,
  Kbd,
  NumberFormatter,
  RollingNumber,
  Spoiler,
  ThemeIcon,
  Timeline,
} from '@mantine-vue/core';
import classes from './dataDisplay.module.css';

export const dataDisplayComponents: ThemeComponents = {
  Accordion: themed(Accordion, {
    defaultProps: { chevronPosition: 'right' },
    classNames: { item: classes.accordionItem, control: classes.accordionControl, label: classes.accordionLabel, chevron: classes.accordionChevron, content: classes.accordionContent },
  }),
  Avatar: themed(Avatar, { defaultProps: { color: 'horizon', radius: 'xl' }, classNames: { root: classes.avatar } }),
  BackgroundImage: themed(BackgroundImage, { defaultProps: { radius: 'md' } }),
  Badge: themed(Badge, {
    defaultProps: { variant: 'light', radius: 'xl' },
    classNames: { root: classes.badge },
    vars: (_theme, props) =>
      (props.size ?? 'md') === 'md'
        ? { root: { '--badge-height': '24px', '--badge-fz': '12px', '--badge-padding-x': '8px' } }
        : { root: {} },
  }),
  Card: themed(Card, { defaultProps: { radius: 'md', padding: 'lg', shadow: 'sm', withBorder: true } }),
  DataList: themed(DataList, { classNames: { root: classes.dataList, itemLabel: classes.dataListLabel, itemValue: classes.dataListValue } }),
  Image: themed(Image, { defaultProps: { radius: 'md' } }),
  Indicator: themed(Indicator, { defaultProps: { color: 'danger' }, classNames: { indicator: classes.indicator } }),
  Kbd: themed(Kbd, { classNames: { root: classes.kbd } }),
  /** Formato brasileiro por padrão: 1.234,56 */
  NumberFormatter: themed(NumberFormatter, { defaultProps: { thousandSeparator: '.', decimalSeparator: ',' } }),
  RollingNumber: themed(RollingNumber, { defaultProps: { thousandSeparator: '.', decimalSeparator: ',' } }),
  Spoiler: themed(Spoiler, { classNames: { control: classes.spoilerControl } }),
  ThemeIcon: themed(ThemeIcon, { defaultProps: { radius: 'md' } }),
  Timeline: themed(Timeline, {
    defaultProps: { bulletSize: 24, lineWidth: 2 },
    classNames: { root: classes.timeline, item: classes.timelineItem, itemBullet: classes.timelineBullet, itemTitle: classes.timelineTitle },
  }),
};
