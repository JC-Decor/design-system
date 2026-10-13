import { Box, type BoxProps, type ElementProps } from '@mantine/core';
import clsx from 'clsx';
import classes from './DetailGrid.module.css';

export interface DetailGridItem {
  key?: string | number;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Linha discreta abaixo do valor */
  hint?: React.ReactNode;
  /** `full` = ocupa a linha inteira */
  span?: 'full';
}

export interface DetailItemProps extends BoxProps, Omit<ElementProps<'div'>, 'title'> {
  label: React.ReactNode;
  children?: React.ReactNode;
  hint?: React.ReactNode;
  span?: 'full';
}

/** Par rótulo/valor (`.wf-preview-grid` > span + strong): rótulo 12px discreto acima do valor 14px. */
export function DetailItem({ label, children, hint, span, className, ...others }: DetailItemProps) {
  return (
    <Box className={clsx(classes.item, className)} data-span={span} {...others}>
      <span className={classes.label}>{label}</span>
      <strong className={classes.value}>{children}</strong>
      {hint && <small className={classes.hint}>{hint}</small>}
    </Box>
  );
}
DetailItem.displayName = '@jcdecor/connect-ui/DetailItem';

export interface DetailGridProps extends BoxProps, ElementProps<'div'> {
  /** Itens (alternativa a passar `<DetailItem>` como filhos) */
  items?: DetailGridItem[];
  /** Largura mínima de cada coluna antes de quebrar @default 240 */
  minColWidth?: number;
  children?: React.ReactNode;
}

/** Grade de detalhes do Connect: colunas automáticas de rótulo/valor que viram uma só no celular. */
export function DetailGrid({ items, minColWidth = 240, className, style, children, ...others }: DetailGridProps) {
  return (
    <Box className={clsx(classes.grid, className)} style={[{ '--dg-min': `${minColWidth}px` }, style]} {...others}>
      {items?.map((item, i) => (
        <DetailItem key={item.key ?? i} label={item.label} hint={item.hint} span={item.span}>
          {item.value}
        </DetailItem>
      ))}
      {children}
    </Box>
  );
}
DetailGrid.displayName = '@jcdecor/connect-ui/DetailGrid';
