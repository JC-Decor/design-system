import type { MantineSize } from '@mantine/core';
import { typography as t } from './tokens';

export const isSize = (size: unknown): size is MantineSize =>
  size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl';

/**
 * Alturas dos controles do Connect: md = 40px (`.btn`: 11px + 13,5px/600), sm = 34px (`.btn-sm`),
 * campos com texto 13px como o `.sel-trigger`.
 */
export const control = {
  xs: { height: '28px', px: '10px', fz: '12px', inputFz: '12px' },
  sm: { height: '34px', px: '13px', fz: '12.5px', inputFz: '12.5px' },
  md: { height: '40px', px: '16px', fz: t.button.size, inputFz: '13px' },
  lg: { height: '46px', px: '20px', fz: '14.5px', inputFz: '14px' },
  xl: { height: '52px', px: '24px', fz: '16px', inputFz: '15px' },
} as const;

/** Overlay padrão de modais/drawers (`.dialog-overlay`: rgba(14,16,34,.36) + blur 2px). */
export const overlayProps = { backgroundOpacity: 0.36, blur: 2, color: '#0E1022' } as const;
