import { Avatar, GreekFrame, Group, JcLogoAlt, Stack, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true };

export default function Demo() {
  return (
    <Group gap="xl" align="center">
      <GreekFrame size={140} />
      <GreekFrame size={140}>
        <Avatar src="https://i.pravatar.cc/240?img=47" size="100%" radius="50%" alt="Ana Souza" />
      </GreekFrame>
      <GreekFrame size={140} color="horizon.6" fill="horizon.0">
        <JcLogoAlt size={64} color="horizon.6" strokeColor="none" />
      </GreekFrame>
      <GreekFrame size={140} color="electric.4" fill="obsidian.6">
        <Stack gap={0} align="center">
          <Text fz={32} fw={700} c="electric.3" lh={1}>10</Text>
          <Text fz={11} fw={600} c="#FFFFFF" tt="uppercase" lts="0.06em">anos</Text>
        </Stack>
      </GreekFrame>
    </Group>
  );
}
