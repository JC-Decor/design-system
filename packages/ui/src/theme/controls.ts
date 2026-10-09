import type { MantineSize } from '@mantine/core';
import { typography as t } from './tokens';

export const isSize = (size: unknown): size is MantineSize =>
  size === 'xs' || size === 'sm' || size === 'md' || size === 'lg' || size === 'xl';

/**
 * Alturas dos controles em passos de 8px (alvo de toque ≥ 40px no md; 48px no lg para mobile/checkout).
 * Botões usam 14px/600; campos usam 16px (evita zoom automático no iOS e melhora leitura).
 */
export const control = {
  xs: { height: '28px', px: '10px', fz: '12px', inputFz: '12px' },
  sm: { height: '32px', px: '12px', fz: '13px', inputFz: '14px' },
  md: { height: '40px', px: '16px', fz: t.button.size, inputFz: '16px' },
  lg: { height: '48px', px: '20px', fz: '16px', inputFz: '16px' },
  xl: { height: '56px', px: '24px', fz: '18px', inputFz: '18px' },
} as const;

/** Overlay padrão de modais/drawers: navy da marca. */
export const overlayProps = { backgroundOpacity: 0.5, blur: 2, color: '#08154B' } as const;
