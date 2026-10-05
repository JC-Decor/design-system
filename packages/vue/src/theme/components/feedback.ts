import { themed, type ThemeComponents } from './types';
import {
  Alert,
  EmptyState,
  Loader,
  Notification,
  Progress,
  RingProgress,
  SemiCircleProgress,
  Skeleton,
} from '@mantine-vue/core';
import classes from './feedback.module.css';

export const feedbackComponents: ThemeComponents = {
  Notification: themed(Notification, {
    defaultProps: { radius: 'md' },
    classNames: { root: classes.notification, title: classes.notificationTitle, description: classes.notificationDescription, icon: classes.notificationIcon },
  }),
  Alert: themed(Alert, { defaultProps: { variant: 'light' }, classNames: { root: classes.alert, wrapper: classes.alertWrapper, title: classes.alertTitle, message: classes.alertMessage } }),
  Loader: themed(Loader, { defaultProps: { type: 'oval' } }),
  Progress: themed(Progress, { defaultProps: { radius: 'xl' }, classNames: { root: classes.progress, label: classes.progressLabel } }),
  RingProgress: themed(RingProgress, { classNames: { curve: classes.ringCurve } }),
  SemiCircleProgress: themed(SemiCircleProgress, { classNames: { root: classes.semiCircle, label: classes.semiCircleLabel } }),
  Skeleton: themed(Skeleton, { classNames: { root: classes.skeleton } }),
  EmptyState: themed(EmptyState, {
    classNames: { root: classes.emptyState, indicator: classes.emptyIndicator, title: classes.emptyTitle, description: classes.emptyDescription },
  }),
};
