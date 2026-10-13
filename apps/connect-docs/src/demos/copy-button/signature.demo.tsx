import { Button, CopyButton, Icon, Stack, Text, Textarea } from '@jcdecor/connect-ui';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const assinatura = `Marina Souza
Analista de RH · Pessoas & Cultura
Connect JC · Ramal 2041`;

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text fz="sm" c="var(--ds-text-2)">
        Assinatura de e-mail gerada a partir do seu perfil:
      </Text>
      <Textarea value={assinatura} readOnly autosize minRows={3} />
      <CopyButton value={assinatura}>
        {({ copied, copy }) => (
          <Button fullWidth variant={copied ? 'light' : 'ghost'} color={copied ? 'green' : undefined} leftSection={<Icon name={copied ? 'check' : 'doc'} size={15} />} onClick={copy}>
            {copied ? 'Assinatura copiada' : 'Copiar assinatura'}
          </Button>
        )}
      </CopyButton>
    </Stack>
  );
}
