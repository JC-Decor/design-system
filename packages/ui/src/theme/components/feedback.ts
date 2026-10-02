import {
  Alert,
  EmptyState,
  Loader,
  Notification,
  Progress,
  RingProgress,
  SemiCircleProgress,
  Skeleton,
  type MantineThemeComponents,
} from '@mantine/core';
import classes from './feedback.module.css';

export const feedbackComponents: MantineThemeComponents = {
  Notification: Notification.extend({
    defaultProps: { radius: 'md' },
    classNames: { root: classes.notification, title: classes.notificationTitle, description: classes.notificationDescription, icon: classes.notificationIcon },
  }),
  Alert: Alert.extend({ defaultProps: { variant: 'light' }, classNames: { root: classes.alert, wrapper: classes.alertWrapper, title: classes.alertTitle, message: classes.alertMessage } }),
  Loader: Loader.extend({ defaultProps: { type: 'oval' } }),
  Progress: Progress.extend({ defaultProps: { radius: 'xl' }, classNames: { root: classes.progress, label: classes.progressLabel } }),
  RingProgress: RingProgress.extend({ classNames: { curve: classes.ringCurve } }),
  SemiCircleProgress: SemiCircleProgress.extend({ classNames: { root: classes.semiCircle, label: classes.semiCircleLabel } }),
  Skeleton: Skeleton.extend({ classNames: { root: classes.skeleton } }),
  EmptyState: EmptyState.extend({
    classNames: { root: classes.emptyState, indicator: classes.emptyIndicator, title: classes.emptyTitle, description: classes.emptyDescription },
  }),
};
