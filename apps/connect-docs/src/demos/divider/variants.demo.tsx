import { Divider, Stack } from '@jcdecor/connect-ui';

export default function Demo() {
  return (
    <Stack gap="lg" w="100%">
      <Divider />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
      <Divider size="sm" color="navy" />
    </Stack>
  );
}
