import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import clsx from 'clsx';
import { Illustration, type IllustrationSource } from '../Illustration';
import { SectionHeader } from '../SectionHeader';
import classes from './MotionWrapper.module.css';

export type MotionVariant = 'fade' | 'slideUp' | 'scale' | 'expand' | 'none';

export interface MotionWrapperProps extends BoxProps, ElementProps<'div'> {
  /** Animação de entrada @default 'fade' */
  variant?: MotionVariant;
  /** Atraso em ms (útil para escalonar listas) @default 0 */
  delay?: number;
  /** Duração em ms @default 180 (fade) · 320 (demais) */
  duration?: number;
  children?: React.ReactNode;
}

/**
 * Anima a entrada do conteúdo com keyframes CSS (sem biblioteca de animação), como o motion.css do Connect.
 * Respeita `prefers-reduced-motion`: com movimento reduzido o conteúdo aparece direto.
 */
export function MotionWrapper({ variant = 'fade', delay = 0, duration, className, style, children, ...others }: MotionWrapperProps) {
  const reduced = useReducedMotion();
  const animated = !reduced && variant !== 'none';
  return (
    <Box
      className={clsx(animated && classes.motion, className)}
      data-motion={animated ? variant : undefined}
      style={[
        animated
          ? { '--motion-delay': `${delay}ms`, '--motion-duration': `${duration ?? (variant === 'fade' ? 180 : 320)}ms` }
          : undefined,
        style,
      ]}
      {...others}
    >
      {children}
    </Box>
  );
}
MotionWrapper.displayName = '@jcdecor/connect-ui/MotionWrapper';

export interface AnimatedSectionProps extends BoxProps, ElementProps<'div', 'title'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
  /** URL de ilustração decorativa */
  illustration?: IllustrationSource;
  /** Atraso da entrada em ms @default 0 */
  delay?: number;
}

/** Seção que entra deslizando (slideUp) com SectionHeader opcional — compacto quando não há descrição. */
export function AnimatedSection({ title, description, actions, children, illustration, delay, className, ...others }: AnimatedSectionProps) {
  return (
    <MotionWrapper variant="slideUp" delay={delay} className={clsx(classes.section, className)} {...others}>
      {title && <SectionHeader title={title} description={description} actions={actions} illustration={illustration} compact={!description} />}
      {!title && illustration && <Illustration src={illustration} size="md" tone="soft" className={classes.illustration} />}
      {!title && actions && <div className={classes.actions}>{actions}</div>}
      <div className={classes.body}>{children}</div>
    </MotionWrapper>
  );
}
AnimatedSection.displayName = '@jcdecor/connect-ui/AnimatedSection';
