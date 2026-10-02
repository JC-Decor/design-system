import { Button, CopyButton, Stack, Text, Textarea } from '@jcdecor/ui';
import { IconCheck, IconCopy } from '@tabler/icons-react';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { centered: true, maxWidth: 420 };

const pix = '00020126580014BR.GOV.BCB.PIX0136jcdecor-pagamentos@exemplo.com5204000053039865406459.905802BR5913JC DECOR LTDA6009SAO PAULO62070503***6304ABCD';

export default function Demo() {
  return (
    <Stack gap="sm">
      <Text fz="sm" c="var(--ds-text-2)">
        Pague R$ 459,90 com Pix copia e cola:
      </Text>
      <Textarea value={pix} readOnly autosize minRows={2} styles={{ input: { fontFamily: 'monospace' } }} />
      <CopyButton value={pix}>
        {({ copied, copy }) => (
          <Button fullWidth color="evergreen" leftSection={copied ? <IconCheck size={18} /> : <IconCopy size={18} />} onClick={copy}>
            {copied ? 'Código Pix copiado' : 'Copiar código Pix'}
          </Button>
        )}
      </CopyButton>
    </Stack>
  );
}
