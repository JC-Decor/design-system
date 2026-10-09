import { Button, Popover, SimpleGrid, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const positions = ['top-start', 'top', 'top-end', 'left', 'bottom', 'right'] as const;

export default function Demo() {
  return (
    <SimpleGrid cols={3} spacing="xs">
      {positions.map((position) => (
        <Popover key={position} position={position} withArrow>
          <Popover.Target>
            <Button variant="default" size="sm" fullWidth>
              {position}
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <Text fz="sm">
              Popover em <b>{position}</b>
            </Text>
          </Popover.Dropdown>
        </Popover>
      ))}
    </SimpleGrid>
  );
}
