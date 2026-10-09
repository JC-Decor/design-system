import { useRef, useState } from 'react';
import { Box, Group, SegmentedControl, Stack, TableOfContents, Text, Title } from '@jcdecor/ui';

const sections = [
  { id: 'guia-materiais', depth: 1, title: 'Materiais necessários' },
  { id: 'guia-contrapiso', depth: 1, title: 'Preparando o contrapiso' },
  { id: 'guia-nivelamento', depth: 2, title: 'Nivelamento' },
  { id: 'guia-umidade', depth: 2, title: 'Teste de umidade' },
  { id: 'guia-instalacao', depth: 1, title: 'Instalação das réguas' },
  { id: 'guia-acabamento', depth: 1, title: 'Rodapés e acabamento' },
];

export default function Demo() {
  const scrollHost = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState('light');

  return (
    <Stack>
      <SegmentedControl size="xs" w="fit-content" value={variant} onChange={setVariant} data={['light', 'filled', 'none']} />
      <Group align="flex-start" wrap="nowrap" gap="lg">
        <TableOfContents
          w={220}
          size="sm"
          variant={variant as 'light' | 'filled' | 'none'}
          minDepthToOffset={1}
          depthOffset={20}
          scrollSpyOptions={{
            selector: '[data-guide-heading]',
            getDepth: (element) => Number(element.dataset.depth),
            scrollHost,
          }}
          getControlProps={({ data }) => ({
            onClick: () => data.getNode().scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
            children: data.value,
          })}
        />
        <Box ref={scrollHost} h={280} style={{ overflowY: 'auto', flex: 1 }} pr="sm">
          {sections.map((section) => (
            <Box key={section.id} mb="xl">
              <Title
                order={section.depth === 1 ? 4 : 5}
                id={section.id}
                data-guide-heading
                data-depth={section.depth}
                mb="xs"
              >
                {section.title}
              </Title>
              <Text fz="sm" c="var(--ds-text-2)">
                Siga as recomendações do fabricante para garantir a garantia de 15 anos do piso vinílico. Mantenha o
                ambiente ventilado e as caixas na horizontal por 48 horas antes da instalação.
              </Text>
            </Box>
          ))}
        </Box>
      </Group>
    </Stack>
  );
}
