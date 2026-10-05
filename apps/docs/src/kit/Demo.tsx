import { useEffect, useState } from 'react';
import type { Component as VueComponent } from 'vue';
import { Box, Paper, SegmentedControl, Group, Text } from '@mantine/core';
import { IconBrandReact, IconBrandVue, IconCode, IconEye } from '@tabler/icons-react';
import { CodeBlock } from './CodeBlock';
import { demos } from './demos';
import { useFramework } from './framework';
import { VueMount } from './VueMount';
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
  const { framework } = useFramework();
  const [vueDemo, setVueDemo] = useState<{ Component: VueComponent; code: string } | null>(null);
  const wantsVue = framework === 'vue' && !!demo?.vue;

  useEffect(() => {
    let active = true;
    if (wantsVue) demo!.vue!().then((loaded) => active && setVueDemo(loaded));
    return () => {
      active = false;
    };
  }, [wantsVue, demo]);

  if (!demo) {
    return <Text c="red">Demo não encontrado: {id}</Text>;
  }
  const { Component, meta } = demo;
  const showVue = wantsVue && vueDemo !== null;
  const code = showVue ? vueDemo.code : demo.code;
  // Vue escolhido mas este exemplo ainda não tem versão .vue: mostra o React e avisa
  const missingVue = framework === 'vue' && !demo.vue;

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
            {showVue ? <VueMount component={vueDemo.Component} /> : wantsVue ? null : <Component />}
          </Box>
        </Box>
        <Group className={classes.demoBar} justify="space-between" px="sm" py={6}>
          <Group gap={6} fz="xs" c="var(--ds-text-3)">
            {showVue ? <IconBrandVue size={14} /> : <IconBrandReact size={14} />}
            {showVue ? 'Vue' : missingVue ? 'React (exemplo Vue em breve)' : 'React'}
          </Group>
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
            <CodeBlock code={code} language={showVue ? 'vue' : 'tsx'} />
          </Box>
        )}
      </Paper>
    </Box>
  );
}
