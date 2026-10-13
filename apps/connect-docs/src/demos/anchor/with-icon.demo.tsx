import { Anchor, Group, Icon, Stack } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack gap="sm" align="flex-start">
      <Anchor href="#comunicados" fz="sm">
        <Group gap={4} component="span">
          Ver todos os comunicados <Icon name="arrow-r" size={15} />
        </Group>
      </Anchor>
      <Anchor href="#manual" fz="sm">
        <Group gap={4} component="span">
          <Icon name="book" size={15} /> Manual do colaborador (PDF)
        </Group>
      </Anchor>
      <Anchor href="https://www.gov.br/trabalho-e-emprego" target="_blank" rel="noopener noreferrer" fz="sm" c="var(--ds-text-2)">
        <Group gap={4} component="span">
          Portal do Ministério do Trabalho <Icon name="link" size={14} />
        </Group>
      </Anchor>
    </Stack>
  );
}
