import { useRef, useState } from 'react';
import { Box, Group, SegmentedControl, Stack, TableOfContents, Text, Title } from '@jcdecor/connect-ui';

const sections = [
  { id: 'guia-boas-vindas', depth: 1, title: 'Boas-vindas' },
  { id: 'guia-jornada', depth: 1, title: 'Jornada de trabalho' },
  { id: 'guia-ponto', depth: 2, title: 'Registro de ponto' },
  { id: 'guia-banco-horas', depth: 2, title: 'Banco de horas' },
  { id: 'guia-ferias', depth: 1, title: 'Férias e folgas' },
  { id: 'guia-beneficios', depth: 1, title: 'Benefícios' },
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
                Este manual reúne as regras e os combinados que valem para todos os colaboradores. Em caso de dúvida,
                fale com o seu gestor ou abra uma solicitação para o time de Pessoas & Cultura pelo Connect.
              </Text>
            </Box>
          ))}
        </Box>
      </Group>
    </Stack>
  );
}
