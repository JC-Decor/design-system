import { Anchor, Box, Breadcrumbs, Group, type BoxProps } from '@mantine/core';
import { Kicker, Headline, Subheadline } from '../Typography';

export interface PageHeaderBreadcrumb {
  label: React.ReactNode;
  href?: string;
}

export interface PageHeaderProps extends BoxProps, Omit<React.ComponentProps<'div'>, keyof BoxProps | 'title'> {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Botões à direita do título */
  actions?: React.ReactNode;
  breadcrumbs?: PageHeaderBreadcrumb[];
  /** Componente dos links do breadcrumb (ex.: Link do react-router) @default 'a' */
  linkComponent?: React.ElementType;
  /** `display` usa display-small (página principal); `headline` usa headline-large @default 'headline' */
  size?: 'display' | 'headline';
}

/** Cabeçalho de página: breadcrumbs, kicker, título, descrição e ações. */
export function PageHeader({
  kicker,
  title,
  description,
  actions,
  breadcrumbs,
  linkComponent = 'a',
  size = 'headline',
  ...others
}: PageHeaderProps) {
  return (
    <Box mb="xl" {...others}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <Breadcrumbs mb="sm" fz="sm" separatorMargin={6}>
          {breadcrumbs.map((crumb, index) =>
            crumb.href ? (
              <Anchor key={index} component={linkComponent as 'a'} href={crumb.href} {...(linkComponent !== 'a' && { to: crumb.href })} fz="sm">
                {crumb.label}
              </Anchor>
            ) : (
              <Box key={index} component="span" c="var(--ds-text-3)" fz="sm">
                {crumb.label}
              </Box>
            ),
          )}
        </Breadcrumbs>
      )}
      <Group justify="space-between" align="flex-end" gap="md" wrap="wrap">
        <div style={{ flex: '1 1 320px', minWidth: 0 }}>
          {kicker && <Kicker>{kicker}</Kicker>}
          {size === 'display' ? (
            <Headline component="h1" size="lg" fz="var(--type-display-sm)" lh={1.15} mt={8}>
              {title}
            </Headline>
          ) : (
            <Headline component="h1" size="lg" mt={kicker ? 8 : 0}>
              {title}
            </Headline>
          )}
          {description && (
            <Subheadline component="div" size="lg" c="var(--ds-text-2)" maw={640} mt={8}>
              {description}
            </Subheadline>
          )}
        </div>
        {actions && <Group gap="sm">{actions}</Group>}
      </Group>
    </Box>
  );
}
PageHeader.displayName = '@jcdecor/ui/PageHeader';
