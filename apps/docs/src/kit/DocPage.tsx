import { Anchor, Box, Group, Text, Title } from '@mantine/core';
import { Kicker, Subheadline, Tag } from '@jcdecor/ui';
import { IconBrandGithub, IconPackage } from '@tabler/icons-react';
import { CodeBlock } from './CodeBlock';
import classes from './kit.module.css';

export interface DocPageProps {
  kicker?: string;
  title: string;
  description?: React.ReactNode;
  /** Linha de import exibida no topo */
  importCode?: string;
  /** Origem: 'jc' (componente próprio) ou 'mantine' (componente temado) */
  source?: 'jc' | 'mantine' | 'chat' | 'charts';
  /** Nome do componente no Mantine (para link da documentação original) */
  mantineName?: string;
  /** Caminho no repositório */
  sourcePath?: string;
  children: React.ReactNode;
}

const sourceTag = {
  jc: <Tag tone="primary">Componente JC</Tag>,
  mantine: <Tag tone="neutral">Mantine · temado</Tag>,
  chat: <Tag tone="success">@jcdecor/ui/chat</Tag>,
  charts: <Tag tone="warn">@jcdecor/ui/charts</Tag>,
};

export function DocPage({ kicker, title, description, importCode, source, mantineName, sourcePath, children }: DocPageProps) {
  return (
    <article className={classes.page}>
      <header className={classes.pageHeader}>
        {kicker && <Kicker>{kicker}</Kicker>}
        <Group gap="sm" align="center" mt={6}>
          <Title order={1} fz="var(--type-headline-lg)">{title}</Title>
          {source && sourceTag[source]}
        </Group>
        {description && (
          <Subheadline component="div" size="lg" c="var(--ds-text-2)" mt="sm" maw={720}>
            {description}
          </Subheadline>
        )}
        {(mantineName || sourcePath) && (
          <Group gap="lg" mt="md">
            {mantineName && (
              <Anchor href={`https://mantine.dev/core/${mantineName}/`} target="_blank" fz="sm">
                <Group gap={4}><IconPackage size={16} /> Docs do Mantine</Group>
              </Anchor>
            )}
            {sourcePath && (
              <Group gap={4} fz="sm" c="var(--ds-text-3)">
                <IconBrandGithub size={16} /> {sourcePath}
              </Group>
            )}
          </Group>
        )}
        {importCode && (
          <Box mt="md">
            <CodeBlock code={importCode} />
          </Box>
        )}
      </header>
      <div className={classes.pageBody}>{children}</div>
    </article>
  );
}

const slug = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export function Section({ title, id, children, description }: { title: string; id?: string; description?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className={classes.section}>
      <Title order={2} id={id ?? slug(title)} fz="var(--type-headline-sm)" fw={600} className={classes.sectionTitle} data-toc>
        {title}
      </Title>
      {description && <Text c="var(--ds-text-2)" mt="xs" mb="sm" className={classes.prose}>{description}</Text>}
      {children}
    </section>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <Text c="var(--ds-text-2)" my="sm" lh={1.6} className={classes.prose}>{children}</Text>;
}
