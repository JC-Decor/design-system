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
  type MantineThemeComponents,
} from '@mantine/core';
import classes from './dataDisplay.module.css';

export const dataDisplayComponents: MantineThemeComponents = {
  Accordion: Accordion.extend({
    defaultProps: { chevronPosition: 'right' },
    classNames: { item: classes.accordionItem, control: classes.accordionControl, label: classes.accordionLabel, chevron: classes.accordionChevron, content: classes.accordionContent },
  }),
  Avatar: Avatar.extend({ defaultProps: { color: 'horizon', radius: 'xl' }, classNames: { root: classes.avatar } }),
  BackgroundImage: BackgroundImage.extend({ defaultProps: { radius: 'md' } }),
  Badge: Badge.extend({
    defaultProps: { variant: 'light', radius: 'xl' },
    classNames: { root: classes.badge },
    vars: (_theme, props) =>
      (props.size ?? 'md') === 'md'
        ? { root: { '--badge-height': '24px', '--badge-fz': '12px', '--badge-padding-x': '8px' } }
        : { root: {} },
  }),
  Card: Card.extend({ defaultProps: { radius: 'md', padding: 'lg', shadow: 'sm', withBorder: true } }),
  DataList: DataList.extend({ classNames: { root: classes.dataList, itemLabel: classes.dataListLabel, itemValue: classes.dataListValue } }),
  Image: Image.extend({ defaultProps: { radius: 'md' } }),
  Indicator: Indicator.extend({ defaultProps: { color: 'danger' }, classNames: { indicator: classes.indicator } }),
  Kbd: Kbd.extend({ classNames: { root: classes.kbd } }),
  /** Formato brasileiro por padrão: 1.234,56 */
  NumberFormatter: NumberFormatter.extend({ defaultProps: { thousandSeparator: '.', decimalSeparator: ',' } }),
  RollingNumber: RollingNumber.extend({ defaultProps: { thousandSeparator: '.', decimalSeparator: ',' } }),
  Spoiler: Spoiler.extend({ classNames: { control: classes.spoilerControl } }),
  ThemeIcon: ThemeIcon.extend({ defaultProps: { radius: 'md' } }),
  Timeline: Timeline.extend({
    defaultProps: { bulletSize: 24, lineWidth: 2 },
    classNames: { root: classes.timeline, item: classes.timelineItem, itemBullet: classes.timelineBullet, itemTitle: classes.timelineTitle },
  }),
};
