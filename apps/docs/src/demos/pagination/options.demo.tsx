import { Pagination, Stack, Text } from '@jcdecor/ui';

export default function Demo() {
  return (
    <Stack gap="lg">
      <div>
        <Text fz="sm" fw={500} mb={6}>
          Com primeira e última página
        </Text>
        <Pagination total={20} defaultValue={8} withEdges />
      </div>
      <div>
        <Text fz="sm" fw={500} mb={6}>
          siblings=2 e boundaries=2
        </Text>
        <Pagination total={20} defaultValue={10} siblings={2} boundaries={2} />
      </div>
      <div>
        <Text fz="sm" fw={500} mb={6}>
          Somente setas
        </Text>
        <Pagination total={12} defaultValue={4} withPages={false} />
      </div>
    </Stack>
  );
}
