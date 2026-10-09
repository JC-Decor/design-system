import { Box, Text } from '@jcdecor/ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { withoutPadding: true, background: 'page' };

export default function Demo() {
  return (
    <Box py="lg" w="100%">
      <div className="ds-container">
        <Box p="lg" bg="var(--ds-surface)" style={{ border: '1px dashed var(--ds-primary)', borderRadius: 'var(--ds-radius)' }}>
          <Text fw={600}>.ds-container</Text>
          <Text fz="sm" c="var(--ds-text-2)">
            Máx. 1224px, centralizado, com margens laterais responsivas.
          </Text>
        </Box>
      </div>
    </Box>
  );
}
