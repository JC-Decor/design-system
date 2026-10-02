import { Tag, Group, Stack, type TagTone } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

const tones: TagTone[] = ['primary', 'success', 'warn', 'error', 'neutral'];

export default function Demo() {
  return (
    <Stack>
      {(['light', 'filled', 'outline', 'dot'] as const).map((variant) => (
        <Group key={variant} justify="center">
          {tones.map((tone) => (
            <Tag key={tone} tone={tone} variant={variant}>
              {variant}
            </Tag>
          ))}
        </Group>
      ))}
    </Stack>
  );
}
