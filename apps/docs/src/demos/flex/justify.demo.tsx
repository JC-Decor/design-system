import { Box, Flex, Stack, Text } from '@jcdecor/ui';

const justifies = ['flex-start', 'center', 'space-between', 'flex-end'] as const;

function Item({ children }: { children: React.ReactNode }) {
  return (
    <Box px="md" py="xs" bg="var(--ds-primary-soft)" c="var(--ds-primary)" fw={600} fz="sm" style={{ borderRadius: 'var(--ds-radius-sm)' }}>
      {children}
    </Box>
  );
}

export default function Demo() {
  return (
    <Stack gap="md" w="100%">
      {justifies.map((justify) => (
        <div key={justify}>
          <Text fz="xs" c="var(--ds-text-3)" mb={4}>
            justify="{justify}"
          </Text>
          <Flex justify={justify} gap="sm" p="xs" style={{ border: '1px dashed var(--ds-border)', borderRadius: 'var(--ds-radius-sm)' }}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
          </Flex>
        </div>
      ))}
    </Stack>
  );
}
