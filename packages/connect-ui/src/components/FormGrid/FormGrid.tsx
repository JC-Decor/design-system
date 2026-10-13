import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import classes from './FormGrid.module.css';

export interface FormGridProps extends BoxProps, ElementProps<'div'> {
  /** Largura mínima de cada coluna antes de quebrar @default 240 */
  minColWidth?: number;
  /** Espaço entre campos (px) @default 12 */
  gap?: number;
  children?: React.ReactNode;
}

/**
 * Grade de formulário do Connect (`.wf-form-grid`): campos simples dividem colunas automáticas;
 * campos com textarea/editor e qualquer filho que não seja campo ocupam a linha inteira.
 * Use `data-span="full"` ou `data-span="auto"` num filho para forçar.
 */
export function FormGrid({ minColWidth = 240, gap = 12, className, style, ...others }: FormGridProps) {
  return <Box className={clsx(classes.grid, className)} style={[{ '--fg-min': `${minColWidth}px`, '--fg-gap': `${gap}px` }, style]} {...others} />;
}
FormGrid.displayName = '@jcdecor/connect-ui/FormGrid';

/** Classe da grade, para reaproveitar em outros contêineres (ex.: corpo do FormModal). */
export const formGridClassName = classes.grid;
