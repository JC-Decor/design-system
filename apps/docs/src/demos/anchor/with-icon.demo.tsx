import { Anchor, Group, Stack } from '@jcdecor/ui';
import { IconArrowRight, IconBrandWhatsapp, IconExternalLink } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Stack gap="sm" align="flex-start">
      <Anchor href="#colecao" fz="sm">
        <Group gap={4} component="span">
          Ver toda a coleção <IconArrowRight size={16} />
        </Group>
      </Anchor>
      <Anchor href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" fz="sm">
        <Group gap={4} component="span">
          <IconBrandWhatsapp size={16} /> Falar com um consultor
        </Group>
      </Anchor>
      <Anchor href="https://www.jcdecor.com.br" target="_blank" rel="noopener noreferrer" fz="sm" c="var(--ds-text-2)">
        <Group gap={4} component="span">
          jcdecor.com.br <IconExternalLink size={14} />
        </Group>
      </Anchor>
    </Stack>
  );
}
