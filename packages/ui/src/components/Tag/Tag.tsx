import { Badge, type BadgeProps } from '@mantine/core';
import {
  IconAlertTriangle,
  IconCheck,
  IconInfoCircle,
  IconX,
} from '@tabler/icons-react';

export type TagTone = 'primary' | 'success' | 'warn' | 'error' | 'neutral';

const toneColor: Record<TagTone, string> = {
  primary: 'horizon',
  success: 'evergreen',
  warn: 'electric',
  error: 'danger',
  neutral: 'obsidian',
};

const toneIcon: Record<TagTone, React.ComponentType<{ size?: number; stroke?: number }> | null> = {
  primary: IconInfoCircle,
  success: IconCheck,
  warn: IconAlertTriangle,
  error: IconX,
  neutral: null,
};

export interface TagProps extends Omit<BadgeProps, 'color' | 'variant'> {
  /** Tom semântico (ds-tag-*) @default 'primary' */
  tone?: TagTone;
  /** Mostra o ícone padrão do tom (✓ ⚠ ✕ ⓘ). Passe um nó em `leftSection` para usar outro. */
  withIcon?: boolean;
  /** `light` = selo suave (padrão) · `filled` = cor sólida · `outline` · `dot` */
  variant?: 'light' | 'filled' | 'outline' | 'dot';
  children?: React.ReactNode;
}

/** Selo / tag de status — preset de Badge com os tons do ds.css. */
export function Tag({ tone = 'primary', withIcon = false, variant = 'light', leftSection, ...others }: TagProps) {
  const Icon = toneIcon[tone];
  return (
    <Badge
      color={toneColor[tone]}
      variant={variant}
      leftSection={leftSection ?? (withIcon && Icon ? <Icon size={12} stroke={2.5} /> : undefined)}
      data-tone={tone}
      {...others}
    />
  );
}

Tag.displayName = '@jcdecor/ui/Tag';
