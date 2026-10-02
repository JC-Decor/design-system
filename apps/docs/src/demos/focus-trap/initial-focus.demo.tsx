import { Button, FocusTrap, Paper, Stack, Text, TextInput } from '@jcdecor/ui';
import { useDisclosure } from '@mantine/hooks';
import type { DemoMeta } from '../../kit/demos';

export const meta: DemoMeta = { maxWidth: 420 };

export default function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Stack gap="md" w="100%">
      <Button onClick={toggle} style={{ alignSelf: 'flex-start' }}>
        {active ? 'Fechar' : 'Editar endereço'}
      </Button>
      {active && (
        <FocusTrap active>
          <Paper withBorder p="md">
            <Text fz="sm" c="var(--ds-text-2)" mb="sm">
              O foco inicial vai para o campo Complemento.
            </Text>
            <Stack gap="sm">
              <TextInput label="Rua" defaultValue="Rua das Palmeiras" />
              <FocusTrap.InitialFocus />
              <TextInput label="Complemento" placeholder="Apto, bloco…" />
            </Stack>
          </Paper>
        </FocusTrap>
      )}
    </Stack>
  );
}
