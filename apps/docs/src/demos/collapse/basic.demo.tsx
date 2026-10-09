import { Button, Collapse, Stack, Text } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 480 };

export default function Demo() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="sm" w="100%">
      <Button
        variant="subtle"
        onClick={toggle}
        rightSection={<IconChevronDown size={16} style={{ transform: opened ? 'rotate(180deg)' : undefined, transition: 'transform 200ms' }} />}
        aria-expanded={opened}
        style={{ alignSelf: 'flex-start' }}
      >
        {opened ? 'Ocultar' : 'Ver'} especificações técnicas
      </Button>
      <Collapse expanded={opened}>
        <Text fz="sm" c="var(--ds-text-2)">
          Piso vinílico em réguas de 18,4 × 122 cm, espessura de 4 mm, capa de uso de 0,3 mm e sistema de encaixe click. Indicado para
          áreas residenciais e comerciais de tráfego moderado. Garantia de 15 anos.
        </Text>
      </Collapse>
    </Stack>
  );
}
