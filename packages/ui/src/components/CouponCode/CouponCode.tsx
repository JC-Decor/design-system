import { Box, Button, Group, Text, type BoxProps } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCheck, IconCopy, IconTicket } from '@tabler/icons-react';

export interface CouponCodeProps extends BoxProps {
  code: string;
  /** Texto do benefício (ex.: "5% OFF na 1ª compra") */
  description?: React.ReactNode;
  copyLabel?: string;
  copiedLabel?: string;
  onCopy?: (code: string) => void;
}

/** Cupom com borda tracejada e botão de copiar. */
export function CouponCode({ code, description, copyLabel = 'Copiar', copiedLabel = 'Copiado!', onCopy, ...others }: CouponCodeProps) {
  const clipboard = useClipboard({ timeout: 1600 });
  return (
    <Box
      p="sm"
      style={{
        border: '2px dashed var(--ds-primary)',
        borderRadius: 'var(--ds-radius)',
        background: 'var(--ds-primary-soft)',
      }}
      {...others}
    >
      <Group justify="space-between" gap="sm" wrap="nowrap">
        <Group gap="sm" wrap="nowrap" style={{ minWidth: 0 }}>
          <IconTicket size={22} color="var(--ds-primary)" style={{ flexShrink: 0 }} />
          <div style={{ minWidth: 0 }}>
            {description && (
              <Text fz="xs" c="var(--ds-text-2)" fw={500}>
                {description}
              </Text>
            )}
            <Text fw={700} fz="lg" lts="0.08em" c="var(--ds-primary)" ff="monospace">
              {code}
            </Text>
          </div>
        </Group>
        <Button
          size="sm"
          variant={clipboard.copied ? 'filled' : 'outline'}
          color={clipboard.copied ? 'evergreen' : undefined}
          leftSection={clipboard.copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          onClick={() => {
            clipboard.copy(code);
            onCopy?.(code);
          }}
        >
          {clipboard.copied ? copiedLabel : copyLabel}
        </Button>
      </Group>
    </Box>
  );
}
CouponCode.displayName = '@jcdecor/ui/CouponCode';
