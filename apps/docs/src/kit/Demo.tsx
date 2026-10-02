import { useState } from 'react';
import { Box, Paper, SegmentedControl, Group, Text } from '@mantine/core';
import { IconCode, IconEye } from '@tabler/icons-react';
import { CodeBlock } from './CodeBlock';
import { demos } from './demos';
import classes from './kit.module.css';

export interface DemoProps {
  id: string;
  title?: string;
  description?: React.ReactNode;
  /** Começa mostrando o código */
  defaultView?: 'preview' | 'code';
}

/** Bloco de exemplo: prévia viva + código-fonte real do arquivo de demo. */
export function Demo({ id, title, description, defaultView = 'preview' }: DemoProps) {
  const demo = demos[id];
  const [showCode, setShowCode] = useState(defaultView === 'code');
  if (!demo) {
    return <Text c="red">Demo não encontrado: {id}</Text>;
  }
  const { Component, code, meta } = demo;

  return (
    <Box my="lg">
      {(title || description) && (
        <Box mb="sm">
          {title && (
            <Text fw={600} fz="var(--type-subheadline-lg)">
              {title}
            </Text>
          )}
          {description && (
            <Text fz="sm" c="var(--ds-text-2)" mt={2}>
              {description}
            </Text>
          )}
        </Box>
      )}
      <Paper withBorder radius="md" className={classes.demo}>
        <Box
          className={classes.preview}
          data-centered={meta.centered || undefined}
          data-page={meta.background === 'page' || undefined}
          p={meta.withoutPadding ? 0 : 'lg'}
        >
          <Box w="100%" maw={meta.maxWidth} mx={meta.centered ? 'auto' : undefined}>
            <Component />
          </Box>
        </Box>
        <Group className={classes.demoBar} justify="flex-end" px="sm" py={6}>
          <SegmentedControl
            size="xs"
            value={showCode ? 'code' : 'preview'}
            onChange={(v) => setShowCode(v === 'code')}
            data={[
              { value: 'preview', label: <Group gap={4} wrap="nowrap"><IconEye size={14} />Prévia</Group> },
              { value: 'code', label: <Group gap={4} wrap="nowrap"><IconCode size={14} />Código</Group> },
            ]}
          />
        </Group>
        {showCode && (
          <Box className={classes.code}>
            <CodeBlock code={code} />
          </Box>
        )}
      </Paper>
    </Box>
  );
}
