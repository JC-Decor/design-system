import { Box, type BoxProps } from '@mantine/core';
import { ICONS, type IconName } from './icons';

export interface IconProps extends Omit<BoxProps, 'children'> {
  /** Nome do ícone do conjunto do Connect (ver `iconNames`) */
  name: IconName | (string & {});
  /** Tamanho em px @default 20 */
  size?: number;
  /** Espessura do traço @default 1.6 */
  stroke?: number;
  'aria-label'?: string;
}

/** Ícone de traço do Connect. Herda a cor do texto (`currentColor`); sem `aria-label` fica oculto para leitores de tela. */
export function Icon({ name, size = 20, stroke = 1.6, 'aria-label': ariaLabel, ...others }: IconProps) {
  const path = ICONS[name as IconName];
  if (!path) return null;
  return (
    <Box
      component="svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      style={{ flex: 'none' }}
      dangerouslySetInnerHTML={{ __html: path }}
      {...others}
    />
  );
}
Icon.displayName = '@jcdecor/connect-ui/Icon';
